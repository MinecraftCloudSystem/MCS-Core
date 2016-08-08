var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worldsSchema = new Schema({
    id: Number,
    name: String
});

module.exports = mongoose.connection.model('worlds', worldsSchema);