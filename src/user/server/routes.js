const Router = require('koa-router');
const views = require('./views');

const router = new Router();

router.get('/users', views.get);
router.get('/users/:user', views.getSingleUser)

module.exports = router;