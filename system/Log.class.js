'use strict';

var MCS = require('../MCS');

module.exports = class Log {
    /**
     * Displays the message as an info
     * @param msg The message
     */
    info(msg) {
        console.log('\x1b[32m[INFO ' + getDateTime() + '] \x1b[37m' + msg);
    }

    /**
     * Displays the message as a debug
     * @param msg The message
     */
    debug(msg){
        if(MCS.getCore().getDefaultConfig().getValue("debugMode") === true) {
            console.log('\x1b[36m[DEBUG ' + getDateTime() + '] \x1b[37m' + msg);
        }
    }

    /**
     * Displays the message as an error
     * @param msg The message
     */
    error(msg) {
        console.log('\x1b[31m[ERROR ' + getDateTime() + '] \x1b[37m' + msg);
    }

    /**
     * Displays the message as a warning
     * @param msg The message
     */
    warn(msg){
        console.log('\x1b[33m[WARNING ' + getDateTime() + '] \x1b[37m' + msg);
    }
};

var getDateTime = function() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    return hour + ":" + min + ":" + sec;
};