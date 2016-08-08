var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var servertypesSchema = new Schema({
    id: Number,
    name: String,
    plugins: [{
        id: Number
    }],
    worlds: [{
        id: Number
    }]
});

module.exports = mongoose.connection.model('servertypes', servertypesSchema);