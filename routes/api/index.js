const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./user');

router.use('/auth', authRoutes);
// router.use('/test', userRoutes);

module.exports = router;