const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = function (username, password, repeatPassword) {
    // here we should validate pass
    if (password.length < 6) {
        throw ({ message: 'pass should be at least 6 characters' });
    }
    if (password !== repeatPassword) {
        throw ({ message: 'passwords don\'t match' })
    }
    return bcrypt.hash(password, 10)
        .then(hash => User.create({ username, password: hash }))
    return User.crate({ username, password });
};

exports.login = function (username, password) {
    return User.findOne({ username })
        .then(user => {
            return Promise.all([bcrypt.compare(password, user.password), user])
        })
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username or password.' }
            }
        })
        .catch(err => {
            return null;
        })
}

