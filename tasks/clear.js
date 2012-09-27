/*
 * grunt-clear
 * https://github.com/geddesign/grunt-clear
 *
 * Copyright (c) 2012 Dave Geddes
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {
  grunt.registerTask('clear', 'Clear your terminal window', function() {
    process.stdout.write('\x1Bc');
  });
};