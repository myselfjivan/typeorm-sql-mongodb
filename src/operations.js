import { getManager } from 'typeorm';
import { User } from './entity/User';

async function getUsers(ctx) {
    const user = new User();
    user.name = 'Pavan';
    user.sirname = 'Ghadage';
    const users = getManager().getRepository(User);
    await users.save(user);
    ctx.body = user;
}

module.exports = {
    getUsers
};