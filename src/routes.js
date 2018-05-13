const Router = require('koa-router');

const router = new Router();
const user = require('./user/routes');


router.use(...[
    '',
    user.routes(),
]);

module.exports = router;