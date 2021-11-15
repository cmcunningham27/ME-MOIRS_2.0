const router = require('express').Router();
const { authJwt } = require('../../middleware');
const controller = require('../../controllers/user.controller');

router.use((req, res, next) => {
    res.append(
        'Access-Control-Allow-Header',
        'x-access-token, Origin, Content-Type, Access'
    );
    next();
});

router.route('/all')
    .get(controller.allAccess);

router.route('/user')
    .get([authJwt.verifyToken], controller.userBoard);

router.route('/mod')
    .get([authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard);

router.route('/admin')
        .get([authJwt.verifyToken, authJwt.isAdmin],
            controller.adminBoard);

module.exports = router;