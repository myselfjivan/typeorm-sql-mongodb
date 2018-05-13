const typeorm = require('typeorm');
const getManager = typeorm.getManager;
const User = require('./model/User').User;

async function getUsers(ctx) {
    try {
        const user = new User();
        const users = getManager().getRepository(User);
        return await users.find();
    } catch (e) {
        return e;
    }
}

module.exports = {
    getUsers
};