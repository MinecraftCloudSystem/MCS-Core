'use strict';

var MCS = require('../MCS');
var fs = require('fs');
var crypto = require('crypto');

var io = require('socket.io')(MCS.getCore().getWebServer().getWebserver());

io.on('connection', function(socket) {

});