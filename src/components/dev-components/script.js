OPTS.$DOCUMENT.ready(() => {
	console.log('dev-component');

	(function() {
		let textarea = null;
		window.addEventListener("load", function() {
			textarea = document.querySelector(".textarea-fix textarea");
			textarea.addEventListener("keypress", function() {
				if(textarea.scrollTop != 0){
					textarea.style.height = textarea.scrollHeight + "px";
				}
			}, false);
		}, false);
	 }());
});