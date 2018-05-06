const typeorm = require('typeorm');
const getManager = typeorm.getManager;
const User = require('./model/User').User;

async function getUsers(ctx) {
    try {
        const user = new User();
        user.name = 'Pavan';
        user.sirname = 'Ghadage';
        const users = getManager().getRepository(User);
        await users.save(user);
        ctx.body = user;
    } catch (e) {
        ctx.body = e;
    }
}

module.exports = {
    getUsers
};