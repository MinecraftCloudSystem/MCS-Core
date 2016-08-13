var MCS = require('../MCS');

var page = {
    title: "Plugins",
    plugins: []
};

exports.getCachedPage = function() {
    return page;
};

exports.loadCache = function() {
    if(MCS.getCore().getMongo().hasConnection()) {
        page.plugins = [];

        MCS.getCore().getMongo().getLibrary().connection.model('plugins').find({}).sort('id').exec((err, plugins) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error getting Plugins from Database.");
                return;
            }

            plugins.forEach((plugin) => {
                page.plugins.push({
                    id: plugin._id,
                    name: plugin.name,
                    version: plugin.version,
                    author: plugin.author
                });
            });
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};

exports.addPlugin = function(name, version, author) {
    if(MCS.getCore().getMongo().hasConnection()) {
        var Plugin = MCS.getCore().getMongo().getLibrary().connection.model('plugins');

        new Plugin({
            name: name,
            version: version,
            author: author
        }).save((err) => {
            if(err) {
                MCS.getCore().getLog().error("Unknown Error saving Plugin '" + name + "' to Database.");
                return;
            }

            MCS.getCore().getLog().info("Plugin '" + name + "' saved to Database successfully.");

            this.loadCache();
        });
    } else {
        MCS.getCore().getLog().warn("No Database-Connection ready. Is the database offline?");
    }
};