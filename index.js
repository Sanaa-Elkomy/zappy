
const express = require('express');
const querystring = require('querystring'); 

const app = express();

const cors = require('cors');
app.use(cors());
 


require('./db');
require('./engine/rtmClient');
require('./engine/twitterCrawler');

require('./routes')(app);


const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Magic happens on port ' + port);
});