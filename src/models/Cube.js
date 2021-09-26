const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {   
            id:  'i2heiur2uibf',
            name: 'Mirror Cube',
            description: 'Some mirror',
            imageUrl: 'https://m.media-amazon.com/images/I/61xKF56d15L._AC_UX569_.jpg',
            difficulty: '4'
          },
        {   
            id:  'daadiur2uibfgg',
            name: 'Ice Cube',
            description: 'ice singer',
            imageUrl: 'https://api.time.com/wp-content/uploads/2015/08/ice-cube-straight-outta-compton1.jpg?quality=85&w=1024&h=512&crop=1',
            difficulty: '1'
          } 
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }   

    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.cubes.push(cube)
    }
}

module.exports = Cube;