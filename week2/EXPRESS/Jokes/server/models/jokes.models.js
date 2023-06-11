const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Title is required"],
        minlength: [10, "Title must be 10 characters long"],
    },
    punchline: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be 3 characters long"],
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;