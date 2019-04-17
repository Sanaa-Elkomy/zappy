
const { RTMClient } = require('@slack/rtm-api');
const config   = require('../config');
const TwitterCrawler = require('../engine/twitterCrawler');
const TweetsService = require('../services/tweets');

const token =  config.SLACK_TOKEN;
const keyword = config.KEYWORD

const rtm = new RTMClient(token);

rtm.on('message', async (event) => {
    if(event && event.text) {
        if(checkIfMessageIncludesKeyword(event.text, keyword) !== null) {
            const tweets = await TwitterCrawler.getRecentTweets();
            if(tweets.length > 0)
                await TweetsService.createTweets(tweets);
        }
    }
    
});

(async () => {
    const { self, team } = await rtm.start().catch(console.error);
    console.log(`Connected User ${self.name} to WorkSpace ${team.name}`);
})();

function checkIfMessageIncludesKeyword(msg, keyword) {
    return msg.match(keyword);
}
