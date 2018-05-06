const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const typeorm = require('typeorm');
const createConnection = typeorm.createConnection;
const User = require('./model/User').User;

createConnection().then(async connection => {

    router.get('/adduser', async ctx => {
        try {
            const user = new User();
            user.name = 'Pavan';
            user.sirname = 'Ghadage';
            const result = await connection.mongoManager.save(user); // set breakpoint
            ctx.body = result;
        } catch (e) {
            ctx.body = e;
        }
    });

    app
        .use(router.routes())
        .use(router.allowedMethods());
    app.listen(3000);


    console.log("application is up and running on port 3000");
}).catch(error => console.log("TypeORM connection error: ", error));