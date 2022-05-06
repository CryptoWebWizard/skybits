$('.perspective__window').scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('header').addClass("sticky");
		$('body').addClass("sticky-b");
	} else {
		$('header').removeClass("sticky");
		$('body').removeClass("sticky-b");
	}
});
$(document).ready(function () {
	$('.check-box input').change(function () {
		if ($(this).is(":checked")) {
			$(this).parent().parent().addClass("active");
		} else {
			$(this).parent().parent().removeClass("active");
		}
	});
	$('.about-project .check-box input').change(function () {
		if ($(this).is(":checked")) {
			$('.about-project .check-box input').parent().parent().removeClass("active");
			$(this).parent().parent().addClass("active");
		} else {
			$(this).parent().parent().removeClass("active");
		}
	});
	$('.budget .check-box input').change(function () {
		if ($(this).is(":checked")) {
			$('.budget .check-box input').parent().parent().removeClass("active");
			$(this).parent().parent().addClass("active");
		} else {
			$(this).parent().parent().removeClass("active");
		}
	});
	$(function () {
		if (!String.prototype.trim) {
			(function () {
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function () {
					return this.replace(rtrim, '');
				};
			});
		}
[].slice.call(document.querySelectorAll('input.input-field')).forEach(function (inputEl) {
			if (inputEl.value.trim() !== '') {
				classie.add(inputEl.parentNode, 'input-filled');
			}
			inputEl.addEventListener('focus', onInputFocus);
			inputEl.addEventListener('blur', onInputBlur);
		});

		function onInputFocus(ev) {
			classie.add(ev.target.parentNode, 'input-filled');
		}

		function onInputBlur(ev) {
			if (ev.target.value.trim() === '') {
				classie.remove(ev.target.parentNode, 'input-filled');
			}
		}
	});
});
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	$(".new-nav-list li.dropdown > a").click(function (e) {
		e.preventDefault();
	});
}
$('.js-mobile-menu').click(function () {
	$('.new-nav-wrap').slideToggle();
	$('.new-nav-list > li > ul').slideUp();
	$('.new-nav-dropdown-icon').removeClass('active');
});
if ($('.new-nav-list li').hasClass('dropdown')) {
	$('.new-nav-list li.dropdown').append('<span class="new-nav-dropdown-icon"></span>');
};
$('.new-nav-dropdown-icon').click(function () {
	$('.new-nav-dropdown-icon').removeClass('active');
	$('.new-nav-list > li > ul').slideUp();
	if ($(this).parent().find('ul').css('display') == 'none') {
		$(this).addClass("active");
		$(this).parent().find('ul').slideDown();
	} else {
		$(this).removeClass("active");
		$(this).parent().find('ul').slideUp();
	}
});
$("#owl-overview").owlCarousel({
	autoplay: true,
	center: true,
	loop: true,
	margin: 30,
	nav: true,
	dots: false,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 2
		},
		767: {
			items: 2
		},
		1000: {
			items: 3
		},
		1400: {
			items: 4
		}
	}
});
$("#review-box").owlCarousel({
	autoplay: true,
	center: true,
	loop: true,
	margin: 15,
	navigation: false,
	nav: false,
	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 2
		},
		767: {
			items: 2
		},
		991: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
});
$('#accordion .card-header h5 a').click(function () {
	if ($(this).parent().parent().next('.collapse').is(':visible')) {
		$(this).parent().parent().next('.collapse').slideUp();
		$(this).parent().parent().removeClass("active");
	} else {
		$('#accordion .card .collapse').slideUp();
		$('#accordion .card-header').removeClass("active");
		$(this).parent().parent().next('.collapse').slideDown();
		$(this).parent().parent().addClass("active");
	}
});
setTimeout(function () {
	$('body').addClass('loaded');
}, 1000);
$(function () {
	var $elems = $('.animateblock');
	var winheight = $(window).height();
	var fullheight = $(document).height();
	$('.perspective__window').scroll(function () {
		animate_elems();
	});

	function animate_elems() {
		wintop = $(window).scrollTop();
		$elems.each(function () {
			$elm = $(this);
			if ($elm.hasClass('animated')) {
				return true;
			}
			topcoords = $elm.offset().top;
			if (wintop > (topcoords - (winheight * .75))) {
				$elm.addClass('animated');
			}
		});
	}
});
/*$("#coverflow").flipster({
	buttons: true
});*/
var $window = $('.js-perspective-window'),
	$document = $('.js-perspective-document');
jQuery(document).ready(function ($) {
	var path = window.location.pathname.split("/").pop();
	if (path == '') {
		path = 'index.php';
	}
	var target = $('nav a[href="' + path + '"]');
	target.parent('li').addClass('current-page');
});
jQuery(document).ready(function ($) {
	var path = window.location.pathname.split("/").pop();
	if (path == '') {
		path = 'index.php';
	}
	var target = $('nav a[href="' + path + '"]');
	target.parent('li').addClass('active');
});
$(function () {
	var $window = $('.js-perspective-window'),
		$document = $('.js-perspective-document');
	if ($.fn.owlCarousel) {
		$('.js-project-screens-slider').owlCarousel({
			items: 2,
			margin: 80,
			loop: false,
			nav: true,
			dots: true,
			autoplay: false,
			autoplaySpeed: 800,
			navSpeed: 800,
			dotsSpeed: 800,
			dragEndSpeed: 800,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			stagePadding: 0,
			navText: ['<i class="ico ico-long-arrow-left"></i>', '<i class="ico ico-long-arrow-right"></i>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					margin: 30
				},
				576: {
					margin: 30
				},
				800: {}
			}
		});
		$('.js-opinions-screens-slider').owlCarousel({
			items: 2,
			margin: 80,
			loop: false,
			nav: true,
			dots: true,
			autoplay: false,
			autoplaySpeed: 800,
			navSpeed: 800,
			dotsSpeed: 800,
			dragEndSpeed: 800,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			stagePadding: 0,
			navText: ['<i class="ico ico-long-arrow-left"></i>', '<i class="ico ico-long-arrow-right"></i>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					margin: 30
				},
				576: {
					margin: 30
				},
				800: {}
			}
		});
		$('.js-testimonials-slider').owlCarousel({
			items: 1,
			margin: 30,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 800,
			navSpeed: 800,
			dotsSpeed: 800,
			dragEndSpeed: 800,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			stagePadding: 0,
			navText: ['', ''],
			responsiveClass: true
		});
		if ($('.js-hash-screens-slider').length) {
			var $hashSlider = $('.js-hash-screens-slider'),
				$hashNav = $('.js-hash-nav');
			$hashSlider.on('initialized.owl.carousel', function (event) {
				selectHashNav($hashNav);
			});
			$hashSlider.owlCarousel({
				items: 1,
				margin: 30,
				loop: false,
				nav: true,
				dots: false,
				URLhashListener: true,
				startPosition: 'URLHash',
				autoplay: false,
				autoplaySpeed: 800,
				navSpeed: 800,
				dotsSpeed: 800,
				dragEndSpeed: 800,
				autoplayTimeout: 5000,
				autoplayHoverPause: false,
				stagePadding: 0,
				navText: ['<i class="ico ico-arrow-left"></i>', '<i class="ico ico-arrow-right"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						dots: true,
						nav: false
					},
					992: {}
				}
			});
			$hashSlider.on('changed.owl.carousel', function (event) {
				selectHashNav($hashNav);
			});

			function selectHashNav($nav) {
				if (window.location.hash) {
					$('a[href*="' + window.location.hash + '"]', $nav).addClass('is-active').parent().siblings().find('a').removeClass('is-active');
				}
			}
		}
	}
	if (typeof jcf == 'object') {
		jcf.setOptions('Select', {
			fakeDropInBody: false,
			maxVisibleItems: 5,
			wrapNative: false,
			wrapNativeOnMobile: true,
			useCustomScroll: false
		});
		jcf.replace($('.js-select-jcf'));
		jcf.replace($('.js-radio'));
		jcf.replace($('.js-checkbox'));
	}
	$('.wysiwyg iframe').each(function () {
		$(this).wrap('<div class="embed-responsive embed-responsive--16by9"></div>');
	});
	$('.wysiwyg table').each(function () {
		var mT = $(this).css('margin-top'),
			mB = $(this).css('margin-bottom');
		$(this).css('margin-bottom', '0').css('margin-top', '0').wrap('<div class="table-responsive" style="margin-bottom: ' + mB + '; margin-top: ' + mT + ';"></div>');
	});
	counters();
});

function counters($counters) {
	var $counters = (typeof $counters !== 'undefined') ? $counters : $('.js-counter');
	$window.scroll(function () {
		var scrollTop = $window.scrollTop();
		$counters.each(function () {
			var $counter = $(this);
			if (!$counter.hasClass('counting') && !$counter.hasClass('finished')) {
				var parentsOffset = 0;
				$counter.parents().each(function () {
					if ($(this).css('position') == 'relative' || $(this).css('position') == 'absolute') {
						var parentOffset = $(this).position().top;
						if (parentOffset > 0)
							parentsOffset += parentOffset;
						else
							return false;
					}
				});
				if ($counter.position().top + parentsOffset - $window.height() < scrollTop) {
					var $counterPlaceholder = $counter.find('[data-value]'),
						countTo = $counterPlaceholder.attr('data-value');
					$counter.addClass('counting');
					$({
						countNum: $counterPlaceholder.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$counterPlaceholder.text(Math.floor(this.countNum));
						},
						complete: function () {
							$counterPlaceholder.text(this.countNum);
							$counter.addClass('finished');
							$counter.removeClass('counting');
						}
					});
				}
			}
		});
	}).scroll();
}
equalheight = function (container) {
	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el, topPosition = 0;
	$(container).each(function () {
		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;
		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0;
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
$(window).on("resize", function () {
	equalheight('.home-testimonial-wrapper .owl-item .slide .grid-item');
}).resize();
$(window).load(function (evt) {
	equalheight('.home-testimonial-wrapper .owl-item .slide .grid-item');
});
