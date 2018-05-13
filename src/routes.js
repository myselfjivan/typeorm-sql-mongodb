const Router = require('koa-router');

const router = new Router();
const user = require('./user/server/routes');


router.use(...[
    '',
    user.routes(),
]);

module.exports = router;