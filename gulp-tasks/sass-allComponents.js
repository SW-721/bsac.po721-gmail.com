module.exports = function(gulp, options, plugins) {

	return function (cb) {

		gulp.src(['src/components/**/*.{scss,sass}'], { base: 'src/components/' })
			.pipe(plugins.plumber()) 
			//.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				outputStyle: 'expanded',
				errLogToConsole: true,
				importer: [plugins.globOnce()]
			}))
			.on('error', plugins.notify.onError({
				title: 'SASS error',
				message: '<%= error.message %>'
			}))
			.pipe(plugins.autoprefixer({
				cascade: false
			}))
			.pipe(plugins.gcmq())
			.pipe(plugins.cleanCss({
				compatibility: 'ie11'
			}))
			.pipe(plugins.concat('allComponents.css'))
			//.pipe(plugins.sourcemaps.write())
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest('./app/css/'))
			.pipe(plugins.browserSync.reload({stream: true}));

		cb();
	}

};
