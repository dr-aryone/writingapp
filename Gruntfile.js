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
      all: ['Gruntfile.js', 'public/js/**/*.js']
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
        files: 'public/js/**/*.js'
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

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('serve', ['open', 'watch']);
};
