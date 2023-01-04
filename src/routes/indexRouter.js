const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

const userRouter = require('./userRouter');
router.use('/users/', userRouter)

router.get('/', controller.renderHomePage);
router.get('/about', controller.renderAboutPage);
router.get('/projects', controller.renderProjectsPage)

module.exports = router;