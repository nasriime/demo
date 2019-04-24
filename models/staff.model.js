const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: String,
    department: String,
    commission: {
        ref: 'Commission',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Staff', staffSchema);