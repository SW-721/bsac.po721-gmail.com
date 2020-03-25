(function () {
	let footerMenuBtn = $('.js_footer-menu');
	let footerMenu = $('.footer__menu');
	let footerMenuList = $('.footer__menu .nav-menu__list');
	let footerMenuList_height = null;

	if (footerMenu.length > 0) {
		
		if (OPTS.WW < 1024) {
			footerMenuList.hide();
		}

		footerMenuBtn.on('click', function () {
			footerMenuList.slideToggle(300);
			// footerMenuList.css({
			// 	'position': 'absolute',
			// 	'height': 'auto',
			// });
			// footerMenuList_height = footerMenuList.height();
			// footerMenuList.css({
			// 	'position': 'static',
			// 	'height': '0',
			// });
			// console.log(footerMenuList_height);
			// footerMenuList.height(footerMenuList_height);
		})
	}

}())
