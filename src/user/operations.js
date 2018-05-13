const typeorm = require('typeorm');
const getManager = typeorm.getManager;
const User = require('./model/User').User;

async function getUsers(ctx) {
    try {
        const user = new User();
        user.name = 'Pavan';
        user.sirname = 'Ghadage';
        const users = getManager().getRepository(User);
        return await users.save(user);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getUsers
};