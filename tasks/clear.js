/*
 * grunt-clear
 * https://github.com/geddesign/clear-cli
 *
 * Copyright (c) 2012 Dave Geddes
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task
  // creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  grunt.registerTask('clear', 'Your task description goes here.', function() {
    grunt.log.write('I am the ' + this.name + ' task...').ok();
  });

};
