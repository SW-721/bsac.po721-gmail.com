(function () {

	const breadcrumb = $(".breadcrumb");
	if (breadcrumb.length > 0) {
		const list = breadcrumb.find('.breadcrumb__list');
		const li_last = list.find('> li:last-child');
		let li_w = 0;

		const crumbProccess = {
			init: function () {
				let maxWidth = 'calc(100% - ' + parseInt(li_last.outerWidth() + 2) + 'px)';
				let content_w = breadcrumb.width();

				let crumbs = crumbProccess.getCrumbs();
				let li_w = crumbProccess.summCrumbsWidth(crumbs);

				$('.breadcrumb__item').each(function(item, i) {
					if ($(this).width() > 300) {
						$(this).addClass('item-press');
						breadcrumb.addClass('breadcrumb--compress');
						list[0].style.maxWidth = maxWidth;
					}
				})

				if (content_w <= li_w) {
					breadcrumb.addClass('breadcrumb--compress');
					list[0].style.maxWidth = maxWidth;
				}

				crumbProccess.compress(crumbs);
				document.querySelector('.breadcrumb').classList.remove('not-init');
			},
			getCrumbs: function () {
				let crumbs = [];
				list.find('> li').each(function () {
					let crumb = {
						crumb: $(this),
						width: $(this).find('span').outerWidth(true) + 35
					};
					crumbs.push(crumb);
				});
				return crumbs;
			},
			summCrumbsWidth: function (arr) {
				let crumbsWidth = crumbProccess.getCrumbWidth(arr);
				let li_w = crumbsWidth.reduce(function (sum, current) {
					return sum + current;
				}, 0);
				return li_w
			},
			getCrumbWidth: function (arr) {
				let crumbsWidth = arr.map(function (item) {
					return item['width'];
				});
				return crumbsWidth;
			},
			compress: function (arr) {
				let li_w = crumbProccess.summCrumbsWidth(arr);
				while (li_w >= list.width() + li_last.width() && arr.length > 0) {
					let crumbsWidth = crumbProccess.getCrumbWidth(arr);
					let crumbWC = Math.max.apply(null, crumbsWidth);
					arr.filter(function (item, i) {
						if (item['width'] == crumbWC) {
							li_w = li_w - item['width'];
							arr.splice(i, 1);
							item['crumb'].addClass('item-press');
						}
					});
				}
			},
			update: function (arr) {
				if (!arr) {
					arr = crumbProccess.getCrumbs();
				}
				crumbProccess.compress(arr);
			}
		};

		$(window).on('resize', function () {
			crumbProccess.update();
		});

		crumbProccess.init();
	}

})();
