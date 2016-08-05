'use strict';

var fs = require('fs');

var MCSCore = require('./system/MCSCore.class');
var mcs = new MCSCore();

var JSZip = require("jszip");
var YAML = require('yamljs');

/**
 * Gets the MCS Core-Module
 * @returns {*}
 * */
module.exports.getCore = function() {
    return mcs;
};
var getCore = function() {
    return mcs;
};
getCore().getLog().info("        |");
getCore().getLog().info("       / \\");
getCore().getLog().info("      / - \\");
getCore().getLog().info("     | MCS |");
getCore().getLog().info("     | 2.0 |");
getCore().getLog().info("     |  |  |");
getCore().getLog().info("   .'|  |  |'.");
getCore().getLog().info("  /  |  |  |  \\");
getCore().getLog().info("  |,-'--|--'-,|");
getCore().start(() => {
    require('./socket/SocketServer');
    getCore().getLog().info("System started successfully!");
});

process.on("SIGINT", () => {
    getCore().getLog().info("------------------------------");
    getCore().getLog().info("System shutting down...");
    process.exit(0);
});

fs.readFile("./files/plugins/autorestart.jar", function(err, data) {
    if (err) {
        throw err;
    }
    JSZip.loadAsync(data).then(function (zip) {
        zip.file('plugin.yml').async("string").then(function(data) {
            var info = YAML.parse(data);

            /* getCore().getLog().debug("Name: " + info.name);
             getCore().getLog().debug("Version: " + info.version);
             getCore().getLog().debug("Author: " + (info.author ? info.author : info.authors));*/
        });
    });
});