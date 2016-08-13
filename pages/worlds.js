var MCS = require('../MCS');

var page = {
    title: "Worlds",
    worlds: []
};

exports.getCachedPage = function() {
    return page;
};

exports.loadCache = function() {
    if(MCS.getCore().getMongo().hasConnection()) {
        page.servertypes = [];

        MCS.getCore().getMongo().getLibrary().connection.model('worlds').find({}).sort('id').exec((err, worlds) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error getting Worlds from Database.");
                return;
            }

            worlds.forEach((world) => {
                page.worlds.push({
                    id: world._id,
                    name: world.name
                });
            });
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};

exports.addWorld = function(name) {
    if(MCS.getCore().getMongo().hasConnection()) {
        var World = MCS.getCore().getMongo().getLibrary().connection.model('worlds');

        new World({
            name: name
        }).save((err) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error saving World '" + name + "' to Database.");
                return;
            }

            MCS.getCore().getLog().info("World '" + name + "' saved to Database successfully.");

            this.loadCache();
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};