"use strict";

var Detective   = require('./lib/Detective.js')
,   detect      = new Detective()
;

module.exports = {
    detective: detect     // exposes add, test, testAll, getReponses
,   middleware: function(req, res, next) {
        var _d = detect.testAll(req.headers['user-agent'], req.headers['host']);

        req.detects = _d;
        res.locals.detects = _d;

        next();
    }
};