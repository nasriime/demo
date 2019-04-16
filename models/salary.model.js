const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
    amount: Number,
    staffId: {
        ref: 'staff',
        type: mongoose.Types.ObjectId
    }
});

module.exports = mongoose.model('Salary', salarySchema);