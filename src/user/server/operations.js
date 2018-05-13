const typeorm = require('typeorm');
const getManager = typeorm.getManager;
const User = require('./model/User').User;

async function getUsers(ctx) {
    try {
        const users = getManager().getRepository(User);
        return await users.find();
    } catch (e) {
        throw new Error(e);
    }
}

async function getSingleUser(data) {
    try {
        const users = getManager().getRepository(User);
        return await users.findOne({ id: data.user });
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    getUsers,
    getSingleUser
};