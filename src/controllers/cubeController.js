const express = require('express');

const cubeService = require('../services/cubeService')

const router = express.Router();

const getCreateCubePage = (req, res) => {
    let cubes = cubeService.getAll();

    console.log(cubes);
    res.render('create');
};

const createCube = (req, res) => {

    let { name, description, imageUrl, difficulty } = req.body;

    cubeService.create(name, description, imageUrl, difficulty);
    console.log(cubeService.getAll());

    res.redirect('/')
};

const cubeDetails  = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
   
    res.render('cube/details', {...cube});
};


router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails)

module.exports = router;