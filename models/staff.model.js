const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: String,
    department: String,
    commission: Number
});

module.exports = mongoose.model('Staff', staffSchema);