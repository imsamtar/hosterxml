module.exports = (req, res) => {
    require('bcrypt').hash(req.body.password, 10).then(
        hash => {
            require('../models/user').create({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: hash,
                country: req.body.country || "Global",
                birth: req.body.birth,
                accounts: req.body.accounts
            },(err) => {
                if(!err) res.status(201).json({
                    message: "Created Successfully"
                })
                else res.status(409).json({
                    message: "Error: creating new user"
                })
            })
        }
    )
}