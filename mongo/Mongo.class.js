'use strict';

var MCS = require('../MCS');

var mongoose = require('mongoose');
var fs = require('fs');

var connectionURL;

module.exports = class Mongo {

    start(callback) {
        var database = MCS.getCore().getDefaultConfig().getValue("database");
        if(database['auth']['enabled']) {
            connectionURL = 'mongodb://' + database['auth']['username'] + ":" + database['auth']['password'] + "@" + database['hostname'] + ":" + database['port'] + "/" + database['database'];
        } else {
            connectionURL = 'mongodb://' + database['hostname'] + ":" + database['port'] + "/" + database['database'];
        }

        mongoose.connect(connectionURL, {server:{poolSize:4}});

        var db = mongoose.connection;
        db.on('error', function(err) {
            MCS.getCore().getLog().error("Could not connect to Database! Errordetails:\n      " + err);
            MCS.getCore().getLog().info("Shutting down. Check your Connection-Settings!");
            process.exit(0);
        });
        db.once('open', function() {
            fs.readdirSync(__dirname + "/models/").forEach(function(filename) {
                if(~filename.indexOf('.js')) {
                    require(__dirname + '/models/' + filename);
                }
            });
            MCS.getCore().getLog().info("Connected to database successfully!");
            callback();
        });
    }

    getLibrary() {
        return mongoose;
    }

    hasConnection() {
        return mongoose.connection.readyState != 0;
    }
};