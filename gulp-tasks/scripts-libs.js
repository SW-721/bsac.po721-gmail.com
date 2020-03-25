module.exports = function(gulp, options, plugins) {

	// 

	return function (cd) {
		gulp.src([
			'./src/assets/js/**/*.js',
			'!./src/assets/js/main.js',
			'!./src/assets/js/init.js',
		])
			.pipe(gulp.dest('./app/js/'));

		cd();
	}
};