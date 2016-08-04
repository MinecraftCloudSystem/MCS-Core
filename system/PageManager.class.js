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
                MCS.getCore().getCache().getDashboard();
        }
    }

};