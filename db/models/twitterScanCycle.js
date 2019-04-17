const mongoose = require('mongoose');
const { Schema } = mongoose;

const TwitterScanCycleSchema = new Schema({
    maxId: String,
    sinceId: String,
});

TwitterScanCycleSchema.statics.getRecentTwitterScanCycle = async function () {
    try {
        return await this.findOne({}).exec();
    } catch (e) {
        throw e;
    }            
}


module.exports = mongoose.model('TwitterScanCycle', TwitterScanCycleSchema);
