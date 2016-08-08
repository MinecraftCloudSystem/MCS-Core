'use strict';

var MCS = require('../MCS');
var fs = require('fs');

var http = require('http');
var express = require('express');

var compression = require('compression');
var web = require('serve-static')('./web/');
var data = require('serve-static')('./data/');

var instance;

module.exports = class WebServer {

    /**
     * Starts the Webserver
     * */
    start(callback) {
        if(MCS.getCore().isRunning()) {
            this.getLog().warn("System is already running. You can't start a second instance");
            return;
        }

        this.app = express();
        this.app.use(compression());

        this.app.use("/data", data);
        this.app.use("/data", function(req, res) {
            res.status(404).send("FileNotFoundException");
        });

        this.app.use(web);
        this.app.use(function(req, res) {
            res.status(404).send(fs.readFileSync('./web/index.html', {encoding: "UTF-8"}));
        });

        this.webserver = http.Server(this.app);
        this.webserver.listen(MCS.getCore().getDefaultConfig().getValue("port")['webinterface']);

        MCS.getCore().getLog().info("Webserver started successfully");

        callback();
    }

    getWebserver() {
        return this.webserver;
    }
};