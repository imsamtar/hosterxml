module.exports = (req, res, next) => {
    try{
        req.userData = require('jsonwebtoken').verify(req.body.token, require('../config').apiSecretKey)
        next()
    } catch (err) {
        res.status(400).json({
            message: "Invalid Token"
        })
    }
}