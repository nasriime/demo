const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commissionSchema = new Schema({
    amount: Number,
    staff: {
        ref: 'Staff',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Commission', commissionSchema);