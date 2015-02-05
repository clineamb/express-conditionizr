var express         = require('express')
,   router          = express.Router()
;


// ADD CONDITINIZER On a whole route
router.use(conditionizr);

router.get("/example", function(req, res) {
    if(req.detects.mobile) {
        // render a mobile template, maybe!
    } else {
        // render other stuff
    }
});

// also use it on just a route if you don't router.use


router.route("/example2")
    .all(conditionizr)
    .get(function(req, res) {
        // do your route
    })
;


module.exports = app;
