const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:TextTrackCue,
        minlength: [3, "Username cannot be with less then 3 letters"]
    },
    password: {
        type: String,
        required: true,
    },
});

let User = mongoose.model('User', userSchema);

module.exports =User;