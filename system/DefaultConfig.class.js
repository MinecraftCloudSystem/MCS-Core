'use strict';

var MCS = require('../MCS');

var config = require('../config.json');
var fs = require('fs');

module.exports = class DefaultConfig {

    save(callback) {
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), 'utf-8', (err) => {
            if(err) {
                MCS.getCore().getLog().error("An error occurred while saving config!");
            }
            callback();
        });
    }

    getValue(key) {
        if(config[key] === undefined) {
            MCS.getCore().getLog().error("An error occurred while reading value (No such key)!");
            return;
        }
        return config[key];
    }

    updateValue(key, value) {
        if(config[key] === undefined) {
            MCS.getCore().getLog().error("An error occurred while updating value (No such key)!");
            return;
        }
        config[key] = value;
        this.save(() => {});
    }
};