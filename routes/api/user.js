const router = require('express').Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/upload.controller');
const userController = require('../../controllers/user.controller');

router.route('/:id')
    .get(userController.getUserInfo)


module.exports = router;

// const router = require('express').Router();
// const { authJwt } = require('../../middleware');
// const controller = require('../../controllers/user.controller');

// router.use((req, res, next) => {
//     res.append(
//         'Access-Control-Allow-Header',
//         'x-access-token, Origin, Content-Type, Access'
//     );
//     next();
// });

// router.route('/all')
//     .get(controller.allAccess);

// router.route('/user')
//     .get([authJwt.verifyToken], controller.userBoard);

// router.route('/mod')
//     .get([authJwt.verifyToken],
//         controller.moderatorBoard);

// router.route('/admin')
//         .get([authJwt.verifyToken],
//             controller.adminBoard);

// module.exports = router;