const { User, Image } = require("../models")

module.exports = {
    getUserInfo: function(req, res) {
        console.log(req.params.id, 'is it here')
        User.findByPk(req.params.id, {
            include: {
                model: Image,
                where: {
                    user_id: req.params.id
                }
            }
        }).then(user => {
            console.log(user, 'did it get to here or is it just error')
            res.statu(200).send(user);
        }).catch (err => {
            res.status(500).send({ message: err.message });
        })
    }
};

// exports.allAccess = (req, res) => {
//     res.status(200).send('Public Content.');
// };

// exports.userBoard = (req, res) => {
//     res.status(200).send('User Content.');
// };

// exports.adminBoard = (req, res) => {
//     res.status(200).send('Admin Content.');
// };

// exports.moderatorBoard = (req, res) => {
//     res.status(200).send('Moderator Content.');
// };