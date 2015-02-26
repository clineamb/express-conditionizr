"use strict";

var expect      = require('chai').expect
,   detect      = require('../lib/detect_package.js')
,   uas         = require('./helpers/useragents.js')
;

//  ===== AGENT TESTS
//  Make sure the User Agent string tests are actually working.
//  There are 22 agent strings in ua_strings to test

//  === helper functions for looping tests



describe("Chrome Browser Tests", function() {
    //[ 0, 1, 2, 16 ])
    
    describe(uas[0], function(){
        it("should return `true`", function() {
            expect(detect['chrome'](uas[0], "host")).to.true;
        });
    });

    describe(uas[1], function(){
        it("should return `true`", function() {
            expect(detect['chrome'](uas[1], "host")).to.true;
        });
    });

    describe(uas[2], function(){
        it("should return `true`", function() {
            expect(detect['chrome'](uas[2], "host")).to.true;
        });
    });

    describe(uas[3], function(){
        it("should return `false`", function() {
            expect(detect['chrome'](uas[3], "host")).to.false;
        });
    });

    describe(uas[16], function(){
        it("should return `true`", function() {
            expect(detect['chrome'](uas[16], "host")).to.true;
        });
    });


});
