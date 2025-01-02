const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'leased', 'maintenance'],
        default: 'available'
    },
    leasePrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;