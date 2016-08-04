'use strict';

var MCS = require('../MCS');
var fs = require('fs');
var crypto = require('crypto');

var io = require('socket.io')(MCS.getCore().getWebServer().getWebserver());

io.on('connection', function(socket) {
    socket.on("page-req", function(data) {
        if(data.page == undefined) {
            MCS.getCore().getLog().error("Can't handle Page-Request. No page set!");
            socket.emit("page-res", { state: "error", message: "Can't handle Page-Request. No page set!" });
            return;
        }
        socket.emit("page-res", { state: "success", content: MCS.getCore().getPageManager().getPage(data.page) });
    });
});