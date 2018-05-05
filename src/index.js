const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

import { createConnection } from 'typeorm';
const operations = require('./operations');


createConnection().then(async connection => {

    router.get('/adduser', operations.getUsers);

    app
        .use(router.routes())
        .use(router.allowedMethods());
    app.listen(3000);


    console.log("application is up and running on port 3000");
}).catch(error => console.log("TypeORM connection error: ", error));