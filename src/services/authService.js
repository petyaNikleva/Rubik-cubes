const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = function(username, password, repeatPassword) {
   return bcrypt.hash(password, 10)
        .then(hash => User.create({username, password: hash}))
};