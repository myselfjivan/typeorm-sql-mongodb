'use strict';

var _typeorm = require('typeorm');

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

var operations = require('./operations');

(0, _typeorm.createConnection)().then(async function (connection) {

    router.get('/adduser', async function (ctx) {
        var user = new User();
        user.name = 'Pavan';
        user.sirname = 'Ghadage';
        await connection.mongoManager.save(user);
        ctx.body = user;
    });

    app.use(router.routes()).use(router.allowedMethods());
    app.listen(3000);

    console.log("application is up and running on port 3000");
}).catch(function (error) {
    return console.log("TypeORM connection error: ", error);
});