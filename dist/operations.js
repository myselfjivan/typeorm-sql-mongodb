'use strict';

var _typeorm = require('typeorm');

var _User = require('./entity/User');

var manager = (0, _typeorm.getMongoManager)();

async function getUsers(ctx) {
    var user = new _User.User();
    user.name = 'Pavan';
    user.sirname = 'Ghadage';
    await manager.save(user);
    ctx.body = user;
}

module.exports = {
    getUsers: getUsers
};