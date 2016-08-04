'use strict';
var MCS = require('../MCS');

var dashboardCache = require('../cache/dashboard');

module.exports = class Cache {
    /**
     * Gets the Dashboard as JSON-String
     * @returns {*}
     * */
    getDashboard() {
        console.log("Cache: " + dashboardCache.getCachedPage());
        return dashboardCache.getCachedPage();
    }

};