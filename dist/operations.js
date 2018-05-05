'use strict';

var _typeorm = require('typeorm');

var _User = require('./entity/User');

async function getUsers(ctx) {
    var user = new _User.User();
    user.name = 'Pavan';
    user.sirname = 'Ghadage';
    var users = (0, _typeorm.getManager)().getRepository(_User.User);
    await users.save(user);
    ctx.body = user;
}

module.exports = {
    getUsers: getUsers
};