const users = require('./user.model');
let count = 0;

module.exports = {
    create: create,
    getAll: getAll,
    getById: getById,
    deleteUser: deleteUser,
    addTweet: addTweet
}

function create(req, res){
    const newUser = new users(req.body);
    const error = newUser.validateSync();
    if (!error) {
        newUser.save();
        res.json(newUser);
    } else {
        res.status(400).json(error.errors);
    }
}

function getAll(req, res){
    users.find().then(response => {
        return res.render('users/users', {users : response});
    }).catch(err => {res.render('error', {e : err});})
}

function getById(req, res){
    users.findOne({username: req.params.id}).then(response => {
        return res.json(response);
    }).catch(err => {res.status(500).json(err);})
}

function deleteUser(req, res){
    users.find({username: req.params.id}).remove()
    .then(response => {
        return res.json(response);
    }).catch(err => {res.status(500).json(err);})
}

function addTweet(req, res){
    users.update({username: req.params.id}, 
        {$push: {tweet: {text: req.body.tweet, owner: req.params.id, id:count++}}})
    .then(response => {return res.json(response);})
}

