const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
chai.use(chaiHttp);

const app = 'http://localhost:3000';

describe('users route test', () => {

    it('should be able to get users', (done) => {
        chai
            .request(app)
            .get('/users')
            .end((err, res) => {
                should.not.exist(err);
                res.status.should.eql(200);
                res.body.data.length.should.be.above(2);
                res.body.data[1].should.include.keys('id');
                done();
            });
    });

    it('should be able to get single user by id', (done) => {
        chai
            .request(app)
            .get('/users/12')
            .end((err, res) => {
                should.not.exist(err);
                res.status.should.eql(200);
                res.body.data.should.include.keys('id');
                done();
            });
    });
});