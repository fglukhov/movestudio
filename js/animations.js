function animateAll() {

  if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

    $("body").addClass("animated");

    var controller = new ScrollMagic.Controller();

    // Section header

    TweenMax.to($(".page-header-contentt h1"), 0, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var headerH1Tween = TweenMax.to($(".page-header-contentt h1"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var headerH1Scene = new ScrollMagic.Scene({
      triggerElement: ".section-page-header",
      offset: 0
    })
      .setTween(headerH1Tween)
      .addTo(controller);

    TweenMax.to($(".page-header-text"), 0, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var headerTextTween = TweenMax.to($(".page-header-text"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7,
    });

    var headerTextScene = new ScrollMagic.Scene({
      triggerElement: ".section-page-header",
      offset: 0
    })
      .setTween(headerTextTween)
      .addTo(controller);


    TweenMax.to($(".quote-text"), 0, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var quoteTextTween = TweenMax.to($(".quote-text"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var quoteTextScene = new ScrollMagic.Scene({
      triggerElement: ".section-quote",
      offset: -150
    })
      .setTween(quoteTextTween)
      .addTo(controller);

    TweenMax.to($(".quote-author"), 0, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var quoteAuthorTween = TweenMax.to($(".quote-author"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7
    });

    var quoteAuthorScene = new ScrollMagic.Scene({
      triggerElement: ".section-quote",
      offset: -150
    })
      .setTween(quoteAuthorTween)
      .addTo(controller);


    TweenMax.to($(".section-about .section-header11"), 0, {
      x: -100,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var aboutHeaderTween = TweenMax.to($(".section-about .section-header11"), 1, {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var aboutHeaderScene = new ScrollMagic.Scene({
      triggerElement: ".section-about",
      offset: -150
    })
      .setTween(aboutHeaderTween)
      .addTo(controller);

    TweenMax.to($(".about-descr"), 0, {
      x: -100,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var aboutDescrTween = TweenMax.to($(".about-descr"), 1, {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var aboutDescrScene = new ScrollMagic.Scene({
      triggerElement: ".section-about",
      offset: -150
    })
      .setTween(aboutDescrTween)
      .addTo(controller);

    TweenMax.to($(".about-video"), 0, {
      x: 100,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var aboutVideoTween = TweenMax.to($(".about-video"), 1, {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7
    });

    var aboutVideoScene = new ScrollMagic.Scene({
      triggerElement: ".section-about",
      offset: -150
    })
      .setTween(aboutVideoTween)
      .addTo(controller);


    $(".pros-tmb").each(function (index, element) {

      TweenMax.to($(element).find(".pros-tmb-pic"), 0, {
        x: -50,
        opacity: 0
      });

      var prosPicTween = TweenMax.to($(element).find(".pros-tmb-pic"), 1, {
        x: 0,
        opacity: 1,
        delay: index * .5
      });

      var prosPicScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -100
      })
        .setTween(prosPicTween)
        .addTo(controller);

      TweenMax.to($(element).find(".pros-tmb-obj"), 0, {
        x: 50,
        opacity: 0
      });

      var prosObjTween = TweenMax.to($(element).find(".pros-tmb-obj"), 1, {
        x: 0,
        opacity: 1,
        delay: index * .5 + .15
      });

      var prosObjScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -250
      })
        .setTween(prosObjTween)
        .addTo(controller);


      TweenMax.to($(element).find(".pros-tmb-descr"), 0, {
        y: 50,
        opacity: 0
      });

      var prosDescrTween = TweenMax.to($(element).find(".pros-tmb-descr"), 1, {
        y: 0,
        opacity: 1,
        delay: index * .5 + .5
      });

      var prosDescrScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -100
      })
        .setTween(prosDescrTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n-1) > .service-tmb").each(function (index, element) {

      TweenMax.to($(element), 0, {
        y: 50,
        opacity: 0
      });

      var serviceTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1
      });

      var serviceScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(serviceTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n) > .service-tmb").each(function (index, element) {

      TweenMax.to($(element), 0, {
        y: 50,
        opacity: 0
      });

      var serviceTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1,
        delay: .5
      });

      var serviceScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(serviceTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n-1) > .project-tmb").each(function (index, element) {

      TweenMax.to($(element), 0, {
        y: 50,
        opacity: 0
      });

      var projectTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1
      });

      var projectScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(projectTween)
        .addTo(controller);


    });

    $(".col-12:nth-child(2n) > .project-tmb").each(function (index, element) {

      TweenMax.to($(element), 0, {
        y: 50,
        opacity: 0
      });

      var projectTween = TweenMax.to($(element), .7, {
        y: 0,
        opacity: 1,
        delay: .5
      });

      var projectScene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: -250
      })
        .setTween(projectTween)
        .addTo(controller);


    });

    TweenMax.to($(".section-clients .section-header"), 0, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var clientsHeaderTween = TweenMax.to($(".section-clients .section-header"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut
    });

    var clientsHeaderScene = new ScrollMagic.Scene({
      triggerElement: ".section-clients",
      offset: -150
    })
      .setTween(clientsHeaderTween)
      .addTo(controller);

    TweenMax.to($(".section-clients-descr"), 0, {
      y: 70,
      opacity: 0,
      ease: Power2.easeInOut
    });

    var clientsDescrTween = TweenMax.to($(".section-clients-descr"), 1, {
      y: 0,
      opacity: 1,
      ease: Power2.easeInOut,
      delay: .7
    });

    var clientsDescrScene = new ScrollMagic.Scene({
      triggerElement: ".section-clients",
      offset: -150
    })
      .setTween(clientsDescrTween)
      .addTo(controller);

  } else if ($("#mobile-indicator").css("display") == "block") {

    $("body").removeClass("animated");

    //controller = controller.enabled(false);
    //controller = controller.destroy(true);

  }

}

$(window).on("resize", function () {

  animateAll();

});

$(document).ready(function () {

  animateAll();

});


$(window).on("resize scroll load", function () {

  $(".why-squid-1").prlx($(".section-why"), 60, -60, false);

  $(".why-squid-2").prlx($(".section-why"), 40, -40, false);

  $(".why-squid-3").prlx($(".section-why"), 100, -100, false);

  $(".page-header-home .diver-pic").prlx($(".section-why"), 0, -60, true);

  $(".school-pic-obj-1").prlx($(".section-school"), 40, -40, false);

  $(".school-pic-obj-2").prlx($(".section-school"), 70, -70, false);

  $(".section-island-obj").prlx($(".section-island"), 60, -60, false);

  $(".section-inn-obj").prlx($(".section-inn"), 60, -60, false);

  $(".section-gallery .section-obj").prlx($(".section-gallery"), 60, -60, false);

  $(".instructor-obj-1").prlx($(".section-instructors"), 40, -40, false);

  $(".instructor-obj-2").prlx($(".section-instructors"), 50, -50, false);

  $(".article-gallery-obj").each(function () {

    $(this).prlx($(this).closest(".article-block"), 50, -70, false);

  });

  $(".service-item-pic-obj-1").prlx($(".section-page-content"), 20, -60, false);

  $(".service-item-pic-obj-2").prlx($(".section-page-content"), 20, -100, false);

  $(".section-rooms .section-obj").prlx($(".section-rooms"), 60, -60, false);





});

(function( $ ) {
  $.fn.prlx = function(pTrigger, yStart, yFinish, fromTop) {

    if (!is_mobile && $(this).length) {

      var obj = $(this);

      var yPos;

      if (fromTop == false && $(window).scrollTop() < pTrigger.offset().top - $(window).height()) {

        yPos = yStart;

      } else if (fromTop == false && $(window).scrollTop() > pTrigger.offset().top + $(window).height()) {

        yPos = yFinish;


      } else {

        if (fromTop) {

          if (pTrigger.offset().top <= $(window).scrollTop()) {

            var percentOffset = (pTrigger.offset().top - $(window).scrollTop()) / ($(window).height() * 2);

          } else {

            percentOffset = 0;

          }

        } else {

          var percentOffset = (pTrigger.offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

        }

        var yRange = yStart - yFinish,
          posInRange = yRange * percentOffset,
          yPos = posInRange + yFinish;

        obj.attr("percentOffset", percentOffset);

      }

      TweenMax.to(obj, .5, {y: yPos, ease:Linear.ease});

    }

  };
})( jQuery );
