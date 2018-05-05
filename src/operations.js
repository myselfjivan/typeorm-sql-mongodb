import { getMongoManager } from 'typeorm';
import { User } from './entity/User';
const manager = getMongoManager();

async function getUsers(ctx) {
    const user = new User();
    user.name = 'Pavan';
    user.sirname = 'Ghadage';
    await manager.save(user);
    ctx.body = user;
}

module.exports = {
    getUsers
};