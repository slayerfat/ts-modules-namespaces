'use strict';

var expect      = require('chai').expect;
var it          = require('mocha').it;
var describe    = require('mocha').describe;
var tsNamespace = require('ts-namespaces');
var tsModule    = require('ts-modules');

var namespaceService = new tsNamespace.Core.Service();
var moduleService    = new tsModule.AnotherCore.Service();

describe('ts-namespaces', function () {
    it('should not be undefined', function () {
        expect(namespaceService).to.not.equal(undefined);
    });

    it('test attr should be 5', function () {
        expect(namespaceService.test).to.equal(5);
    });
});

describe('ts-modules', function () {
    it('should not be undefined', function () {
        expect(moduleService).to.not.equal(undefined);
    });

    it('test attr should be 7', function () {
        expect(moduleService.test).to.equal(7);
    });
});
