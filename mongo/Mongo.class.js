'use strict';

var MCS = require('../MCS');

var mongoose = require('mongoose');
var fs = require('fs');

var connectionURL;

module.exports = class Mongo {

    start(callback) {
        if(MCS.getCore().getDefaultConfig().getValue("database")['auth']['enabled']) {
            connectionURL = 'mongodb://' + MCS.getCore().getDefaultConfig().getValue("database")['auth']['username'] + ":" + MCS.getCore().getDefaultConfig().getValue("database")['auth']['password'] + "@" + MCS.getCore().getDefaultConfig().getValue("database")['hostname'] + ":" + MCS.getCore().getDefaultConfig().getValue("database")['port'] + "/" + MCS.getCore().getDefaultConfig().getValue("database")['database'];
        } else {
            connectionURL = 'mongodb://' + MCS.getCore().getDefaultConfig().getValue("database")['hostname'] + ":" + MCS.getCore().getDefaultConfig().getValue("database")['port'] + "/" + MCS.getCore().getDefaultConfig().getValue("database")['database'];
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