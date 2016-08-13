var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    password: String,
    sessionCookie: String
});

module.exports = mongoose.connection.model('users', usersSchema);