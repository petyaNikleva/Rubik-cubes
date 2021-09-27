const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'fluc2i6ikku32oycf',
            name: 'Rubic Cube',
            description: 'This is standart Rubic Cube',
            imageUrl: 'https://www.youcandothecube.com/images/guides/3x3-solution/3x3/get-to-know/3x3_faces_cube.png',
            difficulty: '2'
        },
        {   
            id:  'i2heiur2uibf',
            name: 'Mirror Cube',
            description: 'Some mirror',
            imageUrl: 'https://m.media-amazon.com/images/I/61xKF56d15L._AC_UX569_.jpg',
            difficulty: '4'
          },
          {
            id: 'fluc2id4ku31o6ft',
            name: 'Weird Rubic Cube',
            description: 'Weird Rubic Cube with a Star',
            imageUrl: 'https://i.pinimg.com/originals/75/67/75/756775830f533f547e8f7b1267f2111f.jpg',
            difficulty: '5'
          },
          {
            id: 'dggdugduebdueuue',  
            name: 'Custum Rubic Cube',
            description: 'Cube where you could add special photos or anything else.',
            imageUrl: 'https://images.promotionsonly.com.au/hires/traditional-rubik-cube.jpg',
            difficulty: '5'
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
        Cube.#cubes.push(cube)
    }
}

module.exports = Cube;