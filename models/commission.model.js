const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commissionSchema = new Schema({
    amount: Number,
    staffId: {
        ref: 'Staff',
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Commission', commissionSchema);