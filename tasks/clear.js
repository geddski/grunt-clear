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
  grunt.registerTask('clear', 'Clear your terminal window', function() {
    grunt.util.spawn({
      cmd: 'clear',
      args: null,
      fallback: ''
    }, function(error, result, code){
      grunt.log.write('should have cleared');
      done();
    });

    // var myTerminal = require("child_process").exec,
    //   commandToBeExecuted = "clear";

    // myTerminal(commandToBeExecuted, function(error, stdout, stderr) {
    //   grunt.log.write('should have cleared');
    //   if (!error) {
    //     grunt.log.write('cleared ' + this.name + ' task...').ok();    
    //   }
    //   else{
    //     grunt.log.write('failed! ').error();    
    //   }
    // });

    // console.log("\033[2J\033[0f");

    
  });
};