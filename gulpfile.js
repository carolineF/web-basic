var gulp = require('gulp');
var conData = require('./config/database');

gulp.task('dbinit', function() {
  var execsql = require('execsql'),
    sqlFile = __dirname + '/initdb.sql';

    var con = execsql.config(conData)
    .execFile(sqlFile, function(err, results){
        console.log(results);
    });
    con.end();
});

gulp.task('start', function() {

});

gulp.watch(['controller/*.js', 'factory/*.js', 'helper/*.js', 'model/*.js', 'router/*.js',
  'viewModel'], function(event){
    console.log('File '+ event.path + ' was '+ event.type + ',running tasks……');
  });
