const mongoose = require('mongoose');

const TODOschema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'You have to put an username!'],
        unique: [true, 'Try again!']
    },
    name: {
        type: String,
        required: [true, 'You have to put your name!'],
        unique: [true, 'Try again!']
    },
    email: {
        type: String,
        required: [true, 'You have to put the E-mail!'],
        unique: [true, 'Try again!']
    },
    tweet: {
        type: []
    }
});

const TODO = mongoose.model('pruebas', TODOschema);
module.exports = TODO;