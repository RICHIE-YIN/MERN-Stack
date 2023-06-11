const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be 3 characters long"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);