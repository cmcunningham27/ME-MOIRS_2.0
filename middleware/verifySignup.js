const db = require('../models');
// const ROLES = db.ROLES;
const User = db.User;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }

        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: 'Failed! Email is already in use!'
                })
                return;
            }

            next();
        });
    });
};

// checkRolesExisted = (req, res, next) => {
//     console.log(req.body.roles);
//     if (req.body.roles) {
//         for (let i = 0; i < roles.length; i++) {
//             if (!ROLES.includes(req.body.roles[i])) {
//                 res.status(400).send({
//                     message: 'Failed! Role does not exist = ' + role.req.roles[i]
//                 });
//                 return;
//             }
//         }
//     }

//     next();
// };

const verifySignup = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    // checkRolesExisted: checkRolesExisted
};

module.exports = verifySignup;