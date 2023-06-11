const TeamController = require('../controllers/team.controller');
module.exports = function(app){
    app.get('/api', TeamController.index);
    app.post('/api/team', TeamController.createTeam);
    app.get('/api/allteams', TeamController.allTeams);
    app.get('/api/team/:id', TeamController.getTeam);
    app.put('/api/team/:id', TeamController.updateTeam);
    app.delete('/api/team/:id', TeamController.deleteTeam);
}