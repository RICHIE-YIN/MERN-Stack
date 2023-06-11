const Song = require('../models/song.model')

module.exports.addSong = (req, res) => {
    const newSong = req.body
    Song.create(newSong)
    .then((song) => res.json(song))
    .catch ((err) => res.status(400).json(err))
}

module.exports.allSongs = (req, res) => {
    Song.find()
    .then((songs) => res.json(songs))
    .catch ((err) => res.json(err))
}

module.exports.oneSong = (req, res) => {
    const idFromParams = req.params.id
    Song.findOne({_id: idFromParams})
    .then((onesong) => res.json(onesong))
    .catch ((err) => res.json(err))
}

module.exports.updateSong = (req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    Song.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then((updatedSong) => res.json(updatedSong))
    .catch ((err) => res.status(400).json(err))
}

module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: idFromParams})
    .then((message) => res.json(message))
    .catch ((err) => res.json(err))
}