var is_mobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cocdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	is_mobile = true;
}

var numFormat = wNumb({
	thousand: ' '
});

$(window).on("scroll touchmove", function() {

	fixedHeader();


	var scrollPos = $(window).scrollTop();
	$("a[name]").each(function() {
		if (scrollPos >= $(this).offset().top - 170) {
			$(".anchors-menu a").removeClass("active")
			$(".anchors-menu a[href='#" + $(this).attr("name") + "']").addClass("active");
		}
	});

	if (scrollPos > 300) {
		$(".up-link").fadeIn(150);
	} else {
		$(".up-link").fadeOut(150);
	}
});

$(window).resize(function() {

	fixedHeader();

	$(".slick-slider").slick("setPosition");

});
$(window).on("load", function() {
	//makeUp();
});
var baseUrl = "";

$(document).ready(function() {

	// Submenu mob

	if ($("#mobile-indicator").css("display") == "block") {

		$(".navbar-nav li[data-submenu] > a").click(function (e) {

			var curLink = $(this);

			if (!$(e.target).hasClass("a-inner")) {

				$(this).closest("li").find(".submenu-mob").slideToggle(350);

				curLink.toggleClass("open");

				return false;

			}

		});

	}

	// Submenu mob END

	$(".modal-dialog").click(function (e) {

		if (!$(e.target).hasClass("modal-content") && !$(e.target).parents().hasClass("modal-content")) {

			$(this).closest(".modal").modal("hide");

		}

	});

	anchorsMenu();

	stickyBlocks();

	// Submenu

	if ($("#mobile-indicator").css("display") != "block") {

		$(".navbar-nav li[data-submenu]").on("mouseenter", function () {

			var listItem = $(this);

			if ($(this).data("submenu")) {

				$(".submenu").filter(function () {

					return $(this).attr("id") !== listItem.data("submenu").replace("#", "");

				}).stop().fadeOut(250);

				$($(this).data("submenu")).stop().fadeIn(250);
				listItem.addClass("open");

			}

		});

		$(".navbar-nav li[data-submenu]").on("mouseleave", function () {

			var listItem = $(this),
				submenu = $($(this).data("submenu"));


			var t = setTimeout(function () {

				if (!submenu.is(":hover")) {
					submenu.stop().fadeOut(250);
					listItem.removeClass("open");
				}

			}, 100);

		});

		$(".submenu").on("mouseleave", function () {

			var listItem = $(".navbar-nav li[data-submenu='#" + $(this).attr("id") + "']"),
				submenu = $(this);


			var t = setTimeout(function () {

				if (!listItem.is(":hover")) {
					submenu.stop().fadeOut(250);
					listItem.removeClass("open");
				}

			}, 100);

		});

	}
	// Submenu END

	$(".poll-intro-button .btn").click(function () {

		$(".poll-intro").hide();
		$(".poll-form").fadeIn(500);

	});

	$(".slider-countable").each(function () {

		$(this).on("init", function () {

			var curSlider = $(this),
				visibleSlides = $(this).find(".slick-slide.slick-active").length,
				curSlide = $(this).find(".slick-slide.slick-current").data("slick-index") / visibleSlides + 1,
				totalSlides = Math.round($(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides);

			curSlider.closest(".slider-wrapper").append('<div class="slider-count"><span class="slider-count-cur">' + ("0" + curSlide).slice(-2) + '</span><span class="slider-count-progress"><span class="slider-count-progress-bar" style="width:' + curSlide*100/totalSlides + '%;"></span></span><span class="slider-count-total">' + ("0" + totalSlides).slice(-2) + '</span></div>');

			if (totalSlides == 1) {

				curSlider.closest(".slider-wrapper").find(".slider-count").hide();

			}

		});

		$(this).on("beforeChange", function(event, slick, currentSlide, nextSlide){

			var curSlider = $(this),
				visibleSlides = $(this).find(".slick-slide.slick-active").length,
				curSlide = nextSlide / visibleSlides + 1,
				totalSlides = $(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides;

			curSlider.closest(".slider-wrapper").find(".slider-count-cur").html(("0" + curSlide).slice(-2));

			curSlider.closest(".slider-wrapper").find(".slider-count-progress-bar").css({
				width: curSlide*100/totalSlides + "%"
			});

		});

	});

	$(".slider-progressable").each(function () {

		$(this).on("init", function () {

			var curSlider = $(this),
				visibleSlides = $(this).find(".slick-slide.slick-active").length,
				curSlide = $(this).find(".slick-slide.slick-current").data("slick-index") / visibleSlides + 1,
				totalSlides = Math.round($(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides);

			curSlider.closest(".slider-wrapper").append('<div class="slider-progress"><div class="slider-progress-bar" style="width:0;"></div></div>');

			curSlider.closest(".slider-wrapper").find(".slider-progress-bar").animate({
				width: '100%'
			}, 5000);

			if (totalSlides == 1) {

				curSlider.closest(".slider-wrapper").find(".slider-progress").hide();

			}

		});

		$(this).on("beforeChange", function(event, slick, currentSlide, nextSlide){

			var curSlider = $(this),
				visibleSlides = $(this).find(".slick-slide.slick-active").length,
				curSlide = nextSlide / visibleSlides + 1,
				totalSlides = $(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides;

			curSlider.closest(".slider-wrapper").find(".slider-progress-bar").stop().css({

				width: 0

			}).animate({
				width: '100%'
			},5000);

		});

	});

	// Actions slider

	$(".actions-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		infinite: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Actions slider END

	// Main slider

	$(".main-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		infinite: false,
		rows: 0,
		adaptiveHeight: true
	});

	// Main slider END

	// Prices slider

	$(".prices-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		infinite: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Prices slider END

	$(".class-tmb [data-target='#registerModal']").click(function () {

		$("#register_class").val($(this).closest(".class-tmb").find("h3").html());

		console.log($("#register_class").val())

	});

	$(".price-tmb [data-target='#ticketModal']").click(function () {

		$("#ticket_class").val($(this).closest(".price-tmb").find("h3").html());

		console.log($("#register_class").val())

	});

	$(".price-tmb [data-target='#zoomModal']").click(function () {

		$("#zoom_class").val($(this).closest(".price-tmb").find("h3").html());

		console.log($("#register_class").val())

	});

	// Forward button

	$(".btn-fwd").click(function () {

		$("html, body").animate({

			scrollTop: $(".page-body .section:first-child").offset().top

		}, 1000);

	});

	// Forward button END

	// Poll

	quiz();

	// Poll END

	// FAQ

	$(".faq-item-ttl").click(function () {

		if (!$(this).closest(".faq-item").hasClass("active")) {

			var faqItemActive = $(".faq-item.active"),
					faqItemCur = $(this).closest(".faq-item");

			faqItemActive.removeClass("active");
			faqItemActive.find(".faq-item-content").show().slideUp("250");

			faqItemCur.addClass("active");
			faqItemCur.find(".faq-item-content").hide().slideDown("250");

			$(".faq-answer").html(faqItemCur.find(".faq-item-content").html());

		} else {

			var faqItemCur = $(this).closest(".faq-item");

			faqItemCur.removeClass("active");
			faqItemCur.find(".faq-item-content").show().slideUp("250");

		}

	});

	// FAQ END



	// Inn slider

	$(".inn-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		infinite: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]

	});

	// Inn slider END

	// Services slider

	$(".services-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		infinite: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Services slider END

	// Reviews slider

	$(".reviews-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		infinite: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Reviews slider END

	// Instructors slider

	$(".instructors-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		infinite: false,
		rows: 0,
		fade: true
	});

	// Instructors slider END

	// Room slider

	$(".room-pic-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		infinite: false,
		rows: 0
	});

	// Room slider END

	// About gallery

	$(".about-gallery").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		infinite: false,
		rows: 0
	});

	// About gallery END

	// Article gallery

	$(".article-gallery").each(function () {

		var arGal = $(this);

		arGal.on("init", function () {

			if (arGal.find(".slide").length == 1) {

				arGal.closest(".article-gallery-wrapper").addClass("single");

			}

		});

		arGal.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			infinite: false,
			rows: 0
		});

	});


	// Article gallery END

	// Cast filter

	$(".cast-filter-item").on("click", function () {

		if (!$(this).hasClass("active")) {

			$(".cast-filter-item").removeClass("active");

			$(this).addClass("active");

			castFilter($(this).closest(".cast-over-wrapper"));

		}


	});

	// Cast filter END

	// Show more link

	$("body").on("click", ".show-more", function () {

		var curLink = $(this),
			curUrl = $(this).attr("href"),
			curTarget = $($(this).closest(".show-more-wrapper").parent());

		curLink.addClass("loading");

		$.ajax({
			url: curUrl,
			dataType: "html"
		}).done(function(data) {

			curTarget.append($(data)).removeClass("loading");

			curLink.closest(".show-more-wrapper").remove();;

			if ($(data).find("[data-dates]").length) {

				castFilter(curTarget.closest(".cast-over-wrapper"));

			}

		});

		return false;

	});

	// Show more link END

	childSelects();

	$("select[data-child]").on("change", function () {

		childSelects();

	});

	$(".select-modal-link").on("click", function () {

		var realSelect = $($(this).closest(".select-modal-categories").data("select"));

		realSelect.val($(this).data("value")).selectpicker("refresh");

		$(this).closest(".modal").modal("hide");

		$("[data-target='#" + $(this).closest(".modal").attr("id") + "']").addClass("active");
		$("[data-target='#" + $(this).closest(".modal").attr("id") + "'] span").html(realSelect.find("option:selected").html());

	});

	fixedHeader();

	// Ajax links

	$("body").on("click", ".ajax-link", function () {

		var curLink = $(this),
				curUrl = $(this).data("url"),
				curTarget = $($(this).data("target")),
				curSiblings = $(this).closest(".ajax-links").find(".ajax-link");

		curTarget.addClass("loading");

		$.ajax({
			url: curUrl,
			dataType: "html"
		}).done(function(data) {

			curTarget.html($(data)).removeClass("loading");

			curSiblings.removeClass("active");

			curLink.addClass("active");

			if (curLink.hasClass("location-link")) {

				$(".location-tabs-select").val(curLink.data("index"));

				if ($("#mobile-indicator").css("display") != "block") {

					$(".location-tabs-select").change();

				}

			}

		});

		return false;

	});



	$(".location-tabs-select").on("change", function () {

		if ($("#mobile-indicator").css("display") == "block") {

			$(".location-link[data-index='" + $(this).val() + "']").click();

		}

	});


	// Ajax links END



	$(".play-slider").on("mouseenter", function () {

		$(this).closest(".play-slider-wrapper").find(".slider-progress-bar").stop().css({
			width: 0
		});

	}).on("mouseleave", function () {

		$(this).closest(".play-slider-wrapper").find(".slider-progress-bar").animate({
			width: '100%'
		},5000);

	});

	// Play slider

	$(".play-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: false,
		rows: 0,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 5000
	});

	// Play slider END

	// Anchors

	$(".navbar-nav a").click(function() {

		var curLink = $(this);

		var anchor = $(this).attr("href").replace("#", "");

		if ($("a[name='" + anchor + "']").length) {

			$(".navbar-nav a").removeClass("active");


			var link = $(this);

			if ($("#mobile-indicator").css("display") == "block") {
				var yDiff = 70;
			} else {
				var yDiff = 80;
			}


			$("html,body").animate({
				scrollTop: $("a[name='" + anchor + "']").offset().top - yDiff
			}, 1000, function () {
				curLink.addClass("active")
			});

			history.pushState(null, null, $(this).attr("href"));

			return false;

		}

	});

	// Contacts map


	ymaps.ready(function () {

		if ($("#contactsMap").length) {

			var myMap = new ymaps.Map('contactsMap', {
					center: [13.500478, 120.750977],
					zoom: 10,
					controls: ['zoomControl']
				}, {}),

				myPlacemark = new ymaps.Placemark([13.386478, 120.750977], {
					hintContent: '',
					balloonContent: ''
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'images/map-pin.svg',
					// Размеры метки.
					iconImageSize: [50, 70],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-25, -70]
				});

			myMap.behaviors.disable('scrollZoom');

			myMap.geoObjects
				.add(myPlacemark);

			setTimeout(function () {
				myMap.container.fitToViewport()
			}, 100);

			if ($("#mobile-indicator").css("display") == "block") {
				myMap.setCenter([13.386478, 120.750977]);
			} else {
				myMap.setCenter([13.500478, 120.750977]);
			}

			$(window).on("load resize",function () {

				if ($("#mobile-indicator").css("display") == "block") {
					myMap.setCenter([13.386478, 120.750977]);
				} else {
					myMap.setCenter([13.500478, 120.750977]);
				}

			});

		}



	});

	// Contacts map END

	$('.svg-inline').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
	$("[data-fancybox]").fancybox({
		closeClickOutside: true,
		backFocus: false
	});

	// Show more

	$("body").on("click", ".more-link", function () {
	    var moreLink = $(this),
	        moreUrl = $(this).attr("href");
	    if (!moreLink.hasClass("loading")) {
	        moreLink.addClass("loading");
	        $.ajax({
	            url: moreUrl,
	            dataType: "html"
	        }).done(function(data) {
	            moreLink.closest(".more-link-wrapper").before($(data));
	            moreLink.closest(".more-link-wrapper").remove();

	            if ($(".more-link").closest(".projects-list").length) {

								$(".more-link").closest(".projects-list").find(".project-tmb").css("opacity", "1");

							}

	        });
	    }
	    return false;
	});

	// Show more END

	$(".up-link, .header-logo").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});

	// Main menu
	$(".navbar-trigger").click(function() {
		$(this).toggleClass("active");
		$(".navbar-wrapper").fadeToggle(150);
		$("body").toggleClass("menu-open");
	});
	$(".navbar-wrapper .close").click(function() {
		$(".navbar-wrapper").fadeOut(150);
		$("body").removeClass("menu-open");
		$(".navbar-trigger").removeClass("active");
	});
	$(".navbar-wrapper").click(function(e) {
		if (!$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner")) {
			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");
		}
	});
	// Expandable
	$("body").on("click", ".expandable-trigger", function() {
		var exTrigger = $(this);
		if (!exTrigger.hasClass("active")) {
			exTrigger.closest(".expandable").find(".expandable-content").slideDown(500, function() {
				exTrigger.addClass("active").html(exTrigger.data("collapsetext"));
				exTrigger.closest(".expandable").addClass("open");
			});
		} else {
			exTrigger.closest(".expandable").find(".expandable-content").slideUp(500, function() {
				exTrigger.removeClass("active").html(exTrigger.data("expandtext"));
				exTrigger.closest(".expandable").removeClass("open");
			});
		}
	});
	$("input[type=file]").each(function () {

		if ($(this).data("label")) {
			var inputLabel = $(this).data("label");
		} else {
			var inputLabel = "Прикрепить файл";
		}

		$(this).fileinput({
			showUpload: false,
			showPreview: false,
			showCancel: false,
			browseLabel: inputLabel,
			msgPlaceholder: "",
			dropZoneEnabled: false,
			maxFileCount: 1,
			mainClass: "input-group-lg"
		});

	});
	// Numeric input
	$(document).on("input", ".numeric", function() {
		this.value = this.value.replace(/\D/g, '');
	});
	// Fancybox

	// Forms

	$("body").on("mouseup", "li.dropdown-header", function () {
		$(this).toggleClass("active");
		$(this).nextAll("li[data-optgroup='" + $(this).data("optgroup") + "']").fadeToggle(150);
		return false;
	});

	$("select").not(".picker__select--month, .picker__select--year, .rates-nav-select").each(function () {
		if ($(this).attr("multiple")) {
			$(this).selectpicker({
				selectAllText: "Выбрать всё",
				deselectAllText: "Снять выбор",
				noneSelectedText: "",
				selectedTextFormat: "count",
				countSelectedText: function(count) {
					return count + " " + declOfNum(count, ['элемент', 'элемента', 'элементов']);
				}
			});
		} else {
			$(this).selectpicker();
		}
	});

	$("select[multiple]").not(".simple-multi").on("shown.bs.select",function () {
		if (!$(this).prev(".dropdown-menu").find(".dropdown-footer").length) {
			dropdownFooter = '\
      <div class="dropdown-footer">\
      <div class="btn btn-1 btn-ico btn-save">Выбрать</div>\
      <div class="btn btn-cancel">Очистить</div>\
      </div>\
      ';
			$(this).prev(".dropdown-menu").find("ul").append(dropdownFooter);
		}
	});

	$("select").on("show.bs.select", function () {

		$(this).closest(".form-group").find("label.placeholder").addClass("active");

	});

	$("select").on("hide.bs.select", function () {

		if (!$(this).val() || $(this).val() == null) {

			$(this).closest(".form-group").find("label.placeholder").removeClass("active");

		} else {

			$(this).closest(".form-group").find("label.placeholder").addClass("active");

		}



	});

	$("body").on("click",".bootstrap-select .btn-save", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker("toggle");
		return false;
	});

	$("body").on("click",".bootstrap-select .btn-cancel", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker('deselectAll');
		return false;
	});


	$('.input-numeric').bind('keyup paste', function(){
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	if ($("input:text").length) {
		$("input:text").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").addClass("active");
			}
		});
	}

	if ($("textarea").length) {
		$("textarea").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").addClass("active");
			}
		});
	}

	$("body").on("focus","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			placeholder.addClass("active");

		}

	});

	$("body").on("blur","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			if (!el.val() || (el.hasClass("input-phone") && ! /^(?=.*[0-9])[- +()0-9]+$/.test(el.val()))) {
				placeholder.removeClass("active");
			}

		}

	});

	$("body").on("click",".placeholder",function(e) {
		if ($(this).parent().find("input").length) {
			$(this).parent().find("input").trigger("focus");
		}
		if ($(this).parent().find("textarea").length) {
			$(this).parent().find("textarea").trigger("focus");
		}
	});

	$("body").on("focus","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").addClass("focus");
	});

	$("body").on("blur","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").removeClass("focus")
	});

	validateForms();

	// Forms END


});

function validateForms() {
	$('.textarea-autogrow').autogrow();
	$("input.input-phone").mask("+7 (999) 999-99-99");
	jQuery.validator.addClassRules('phone-email-group', {
		require_from_group: [1, ".phone-email-group"]
	});
	$("select").not(".location-tabs-select").not(".filter-form select").on("change", function() {
		if (!$(this).closest(".picker").length && !$(this).hasClass("faq-select")) {
			$(this).valid();
		}
	});
	$("body").on("click", ".form-item", function(e) {
		if ($(this).find(".bootstrap-select").length && !$(e.target).hasClass("bootstrap-select") && !$(e.target).parents().hasClass("bootstrap-select")) {
			$(e.target).closest(".form-item").find("select").selectpicker('toggle');
		}
	});
	$("form").each(function() {
		form = $(this);
		$(this).validate({
			focusInvalid: true,
			sendForm: false,
			errorPlacement: function(error, element) {
				if (element[0].tagName == "SELECT") {
					element.closest(".form-item").addClass("error");
					element.closest(".btn-group").addClass("btn-group-error");
					if (element.closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
					} else {
						error.insertAfter(element.closest(".btn-group"));
					}
				} else {
					if (element.attr("type") == "checkbox") {
						element.siblings("label").addClass("checkbox-label-error")
					} else {
						error.insertAfter(element);
						element.closest(".form-group").addClass("form-group-error");
					}
				}
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass);
				$(element).closest(".form-item").removeClass("error").addClass("valid");
				$(element).closest(".form-group").removeClass("form-group-error");
				if ($(element)[0].tagName == "SELECT") {
					$(element).closest(".form-item").removeClass("error");
					$(element).closest(".btn-group").removeClass("btn-group-error");
					if ($(element).closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
						$(element).closest(".form-item").next("label.error").remove();
					} else {
						$(element).closest(".btn-group").next("label.error").remove();
					}
				} else {
					$(element).next(".error").remove();
					if ($(element).attr("type") == "checkbox") {
						$(element).siblings("label").removeClass("checkbox-label-error")
					}
				}
			},
			invalidHandler: function(form, validatorcalc) {
				var errors = validatorcalc.numberOfInvalids();
				if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
					validatorcalc.errorList[0].element.focus();
				}
			},
			submitHandler: function(form) {
				$.ajax({
					type: "POST",
					data: $(form).serialize(),
					success: function () {
						formSuccess(form);
					}
				});
				return false;
			}
		});
		if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
			$(this).find("input.password-repeat").rules('add', {
				equalTo: "#" + form.find("input.password").attr("id")
			});
		}
	});
}
jQuery.extend(jQuery.validator.messages, {
	required: "Не заполнено поле",
	remote: "Please fix this field.",
	email: "Введите правильный e-mail.",
	url: "Please enter a valid URL.",
	date: "Please enter a valid date.",
	dateISO: "Please enter a valid date (ISO).",
	number: "Please enter a valid number.",
	digits: "Please enter only digits.",
	creditcard: "Please enter a valid credit card number.",
	equalTo: "Пароли не совпадают.",
	accept: "Please enter a value with a valid extension.",
	maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
	minlength: jQuery.validator.format("Please enter at least {0} characters."),
	rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
	range: jQuery.validator.format("Please enter a value between {0} and {1}."),
	max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
	min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function formSuccess(form) {
	$('form').find(".form-group input, .form-group textarea").val("");
	$('form').find(".placeholder").show();
	$("#successModal").modal("show");
	$('form').closest(".modal").modal("hide");
}

(function($) {
	$.fn.autogrow = function() {
		return this.each(function() {
			var textarea = this;
			$(textarea).on("focus keyup input blur", function() {
				$(textarea).css('height', 'auto').css('height', $(textarea)[0].scrollHeight + 1 + 'px');
			});
		});
	};

})(jQuery);

function fixedHeader() {

	var scrollPos = $(window).scrollTop();

	// $("main").css({
	// 	marginTop: $("header").outerHeight()
	// });

	if (scrollPos > 0) {

		if (!$("header").hasClass("header-fixed")) {

			$("header").addClass("header-fixed");

		}


	} else {

		if ($("header").hasClass("header-fixed")) {

			$("header").removeClass("header-fixed");

		}

	}

}

function childSelects() {

	$("select[data-parent]").each(function () {

		var childSelect = $(this),
				parentSelect = $($(this).data("parent"));


		var childContainer = childSelect.closest(".child-select-container");

		if (!parentSelect.val() || parentSelect.val() == "") {

			childSelect.prop("disabled", true).selectpicker("refresh");

			childContainer.hide();

		} else {

			childSelect.prop("disabled", false).selectpicker("refresh");

			childContainer.show();

		}




	});

}

function castFilter(castOverWrapper) {

	console.log(castOverWrapper)

	var castFilter = castOverWrapper.find(".cast-filter"),
			castItems = castOverWrapper.find(".cast-col"),
			curLink = castFilter.find(".active"),
			curDate = curLink.data("date");


	castItems.each(function () {

		var datesArr = $(this).data("dates"),
				curItem = $(this);


		if (datesArr.indexOf(curDate) >= 0 || curDate == "all") {

			curItem.fadeIn(200);

		} else {

			curItem.hide();

		}

	});

}

function stickyBlocks() {

	var diverPic = $(".diver-pic"),
			diverStart = $(".diver-start"),
			diverStop = $(".diver-stop"),
			topOffset = 30;

	if (diverPic.length) {



		$(window).on("resize scroll touchmove", function () {

			var scrollPos = $(window).scrollTop();

			if (scrollPos > diverStart.offset().top) {

				diverPic.addClass("fixed");

			} else {

				diverPic.removeClass("fixed");

			}

			if (scrollPos > (diverStop.offset().top + diverStop.outerHeight() - diverPic.height()) + 100) {

				diverPic.css({

					marginTop: (diverStop.offset().top + diverStop.outerHeight() - diverPic.height()) - scrollPos + 100

				});

			} else {

				diverPic.css({
					marginTop: 0
				});

			}

		});

	}

	var servicePic = $(".service-item-pic-wrapper"),
		serviceStart = $(".page-header-l"),
		serviceStop = $(".service-item"),
		topOffset = 30;

	if (servicePic.length) {

		$(window).on("resize scroll touchmove", function () {

			servicePic.data("orig-width",servicePic.outerWidth());

			var scrollPos = $(window).scrollTop();

			if (scrollPos > serviceStart.offset().top - $("header").outerHeight() - topOffset) {

				servicePic.addClass("fixed").css({

					width: servicePic.data("orig-width"),
					top: $("header").outerHeight() + topOffset

				});

			} else {

				servicePic.removeClass("fixed").css({

					width: "auto"

				});

			}

			if (scrollPos > (serviceStop.offset().top + serviceStop.outerHeight() - servicePic.outerHeight() - $("header").outerHeight() - topOffset)) {

				servicePic.css({

					marginTop: (serviceStop.offset().top + serviceStop.outerHeight() - servicePic.outerHeight() - $("header").outerHeight() - topOffset) - scrollPos

				});

			} else {

				servicePic.css({
					marginTop: 0
				});

			}

		});

	}

	var stickyElements = $(".sticky-block"),
		topOffset = 30,
		topOffsetProgram = 0;

	$(window).on("resize scroll touchmove", function () {

		stickyElements.each(function () {

			$(this).data("orig-width", $(this).outerWidth());

			$(this).closest(".sticky-wrapper").css({
				minHeight: $(this).outerHeight()
			});


			if ($("header").hasClass("header-fixed")) {

				var headerHeight = $("header").outerHeight();

			} else {

				var headerHeight = 0;

			}

			var el = $(this),
				elHeight = $(this).outerHeight(),
				elWrapper = $(this).closest(".sticky-wrapper"),
				wrapperHeight = elWrapper.outerHeight(),
				scrollPos = $(window).scrollTop();

			if (scrollPos > (elWrapper.offset().top - headerHeight - topOffset) && elHeight < ($(window).height() - topOffset*2 - headerHeight) && elHeight < wrapperHeight) {

				el.addClass("fixed").css({

					top: headerHeight + topOffset,
					width: el.data("orig-width")

				});

				if (scrollPos > (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffset)) {

					el.css({

						marginTop: (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffset) - scrollPos

					});

				} else {

					el.css({
						marginTop: 0
					});

				}

			} else {

				el.removeClass("fixed").css({

					width: "auto"

				})

			}



		});

		$(".program-nav").each(function () {

			$(this).data("orig-width", $(this).outerWidth());

			$(this).closest(".page-wrapper").css({
				minHeight: $(this).outerHeight()
			});


			if ($("header").hasClass("header-fixed")) {

				var headerHeight = $("header").outerHeight();

			} else {

				var headerHeight = 0;

			}

			var el = $(this),
				elHeight = $(this).outerHeight(),
				elWrapper = $(this).closest(".page-wrapper"),
				wrapperHeight = elWrapper.outerHeight(),
				scrollPos = $(window).scrollTop();

			if (scrollPos > (elWrapper.offset().top - headerHeight - topOffsetProgram) && elHeight < ($(window).height() - topOffsetProgram*2 - headerHeight) && elHeight < wrapperHeight) {

				$(".program-nav-wrapper").css({
					paddingTop: el.outerHeight()
				});

				el.addClass("fixed").css({

					top: headerHeight + topOffsetProgram,
					width: el.data("orig-width")

				});


				if (scrollPos > (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffsetProgram)) {

					el.css({

						marginTop: (elWrapper.offset().top + wrapperHeight - elHeight - headerHeight - topOffsetProgram) - scrollPos

					});

				} else {

					el.css({
						marginTop: 0
					});

				}

			} else {

				$(".program-nav-wrapper").css({
					paddingTop: 0
				});

				el.removeClass("fixed").css({

					width: "auto"

				});

			}



		});

	});


}

function anchorsMenu() {

	$(".anchors-menu a").click(function () {

		var curLink = $(this);

		if ($("header").hasClass("header-fixed")) {

			var headerHeight = $("header").outerHeight();

		} else {

			var headerHeight = 0;

		}

		if ($("a[name='" + curLink.attr("href").replace("#","") + "']").length) {

			$("html, body").animate({

				scrollTop: $("a[name='" + curLink.attr("href").replace("#","") + "']").offset().top - headerHeight - 30

			},1000);

		}

	});

}

function quiz() {

	// $(".poll-step-slider").slick({
	// 	fade: true,
	// 	swipe: false,
	// 	arrows: false,
	// 	rows: 0
	// });

	// $(".poll-form-step input[type=radio]").change(function () {
	//
	// 	if ($(this).is(":checked")) {
	//
	// 		$(this).closest(".poll-form-step").find(".poll-step-slider").slick("slickGoTo", $(this).closest(".form-radio").prevAll().length)
	//
	// 	}
	//
	// });

	$(".poll-form [type=submit]").attr("disabled", true);

	$(".form-checkboxes-required input[type=checkbox]").each(function () {

		if (!$(this).closest(".form-checkboxes-required").find(":checked").length) {

			$(this).closest(".form-checkboxes-required").addClass("error");

		} else {

			$(this).closest(".form-checkboxes-required").removeClass("error");

		}

	});

	$(".form-checkboxes-required input[type=checkbox]").change(function () {

		if (!$(this).closest(".form-checkboxes-required").find(":checked").length) {

			$(this).closest(".form-checkboxes-required").addClass("error");

		} else {

			$(this).closest(".form-checkboxes-required").removeClass("error");

		}

	});

	setActiveSteps();

	var pollFormSteps = $(".poll-form-step");

	var btnBack = $(".poll-form-nav .btn-back");
	var btnFwd = $(".poll-form-nav .btn-forward");
	var btnSubmit = $(".poll-form [type=submit]");

	pollFormSteps.hide();

	pollFormSteps.first().addClass("current").show();

	btnFwd.click(function () {

		if ($(".poll-form-step.current").find("input").length) {
			$(".poll-form-step.current").find("input").valid();
		}

		if ($(".poll-form-step.current").find("textarea").length) {
			$(".poll-form-step.current").find("textarea").valid();
		}


		if ($(".poll-form-step.current").nextAll(".active").length == 1) {

			// btnFwd.hide();
			// btnSubmit.show();

		}

		if ($(".poll-form-step.current").nextAll(".active").length && !$(".poll-form-step.current .error").length) {

			var curStep = $(".poll-form-step.current");

			curStep.removeClass("current").hide();

			curStep.nextAll(".active").first().fadeIn(500).addClass("current");

			if ($(".poll-form-step.current [type=submit]").length) {

				$(".poll-form-step.current [type=submit]").attr("disabled", false);

			}

			$(".poll-wrapper .btn-back").attr("disabled",false);

			quizDots();

		}


	});

	btnBack.click(function () {

		if ($(".poll-form-step.current").prevAll(".active").length) {

			if ($(".poll-form-step.current").prevAll(".active").length == 1) {

				$(".poll-wrapper .btn-back").attr("disabled",true);

			}

			var curStep = $(".poll-form-step.current");

			curStep.removeClass("current").hide();

			curStep.prevAll(".active").first().fadeIn(500).addClass("current");

			// btnFwd.show();
			// btnSubmit.hide();

			quizDots();

		}

	});

	$(".form-group-other input").focus(function () {

		if (!$(this).closest(".form-radio-text").find(".form-radio input").is(":checked")) {

			$(this).closest(".form-radio-text").find(".form-radio input").click().change();

		}

		if (!$(this).closest(".form-checkbox-text").find(".form-checkbox input").is(":checked")) {

			$(this).closest(".form-checkbox-text").find(".form-checkbox input").click().change();

		}


	});

	$(".poll-form input[type=checkbox], .poll-form input[type=radio]").change(function () {

		setActiveSteps();

		// if ($(this).closest(".form-radio").next(".form-group-other").length) {
		//
		// 	if ($(this).is(":checked")) {
		// 		$(this).closest(".form-radio").next(".form-group-other").fadeIn(250);
		// 	} else {
		// 		$(this).closest(".form-radio").next(".form-group-other").fadeOut(250);
		// 	}
		//
		// }

	});

	$("#pollForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);

			var quizResult = '';

			$(".poll-form-step.active").not(".last").find(".poll-question").each(function () {

				var stepTitle = "<h4>" + $(this).find(".h3").html() + "</h4>";

				var stepValue = '';

				$(this).find("input[type=checkbox], input[type=radio]").each(function () {

					if ($(this).is(":checked")) {

						stepValue += '<div>' + $(this).next("label").html() + '</div>';

						if ($(this).closest(".form-radio-text").length) {
							stepValue += '<div>' + $(this).closest(".form-radio-text").find("input[type=text]").val() + '</div>';
						}

						if ($(this).closest(".form-checkbox-text").length) {
							stepValue += '<div>' + $(this).closest(".form-checkbox-text").find("input[type=text]").val() + '</div>';
						}

					}

				});

				if (!$(this).find("input[type=checkbox], input[type=radio]").length) {

					if ($(this).find("input[type=text]").length) {

						stepValue += '<div>' + $(this).find("input[type=text]").val() + '</div>';

					}

					if ($(this).find("textarea").length) {

						stepValue += '<div>' + $(this).find("textarea").val() + '</div>';

					}

				}

				quizResult += stepTitle + stepValue;

			});

			console.log(quizResult)

			$.ajax({
				type: "POST",
				url: baseUrl + "quiz.php",
				data: {
					subject: "Цифровой акселератор - результат квиза",
					email: $("#poll_email").val(),
					name: $("#poll_company_name").val(),
					company: $("#poll_company").val(),
					phone: $("#poll_phone").val(),
					quizresult: quizResult
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

}

function quizDots() {

	var curIndex = $(".poll-form-step.current").prevAll(".active").length;

	$("ul.poll-dots li").removeClass("active");

	$("ul.poll-dots li").filter(function () {

		return $(this).prevAll().length == curIndex;

	}).addClass("active");

}

function setActiveSteps() {

	$(".poll-form-step").each(function () {


		var quizStep = $(this);

		if (!quizStep.data("parent") || $("#" + quizStep.data("parent")).is(":checked")) {

			quizStep.addClass("active");

		} else {

			quizStep.removeClass("active");

		}

	});

}
