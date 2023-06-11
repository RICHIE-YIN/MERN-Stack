const { Team } = require('../models/team.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createTeam = (req, res) => {
    const newTeam = req.body
    Team.create(newTeam)
    .then((team) => res.json(team))
    .catch((err) => res.json(err)); 
}

//Read All
module.exports.allTeams = (req, res) => {
    Team.find()
        .then((team) => res.json(team))
        .catch((err) => res.json(err)); 
}

module.exports.getTeam = (request, response) => {
    Team.findOne({_id:request.params.id})
        .then(team => response.json(team))
        .catch(err => response.json(err))
}

module.exports.updateTeam = (req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    Team.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then((updatedTeam) => res.json(updatedTeam))
    .catch ((err) => res.status(400).json(err))
}

module.exports.deleteTeam = (request, response) => {
    Team.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}





