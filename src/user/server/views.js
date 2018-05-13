const operations = require('./operations');

async function get(ctx) {
    const data = ctx.request.fields;
    const result = await operations.getUsers(data);
    ctx.successJson(result);
}

module.exports = {
    get
};