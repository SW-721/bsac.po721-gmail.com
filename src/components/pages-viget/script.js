function pageViget() {

	let vigetWrap = $('.pages-viget');
	let vigetBtn = $('.pages-viget__btn');

	vigetBtn.on('click', function() {
		vigetWrap.toggleClass('open');
	});

	OPTS.$DOCUMENT.on('click', function(e) {
		if (!$(e.target).closest(vigetWrap).length) {
			vigetWrap.removeClass('open');
		}
		e.stopPropagation();
	});
}
pageViget();
