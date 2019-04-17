const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;
const Tweets = require('../db/models/tweets');
const TweetsService = require('../services/tweets');


describe('Tweets Service API', () => {
    describe('Insert Tweets', () => {
        it('Should insert new tweets \033[0;32m -->SUCCESS CASE<--', async () => {
            try {

                let tweets = {
                    "screen_name": "Bey2ollak"
                }
                tweets.map = function () { return {} };

                sinon.stub(Tweets.collection, 'insertMany').returns({});
                let createTweetsStub = await TweetsService.createTweets(tweets);
                expect(createTweetsStub)
                    .to.be.an('object');
            } catch (err) {
                console.log('\033[0;31m ERROR MESSAGE: ', err.message);
                throw err;
            }
        });

    });

});
