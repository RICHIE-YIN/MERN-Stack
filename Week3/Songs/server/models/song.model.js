const mongoose = require('mongoose');
const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [5, "Title mmust be 5 characters long"]
    },
    
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minLength: [3, "Artist mmust be 5 characters long"]
    },
    
    rating: {
        type: Number,
        min: [1, "Ratings needs to be 1-10"],
        max: [10, "Ratings needs to be 1-10"]
    },
    
    top50: {
        type: Boolean,
        required: [false]
    }
}, { timestamps: true });
module.exports = mongoose.model('Song', SongSchema);