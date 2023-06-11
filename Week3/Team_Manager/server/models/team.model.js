const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be 3 characters long"]
    },
    position: { 
        type: String,
        required: [true, "Position is required"],
        minLength: [5, "Position must be 5 characters long"]
    },
    status: { 
        type: String, 
        enum: ['Playing', 'Not Playing', 'Undecided'], 
        default: 'Undecided' },
}, { timestamps: true });
module.exports.Team = mongoose.model('Team', TeamSchema);