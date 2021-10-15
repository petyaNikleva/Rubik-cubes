const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, "Username cannot be with less then 3 letters"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Your pass should be at lease 6 characters.']
        
    },
});

// userSchema.pre('save', function(next) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         });
// });

let User = mongoose.model('User', userSchema);

module.exports = User;