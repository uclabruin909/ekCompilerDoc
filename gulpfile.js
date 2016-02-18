var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {

	browserSync.init({
		server: {
			baseDir : './',
		}
	});

});

gulp.task('watch', function() {

	gulp.watch('./index.html', function() {
		browserSync.reload();
		console.log('index.html has changed');
	});	

	gulp.watch('./css/style.css', function() {
		browserSync.reload();
		console.log('style.css has changed');
	});

});

gulp.task('default', ['browserSync', 'watch'], function() {
	console.log('Project is now running on server');
});