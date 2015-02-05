# express-conditionizr

A server-side collection of User Agent detects to let you know what's
looking at your page.  Based on and inspired by <a href="http://conditionizr.com/" target="_blank">Conditionizr</a> for the browser.

----------

**express-conditionizr** is based on <a href="http://conditionizr.com/" target="_blank">Conditionizr</a>, a project that digested user agents on the client-side.  Express has had some stale device detection middlewares, and I prefer the methodology of coniditionizr, that I made this "port" of parts of the library from client side to server side.


## Install / Download

`npm install express-conditionizr` or

`git clone git@github.com:clineamb/express-conditionizr.git`


## Using

You can check out the example directory for a quick express app setup.

**express-conditionizr** can be included as middleware on the entire app, on a router, or even on a specific route.

This middleware was made with Express 4 in mind, but has the same `function(req, res, next)` structure, so it can essentially be used with most other vesions of express (and connect).   Below are examples of how to incorporate into Express 4.

```js
var express         = require('express')
,   conditionizr    = require('../index.js')
,   app             = express()
;


// ADD CONDITINIZER ON YOUR APP...
app.use(conditionizr);

app.get("/", function(req, res) {
    res.send(req.detects);
});

// setup the rest of your app...
```

**Setup on a route** (ex, router.js):

```js
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
```

... or add it on just a route ...

```js
router.route("/example2")
    .all(conditionizr)
    .get(function(req, res) {
        // do your route
    })
;
```

Two new variables appear in the `req` and `res` hashes: `req.detects` and `res.locals.detects`.  You'll get a hash of booleans like so:

**User Agent:** Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537
.36

```json
{
    "chrome": true,
    "opera": false,
    "firefox": false,
    "safari": false,
    "phantomjs": false,
    "ie11": false,
    "ie10": false,
    "ie10touch": false,
    "ie9": false,
    "ie8": false,
    "ie7": false,
    "android": false,
    "linux": false,
    "ios": false,
    "mac": false,
    "windows": true,
    "winPhone": false,
    "winPhone7": false,
    "winPhone75": false,
    "winPhone8": false,
    "localhost": true,
    "touch": false,
    "tablet": false,
    "phone": false,
    "mobile": false,
    "desktop": true
}
```

**Note:** Localhost is found using the `req.headers['host']` from `req.headers`.  This is the only test that uses this.


## Tests

**TODO**

----------

## License

Copyright (c) 2014, [Caroline Amaba](mailto:github@carolineamaba.com)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
