const { Author } = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createAuthor = (req, res) => {
    const newAuthor = req.body
    Author.create(newAuthor)
    .then((author) => res.json(author))
    .catch((err) => res.json(err)); 
}

//Read All
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then((author) => res.json(author))
        .catch((err) => res.json(err)); 
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    Author.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch ((err) => res.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}





