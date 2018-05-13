const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = require('./src/routes');
const responses = require('./lib/middleware/responses');

const typeorm = require('typeorm');
const createConnection = typeorm.createConnection;


createConnection().then(async connection => {
    app
        .use(responses)
        .use(router.routes())
    app.listen(3000);

    console.log("application is up and running on port 3000");
}).catch(error => console.log("TypeORM connection error: ", error));