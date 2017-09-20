// Karma configuration

module.exports = function(config) {
    config.set({
        // frameworks
        frameworks: ['jasmine'],
        // files to include
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/*.min.js',
            'test/*Spec.js'
        ],
        // files to exclude
        exclude: [],
        // reporters
        reporters: ['progress'],
        // web server
        port: 9876,
        // enable colors
        colors: true,
        autoWatch: false,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true
    });
};