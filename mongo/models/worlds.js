var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worldsSchema = new Schema({
    name: String
});

module.exports = mongoose.connection.model('worlds', worldsSchema);