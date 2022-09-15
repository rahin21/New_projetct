const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers.js');
router.get('/partials', userController.nav)
router.get('/', userController.view)
router.get('/shop', userController.shop)
module.exports = router;