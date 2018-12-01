const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {
    useCreateINdex: true,
    useNewUrlParser: true
}).then(db => console.log("coneccion success"))
.catch(err => console.error(err));
