module.exports = (app) => {
    const tweets = require('../controllers/tweets');
    app.use('/tweets', tweets);

    app.get('/', function (req, res) {
        res.send('Zappy is running');
    })
}
