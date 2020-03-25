(function () {

	const sidebar = {

		init: function () {
			this.sideMenuOpen();
		},

		sideMenuOpen: function () {
			let sidebarMobMenu = $('.js_mob-sidebar');
			let sidebarMenuClose = $('.js_sidebar-menu-close');
			let btnSidebarOpen = $('.js_btn-sidebar-open');
			let overlay = $('.mob-overlay');

			btnSidebarOpen.on('click', function() {
				sidebarMobMenu.addClass('open');
				overlay.addClass('open');
				OPTS.BODY.classList.add('fixed-scroll');
			});

			sidebarMenuClose.on('click', function() {
				sidebarMobMenu.removeClass('open');
				overlay.removeClass('open');
				OPTS.BODY.classList.remove('fixed-scroll');
			});

			overlay.on('click', function() {
				sidebarMobMenu.removeClass('open');
				overlay.removeClass('open');
				OPTS.BODY.classList.remove('fixed-scroll');
			});
		},
	}

	sidebar.init();

})();