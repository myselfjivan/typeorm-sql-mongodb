const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

import { createConnection } from 'typeorm';
import { User } from './entity/User';

createConnection().then(async connection => {

    router.get('/adduser', async ctx => {
        const user = new User();
        user.name = 'Pavan';
        user.sirname = 'Ghadage';
        await connection.mongoManager.save(user);
        console.log(user);
        ctx.body = user;
    });

    app
        .use(router.routes())
        .use(router.allowedMethods());
    app.listen(3000);


    console.log("application is up and running on port 3000");
}).catch(error => console.log("TypeORM connection error: ", error));