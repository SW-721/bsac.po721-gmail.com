const header = {

	opt: {
		header: $('.header .header__wrap'),
	},
	
	// фиксаниця хедера при скролле
	headerScroll: function() {
		const _this = this;
		// if (!this.opt.header.length) {
		// 	return false;
		// }
	
		function changeClass() {
			if (OPTS.$WINDOW.scrollTop() > 145) {
				_this.opt.header.addClass('scrollfix');
				OPTS.BODY.classList.add('header-scroll');
			} 
			else {
				_this.opt.header.removeClass('scrollfix');
				OPTS.BODY.classList.remove('header-scroll');
			}
		}
	
		OPTS.$WINDOW.on('scroll', function() {
			changeClass();
		});
	},

	init: function() {
		// this.headerScroll();
		// this.dropMenuPhones();
		
		if (OPTS.WW > 1023) {
			this.menuHoverDelay();
		}
	}
}

header.init();