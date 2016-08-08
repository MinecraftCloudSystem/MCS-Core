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
                return MCS.getCore().getCache().getDashboardPage().getCachedPage();
            case "daemons":
                return MCS.getCore().getCache().getDaemonsPage().getCachedPage();
            case "plugins":
                return MCS.getCore().getCache().getPluginsPage().getCachedPage();
            case "worlds":
                return MCS.getCore().getCache().getWorldsPage().getCachedPage();
            case "servertypes":
                return MCS.getCore().getCache().getServertypesPage().getCachedPage();
            case "settings":
                return MCS.getCore().getCache().getSettingsPage().getCachedPage();
            default:
                return MCS.getCore().getCache().getDashboardPage().getCachedPage();
        }
    }

};