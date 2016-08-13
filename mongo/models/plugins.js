var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pluginsSchema = new Schema({
    name: String,
    version: String,
    author: String
});

module.exports = mongoose.connection.model('plugins', pluginsSchema);