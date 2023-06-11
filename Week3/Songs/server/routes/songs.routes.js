const SongController = require('../controllers/songs.controller');

module.exports = (app) => {
    app.post('/api/songs/new', SongController.addSong);
    app.get('/api/songs', SongController.allSongs);
    app.get('/api/songs/:id', SongController.oneSong);
    app.put('/api/songs:id', SongController.updateSong);
    app.delete('/api/songs', SongController.deleteSong);
}
