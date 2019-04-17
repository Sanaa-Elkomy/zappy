const express = require('express');
const router = express.Router();
const TweetsService = require('../services/tweets');

router.get('/', async (req, res) => {

    const tweets = await TweetsService.getTweets(req.query);
    res.json(tweets);
});

module.exports = router;