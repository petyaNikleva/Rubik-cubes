const express = require('express');

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use(authController); // here i can use: router.use('/auth', authController);

router.use('*', (req, res) => {
    res.status(404).render('404')
})

module.exports = router;