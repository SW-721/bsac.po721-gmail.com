import Swiper from "swiper"
const types = {
	init() {
		const MySwiper = new Swiper('.swiper-container',{
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
}

export default types