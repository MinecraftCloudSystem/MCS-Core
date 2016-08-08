var MCS = require('../MCS');
var crypto = require('crypto');

var page = {
    title: "Daemons",
    daemons: []
};

exports.getCachedPage = function() {
    return page;
};

exports.loadCache = function() {
    if(MCS.getCore().getMongo().hasConnection()) {
        page.daemons = [];

        MCS.getCore().getMongo().getLibrary().connection.model('daemons').find({}).sort('id').exec((err, daemons) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error getting Daemons from Database.");
                return;
            }

            daemons.forEach((daemon) => {
                page.daemons.push({
                    id: daemon.id,
                    name: daemon.name,
                    ip: daemon.ip,
                    port: daemon.port,
                    status: "Pending",
                    cpu: 0,
                    ram: 0,
                    player: 0,
                    server: 0
                });
            });
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};

exports.addDaemon = function(name, ip, port) {
    if(MCS.getCore().getMongo().hasConnection()) {
        var Daemon = MCS.getCore().getMongo().getLibrary().connection.model('daemons');

        new Daemon({
            id: page.daemons[ page.daemons.length - 1 ] + 1,
            name: name,
            ip: ip,
            port: port,
            apiKey: crypto.randomBytes(16).toString('hex')
        }).save((err) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error saving Daemon 'ilou\'s Daemon' to Database.");
                return;
            }

            MCS.getCore().getLog().info("Daemon 'ilou\'s Daemon' daved to Database successfully.");

            this.loadCache();
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};