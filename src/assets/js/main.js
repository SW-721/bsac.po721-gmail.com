// import 'popper.js';
// import 'bootstrap';
// import 'bootstrap/js/src/util.js';
// import 'bootstrap/js/src/modal.js'; //модалки
// import 'bootstrap/js/src/tab.js'; //табы
// import 'bootstrap/js/src/collapse.js'; //аккордеоны

import uiInits from './init';
import progressLogo from '../../mixins/bridge-logo/script.js';
// import block from '../../blocks/block/script.js'
import sidePins from '../../blocks/sidePins/script.js'
import login from '../../blocks/login/script.js'
import swiper from './vendor/swiper.min.js' //using into types/style.js
import main from '../../blocks/account/main/script.js'
import types from '../../blocks/types/script.js'

const ready = (callback) => {
	document.readyState != "loading" ? callback() : document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {

	// inits
	uiInits.init();
	progressLogo.init();
	// block.init();
	sidePins.init();
	login.init();
	main.init();
	types.init();
});