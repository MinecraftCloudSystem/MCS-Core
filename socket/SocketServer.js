'use strict';

var MCS = require('../MCS');
var fs = require('fs');
var crypto = require('crypto');

var io = require('socket.io')(MCS.getCore().getWebServer().getWebserver());

io.on('connection', function(socket) {
    socket.on("page-req", function(data) {
        if(data == undefined) { return; }
        if(data.page == undefined) {
            MCS.getCore().getLog().error("Can't handle Page-Request. No page set!");
            socket.emit("page-res", { state: "error", message: "Can't handle Page-Request. No page set!" });
            return;
        }
        socket.emit("page-res", { state: "success", content: MCS.getCore().getPageManager().getPage(data.page) });
    });

    socket.on("add-req", function(data) {
        if(data == undefined) { return; }
        if(data.type == undefined) {
            if(data.page == undefined) {
                MCS.getCore().getLog().error("Can't handle Add-Request. No Type set!");
                socket.emit("add-res", { state: "error", message: "Can't handle Add-Request. No Type set!" });
                return;
            }
        }

        switch(data.type) {
            case "daemon":
                var Daemon = require('../pages/daemons');
                Daemon.addDaemon(data.name, data.ip, data.port, (status) => {
                    switch(status) {
                        case "database-offline":
                            socket.emit("add-res", { state: "error", message: "Can't handle Add-Request. Database unavailable!" });
                            break;
                        case "error-saving":
                            socket.emit("add-res", { state: "warn", message: "An unknown error occurred saving your Daemon!" });
                            break;
                        case "success-saving":
                            socket.emit("add-res", { state: "success", message: "Saved your Daemon successfully!" });
                            break;
                        default:
                            socket.emit("add-res", { state: "error", message: "An unknown error occurred!" });
                    }
                });
                break;
            case "plugin":
                break;
            case "world":
                break;
            case "servertype":
                break;
            default:
                MCS.getCore().getLog().warn("Can't handle Add-Request. Unknown Type set!");
                socket.emit("page-res", { state: "warn", message: "Can't handle Add-Request. Unknown Type set!" });
        }
    });
});