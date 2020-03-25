// ya-share2__item_service_vkontakte
// ya-share2__item_service_facebook
// ya-share2__item_service_odnoklassniki
// ya-share2__item_service_twitter
// ya-share2__item_service_linkedin
// ya-share2__item_service_viber
// ya-share2__item_service_whatsapp
// ya-share2__item_service_skype
// ya-share2__item_service_telegram

(function() {
	// Клик по кастомный иконке шаринга передается на элемент яндекс шаринга
	let shareIcon = $('.share__item');
	if (shareIcon.length > 0) {
		shareIcon.on('click', function() {
			$(this).parents('.share').find(`.ya-share2__item_service_${$(this).attr('data-social')}`).click();
		})
	}
}());