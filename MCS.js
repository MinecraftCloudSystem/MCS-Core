'use strict';

var fs = require('fs');

var MCSCore = require('./system/MCSCore.class');
var mcs = new MCSCore();

/**
 * Gets the SpaceBoard Core-Module
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