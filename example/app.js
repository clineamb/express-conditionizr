var express         = require('express')
,   conditionizr    = require('../index.js')
// ,   conditionizr    = require('express-conditionizr')
,   detective       = conditionizr.detective
,   app             = express()
;

// ADDING A CUSTOM DETECT ===
// Your function needs to take at LEAST the userAgent: function(ua,host)
// Also, you have access to the built-in tests (and other custom tests!)
// by referencing "detective"

detective.addDetect('win_desktop', function(ua, host) {
    return detective.runTest('windows', ua, host) && detective.runTest('desktop', ua, host);
});

// ADD CONDITINIZER ON YOUR APP...
app.use(conditionizr.middleware);

app.get("/", function(req, res) {
    res.send(req.detects);
});

module.exports = app;
