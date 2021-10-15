const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = function(username, password, repeatPassword) {
// 1 way to has pass without bcrypt here
// here we should validate pass
if (password.length < 6) {
    throw ({message: 'pass should be at least 6 characters'});
}
if (password !== repeatPassword) {
    throw ({message: 'passwords don\'t match'})
}
   return bcrypt.hash(password, 10)
        .then(hash => User.create({username, password: hash}))

    return User.crate({username, password});
};

