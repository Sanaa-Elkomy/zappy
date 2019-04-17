const mongoose = require('mongoose');
const { Schema } = mongoose;

const tweetSchema = new Schema({
    text: String,
    created_at: Date,
    id: Number,
    id_Str: String,
    name: String,
    screen_name: String,
});

module.exports = mongoose.model('Tweet', tweetSchema);

