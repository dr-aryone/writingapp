'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/css/styles.css': 'public/sass/styles.scss'
        }
      }
    },

    jshint: {
      all: ['public/js/**/*.js']
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    protractor: {
      options: {
        configFile: 'protractor.conf.js',
        keepAlive: true,
        noColor: false
      },
      singlerun: {}
    },

    open: {
      dist: {
        path: 'http://localhost:3000'
      }
    },

    watch: {
      css: {
        files: 'public/sass/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: 'public/js/**/*.js',
        tasks: ['jshint', 'karma']
      },
      views: {
        files: [
          'app/views/**/*.ejs',
          'public/views/**/*.html'
        ]
      },
      options: {
        livereload: true
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'karma', 'sass', 'protractor']);
  grunt.registerTask('serve', ['open', 'watch']);
};
