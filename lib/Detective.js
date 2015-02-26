"use strict";

var DetectsPkg = require('./detect_package.js');

var Detective = function() {
    this.custom = {};
    this.detects = DetectsPkg;

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
        return det(ua, host);
    }

    return false;
};

Detective.prototype.testAll = function(ua, host) {
    var d, c, ret = {};

    for(d in this.detects) {
        ret[d] = this.runTest(d, ua, host);
    }

    // custom detects with the same name will end up overriding
    // the packaged detects.
    for(c in this.custom) {
        ret[c] = this.runTest(c, ua, host);
    }

    return ret;
};

module.exports = Detective;