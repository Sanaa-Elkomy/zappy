
const Tweets = require('../db/models/tweets');

async function createTweets(tweets) {
    try {
        const nTweets = tweets.map(tweet => {
            // console.log(tweet);
            return {
                id: tweet.id,
                id_Str: tweet.id_str,
                text: tweet.text,
                created_at: tweet.created_at,
                name: tweet.entities.user_mentions? tweet.entities.user_mentions[0].name: '',
                screen_name: tweet.entities.user_mentions? tweet.entities.user_mentions[0].screen_name : '',
            };
        });
        return await Tweets.collection.insertMany(nTweets);
    } catch (e) {
        throw e;
    }
}

async function getTweets(query) {
    try {
        let limit = 10;
        var page = query.page || 1;
        const tweets = await Tweets.find({})
        .skip((limit * page) - limit)
        .limit(limit)
        .sort({ id: -1 }).exec();
        const count = await Tweets.countDocuments().exec();
        return {
            tweets,
            current: page,
            pages: Math.ceil(count / limit)
        }

    } catch (e) {
        throw e;
    }
}



module.exports = {
    createTweets,
    getTweets,
}