'use strict';

var Router = require('koa-router');
var router = new Router();

var operations = require('./operations');

router.get('/test', operations.getUsers);

router.get('/', function (ctx, next) {
    ctx.body = 'Hello World!';
});

module.exports = router;