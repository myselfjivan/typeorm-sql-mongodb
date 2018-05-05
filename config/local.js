process.env.NODE_ENV = 'development';

const settings = {
    debug: true,
    port: 3010,
    mongo: {
        host: 'localhost',
        port: 27017,
        db: 'wesence',
    },
    mysql: {
        name: 'default',
        type: 'mysql',
        host: 'mongo.penpenny.com',
        port: 3306,
        username: 'remote',
        password: 'remote123@',
        database: 'wesense',
        synchronize: true,
    }
};

module.exports = settings;