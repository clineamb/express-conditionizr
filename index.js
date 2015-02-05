"use strict";

var detects = require('./lib/detects.js');

module.exports = function(req, res, next) {
    var _d = detects(req.headers['user-agent'], req.headers['host']);

    req.detects = _d;
    res.locals.detects = _d;

    next();
};