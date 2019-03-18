module.exports = (req, res) => {
    require('bcrypt').hash(req.body.password, 10, (err, hash) => {
        let update = {}
        if(req.body.name) update.name = req.body.name;
        if(req.body.email) update.email = req.body.email;
        if(req.body.password && !err) update.password = hash;
        if(req.body.accounts) update.accounts = req.body.accounts;
        if(req.body.country) update.country = req.body.country;
        if(req.body.birth) update.birth = req.body.birth;
        console.log(update)
        require('../models/user').findOneAndUpdate({_id: req.userData.id}, update).then(
            user => {
                    res.status(200).json({
                    message: "Updated Successfully"
                })
            }
        )
    })
}