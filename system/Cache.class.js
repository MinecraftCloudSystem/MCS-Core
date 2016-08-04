'use strict';
var MCS = require('../MCS');

var dashboardCache = require('../cache/dashboard');
var daemonsCache = require('../cache/daemons');
var pluginsCache = require('../cache/plugins');
var worldsCache = require('../cache/worlds');
var servertypesCache = require('../cache/servertypes');
var settingsCache = require('../cache/settings');

module.exports = class Cache {
    /**
     * Gets the Dashboard-Page as JSON-String
     * @returns {*}
     * */
    getDashboard() {
        return dashboardCache;
    }

    /**
     * Gets the Daemons-Page as JSON-String
     * @returns {*}
     * */
    getDaemons() {
        return daemonsCache;
    }

    /**
     * Gets the Plugins-Page as JSON-String
     * @returns {*}
     * */
    getPlugins() {
        return pluginsCache;
    }

    /**
     * Gets the Worlds-Page as JSON-String
     * @returns {*}
     * */
    getWorlds() {
        return worldsCache;
    }

    /**
     * Gets the Servertypes-Page as JSON-String
     * @returns {*}
     * */
    getServertypes() {
        return servertypesCache;
    }

    /**
     * Gets the Settings-Page as JSON-String
     * @returns {*}
     * */
    getSettings() {
        return settingsCache;
    }

};