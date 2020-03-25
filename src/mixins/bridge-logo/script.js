const progressLogo = {

	init() {
		this.anim();
	},

	anim() {
		const itemArr = $('.bridge-logo--auto .item');
		const step = 3000;
		let k = 1;
		
		const logoStroker = setInterval(() => {
			if(k < itemArr.length) {
				itemArr.removeClass('active');
				$(itemArr[k]).addClass('active');
				k++;
				k >= itemArr.length ? k = 0 : false;
			}
		}, step);
	},
}

export default progressLogo;