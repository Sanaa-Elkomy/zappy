/**
 * These key a
 */
module.exports = {
    SLACK_TOKEN: process.env.SLACK_TOKEN,
    TWITTER_API_KEYS : {
        CONSUMER_KEY: process.env.CONSUMER_KEY,
        CONSUMER_SECRET: process.env.CONSUMER_SECRET,
        ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    },
    KEYWORD: /\bgo/i,
    DB_URL: 'mongodb://localhost/zappy',    
    HOST: 'http://localhost:3000',
}