"use strict";

var expect      = require('chai').expect
,   detect      = require('../lib/detect_package.js')
,   ua_strings  = require('./helpers/useragents.js')
;

//  ===== AGENT TESTS
//  Make sure the User Agent string tests are actually working.
//  There are 22 agent strings in ua_strings to test

//  === helper functions for looping tests

function runTestsFor(testlabel) {
    var ret = [], i;

    for(i=0; i<ua_strings; i++) {
        ret.push(detect[testlabel](ua_strings[i], 'localhost'));
    }
}

function testLoops(testlabel, expectations, results) {
    var i;

    for(i=0; i<ua_strings; i++) {
        describe(testlabel + " against: " + ua_strings[i], function() {
            it("should return boolean `" + expectations[i].toString() + "`", function() {
                expect(results[i]).to.be.a('boolean');
                expect(results[i]).to.equal(expectations[i]);
            });
        });
    }
}


function buildExpectations(arr_of_indexes) {
    var i, ret = [];

    for(i=0; i<ua_strings.length; i++) {
        ret.push(false);
    }

    for(i=0; i<arr_of_indexes.length; i++) {
        ret[arr_of_indexes[i]] = true;
    }
};

describe("User Agent Tests", function() {

    describe("Agent: Chrome Browser", function() {
        var expectations = buildExpectations([ 0, 1, 2, 16 ])
        ,   results = runTestsFor('chrome');

        testLoops('Chrome Browser', expectations, results);
    });

});

