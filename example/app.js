var express         = require('express')
,   conditionizr    = require('../index.js')
,   app             = express()
;


// ADD CONDITINIZER ON YOUR APP...
app.use(conditionizr);

app.get("/", function(req, res) {
    res.send(req.detects);
});

module.exports = app;
