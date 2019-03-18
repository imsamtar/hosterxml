module.exports = (req, res) => {
    require('../models/user').deleteOne({_id:req.userData.id}).then(
        () => {
            res.status(200).json({
                message: "Deleted Successfully"
            })
        }
    ).catch(
        (err) => {
            res.status(408).json({
                message: "Could not delete User"
            })
        }
    )
}