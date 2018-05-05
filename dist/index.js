'use strict';

var _typeorm = require('typeorm');

var _User = require('./entity/User');

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

// const operations = require('./operations');


(0, _typeorm.createConnection)().then(async function (connection) {

    router.get('/adduser', async function (ctx) {
        var user = new _User.User();
        user.name = 'Pavan';
        user.sirname = 'Ghadage';
        await connection.mongoManager.save(user);
        console.log(user);
        ctx.body = user;
    });

    app.use(router.routes()).use(router.allowedMethods());
    app.listen(3000);

    console.log("application is up and running on port 3000");
}).catch(function (error) {
    return console.log("TypeORM connection error: ", error);
});