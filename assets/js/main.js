

$('.hamburger').on('click', function () {
	$('.sp_menu').toggleClass('is_open');
	$(this).toggleClass('is_open');
});

$(document).on("scroll", function () {
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();

	// Array of all fade animation classes
	var fadeClasses = [
		"fadein",
		"fadeup",
		"fadedown",
		"fadeleft",
		"faderight"
	];

	// Handle each fade animation type
	fadeClasses.forEach(function (fadeClass) {
		var tags = $("." + fadeClass);

		for (var i = 0; i < tags.length; i++) {
			var tag = tags[i];

			if ($(tag).offset().top < pageBottom) {
				$(tag).addClass("visible");
			} else {
				$(tag).removeClass("visible");
			}
		}
	});
});

let isFixedLineHidden = false;

$('.fixed_line .icon').on("click", function () {
	isFixedLineHidden = true;
	$(this).parent().fadeOut();
});

$(document).on("scroll", function () {
	if (isFixedLineHidden) return;

	const fixedDiv = $('.fixed_line');
	const scrollTop = window.scrollY;
	const windowHeight = window.innerHeight;
	const fullHeight = document.body.scrollHeight;

	if (scrollTop + windowHeight >= fullHeight) {
		fixedDiv.css('display', 'none');
	} else {
		fixedDiv.css('display', 'block');
	}
});

$(document).ready(function () {
	$(this).find('.a_div').fadeOut(400);

	$('.faq_list .item').on('click', function () {
		$(this).toggleClass('is_open');
		$(this).find('.arw').toggleClass('is_open');
		$(this).find('.a_div').slideToggle();
	});
});
$(document).ready(function () {
	$('.page-top').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
});
