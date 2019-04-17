const Twitter = require('twitter');
const TwitterScanCycle = require('../db/models/twitterScanCycle');
const { CONSUMER_KEY, CONSUMER_SECRET,
    ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET } = require('../config').TWITTER_API_KEYS;

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY || CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET || CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY || ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET || ACCESS_TOKEN_SECRET,
});

//@FictionFone
const params = {
    q: '@Bey2ollak',
    count: 100,
    include_entities: true,

};

async function getRecentTweets() {
    try {

        const recentScanCycle = await TwitterScanCycle.getRecentTwitterScanCycle();
        if (recentScanCycle !== null) {
            params.max_id = recentScanCycle.maxId;
        }
        // console.log(params);
        const tweets = await client.get('search/tweets', params).catch(console.error);
        // console.log(tweets.search_metadata);
        await setMaxTwitterId(tweets.search_metadata);
        return tweets.statuses;
    } catch (e) {
        throw e;
    }
}
async function setMaxTwitterId(search_metadata) {
    try {
        const recentScanCycle = await TwitterScanCycle.getRecentTwitterScanCycle();

        if (recentScanCycle) {

            recentScanCycle.maxId = parseURL(search_metadata.next_results);
            recentScanCycle.sinceId = search_metadata.max_id_str;

            await recentScanCycle.save();
        } else {
            const document = {
                maxId: parseURL(search_metadata.next_results),
                sinceId:  search_metadata.max_id_str,
            };

            const cycle = new TwitterScanCycle(document);
            await cycle.save();
        }
    } catch (e) {
        throw e;
    }

};

function parseURL(url) {
    const queryString = url.substring( url.indexOf('?') + 1 );
    const [maxIdStr] = queryString.split('&');
    const maxId = maxIdStr.split('=');
   return maxId? maxId[1] : null;
}
// getRecentTweets();
module.exports = {
    getRecentTweets,
};