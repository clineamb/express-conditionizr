var express         = require('express')
,   router          = express.Router()
,   conditionizr    = require('../index.js')
// ,   conditionizr    = require('express-conditionizr')
,   detective       = conditionizr.detective
;

// ADD CONDITINIZER On a whole route
router.use(conditionizr.middleware);

router.get("/example", function(req, res) {
    if(req.detects.mobile) {
        // render a mobile template, maybe!
    } else {
        // render other stuff
    }

    res.json(req.detects);
});

// also use it on just a route if you don't want to use router.use

router.route("/example2")
    .all(conditionizr.middleware)
    .get(function(req, res) {
        // do your route
    })
;


module.exports = app;
