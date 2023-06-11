const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    //Create
    app.post("/api/jokes/new", JokeController.createNewJoke);

    //Read One
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke);

    //Read All
    app.get("/api/jokes", JokeController.findAllJokes);

    //Update
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);

    //Delete
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
}

