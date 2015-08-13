/*
 * grunt-dotpl
 * https://github.com/zzzhan/grunt-dotpl
 *
 * Copyright (c) 2015 zzzhan
 * Licensed under the MIT license.
 */
 
'use strict';
var dotpl = require('dotpl');
module.exports = function(grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.registerMultiTask('dotpl', 'A lite javascript template plugin.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
		opener:'\\$\\{',
		closer:'\\}',
		tag:'<tpl>'
    });
	var tplString = options.tplString;
	if(!tplString) {
	  var tpl = options[this.target]||options.tpl;
	  if(!tpl) {
	    grunt.fail.warn('Template file option unfound:tpl or '+this.target);
	  }
	  tplString = grunt.file.read(tpl);
	}
	//console.log(this.target+':'+options.opener);
	//console.log(this.target+':'+tpl);
	dotpl.setDelimiters(options.opener, options.closer, options.tag);
    // Iterate over all specified file groups.
    this.files.forEach((function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      var data = {};
      for(var i=0;i<src.length;i++) {
        var item = grunt.file.readJSON(src[i]);
        for(var key in item) {
          data[key] = item[key];
        }
      }
	  this.ctx = f;
      // Write the destination file.
	  var fn = options.renderer;
	  if(typeof fn ==='function') {
		fn = fn.bind(this);
	  }
      grunt.file.write(f.dest, dotpl.applyTpl(tplString, data, fn));
      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    }).bind(this));
  });
};