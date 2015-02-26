"use strict";

var expect = require('chai').expect
,   detect = require('../lib/detect_package.js')
;

describe("Host Tests", function() {

    // LOCALHOST TEST
    describe("Host: localhost", function() {
        it("should return boolean `true` given 'localhost'", function() {
            
            var result = detect.localhost("No User Agent", "localhost");

            expect(result).to.be.a('boolean');
            expect(result).to.be.true;
        });
    });

});
