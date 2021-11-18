const db = require('../models');
const config = require('../config/auth.config');
const User = db.User;
const Role = db.Role;

const { Op } = require('sequelize');

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

module.exports = {
    signup: function(req, res){
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }).then(user => {
            console.log(req.body.roles, 'roles');
            res.status(200).send({ message: 'User was registered successfully!' });
            // if (req.body.roles) {
            //     Role.findAll({
            //         where: {
            //             name: {
            //                 [Op.or]: req.body.roles
            //             }
            //         }
            //     }).then(roles => {
            //         user.setRoles(roles).then(() => {
            //             res.send({ message: 'User was registered successfully!' });
            //         });
            //     });
            // } else {
            //     user.setRoles([1]).then(() => {
            //         res.send({ message: 'User was registered successfully!' });
            //     });
            // }
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    },

    signin: function(req, res) {
        console.log('is it here yet?', req.body);
        User.findOne({
            where: {
                username: req.body.username
            }
        }).then(user => {
            console.log(user, 'user data');
            if (!user) {
                console.log('User not found!');
                return res.status(404).send({ message: 'User not found!' });
            }

            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                console.log('Invalid password!');
                return res.status(401).send({
                    accessToken: null,
                    message: 'Invalid password!'
                });
            }

            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            });

            // let authorities = [];
            // user.getRoles().then(roles => {
            //     for (let i = 0; i < roles.length; i++) {
            //         authorities.push('ROLE_' + roles[i].name.toUpperCase());
            //     }
                res.status(200).send({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    // roles: authorities,
                    acessToken: token
                });
            // });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    }
};