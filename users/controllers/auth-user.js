const config = require('../config')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    require('../models/user').findOne({username: req.body.username}).then(
        user => {
            require('bcrypt').compare(req.body.password, user.password).then(
                result => {
                    if(result) {
                        const token = jwt.sign({
                            id: user._id,
                            username: user.username,
                            name: user.name,
                            email: user.email,
                            country: user.country
                        }, config.apiSecretKey)
                            res.status(202).json({
                                message: "Authentication Successfully",
                                token
                            })
                    }
                    else res.status(401).json({
                        message: "Authentication Failed"
                    })
                }
            )
        }
    ).catch(
        (err) => {
            res.status(401).json({
                message: "Authentication Failed"
            })
        }
    )
}