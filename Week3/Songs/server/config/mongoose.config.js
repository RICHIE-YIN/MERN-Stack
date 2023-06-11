const mongoose = require('mongoose');

const db = "songdatabase23"

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the klub db: ${db}`))
    .catch(err => console.log('something is wrong with the db') )