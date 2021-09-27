const { text } = require('express');
const Cube = require('../models/Cube');

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const search = (searchedText, from, to) =>  {
    let result = Cube.cubes;

    if (searchedText) {
        result = result.filter(x => x.name.toLowerCase().includes(searchedText.toLowerCase()))
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from)
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to)
    }
    return result
};


const cubeService = {
    create,
    getAll,
    getOne,
    search

}

module.exports = cubeService;