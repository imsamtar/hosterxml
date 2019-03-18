module.exports = (req, res) => {
    require('../models/user').find().then(
        (users) => {
            res.json(users)
        }
    )
}