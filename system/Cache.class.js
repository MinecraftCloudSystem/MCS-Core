'use strict';
var MCS = require('../MCS');

var dashboardCache = require('../pages/dashboard');
var daemonsCache = require('../pages/daemons');
var pluginsCache = require('../pages/plugins');
var worldsCache = require('../pages/worlds');
var servertypesCache = require('../pages/servertypes');
var settingsCache = require('../pages/settings');

module.exports = class Cache {
    /**
     * Gets the Dashboard-Page as JSON-String
     * @returns {*}
     * */
    getDashboardPage() {
        return dashboardCache;
    }

    /**
     * Gets the Daemons-Page as JSON-String
     * @returns {*}
     * */
    getDaemonsPage() {
        return daemonsCache;
    }

    /**
     * Gets the Plugins-Page as JSON-String
     * @returns {*}
     * */
    getPluginsPage() {
        return pluginsCache;
    }

    /**
     * Gets the Worlds-Page as JSON-String
     * @returns {*}
     * */
    getWorldsPage() {
        return worldsCache;
    }

    /**
     * Gets the Servertypes-Page as JSON-String
     * @returns {*}
     * */
    getServertypesPage() {
        return servertypesCache;
    }

    /**
     * Gets the Settings-Page as JSON-String
     * @returns {*}
     * */
    getSettingsPage() {
        return settingsCache;
    }

};