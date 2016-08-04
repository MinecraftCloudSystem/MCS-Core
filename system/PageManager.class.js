'use strict';
var MCS = require('../MCS');

module.exports = class PageManager {
    /**
     * Gets the page as JSON-String from Cache
     * @returns {*}
     * */
    getPage(page) {
        switch(page) {
            case "dashboard":
                return MCS.getCore().getCache().getDashboard().getCachedPage();
            case "daemons":
                return MCS.getCore().getCache().getDaemons().getCachedPage();
            case "plugins":
                return MCS.getCore().getCache().getPlugins().getCachedPage();
            case "worlds":
                return MCS.getCore().getCache().getWorlds().getCachedPage();
            case "servertypes":
                return MCS.getCore().getCache().getServertypes().getCachedPage();
            case "settings":
                return MCS.getCore().getCache().getSettings().getCachedPage();
            default:
                return MCS.getCore().getCache().getDashboard().getCachedPage();
        }
    }

};