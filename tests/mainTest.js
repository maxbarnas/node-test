/**
 * Created by max on 15.03.14.
 */
var assert = require('assert'),
    should = require('should');

describe("Test Framework", function () {
    "use strict";
    it("should have test framework present", function () {
        (1).should.be.ok;
    });
});