'use strict';
module.exports = function(grunt) {
  var path = require('path')
    , swig = require('swig')
    , _ = require('lodash')
  grunt.registerMultiTask('swigstatic', 'generate from templates', function() {
    var options = this.options({
      cache: false,
      autoEscape: true,
      varControls: ['{{', '}}'],
      tagControls: ['{%', '%}'],
      cmtControls: ['{#', '#}'],
      context:{}
    });
    var locals = _.chain({})
                  .merge(contextResult(options.context))
                  .merge(contextResult(this.data.context))
                  .value();
    swig.setDefaults({
      cache: options.cache,
      locals: locals,
      autoescape: options.autoEscape,
      varControls: options.varControls,
      tagControls: options.tagControls,
      cmtControls: options.cmtControls
    });

    handleFiles(this.files);
    function contextResult(ctx){
      var context = {}
      if(_.isPlainObject(ctx)){
        return ctx
      }else if(_.isString(ctx)){
        try{
          context = grunt.file.readJSON(ctx)
        }catch(err){
          grunt.fail.fatal(err)
        }
      }else{
        grunt.log.warn(this.nameArgs + '\'s context is not found.');
      }
      return context
    }
    function handleFiles(files) {
      files.forEach(function(f) {
        f.src.filter(srcExists).forEach(function(filepath) {
          var context,contextPath = filepath.substring(0,filepath.lastIndexOf('.'))+'.json';
          try{
            context = grunt.file.readJSON(contextPath)
          }catch(err){
            context = {}
            grunt.log.warn('Source file "' + contextPath + '" not found.');
          }
          renderFile(f.dest, filepath, context);
        });
      });
    };

    function srcExists(filepath) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
    };
    function renderFile(outfile, filepath, context) {
      grunt.file.write(outfile, swig.renderFile(filepath, context));
      grunt.log.ok('File "' + outfile + '" created.');
    }
  });
};
