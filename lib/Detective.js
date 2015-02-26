"use strict";

var DetectsPkg = require('./detect_package.js');

var Detective = function() {
    this.custom = {};
    this.detects = DetectsPkg;
    this.responses = {};

    return this;
};

Detective.prototype.addDetect = function(label, fn) {
    this.custom[label] = fn;
    return this;
};

Detective.prototype.runTest = function(label, ua, host) {
    var det = this.detects[label];

    if(!det) {
        det = this.custom[label];
    }

    if(det) {
        this.responses[label] = det(ua, host);

        return this.responses[label];
    }

    return false;
};

Detective.prototype.testAll = function(ua, host) {
    var d, c;

    for(d in this.detects) {
        this.runTest(d, ua, host);
    }

    for(c in this.custom) {
        this.runTest(c, ua, host);
    }

    return this.responses;
};

Detective.prototype.getResponses = function() {
    return this.responses;
};

module.exports = Detective;