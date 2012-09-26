/*
 * grunt-clear
 * https://github.com/geddesign/grunt-clear
 *
 * Copyright (c) 2012 Dave Geddes
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {
  grunt.registerTask('before', 'test before', function(){
    grunt.log.writeln('BEFORE');
  });

  grunt.registerTask('after', 'test after', function(){
    grunt.log.writeln('AFTER');
  });

  grunt.registerTask('clear', 'Clear your terminal window', function() {
    // Tell grunt this task is asynchronous.
    grunt.log.writeln('doneFunction called');
    var done = this.async();
    
    var child = require('child_process');
    var ps = child.spawn('clear');
    ps.stdout.pipe(process.stdout);
    ps.on('exit', done);
    ps.stdin.end();
    /*grunt.util.spawn({}, function(error, result, code) {
      grunt.log.writeln('doneFunction called');
      console.log('this', this);
      // var child = require('child_process');
      // var ps = child.spawn('clear');
      // ps.stdout.pipe(process.stdout);
      // ps.stdin.end();
      // done("woot bacon");
    });*/

  });
};