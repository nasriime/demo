const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    id: Number,
    name: String,
    department: String
});

module.exports = mongoose.model('Staff', staffSchema);