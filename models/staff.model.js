const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: String,
    department: String,
    salary: Number,
    commission: Number
});

module.exports = mongoose.model('Staff', staffSchema);