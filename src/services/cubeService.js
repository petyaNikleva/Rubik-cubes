const Cube = require('../models/Cube');

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'Some mirror',
        imageUrl: 'https://m.media-amazon.com/images/I/61xKF56d15L._AC_UX569_.jpg',
        difficulty: '4'
      }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll,

}

module.exports = cubeService;