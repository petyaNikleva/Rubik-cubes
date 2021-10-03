const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    imageUrl: {
        type: String,
        required: true,
        //validate: [/^https?:\/\//i, 'Invalid url']
        validate: {
            validator: function(value) {
                return /^https?:\/\//i.test(value)
            }, 
            message: (props) => `Image Url ${props.value} is invalid!`
        }
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]

});

const Cube = mongoose.model('Cube', cubeSchema)
module.exports = Cube;