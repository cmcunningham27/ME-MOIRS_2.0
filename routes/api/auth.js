const router = require('express').Router();
const { verifySignup } = require('../../middleware');
const controller = require('../../controllers/auth.controller');

router.use((req, res, next) => {
    res.append(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept'
    );
    next();
}) ;

router,route('/signup')
    .post(
        [
            verifySignup.checkDuplicateUsernameOrEmail,
            verifySignup.checkRolesExisted
        ],
        controller.signup
    );

router.route('/signin')
        .post(controller.signin);

module.exports = router;