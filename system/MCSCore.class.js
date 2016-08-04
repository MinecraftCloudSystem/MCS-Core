'use strict';

var Log = require('./Log.class');
var log = new Log();

var WebServer = require('../webserver/WebServer.class');
var webServer = new WebServer();

var DefaultConfig = require('./DefaultConfig.class');
var config = new DefaultConfig();

var PageManager = require('./PageManager.class');
var pageManager = new PageManager();

var Cache = require('./Cache.class');
var cache = new Cache();

var running = false;

module.exports = class MCSCore {
    /**
     * Gets the Log to send information, warnings, errors and debugs
     * @returns {Log}
     * */
    getLog() {
        return log;
    }

    /**
     * Checks, whether the Core is running or not
     * @returns {boolean}
     * */
    isRunning() {
        return running;
    }

    /**
     * Gets the Webserver
     * @returns {WebServer}
     * */
    getWebServer() {
        return webServer;
    }

    /**
     * Gets the Webserver
     * @returns {WebServer}
     * */
    getPageManager() {
        return pageManager;
    }

    getCache() {
        return cache;
    }

    /**
     * Gets the Default Config
     * @returns {Config}
     * */
    getDefaultConfig() {
        return config;
    }

    /**
     * Starts the SpaceBoard Core-Module
     * */
    start(callback) {
        if(this.isRunning()) {
            this.getLog().warn("System is already running. You can't start a second instance");
            return;
        }
        this.getLog().info("Launching MCS v" + require('../package.json').version);
        this.getWebServer().start(() => {
            running = true;
            callback();
        });
    }
};