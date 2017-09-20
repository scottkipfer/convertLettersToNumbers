var fs = require('fs');
var gulp = require('gulp');
var Server = require('karma').Server;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var slash = require('gulp-slash');
var rename = require('gulp-rename');
var header = require('gulp-header');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', ['build','test']);
gulp.task('build', function() {
    var config = {
        pkg: JSON.parse(fs.readFileSync('./package.json')),
        banner:
        '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
        ' * License: <%= pkg.license %>\n' +
        ' */\n\n\n'
    };

    gulp.src(['src/*.js'])
        .pipe(concat('convertLettersToNumbers.js'))
        .pipe(header(config.banner, {
            timestamp: (new Date()).toISOString(), pkg: config.pkg
        }))
        .pipe(gulp.dest("dist"))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist'));
});
gulp.task('test', ['build','karma']);

gulp.task('karma', ['build'], function(callback) {
    var server = new Server({configFile: slash(__dirname) + '/karma.conf.js', singleRun: true}, function(exitCode) {
        callback();
    });
    server.start();
});