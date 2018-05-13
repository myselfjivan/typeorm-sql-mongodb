const Koa = require('koa');
const Knex = require('knex');
const { Model } = require('objection');

const knexConfig = require('./config/knexconfig');

const router = require('../src/routes');

const app = new Koa();

const typeorm = require('typeorm');
const createConnection = typeorm.createConnection;
const User = require('./user/model/User').User;

const knex = Knex(knexConfig.development);

Model.knex(knex);

app
    .use(router.routes())
app.listen(3000);


console.log("application is up and running on port 3000");