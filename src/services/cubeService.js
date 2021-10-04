const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

const getAll = () => Cube.find({}).lean();
const getOne = (id) => Cube.findById(id).populate('accessories').lean();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube ({
        name,
        description,
        imageUrl,
        difficulty
    })

   return cube.save();
};

const search = async (searchedText, from, to) =>  {
    let result = await getAll();

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

const attachAceessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
};


const cubeService = {
    create,
    getAll,
    getOne,
    search,
    attachAceessory

}

module.exports = cubeService;