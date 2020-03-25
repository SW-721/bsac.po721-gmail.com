const uiInits = {

	init: function() {
		this.svgPolifill();
		this.lazy();
		this.browserCheck();
		// this.validation();
		// this.datePiker();
		// this.forms();
		// this.noizPicLoad();
		// this.VHfix();
		// this.scrollTop();
		// this.videoYouTubeLoader();
		// this.galleryModal();
		this.fullpage();
	},

	svgPolifill: function() {
		// svg sprites 
		svg4everybody();
	},

	lazy: function() {
		// Lazy load pics
		let lazyPic = $('.lazy');
		if (lazyPic.length > 0) {
			lazyPic.lazy({
				threshold: 300,
				beforeLoad: function(element) {
					// console.log(element);
				},
			});
		}
	},

	browserCheck: function() {
		// проверка браузера
		const userAgent = navigator.userAgent;
		if (userAgent.indexOf("Firefox") > -1) {
			// "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
			document.querySelector('body').classList.add('browser-mozzila');
		} else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
			//"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
			document.querySelector('body').classList.add('browser-opera');
		} else if (userAgent.indexOf("Trident") > -1) {
			// "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
			document.querySelector('body').classList.add('browser-ie');
		} else if (userAgent.indexOf("Edge") > -1) {
			// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
			document.querySelector('body').classList.add('browser-edge');
		} else if (userAgent.indexOf("Chrome") > -1) {
			// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
			document.querySelector('body').classList.add('browser-chrome');
		} else if (userAgent.indexOf("Safari") > -1) {
			// "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
			document.querySelector('body').classList.add('browser-safari');
		}
		// проверка на МАС платформу
		if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
			document.querySelector('body').classList.add('platform-mac');
		}
	},

	// validation: function() {
	// 	if ($('.bv-form').length > 0) {
			
	// 		// загрузка и инит валидатора
	// 		function loaderBV() {
	// 			$.getScript('/app/js/vendor/bootstrapValidator.min.js', function() {
	// 				$('.bv-form').bootstrapValidator({
	// 					feedbackIcons: {
	// 						valid: 'bv-icon-ok',
	// 						invalid: 'bv-icon-not',
	// 						validating: 'bv-icon-refresh'
	// 					},
	// 				});
	// 			});
	// 		}

	// 		// загрузка и инит маски телефона
	// 		function loaderInputmask() {
	// 			$.getScript('/app/js/vendor/jquery.inputmask.min.js', function () {
	// 				$('input[type="tel"]').inputmask({
	// 					oncomplete: function() {
	// 						$('.bv-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'VALID', null);
	// 					},
	// 					onincomplete: function() {
	// 						$('.bv-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'INVALID', null);
	// 					},
	// 				});
	// 			});
	// 		}

	// 		const scrollLoadForm = $('#js_scroll-load-validation');
	// 		if (scrollLoadForm.length > 0) {
	// 			const formValidationLoad = $('#js_scroll-load-validation').waypoint(function (direction) {
	// 				loaderBV();
	// 				loaderInputmask();
	// 			}, {
	// 				offset: '80%'
	// 			});
	// 		}

	// 		$('.modal-callback').on('show.bs.modal', (e) => {
	// 			loaderBV();
	// 			loaderInputmask();
	// 		})
	// 	}
	// },

	// datePiker: function() {
	// 	let datepicker = $('.js_datepicker');

	// 	if (datepicker.length > 0) {
			
	// 		datepicker.daterangepicker({
	// 			singleDatePicker: true,
	// 			autoApply: true,
	// 			startDate: moment().startOf('day'),
	// 			timePicker: false,
	// 			locale: {
	// 				format: "DD.MM.YYYY",
	// 				applyLabel: "Ок",
	// 				cancelLabel: "Очистить",
	// 				daysOfWeek: [
	// 					"вс",
	// 					"пн",
	// 					"вт",
	// 					"ср",
	// 					"чт",
	// 					"пт",
	// 					"сб"
	// 				],
	// 				monthNames: [
	// 					"Январь",
	// 					"Февраль",
	// 					"Март",
	// 					"Апрель",
	// 					"Май",
	// 					"Июнь",
	// 					"Июль",
	// 					"Август",
	// 					"Сентябрь",
	// 					"Октябрь",
	// 					"Ноябрь",
	// 					"Декабрь"
	// 				],
	// 				firstDay: 1
	// 			}
	// 		});
			
	// 		$('.datapicker .icon').on('click', function() {
	// 			$(this).parents('.datapicker__field').find('.js_datepicker').click();
	// 		});
	// 	}
	// },

	// forms: function() {
	// 	// Элементы форм
	// 	// простой кастомный селект
	// 	let customSelect = $('.select-styler');
	// 	if (customSelect.length > 0) {
	// 		customSelect.styler({
	// 			// selectVisibleOptions: 12,
	// 			onFormStyled: function () {
	// 				$('.select-styler').removeClass('not-init');
	// 			}
	// 		});
	// 	}

	// 	// мультиселект
	// 	let multiSelect = $('.js_select2-init');
	// 	if (multiSelect.length > 0) {
	// 		multiSelect.select2();
	// 	}
	// },

	noizPicLoad: function() {
		// Предзагрузка картинок в низком качестве
		var lazyloadImages;
		if ("IntersectionObserver" in window) {
			lazyloadImages = document.querySelectorAll(".js_low-pic");
			var imageObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						var image = entry.target;
						image.src = image.dataset.src;
						image.classList.remove("js_low-pic");
						imageObserver.unobserve(image);
					}
				});
			});
			lazyloadImages.forEach(function (image) {
				imageObserver.observe(image);
			});
		}
		else {
			var lazyloadThrottleTimeout;
			lazyloadImages = $(".js_low-pic");

			function lazyload() {
				if (lazyloadThrottleTimeout) {
					clearTimeout(lazyloadThrottleTimeout);
				}
				lazyloadThrottleTimeout = setTimeout(function () {
					var scrollTop = $(window).scrollTop();
					lazyloadImages.each(function () {
						var el = $(this);
						if (el.offset().top - scrollTop < window.innerHeight) {
							var url = el.attr("data-src");
							el.attr("src", url);
							el.removeClass("js_low-pic");
							lazyloadImages = $(".js_low-pic");
						}
					});
					if (lazyloadImages.length == 0) {
						$(document).off("scroll");
						$(window).off("resize");
					}
				}, 20);
			};
			lazyload();
			$(document).on("scroll", lazyload);
			$(window).on("resize", lazyload);
		}
	},

	// VHfix: function() {
	// 	var options = [
	// 		{
	// 			selector: '.top-menu',
	// 			vh: 100,
	// 		},
	// 		{
	// 			selector: '.js_mob-sidebar',
	// 			vh: 100,
	// 		}
	// 	];

	// 	if ($(window).width() < 1024) {
	// 		let vhFix = new VHChromeFix(options);
			
	// 		$(window).on('resize', function() {
	// 			vhFix = new VHChromeFix(options);
	// 		});
	// 	}

	// },

	// scrollTop: function() {
	// 	$('.js_scroll-top').click(function() {
	// 		$("html, body").animate({
	// 			scrollTop: 0
	// 		}, {
	// 			duration: 1000,
	// 			easing: "swing"
	// 		});
	// 		return false;
	// 	});
	// },

	// videoYouTubeLoader: function() {
	// 	let videoYouTube = $('.video-youtube');
	// 	if (videoYouTube.length > 0) {
	// 		videoYouTube.each(function() {
	// 			// Based on the YouTube ID, we can easily find the thumbnail image
	// 			$(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/maxresdefault.jpg)');
		
	// 			// Overlay the Play icon to make it look like a video player
	// 			// $(this).append($('<div/>', {'class': 'play'}));
		
	// 			$(document).delegate('#' + this.id, 'click', function() {
	// 				// Create an iFrame with autoplay set to true
	// 				let iframe_url = "https://www.youtube.com/embed/" + this.id + "?&autoplay=1";
	// 				if ($(this).data('params')) {
	// 					iframe_url += '&' + $(this).data('params');
	// 				}
	// 				// The height and width of the iFrame should be the same as parent
	// 				let iframe = $('<iframe/>', {
	// 					'src': iframe_url,
	// 					'frameborder': '0',
	// 				})
		
	// 				// Replace the YouTube thumbnail with YouTube HTML5 Player
	// 				$(this).replaceWith(iframe);
	// 			});
	// 		});
	// 	}
		
	// },

	// galleryModal: function() {
	// 	const singleImage = $('.image-link');
	// 	if (singleImage.length > 0 && $.fn.magnificPopup) {
	// 		singleImage.magnificPopup({
	// 			type:'image',
	// 		});
	// 	}

	// 	const groupImages = $('.group-images');
	// 	if (groupImages.length > 0 && $.fn.magnificPopup) {
	// 		groupImages.magnificPopup({
	// 			delegate: 'a',
	// 			type: 'image',
	// 			closeOnContentClick: false,
	// 			closeBtnInside: false,
	// 			mainClass: 'mfp-with-zoom mfp-img-mobile',
	// 			image: {
	// 				verticalFit: true,
	// 				titleSrc: function(item) {
	// 					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
	// 				}
	// 			},
	// 			gallery: {
	// 				enabled: true
	// 			},
	// 			zoom: {
	// 				enabled: true,
	// 				duration: 300, // don't foget to change the duration also in CSS
	// 				opener: function(element) {
	// 					return element;
	// 				  }
	// 			}
	// 		});
	// 	}
	// }

	// инит fullpage 
	fullpage() {
		const full = $('.full');
		const scrollSpeed = 500;
		if (full.length > 0) {
			$('.full').fullpage({
				anchors: ['home', 'ourMission', 'whatWeDo', 'ourValues', 'ourHistory', 'supportUs', 'gallery', 'governance', 'volunteers'],
				verticalCentered: false,
				scrollBar: true,
				scrollingSpeed: scrollSpeed,
				menu: '.main-menu',
				onLeave: function(anchor, index){
					const _this = this;
					//using index
					if(index != 1){
						setTimeout(() => {
							$('.header').removeClass('header--dark');
						}, scrollSpeed / 2);
					}
					else {
						setTimeout(() => {
							$('.header').addClass('header--dark');
						}, scrollSpeed / 2);
					}
			
					//using anchorLink
					if(anchor == 'home'){
						console.log('home');
					}
					$('.bridge-logo2__part').removeClass('active');
					$('.bridge-logo2__part').eq(index - 1).addClass('active')
				}
			});
		}
	}
}

export default uiInits