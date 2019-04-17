const mongoose = require('mongoose');
const config   = require('../config');

mongoose.connect(config.DB_URL, {useNewUrlParser: true});

mongoose.connection.on('connected', function(){
    console.log('Connected to zappy database')
});
mongoose.connection.on('error', function(err){
    console.error('Connection Error', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Disconnected from zappy database')

});
