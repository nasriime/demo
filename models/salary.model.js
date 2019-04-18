const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
    amount: Number,
    staff: {
        ref: 'Staff',
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Salary', salarySchema);