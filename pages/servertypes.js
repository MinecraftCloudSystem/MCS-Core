var MCS = require('../MCS');

var page = {
    title: "Servertypes",
    servertypes: []
};

exports.getCachedPage = function() {
    return page;
};

exports.loadCache = function() {
    if(MCS.getCore().getMongo().hasConnection()) {
        page.servertypes = [];

        MCS.getCore().getMongo().getLibrary().connection.model('servertypes').find({}).sort('id').exec((err, servertypes) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error getting Servertypes from Database.");
                return;
            }

            servertypes.forEach((servertype) => {
                page.servertypes.push({
                    id: servertype._id,
                    name: servertype.name,
                    version: servertype.version,
                    author: servertype.author
                });
            });
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};

exports.addServertype = function(name, plugins, worlds) {
    if(MCS.getCore().getMongo().hasConnection()) {
        var Servertype = MCS.getCore().getMongo().getLibrary().connection.model('servertypes');

        new Servertype({
            name: name,
            plugins: plugins,
            worlds: worlds
        }).save((err) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error saving Servertype '" + name + "' to Database.");
                return;
            }

            MCS.getCore().getLog().info("Servertype '" + name + "' saved to Database successfully.");

            this.loadCache();
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};