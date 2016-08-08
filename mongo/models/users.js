var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    id: Number,
    name: String,
    password: String,
    sessionCookie: String
});

module.exports = mongoose.connection.model('users', usersSchema);