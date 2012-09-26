'use strict';

// var grunt = require('grunt');

exports['clear'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'task': function(test) {
    test.expect(1);
    // tests here
    test.ok(true, 'Should be true.');
    test.done();
  }
};
