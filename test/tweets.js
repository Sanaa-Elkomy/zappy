const supertest = require("supertest");
const config = require('../config');
const server = supertest.agent(config.HOST);
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect= chai.expect;

chai.use(chaiHttp);

describe('Tweets API ', function () {

    it('should get tweets with default page:1 and get 10 records \033[0;32m -->SUCCESS CASE<--', function (done){
            server
            .get('/tweets')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (res.body) console.log(res.body);
                res.should.have.status(200);
                res.should.to.be.json;
                res.body.should.have.property('tweets');
                res.body.should.have.property('current');
                res.body.should.have.property('pages');
                expect(res.body.tweets).to.be.an('array');
                done();
            });

        });
});