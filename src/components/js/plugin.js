import $ from "jquery";
function checkScroll() {
  $("#fullpage").scrollTop() > 0.5 * $(window).height() &&
  $(".main-hero.smaller").position().top > 1200
    ? $(".request-button").toggleClass("hidden", !1)
    : $(".request-button").toggleClass("hidden", !0);
}
function scrollEvent(t) {
  !0 === cancall &&
    ((isAnimating = !0),
    $(".with-drop").toggleClass("open", !1),
    "up" === t
      ? 2 === current
        ? ($(".section-" + (current - 1)).css(
            "z-index",
            $(".section-" + (current - 1)).data("z-index")
          ),
          animateTheBlock(t),
          $(".section-" + (current + 1) + " .content").toggleClass(
            "animated",
            !1
          ),
          $(".section-" + current + " .content").toggleClass("animated", !0),
          $(".section-" + current + " .slide-down")
            .toggleClass("big", !0)
            .toggleClass("small", !1),
          setTimeout(function() {
            $(".fixed-menu.white").toggleClass("visible", !1),
              $(".gradient").toggleClass("hidden", !1);
          }, animationSpeed),
          setTimeout(function() {
            $("#fullpage").toggleClass("padding", !1),
              $("#fullpage").toggleClass("padding-top", !1),
              $(".section .pad-margin").toggleClass("pad-margin-90", !1),
              $(".section-" + current + " .minus-margin")
                .toggleClass("minus-20", !1)
                .toggleClass("minus-90", !1);
          }, animationSpeed))
        : current === maxSlides
        ? ($(".footer").css("z-index", 10),
          $(".pop-1").toggleClass("popped", !1),
          $(".pop-2").toggleClass("popped", !1),
          $(".pop-3").toggleClass("popped", !1),
          setTimeout(function() {
            $(".slogan-text").css("display", "block"),
              $(".slogan-text").toggleClass("none-visible", !1);
          }, 0.6 * animationSpeed),
          animateTheBlock(t),
          $(".section-" + (current + 1) + " .content").toggleClass(
            "animated",
            !1
          ),
          setTimeout(function() {
            $(".section-" + current + " .content").toggleClass("opacity", !1);
          }, 0.6 * animationSpeed))
        : ($(".section-" + (current - 1)).css(
            "z-index",
            $(".section-" + (current - 1)).data("z-index")
          ),
          animateTheBlock(t),
          $(".section-" + (current + 1) + " .content").toggleClass(
            "animated",
            !1
          ),
          setTimeout(function() {
            $(".section-" + current + " .content").toggleClass("opacity", !1);
          }, 0.6 * animationSpeed))
      : 1 === current
      ? ($("#fullpage").toggleClass("padding", !0),
        $(".section-" + current + " .minus-margin").toggleClass("minus-20", !0),
        $(".gradient").toggleClass("hidden", !0),
        setTimeout(function() {
          $(".section-" + current + " .slide-down")
            .toggleClass("big", !1)
            .toggleClass("small", !0),
            animateTheBlock(t),
            $(".section-" + (current - 1) + " .content").toggleClass(
              "opacity",
              !0
            ),
            setTimeout(function() {
              $(".section-" + current + " .content").toggleClass(
                "animated",
                !0
              );
            }, 0.6 * animationSpeed),
            setTimeout(function() {
              $(".fixed-menu.white").toggleClass("visible", !0),
                $("#fullpage").toggleClass("padding-top", !0),
                $(".section .pad-margin").toggleClass("pad-margin-90", !0),
                $(".section-" + (current - 1) + " .minus-margin").toggleClass(
                  "minus-90",
                  !0
                );
            }, 0.2 * animationSpeed);
        }, animationSpeed),
        setTimeout(function() {
          $(".section-" + (current - 1)).css("z-index", 0);
        }, 2 * animationSpeed))
      : current === maxSlides - 1
      ? ($(".footer").css("z-index", 300),
        $(".slogan-text").toggleClass("none-visible", !0),
        setTimeout(function() {
          $(".slogan-text").css("display", "none");
        }, animationSpeed),
        setTimeout(function() {
          $(".pop-1").toggleClass("popped", !0);
        }, 0.2 * animationSpeed),
        setTimeout(function() {
          $(".pop-2").toggleClass("popped", !0);
        }, 0.4 * animationSpeed),
        setTimeout(function() {
          $(".pop-3").toggleClass("popped", !0);
        }, 0.6 * animationSpeed),
        animateTheBlock(t),
        $(".section-" + (current - 1) + " .content").toggleClass("opacity", !0))
      : (setTimeout(function() {
          $(".section-" + (current - 1)).css("z-index", 0);
        }, animationSpeed),
        animateTheBlock(t),
        $(".section-" + (current - 1) + " .content").toggleClass("opacity", !0),
        setTimeout(function() {
          $(".section-" + current + " .content").toggleClass("animated", !0);
        }, 0.6 * animationSpeed)));
}
function scrollEventStory(t) {
  !0 === cancall &&
    ((isAnimating = !0),
    $(".with-drop").toggleClass("open", !1),
    "up" === t
      ? (--current < 1 && (current = 1),
        current === maxSlides &&
          ($(".first-section").css("transform", "translateY(0%)"),
          $(".pop-1").toggleClass("popped", !1),
          $(".pop-2").toggleClass("popped", !1),
          $(".pop-3").toggleClass("popped", !1),
          setTimeout(function() {
            $(window).trigger("resize");
          }, 0.4 * animationSpeed)),
        $(".slide-" + (current + 1)).toggleClass("full", !1))
      : (++current > maxSlides &&
          (current > maxSlides + 1
            ? (current = maxSlides + 1)
            : ($(".first-section").css("transform", "translateY(-100%)"),
              setTimeout(function() {
                $(".pop-1").toggleClass("popped", !0);
              }, 0.2 * animationSpeed),
              setTimeout(function() {
                $(".pop-2").toggleClass("popped", !0);
              }, 0.4 * animationSpeed),
              setTimeout(function() {
                $(".pop-3").toggleClass("popped", !0);
              }, 0.6 * animationSpeed))),
        $(".slide-" + current).toggleClass("full", !0)),
    setTimeout(function() {
      clearTimeout(timer), (isAnimating = !1);
    }, animationSpeed));
}
function animateTheBlock(t) {
  if ("up" === t)
    for (
      --current < 1 && (current = 1),
        $(".section.to-animate").toggleClass("animated", !1),
        i = 1;
      i < current + 1;
      i++
    )
      $(".section-" + i + ".to-animate").toggleClass("animated", !0);
  else current > maxSlides - 1 && (current = maxSlides - 1);
  if (
    ("up" === t
      ? $(".section-" + current + " .slide-up")
          .toggleClass("visible", !0)
          .toggleClass("hidden", !1)
      : $(".section-" + current + " .slide-up")
          .toggleClass("visible", !1)
          .toggleClass("hidden", !0),
    setTimeout(function() {
      clearTimeout(timer), (isAnimating = !1);
    }, animationSpeed),
    "down" === t)
  )
    for (
      current++, $(".section.to-animate").toggleClass("animated", !1), i = 1;
      i < current + 1;
      i++
    )
      $(".section-" + i + ".to-animate").toggleClass("animated", !0);
}
function scrollable() {
  var t = 100,
    e = 1;
  $(".section").each(function(n, i) {
    (t -= 1),
      $(this)
        .css("z-index", t)
        .attr("data-z-index", t),
      $(this).toggleClass("section-" + e++);
  }),
    (maxSlides = e - 1);
}
function scrollableStory() {
  var t = 100,
    e = 1,
    n = 0;
  $(".section").each(function(n, i) {
    (t -= 1),
      $(this)
        .css("z-index", t)
        .attr("data-z-index", t),
      $(this).toggleClass("section-" + e++);
  }),
    $(".text-side").each(function(t, e) {
      n++;
    }),
    (maxSlides = n);
}
function animateSaunas() {
  var t = 0;
  $(".one-sauna").each(function(e, n) {
    (t += 200),
      setTimeout(function() {
        $(n).toggleClass("animated", !0);
      }, t);
  });
}
function animateSlides() {
  var t = 100;
  for (
    $(".slides-container .image-container").each(function(e, n) {
      (number_of_slides += 1),
        $(this)
          .css("z-index", t--)
          .toggleClass("slide-" + (e + 1), !0);
    }),
      i = 1;
    i <= number_of_slides;
    i++
  )
    $(".slides ul").append(
      '<li data-slide="' +
        i +
        '"><span class="loading load-' +
        i +
        '"><span class="current animate-fast"></span></span></li>'
    ),
      (loaders["bar" + i] = new Object()),
      (loaders["bar" + i] = new ProgressBar.Circle(".loading.load-" + i, {
        strokeWidth: 10,
        easing: "linear",
        duration: 6e3,
        color: "#FFF3E3",
        trailColor: "#C9B2A4",
        trailWidth: 5,
        svgStyle: null
      }));
  startSlides();
}
function startSlides() {
  loaders["bar" + currentSlide].animate(1),
    $(".slide-" + currentSlide).css("z-index", 150),
    $(".load-" + currentSlide).toggleClass("active", !0),
    (slidestimeout = setTimeout(function() {
      $(".slide-" + currentSlide).css({
        "-webkit-transform": "translateX(-100%)",
        "-moz-transform": "translateX(-100%)",
        "-ms-transform": "translateX(-100%)",
        "-o-transform": "translateX(-100%)",
        transform: "translateX(-100%)"
      }),
        $(".slide-" + currentSlide + " .information").css({ opacity: "0" }),
        loaders["bar" + currentSlide].set(0),
        currentSlide++,
        $(".loading").toggleClass("active", !1),
        (slideanimationTimeout = setTimeout(function() {
          $(".slide-" + (currentSlide - 1)).css({
            "z-index": "inherit",
            "-webkit-transform": "translateX(0%)",
            "-moz-transform": "translateX(0%)",
            "-ms-transform": "translateX(0%)",
            "-o-transform": "translateX(0%)",
            transform: "translateX(0%)"
          }),
            $(".slide-" + (currentSlide - 1) + " .information").css({
              opacity: "1"
            }),
            currentSlide > number_of_slides && (currentSlide = 1);
          var t = 0;
          (t = currentSlide + 1 > number_of_slides ? 1 : currentSlide + 1),
            $(".slide-" + t).css("z-index", 98),
            $(".slide-" + t).css({
              "z-index": "inherit",
              "-webkit-transform": "translateX(0%)",
              "-moz-transform": "translateX(0%)",
              "-ms-transform": "translateX(0%)",
              "-o-transform": "translateX(0%)",
              transform: "translateX(0%)"
            }),
            $(".slide-" + t + " .information").css({ opacity: "1" }),
            startSlides(),
            currentSlide + 1 > number_of_slides
              ? $(".slide-1").css("z-index", 99)
              : $(".slide-" + (currentSlide + 1)).css("z-index", 99),
            currentSlide - 1 <= 0
              ? $(".slide-" + number_of_slides).css("z-index", 98)
              : $(".slide-" + (currentSlide - 1)).css("z-index", 98);
        }, animationSpeed));
    }, 6e3));
}
function setSlide(t) {
  loaders["bar" + currentSlide].set(0);
  for (var e in loaders) loaders[e].set(0);
  $(".loading").toggleClass("active", !1),
    $(".load-" + t).toggleClass("active", !0),
    $(".slide-" + t).css({
      "z-index": "inherit",
      "-webkit-transform": "translateX(0%)",
      "-moz-transform": "translateX(0%)",
      "-ms-transform": "translateX(0%)",
      "-o-transform": "translateX(0%)",
      transform: "translateX(0%)"
    }),
    $(".slide-" + t + " .information").css({ opacity: "1" }),
    setTimeout(function() {
      $(".slide-" + currentSlide).css("z-index", 155),
        $(".slide-" + t).css("z-index", 99),
        $(".slide-" + currentSlide).css({
          "-webkit-transform": "translateX(-100%)",
          "-moz-transform": "translateX(-100%)",
          "-ms-transform": "translateX(-100%)",
          "-o-transform": "translateX(-100%)",
          transform: "translateX(-100%)"
        }),
        $(".slide-" + currentSlide + " .information").css({ opacity: "0" }),
        clearTimeout(slidestimeout),
        clearTimeout(slideanimationTimeout);
      var e = 0;
      (e = (currentSlide = t) + 1 > number_of_slides ? 1 : currentSlide + 1),
        $(".slide-" + e).css("z-index", 98),
        $(".slide-" + e).css({
          "z-index": "inherit",
          "-webkit-transform": "translateX(0%)",
          "-moz-transform": "translateX(0%)",
          "-ms-transform": "translateX(0%)",
          "-o-transform": "translateX(0%)",
          transform: "translateX(0%)"
        }),
        $(".slide-" + e + " .information").css({ opacity: "1" }),
        setTimeout(function() {
          $(".slide-" + (currentSlide - 1)).css("z-index", 98),
            $(".slide-" + (currentSlide - 1)).css({
              "z-index": "inherit",
              "-webkit-transform": "translateX(0%)",
              "-moz-transform": "translateX(0%)",
              "-ms-transform": "translateX(0%)",
              "-o-transform": "translateX(0%)",
              transform: "translateX(0%)"
            }),
            $(".slide-" + (currentSlide - 1) + " .information").css({
              opacity: "1"
            }),
            startSlides();
        }, animationSpeed);
    }, 1e3);
}
function checkMenu(t) {
  t > 90
    ? $(".fixed-menu.white").toggleClass("scrolled", !0)
    : $(".fixed-menu.white").toggleClass("scrolled", !1);
}
function slideLeft() {
  --currentSauna <= 0 && (currentSauna = 1), slideSaunas();
}
function slideRight() {
  ++currentSauna >= totalSaunas && (currentSauna = totalSaunas), slideSaunas();
}
function slideSaunas() {
  setTimeout(function() {
    $(".navigation").toggleClass("no-click", !1);
  }, 1100),
    showCarousel(currentSauna);
  var t = $(".item-" + currentSauna),
    e = t.data("fit"),
    n = t.data("weight"),
    i = t.data("floor"),
    o = t.data("wash"),
    s = t.data("section"),
    r = t.data("tech"),
    a = t.data("width"),
    l = t.data("water");
  r ? $("#spec_url").attr("href", r) : $("#spec_url").attr("href", ""),
    1 === currentSauna
      ? $(".navigation.left").toggleClass("d-none", !0)
      : $(".navigation.left").toggleClass("d-none", !1),
    currentSauna === totalSaunas
      ? $(".navigation.right").toggleClass("d-none", !0)
      : $(".navigation.right").toggleClass("d-none", !1);
  var c = 1;
  e
    ? ($(".details-row .box.fits").show(),
      4 === e
        ? ($(".details-row .box.fits img").attr(
            "src",
            base_url + "assets/img/specs/icon_fits_four.svg"
          ),
          $(".details-row .box.fits .information").html(e))
        : ($(".details-row .box.fits img").attr(
            "src",
            base_url + "assets/img/specs/icon_fits_six.svg"
          ),
          $(".details-row .box.fits .information").html(e)))
    : $(".details-row .box.fits").hide(),
    a
      ? ($(".details-row .box.width").show(),
        $(".details-row .box.width .information").html(a))
      : $(".details-row .box.width").hide(),
    i
      ? ($(".details-row .box.floor").show(),
        $(".details-row .box.floor .information").html(i))
      : $(".details-row .box.floor").hide(),
    o
      ? $(".details-row .box.washing").show()
      : $(".details-row .box.washing").hide(),
    l
      ? $(".details-row .box.water").show()
      : $(".details-row .box.water").hide(),
    2 === s
      ? $(".details-row .box.cross-section-2").show()
      : $(".details-row .box.cross-section-2").hide(),
    3 === s
      ? $(".details-row .box.cross-section-3").show()
      : $(".details-row .box.cross-section-3").hide(),
    "large-smokey" === t.data("item")
      ? $(".details-row .box.cross-section-double").show()
      : $(".details-row .box.cross-section-double").hide(),
    n
      ? ($(".details-row .box.weight").show(),
        $(".details-row .box.weight .information").html(n))
      : $(".details-row .box.weight").hide(),
    $(".carousel-items .item").each(function(t, e) {
      if (c < currentSauna) {
        n = c;
        setTimeout(function() {
          $(".sauna-options-" + n).toggleClass("d-none", !0),
            $(".sauna-price-" + n).toggleClass("d-none", !0);
        }, 1e3),
          $(".sauna-options-" + n).toggleClass("hidden", !0),
          $(".sauna-price-" + n).toggleClass("hidden", !0),
          $(".item-" + c)
            .toggleClass("right", !1)
            .toggleClass("left", !0);
      } else if (c === currentSauna)
        setTimeout(function() {
          $(".sauna-options-" + currentSauna).toggleClass("d-none", !1),
            $(".sauna-price-" + currentSauna).toggleClass("d-none", !1),
            setTimeout(function() {
              $(".sauna-options-" + currentSauna).toggleClass("hidden", !1),
                $(".sauna-price-" + currentSauna).toggleClass("hidden", !1);
            }, 50);
        }, 1e3),
          $(".item-" + currentSauna)
            .toggleClass("right", !1)
            .toggleClass("left", !1);
      else if (c > currentSauna) {
        var n = c;
        setTimeout(function() {
          $(".sauna-options-" + n).toggleClass("d-none", !0),
            $(".sauna-price-" + n).toggleClass("d-none", !0);
        }, 1e3),
          $(".sauna-options-" + n).toggleClass("hidden", !0),
          $(".sauna-price-" + n).toggleClass("hidden", !0),
          $(".item-" + c)
            .toggleClass("left", !1)
            .toggleClass("right", !0);
      }
      c++;
    });
}
function showCarousel(t) {
  $(".owl-one").hide(), $(".owl-one.owl-number-" + t).show();
}
function saunaCarousel() {
  $(".carousel-items .item").each(function(t, e) {
    totalSaunas++, $(e).toggleClass("item-" + totalSaunas);
  }),
    window.location.hash && findSauna(window.location.hash);
}
function findSauna(t) {
  var t = t.slice(1),
    e = $('[data-item="' + t + '"]').data("nr");
  (currentSauna = e), slideSaunas();
}
function equalContainer() {}
function customizeSelect(t) {
  var e = $(t).parent(),
    n = e.data("multi"),
    i = e.data("group"),
    o = e.data("element"),
    s = e.data("parent");
  e.data("image");
  if (
    (e.children().each(function(t, e) {
      n || $(e).toggleClass("selected", !1);
    }),
    n ? $(t).toggleClass("selected") : $(t).toggleClass("selected", !0),
    (elements = {}),
    assignElements(i),
    void 0 != elements[o] && elements[o].length > 1)
  ) {
    var r = "";
    for (var a in elements[o]) r += elements[o][a].fullname + "<br>";
    $("#" + s + " ." + o + ".lower").html(r),
      $("#" + s + " ." + o + ".chosen-img").css(
        "background-image",
        'url("' + elements[o][0].img + '")'
      );
  } else
    void 0 === elements[o]
      ? $("#" + s + " ." + o + ".lower").html(none_text)
      : ($("#" + s + " ." + o + ".lower").html(elements[o][0].fullname),
        $("#" + s + " ." + o + ".chosen-img").css(
          "background-image",
          'url("' + elements[o][0].img + '")'
        ));
  var l = s.replace("_accordion", ""),
    c = $("." + l + "-price").data("price");
  for (var a in elements)
    if (elements.hasOwnProperty(a) && "sauna" != a)
      for (var u = 0; u < elements[a].length; u++) c += elements[a][u].price;
  var h = c.toString();
  if (4 === h.length) d = h.splice(1, 0, "&nbsp;");
  else var d = h.splice(2, 0, "&nbsp;");
  $("." + l + "-price .price").html(currency + d + vattext);
}
function assignElements(t) {
  elements = {};
  var e =
    "Sending request concerning <strong>" +
    {
      "single-sauna": "Single sauna",
      "double-sauna": "Double sauna",
      "triple-sauna": "Triple sauna",
      "small-smokey": "Small smokey",
      "large-smokey": "Large smokey",
      toilet: "Toilet",
      "model-one": "Model one",
      "model-two": "Model two",
      "model-three": "Model three",
      "model-four": "Model four",
      family: "Family pod"
    }[t] +
    "</strong> with: ";
  $('[data-group="' + t + '"]')
    .children(".selection.selected")
    .each(function(t, n) {
      var i = $(n)
          .parent()
          .data("element"),
        o = $(n).data("image"),
        s = $(n).data("price"),
        r = $(n).data("fullname"),
        a = $(n).data("name"),
        l = $(n)
          .parent()
          .data("groupname");
      (void 0 != typeof elements[i] && elements[i] instanceof Array) ||
        (elements[i] = []),
        (e +=
          "heaters" == i || "extras" == i
            ? r + ", "
            : r + " " + l.toLowerCase() + ", "),
        elements[i].push({
          fullname: r,
          name: a,
          img: o,
          price: s,
          confname: l
        });
    }),
    $(".ordered-text").html(e.substring(0, e.length - 2)),
    (elements.sauna = t);
}
function sendSaunaRequest() {
  var t = !0;
  $("#person_name").val().length < 1
    ? ($("#person_name")
        .parent()
        .toggleClass("error", !0),
      (t = !1))
    : $("#person_name")
        .parent()
        .toggleClass("error", !1),
    $("#person_address").val().length < 1
      ? ($("#person_address")
          .parent()
          .toggleClass("error", !0),
        (t = !1))
      : $("#person_address")
          .parent()
          .toggleClass("error", !1),
    validateEmail($("#person_email").val())
      ? $("#person_email")
          .parent()
          .toggleClass("error", !1)
      : ($("#person_email")
          .parent()
          .toggleClass("error", !0),
        (t = !1)),
    $(".country-code").intlTelInput("getNumber").length < 5
      ? ($("#person_phone")
          .parent()
          .parent()
          .toggleClass("error", !0),
        (t = !1))
      : $("#person_phone")
          .parent()
          .parent()
          .toggleClass("error", !1);
  var e = {};
  (e.name = $("#person_name").val()),
    (e.email = $("#person_email").val()),
    (e.address = $("#person_address").val()),
    (e.phone = $(".country-code").intlTelInput("getNumber")),
    (e.question = $("#person_question").val()),
    (e.btob = $("#btob").val()),
    (e.month = $('[name="install"]:checked').val()),
    (e.use = $('[name="buy_type"]:checked').val()),
    (e.many = $('[name="how_much"]:checked').val()),
    (e.land = $('[name="land"]:checked').val()),
    (e.permission = $('[name="permission"]:checked').val()),
    (e.trailer = $('[name="trailer"]:checked').val());
  var n = "Yes";
  $("#person_transport").is(":checked") || (n = "No"),
    (e.transport = n),
    t
      ? ($(".thank-you").show(),
        $(".request-wrapper").hide(),
        $(".bottom-part").html(""),
        $.post(
          base_url + "ajax.php",
          { userdata: e, saunainfo: elements },
          function(t) {
            console.log(t),
              "Yes" == e.btob
                ? dataLayer.push({ event: "formSentBusiness" })
                : dataLayer.push({
                    event: "formSent",
                    FormModel: elements.sauna
                  });
          }
        ))
      : $(".request-window").scrollTop(0);
}
function toggleRequest(t) {
  "close" == t
    ? $(".request-window").toggleClass("closed", !0)
    : $(".request-window").toggleClass("closed", !1);
}
function goToLink(t) {
  $(window).width() > 859
    ? ($(".pop-1").toggleClass("popped-up", !0),
      setTimeout(function() {
        $(".pop-2").toggleClass("popped-up", !0),
          setTimeout(function() {
            $(".pop-3").toggleClass("popped-up", !0),
              setTimeout(function() {
                window.location = t;
              }, 1e3);
          }, 200);
      }, 200))
    : (window.location = t);
}
function builderScroll() {
  var t = $(window).scrollTop();
  $("body").hasClass("page-template-page-builder") &&
    ($(".gallery-row").offset().top < t - 20 + $(window).height()
      ? ($(".hide-over").toggleClass("fix-to-scroll", !0),
        $(".price-cont").toggleClass("fix-to-scroll", !0),
        $(".request-window").toggleClass("fix-to-scroll", !0))
      : ($(".hide-over").toggleClass("fix-to-scroll", !1),
        $(".price-cont").toggleClass("fix-to-scroll", !1),
        $(".request-window").toggleClass("fix-to-scroll", !1)));
}
function validateEmail(t) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(t).toLowerCase()
  );
}
function goToMenu(t) {
  $('[href="' + t + '"]').tab("show");
}
function setCookie(t, e, n) {
  var i = "";
  if (n) {
    var o = new Date();
    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
      (i = "; expires=" + o.toUTCString());
  }
  document.cookie = t + "=" + (e || "") + i + "; path=/";
}
function getCookie(t) {
  for (
    var e = t + "=", n = document.cookie.split(";"), i = 0;
    i < n.length;
    i++
  ) {
    for (var o = n[i]; " " == o.charAt(0); ) o = o.substring(1, o.length);
    if (0 == o.indexOf(e)) return o.substring(e.length, o.length);
  }
  return null;
}
function eraseCookie(t) {
  document.cookie = t + "=; Max-Age=-99999999;";
}
!(function(t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function(t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function(t, e) {
  "use strict";
  function n(t, e) {
    var n = (e = e || et).createElement("script");
    (n.text = t), e.head.appendChild(n).parentNode.removeChild(n);
  }
  function i(t) {
    var e = !!t && "length" in t && t.length,
      n = ft.type(t);
    return (
      "function" !== n &&
      !ft.isWindow(t) &&
      ("array" === n ||
        0 === e ||
        ("number" === typeof e && e > 0 && e - 1 in t))
    );
  }
  function o(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  function s(t, e, n) {
    return ft.isFunction(e)
      ? ft.grep(t, function(t, i) {
          return !!e.call(t, i, t) !== n;
        })
      : e.nodeType
      ? ft.grep(t, function(t) {
          return (t === e) !== n;
        })
      : "string" != typeof e
      ? ft.grep(t, function(t) {
          return rt.call(e, t) > -1 !== n;
        })
      : Tt.test(e)
      ? ft.filter(e, t, n)
      : ((e = ft.filter(e, t)),
        ft.grep(t, function(t) {
          return rt.call(e, t) > -1 !== n && 1 === t.nodeType;
        }));
  }
  function r(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function a(t) {
    var e = {};
    return (
      ft.each(t.match(Dt) || [], function(t, n) {
        e[n] = !0;
      }),
      e
    );
  }
  function l(t) {
    return t;
  }
  function c(t) {
    throw t;
  }
  function u(t, e, n, i) {
    var o;
    try {
      t && ft.isFunction((o = t.promise))
        ? o
            .call(t)
            .done(e)
            .fail(n)
        : t && ft.isFunction((o = t.then))
        ? o.call(t, e, n)
        : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }
  function h() {
    et.removeEventListener("DOMContentLoaded", h),
      t.removeEventListener("load", h),
      ft.ready();
  }
  function d() {
    this.expando = ft.expando + d.uid++;
  }
  function p(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        ("null" === t
          ? null
          : t === +t + ""
          ? +t
          : Mt.test(t)
          ? JSON.parse(t)
          : t))
    );
  }
  function f(t, e, n) {
    var i;
    if (void 0 === n && 1 === t.nodeType)
      if (
        ((i = "data-" + e.replace(jt, "-$&").toLowerCase()),
        "string" === typeof (n = t.getAttribute(i)))
      ) {
        try {
          n = p(n);
        } catch (t) {}
        Nt.set(t, e, n);
      } else n = void 0;
    return n;
  }
  function g(t, e, n, i) {
    var o,
      s = 1,
      r = 20,
      a = i
        ? function() {
            return i.cur();
          }
        : function() {
            return ft.css(t, e, "");
          },
      l = a(),
      c = (n && n[3]) || (ft.cssNumber[e] ? "" : "px"),
      u = (ft.cssNumber[e] || ("px" !== c && +l)) && zt.exec(ft.css(t, e));
    if (u && u[3] !== c) {
      (c = c || u[3]), (n = n || []), (u = +l || 1);
      do {
        (s = s || ".5"), (u /= s), ft.style(t, e, u + c);
      } while (s !== (s = a() / l) && 1 !== s && --r);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  function m(t) {
    var e,
      n = t.ownerDocument,
      i = t.nodeName,
      o = Bt[i];
    return (
      o ||
      ((e = n.body.appendChild(n.createElement(i))),
      (o = ft.css(e, "display")),
      e.parentNode.removeChild(e),
      "none" === o && (o = "block"),
      (Bt[i] = o),
      o)
    );
  }
  function v(t, e) {
    for (var n, i, o = [], s = 0, r = t.length; s < r; s++)
      (i = t[s]).style &&
        ((n = i.style.display),
        e
          ? ("none" === n &&
              ((o[s] = Ot.get(i, "display") || null),
              o[s] || (i.style.display = "")),
            "" === i.style.display && Ht(i) && (o[s] = m(i)))
          : "none" !== n && ((o[s] = "none"), Ot.set(i, "display", n)));
    for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
    return t;
  }
  function y(t, e) {
    var n;
    return (
      (n =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : []),
      void 0 === e || (e && o(t, e)) ? ft.merge([t], n) : n
    );
  }
  function b(t, e) {
    for (var n = 0, i = t.length; n < i; n++)
      Ot.set(t[n], "globalEval", !e || Ot.get(e[n], "globalEval"));
  }
  function w(t, e, n, i, o) {
    for (
      var s,
        r,
        a,
        l,
        c,
        u,
        h = e.createDocumentFragment(),
        d = [],
        p = 0,
        f = t.length;
      p < f;
      p++
    )
      if ((s = t[p]) || 0 === s)
        if ("object" === ft.type(s)) ft.merge(d, s.nodeType ? [s] : s);
        else if (Vt.test(s)) {
          for (
            r = r || h.appendChild(e.createElement("div")),
              a = (Ut.exec(s) || ["", ""])[1].toLowerCase(),
              l = Xt[a] || Xt._default,
              r.innerHTML = l[1] + ft.htmlPrefilter(s) + l[2],
              u = l[0];
            u--;

          )
            r = r.lastChild;
          ft.merge(d, r.childNodes), ((r = h.firstChild).textContent = "");
        } else d.push(e.createTextNode(s));
    for (h.textContent = "", p = 0; (s = d[p++]); )
      if (i && ft.inArray(s, i) > -1) o && o.push(s);
      else if (
        ((c = ft.contains(s.ownerDocument, s)),
        (r = y(h.appendChild(s), "script")),
        c && b(r),
        n)
      )
        for (u = 0; (s = r[u++]); ) Yt.test(s.type || "") && n.push(s);
    return h;
  }
  function _() {
    return !0;
  }
  function x() {
    return !1;
  }
  function C() {
    try {
      return et.activeElement;
    } catch (t) {}
  }
  function T(t, e, n, i, o, s) {
    var r, a;
    if ("object" === typeof e) {
      "string" != typeof n && ((i = i || n), (n = void 0));
      for (a in e) T(t, a, n, i, e[a], s);
      return t;
    }
    if (
      (null === i && null === o
        ? ((o = n), (i = n = void 0))
        : null === o &&
          ("string" === typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = x;
    else if (!o) return t;
    return (
      1 === s &&
        ((r = o),
        (o = function(t) {
          return ft().off(t), r.apply(this, arguments);
        }),
        (o.guid = r.guid || (r.guid = ft.guid++))),
      t.each(function() {
        ft.event.add(this, e, o, i, n);
      })
    );
  }
  function S(t, e) {
    return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? ft(">tbody", t)[0] || t
      : t;
  }
  function E(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function $(t) {
    var e = ne.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function I(t, e) {
    var n, i, o, s, r, a, l, c;
    if (1 === e.nodeType) {
      if (
        Ot.hasData(t) &&
        ((s = Ot.access(t)), (r = Ot.set(e, s)), (c = s.events))
      ) {
        delete r.handle, (r.events = {});
        for (o in c)
          for (n = 0, i = c[o].length; n < i; n++) ft.event.add(e, o, c[o][n]);
      }
      Nt.hasData(t) &&
        ((a = Nt.access(t)), (l = ft.extend({}, a)), Nt.set(e, l));
    }
  }
  function D(t, e) {
    var n = e.nodeName.toLowerCase();
    "input" === n && qt.test(t.type)
      ? (e.checked = t.checked)
      : ("input" !== n && "textarea" !== n) ||
        (e.defaultValue = t.defaultValue);
  }
  function k(t, e, i, o) {
    e = ot.apply([], e);
    var s,
      r,
      a,
      l,
      c,
      u,
      h = 0,
      d = t.length,
      p = d - 1,
      f = e[0],
      g = ft.isFunction(f);
    if (g || (d > 1 && "string" == typeof f && !dt.checkClone && ee.test(f)))
      return t.each(function(n) {
        var s = t.eq(n);
        g && (e[0] = f.call(this, n, s.html())), k(s, e, i, o);
      });
    if (
      d &&
      ((s = w(e, t[0].ownerDocument, !1, t, o)),
      (r = s.firstChild),
      1 === s.childNodes.length && (s = r),
      r || o)
    ) {
      for (l = (a = ft.map(y(s, "script"), E)).length; h < d; h++)
        (c = s),
          h !== p &&
            ((c = ft.clone(c, !0, !0)), l && ft.merge(a, y(c, "script"))),
          i.call(t[h], c, h);
      if (l)
        for (u = a[a.length - 1].ownerDocument, ft.map(a, $), h = 0; h < l; h++)
          (c = a[h]),
            Yt.test(c.type || "") &&
              !Ot.access(c, "globalEval") &&
              ft.contains(u, c) &&
              (c.src
                ? ft._evalUrl && ft._evalUrl(c.src)
                : n(c.textContent.replace(ie, ""), u));
    }
    return t;
  }
  function A(t, e, n) {
    for (var i, o = e ? ft.filter(e, t) : t, s = 0; null != (i = o[s]); s++)
      n || 1 !== i.nodeType || ft.cleanData(y(i)),
        i.parentNode &&
          (n && ft.contains(i.ownerDocument, i) && b(y(i, "script")),
          i.parentNode.removeChild(i));
    return t;
  }
  function P(t, e, n) {
    var i,
      o,
      s,
      r,
      a = t.style;
    return (
      (n = n || re(t)) &&
        ("" !== (r = n.getPropertyValue(e) || n[e]) ||
          ft.contains(t.ownerDocument, t) ||
          (r = ft.style(t, e)),
        !dt.pixelMarginRight() &&
          se.test(r) &&
          oe.test(e) &&
          ((i = a.width),
          (o = a.minWidth),
          (s = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = r),
          (r = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = s))),
      void 0 !== r ? r + "" : r
    );
  }
  function L(t, e) {
    return {
      get: function() {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      }
    };
  }
  function O(t) {
    if (t in de) return t;
    for (var e = t[0].toUpperCase() + t.slice(1), n = he.length; n--; )
      if ((t = he[n] + e) in de) return t;
  }
  function N(t) {
    var e = ft.cssProps[t];
    return e || (e = ft.cssProps[t] = O(t) || t), e;
  }
  function M(t, e, n) {
    var i = zt.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }
  function j(t, e, n, i, o) {
    var s,
      r = 0;
    for (
      s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0;
      s < 4;
      s += 2
    )
      "margin" === n && (r += ft.css(t, n + Rt[s], !0, o)),
        i
          ? ("content" === n && (r -= ft.css(t, "padding" + Rt[s], !0, o)),
            "margin" !== n &&
              (r -= ft.css(t, "border" + Rt[s] + "Width", !0, o)))
          : ((r += ft.css(t, "padding" + Rt[s], !0, o)),
            "padding" !== n &&
              (r += ft.css(t, "border" + Rt[s] + "Width", !0, o)));
    return r;
  }
  function F(t, e, n) {
    var i,
      o = re(t),
      s = P(t, e, o),
      r = "border-box" === ft.css(t, "boxSizing", !1, o);
    return se.test(s)
      ? s
      : ((i = r && (dt.boxSizingReliable() || s === t.style[e])),
        "auto" === s && (s = t["offset" + e[0].toUpperCase() + e.slice(1)]),
        (s = parseFloat(s) || 0) +
          j(t, e, n || (r ? "border" : "content"), i, o) +
          "px");
  }
  function z(t, e, n, i, o) {
    return new z.prototype.init(t, e, n, i, o);
  }
  function R() {
    fe &&
      (!1 === et.hidden && t.requestAnimationFrame
        ? t.requestAnimationFrame(R)
        : t.setTimeout(R, ft.fx.interval),
      ft.fx.tick());
  }
  function H() {
    return (
      t.setTimeout(function() {
        pe = void 0;
      }),
      (pe = ft.now())
    );
  }
  function W(t, e) {
    var n,
      i = 0,
      o = { height: t };
    for (e = e ? 1 : 0; i < 4; i += 2 - e)
      (n = Rt[i]), (o["margin" + n] = o["padding" + n] = t);
    return e && (o.opacity = o.width = t), o;
  }
  function B(t, e, n) {
    for (
      var i,
        o = (U.tweeners[e] || []).concat(U.tweeners["*"]),
        s = 0,
        r = o.length;
      s < r;
      s++
    )
      if ((i = o[s].call(n, e, t))) return i;
  }
  function q(t, e) {
    var n, i, o, s, r;
    for (n in t)
      if (
        ((i = ft.camelCase(n)),
        (o = e[i]),
        (s = t[n]),
        Array.isArray(s) && ((o = s[1]), (s = t[n] = s[0])),
        n !== i && ((t[i] = s), delete t[n]),
        (r = ft.cssHooks[i]) && "expand" in r)
      ) {
        (s = r.expand(s)), delete t[i];
        for (n in s) n in t || ((t[n] = s[n]), (e[n] = o));
      } else e[i] = o;
  }
  function U(t, e, n) {
    var i,
      o,
      s = 0,
      r = U.prefilters.length,
      a = ft.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (o) return !1;
        for (
          var e = pe || H(),
            n = Math.max(0, c.startTime + c.duration - e),
            i = 1 - (n / c.duration || 0),
            s = 0,
            r = c.tweens.length;
          s < r;
          s++
        )
          c.tweens[s].run(i);
        return (
          a.notifyWith(t, [c, i, n]),
          i < 1 && r
            ? n
            : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        );
      },
      c = a.promise({
        elem: t,
        props: ft.extend({}, e),
        opts: ft.extend(
          !0,
          { specialEasing: {}, easing: ft.easing._default },
          n
        ),
        originalProperties: e,
        originalOptions: n,
        startTime: pe || H(),
        duration: n.duration,
        tweens: [],
        createTween: function(e, n) {
          var i = ft.Tween(
            t,
            c.opts,
            e,
            n,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function(e) {
          var n = 0,
            i = e ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            e
              ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
              : a.rejectWith(t, [c, e]),
            this
          );
        }
      }),
      u = c.props;
    for (q(u, c.opts.specialEasing); s < r; s++)
      if ((i = U.prefilters[s].call(c, t, u, c.opts)))
        return (
          ft.isFunction(i.stop) &&
            (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(i.stop, i)),
          i
        );
    return (
      ft.map(u, B, c),
      ft.isFunction(c.opts.start) && c.opts.start.call(t, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      ft.fx.timer(ft.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
    );
  }
  function Y(t) {
    return (t.match(Dt) || []).join(" ");
  }
  function X(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  function V(t, e, n, i) {
    var o;
    if (Array.isArray(e))
      ft.each(e, function(e, o) {
        n || Ee.test(t)
          ? i(t, o)
          : V(
              t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
              o,
              n,
              i
            );
      });
    else if (n || "object" !== ft.type(e)) i(t, e);
    else for (o in e) V(t + "[" + o + "]", e[o], n, i);
  }
  function Q(t) {
    return function(e, n) {
      "string" != typeof e && ((n = e), (e = "*"));
      var i,
        o = 0,
        s = e.toLowerCase().match(Dt) || [];
      if (ft.isFunction(n))
        for (; (i = s[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
            : (t[i] = t[i] || []).push(n);
    };
  }
  function K(t, e, n, i) {
    function o(a) {
      var l;
      return (
        (s[a] = !0),
        ft.each(t[a] || [], function(t, a) {
          var c = a(e, n, i);
          return "string" != typeof c || r || s[c]
            ? r
              ? !(l = c)
              : void 0
            : (e.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    var s = {},
      r = t === Fe;
    return o(e.dataTypes[0]) || (!s["*"] && o("*"));
  }
  function G(t, e) {
    var n,
      i,
      o = ft.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    return i && ft.extend(!0, t, i), t;
  }
  function Z(t, e, n) {
    for (var i, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
    if (i)
      for (o in a)
        if (a[o] && a[o].test(i)) {
          l.unshift(o);
          break;
        }
    if (l[0] in n) s = l[0];
    else {
      for (o in n) {
        if (!l[0] || t.converters[o + " " + l[0]]) {
          s = o;
          break;
        }
        r || (r = o);
      }
      s = s || r;
    }
    if (s) return s !== l[0] && l.unshift(s), n[s];
  }
  function J(t, e, n, i) {
    var o,
      s,
      r,
      a,
      l,
      c = {},
      u = t.dataTypes.slice();
    if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
    for (s = u.shift(); s; )
      if (
        (t.responseFields[s] && (n[t.responseFields[s]] = e),
        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = s),
        (s = u.shift()))
      )
        if ("*" === s) s = l;
        else if ("*" !== l && l !== s) {
          if (!(r = c[l + " " + s] || c["* " + s]))
            for (o in c)
              if (
                (a = o.split(" "))[1] === s &&
                (r = c[l + " " + a[0]] || c["* " + a[0]])
              ) {
                !0 === r
                  ? (r = c[o])
                  : !0 !== c[o] && ((s = a[0]), u.unshift(a[1]));
                break;
              }
          if (!0 !== r)
            if (r && t.throws) e = r(e);
            else
              try {
                e = r(e);
              } catch (t) {
                return {
                  state: "parsererror",
                  error: r ? t : "No conversion from " + l + " to " + s
                };
              }
        }
    return { state: "success", data: e };
  }
  var tt = [],
    et = t.document,
    nt = Object.getPrototypeOf,
    it = tt.slice,
    ot = tt.concat,
    st = tt.push,
    rt = tt.indexOf,
    at = {},
    lt = at.toString,
    ct = at.hasOwnProperty,
    ut = ct.toString,
    ht = ut.call(Object),
    dt = {},
    pt = "3.2.1",
    ft = function(t, e) {
      return new ft.fn.init(t, e);
    },
    gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    mt = /^-ms-/,
    vt = /-([a-z])/g,
    yt = function(t, e) {
      return e.toUpperCase();
    };
  (ft.fn = ft.prototype = {
    jquery: pt,
    constructor: ft,
    length: 0,
    toArray: function() {
      return it.call(this);
    },
    get: function(t) {
      return null == t
        ? it.call(this)
        : t < 0
        ? this[t + this.length]
        : this[t];
    },
    pushStack: function(t) {
      var e = ft.merge(this.constructor(), t);
      return (e.prevObject = this), e;
    },
    each: function(t) {
      return ft.each(this, t);
    },
    map: function(t) {
      return this.pushStack(
        ft.map(this, function(e, n) {
          return t.call(e, n, e);
        })
      );
    },
    slice: function() {
      return this.pushStack(it.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(t) {
      var e = this.length,
        n = +t + (t < 0 ? e : 0);
      return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: st,
    sort: tt.sort,
    splice: tt.splice
  }),
    (ft.extend = ft.fn.extend = function() {
      var t,
        e,
        n,
        i,
        o,
        s,
        r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
          "object" == typeof r || ft.isFunction(r) || (r = {}),
          a === l && ((r = this), a--);
        a < l;
        a++
      )
        if (null != (t = arguments[a]))
          for (e in t)
            (n = r[e]),
              (i = t[e]),
              r !== i &&
                (c && i && (ft.isPlainObject(i) || (o = Array.isArray(i)))
                  ? (o
                      ? ((o = !1), (s = n && Array.isArray(n) ? n : []))
                      : (s = n && ft.isPlainObject(n) ? n : {}),
                    (r[e] = ft.extend(c, s, i)))
                  : void 0 !== i && (r[e] = i));
      return r;
    }),
    ft.extend({
      expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
        throw new Error(t);
      },
      noop: function() {},
      isFunction: function(t) {
        return "function" === ft.type(t);
      },
      isWindow: function(t) {
        return null != t && t === t.window;
      },
      isNumeric: function(t) {
        var e = ft.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      },
      isPlainObject: function(t) {
        var e, n;
        return !(
          !t ||
          "[object Object]" !== lt.call(t) ||
          ((e = nt(t)) &&
            ("function" !=
              typeof (n = ct.call(e, "constructor") && e.constructor) ||
              ut.call(n) !== ht))
        );
      },
      isEmptyObject: function(t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function(t) {
        return null === t
          ? t + ""
          : "object" === typeof t || "function" === typeof t
          ? at[lt.call(t)] || "object"
          : typeof t;
      },
      globalEval: function(t) {
        n(t);
      },
      camelCase: function(t) {
        return t.replace(mt, "ms-").replace(vt, yt);
      },
      each: function(t, e) {
        var n,
          o = 0;
        if (i(t))
          for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++);
        else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
        return t;
      },
      trim: function(t) {
        return null === t ? "" : (t + "").replace(gt, "");
      },
      makeArray: function(t, e) {
        var n = e || [];
        return (
          null != t &&
            (i(Object(t))
              ? ft.merge(n, "string" === typeof t ? [t] : t)
              : st.call(n, t)),
          n
        );
      },
      inArray: function(t, e, n) {
        return null === e ? -1 : rt.call(e, t, n);
      },
      merge: function(t, e) {
        for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
        return (t.length = o), t;
      },
      grep: function(t, e, n) {
        for (var i = [], o = 0, s = t.length, r = !n; o < s; o++)
          !e(t[o], o) !== r && i.push(t[o]);
        return i;
      },
      map: function(t, e, n) {
        var o,
          s,
          r = 0,
          a = [];
        if (i(t))
          for (o = t.length; r < o; r++)
            null != (s = e(t[r], r, n)) && a.push(s);
        else for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
        return ot.apply([], a);
      },
      guid: 1,
      proxy: function(t, e) {
        var n, i, o;
        if (
          ("string" === typeof e && ((n = t[e]), (e = t), (t = n)),
          ft.isFunction(t))
        )
          return (
            (i = it.call(arguments, 2)),
            (o = function() {
              return t.apply(e || this, i.concat(it.call(arguments)));
            }),
            (o.guid = t.guid = t.guid || ft.guid++),
            o
          );
      },
      now: Date.now,
      support: dt
    }),
    "function" === typeof Symbol &&
      (ft.fn[Symbol.iterator] = tt[Symbol.iterator]),
    ft.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function(t, e) {
        at["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var bt = (function(t) {
    function e(t, e, n, i) {
      var o,
        s,
        r,
        a,
        l,
        u,
        d,
        p = e && e.ownerDocument,
        f = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== f && 9 !== f && 11 !== f))
      )
        return n;
      if (
        !i &&
        ((e ? e.ownerDocument || e : z) !== A && k(e), (e = e || A), L)
      ) {
        if (11 !== f && (l = gt.exec(t)))
          if ((o = l[1])) {
            if (9 === f) {
              if (!(r = e.getElementById(o))) return n;
              if (r.id === o) return n.push(r), n;
            } else if (p && (r = p.getElementById(o)) && j(e, r) && r.id === o)
              return n.push(r), n;
          } else {
            if (l[2]) return K.apply(n, e.getElementsByTagName(t)), n;
            if (
              (o = l[3]) &&
              w.getElementsByClassName &&
              e.getElementsByClassName
            )
              return K.apply(n, e.getElementsByClassName(o)), n;
          }
        if (w.qsa && !q[t + " "] && (!O || !O.test(t))) {
          if (1 !== f) (p = e), (d = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (a = e.getAttribute("id"))
                ? (a = a.replace(bt, wt))
                : e.setAttribute("id", (a = F)),
                s = (u = T(t)).length;
              s--;

            )
              u[s] = "#" + a + " " + h(u[s]);
            (d = u.join(",")), (p = (mt.test(t) && c(e.parentNode)) || e);
          }
          if (d)
            try {
              return K.apply(n, p.querySelectorAll(d)), n;
            } catch (t) {
            } finally {
              a === F && e.removeAttribute("id");
            }
        }
      }
      return E(t.replace(st, "$1"), e, n, i);
    }
    function n() {
      function t(n, i) {
        return (
          e.push(n + " ") > _.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      var e = [];
      return t;
    }
    function i(t) {
      return (t[F] = !0), t;
    }
    function o(t) {
      var e = A.createElement("fieldset");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function s(t, e) {
      for (var n = t.split("|"), i = n.length; i--; ) _.attrHandle[n[i]] = e;
    }
    function r(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function a(t) {
      return function(e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && xt(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function l(t) {
      return i(function(e) {
        return (
          (e = +e),
          i(function(n, i) {
            for (var o, s = t([], n.length, e), r = s.length; r--; )
              n[(o = s[r])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function c(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    function u() {}
    function h(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i;
    }
    function d(t, e, n) {
      var i = e.dir,
        o = e.next,
        s = o || i,
        r = n && "parentNode" === s,
        a = H++;
      return e.first
        ? function(e, n, o) {
            for (; (e = e[i]); ) if (1 === e.nodeType || r) return t(e, n, o);
            return !1;
          }
        : function(e, n, l) {
            var c,
              u,
              h,
              d = [R, a];
            if (l) {
              for (; (e = e[i]); )
                if ((1 === e.nodeType || r) && t(e, n, l)) return !0;
            } else
              for (; (e = e[i]); )
                if (1 === e.nodeType || r)
                  if (
                    ((h = e[F] || (e[F] = {})),
                    (u = h[e.uniqueID] || (h[e.uniqueID] = {})),
                    o && o === e.nodeName.toLowerCase())
                  )
                    e = e[i] || e;
                  else {
                    if ((c = u[s]) && c[0] === R && c[1] === a)
                      return (d[2] = c[2]);
                    if (((u[s] = d), (d[2] = t(e, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function p(t) {
      return t.length > 1
        ? function(e, n, i) {
            for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
            return !0;
          }
        : t[0];
    }
    function f(t, n, i) {
      for (var o = 0, s = n.length; o < s; o++) e(t, n[o], i);
      return i;
    }
    function g(t, e, n, i, o) {
      for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
        (s = t[a]) && ((n && !n(s, i, o)) || (r.push(s), c && e.push(a)));
      return r;
    }
    function m(t, e, n, o, s, r) {
      return (
        o && !o[F] && (o = m(o)),
        s && !s[F] && (s = m(s, r)),
        i(function(i, r, a, l) {
          var c,
            u,
            h,
            d = [],
            p = [],
            m = r.length,
            v = i || f(e || "*", a.nodeType ? [a] : a, []),
            y = !t || (!i && e) ? v : g(v, d, t, a, l),
            b = n ? (s || (i ? t : m || o) ? [] : r) : y;
          if ((n && n(y, b, a, l), o))
            for (c = g(b, p), o(c, [], a, l), u = c.length; u--; )
              (h = c[u]) && (b[p[u]] = !(y[p[u]] = h));
          if (i) {
            if (s || t) {
              if (s) {
                for (c = [], u = b.length; u--; )
                  (h = b[u]) && c.push((y[u] = h));
                s(null, (b = []), c, l);
              }
              for (u = b.length; u--; )
                (h = b[u]) &&
                  (c = s ? Z(i, h) : d[u]) > -1 &&
                  (i[c] = !(r[c] = h));
            }
          } else (b = g(b === r ? b.splice(m, b.length) : b)), s ? s(null, r, b, l) : K.apply(r, b);
        })
      );
    }
    function v(t) {
      for (
        var e,
          n,
          i,
          o = t.length,
          s = _.relative[t[0].type],
          r = s || _.relative[" "],
          a = s ? 1 : 0,
          l = d(
            function(t) {
              return t === e;
            },
            r,
            !0
          ),
          c = d(
            function(t) {
              return Z(e, t) > -1;
            },
            r,
            !0
          ),
          u = [
            function(t, n, i) {
              var o =
                (!s && (i || n !== $)) ||
                ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
              return (e = null), o;
            }
          ];
        a < o;
        a++
      )
        if ((n = _.relative[t[a].type])) u = [d(p(u), n)];
        else {
          if ((n = _.filter[t[a].type].apply(null, t[a].matches))[F]) {
            for (i = ++a; i < o && !_.relative[t[i].type]; i++);
            return m(
              a > 1 && p(u),
              a > 1 &&
                h(
                  t
                    .slice(0, a - 1)
                    .concat({ value: " " === t[a - 2].type ? "*" : "" })
                ).replace(st, "$1"),
              n,
              a < i && v(t.slice(a, i)),
              i < o && v((t = t.slice(i))),
              i < o && h(t)
            );
          }
          u.push(n);
        }
      return p(u);
    }
    function y(t, n) {
      var o = n.length > 0,
        s = t.length > 0,
        r = function(i, r, a, l, c) {
          var u,
            h,
            d,
            p = 0,
            f = "0",
            m = i && [],
            v = [],
            y = $,
            b = i || (s && _.find.TAG("*", c)),
            w = (R += null == y ? 1 : Math.random() || 0.1),
            x = b.length;
          for (
            c && ($ = r === A || r || c);
            f !== x && null != (u = b[f]);
            f++
          ) {
            if (s && u) {
              for (
                h = 0, r || u.ownerDocument === A || (k(u), (a = !L));
                (d = t[h++]);

              )
                if (d(u, r || A, a)) {
                  l.push(u);
                  break;
                }
              c && (R = w);
            }
            o && ((u = !d && u) && p--, i && m.push(u));
          }
          if (((p += f), o && f !== p)) {
            for (h = 0; (d = n[h++]); ) d(m, v, r, a);
            if (i) {
              if (p > 0) for (; f--; ) m[f] || v[f] || (v[f] = V.call(l));
              v = g(v);
            }
            K.apply(l, v),
              c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l);
          }
          return c && ((R = w), ($ = y)), m;
        };
      return o ? i(r) : r;
    }
    var b,
      w,
      _,
      x,
      C,
      T,
      S,
      E,
      $,
      I,
      D,
      k,
      A,
      P,
      L,
      O,
      N,
      M,
      j,
      F = "sizzle" + 1 * new Date(),
      z = t.document,
      R = 0,
      H = 0,
      W = n(),
      B = n(),
      q = n(),
      U = function(t, e) {
        return t === e && (D = !0), 0;
      },
      Y = {}.hasOwnProperty,
      X = [],
      V = X.pop,
      Q = X.push,
      K = X.push,
      G = X.slice,
      Z = function(t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      tt = "[\\x20\\t\\r\\n\\f]",
      et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      nt =
        "\\[" +
        tt +
        "*(" +
        et +
        ")(?:" +
        tt +
        "*([*^$|!~]?=)" +
        tt +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        et +
        "))|)" +
        tt +
        "*\\]",
      it =
        ":(" +
        et +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        nt +
        ")*)|.*)\\)|)",
      ot = new RegExp(tt + "+", "g"),
      st = new RegExp(
        "^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$",
        "g"
      ),
      rt = new RegExp("^" + tt + "*," + tt + "*"),
      at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
      lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
      ct = new RegExp(it),
      ut = new RegExp("^" + et + "$"),
      ht = {
        ID: new RegExp("^#(" + et + ")"),
        CLASS: new RegExp("^\\.(" + et + ")"),
        TAG: new RegExp("^(" + et + "|[*])"),
        ATTR: new RegExp("^" + nt),
        PSEUDO: new RegExp("^" + it),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            tt +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            tt +
            "*(?:([+-]|)" +
            tt +
            "*(\\d+)|))" +
            tt +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            tt +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            tt +
            "*((?:-\\d)?\\d*)" +
            tt +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      dt = /^(?:input|select|textarea|button)$/i,
      pt = /^h\d$/i,
      ft = /^[^{]+\{\s*\[native \w/,
      gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      mt = /[+~]/,
      vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
      yt = function(t, e, n) {
        var i = "0x" + e - 65536;
        return i !== i || n
          ? e
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      wt = function(t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      _t = function() {
        k();
      },
      xt = d(
        function(t) {
          return !0 === t.disabled && ("form" in t || "label" in t);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      K.apply((X = G.call(z.childNodes)), z.childNodes),
        X[z.childNodes.length].nodeType;
    } catch (t) {
      K = {
        apply: X.length
          ? function(t, e) {
              Q.apply(t, G.call(e));
            }
          : function(t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            }
      };
    }
    (w = e.support = {}),
      (C = e.isXML = function(t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
      (k = e.setDocument = function(t) {
        var e,
          n,
          i = t ? t.ownerDocument || t : z;
        return i !== A && 9 === i.nodeType && i.documentElement
          ? ((A = i),
            (P = A.documentElement),
            (L = !C(A)),
            z !== A &&
              (n = A.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", _t, !1)
                : n.attachEvent && n.attachEvent("onunload", _t)),
            (w.attributes = o(function(t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (w.getElementsByTagName = o(function(t) {
              return (
                t.appendChild(A.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (w.getElementsByClassName = ft.test(A.getElementsByClassName)),
            (w.getById = o(function(t) {
              return (
                (P.appendChild(t).id = F),
                !A.getElementsByName || !A.getElementsByName(F).length
              );
            })),
            w.getById
              ? ((_.filter.ID = function(t) {
                  var e = t.replace(vt, yt);
                  return function(t) {
                    return t.getAttribute("id") === e;
                  };
                }),
                (_.find.ID = function(t, e) {
                  if (void 0 !== e.getElementById && L) {
                    var n = e.getElementById(t);
                    return n ? [n] : [];
                  }
                }))
              : ((_.filter.ID = function(t) {
                  var e = t.replace(vt, yt);
                  return function(t) {
                    var n =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e;
                  };
                }),
                (_.find.ID = function(t, e) {
                  if (void 0 !== e.getElementById && L) {
                    var n,
                      i,
                      o,
                      s = e.getElementById(t);
                    if (s) {
                      if ((n = s.getAttributeNode("id")) && n.value === t)
                        return [s];
                      for (o = e.getElementsByName(t), i = 0; (s = o[i++]); )
                        if ((n = s.getAttributeNode("id")) && n.value === t)
                          return [s];
                    }
                    return [];
                  }
                })),
            (_.find.TAG = w.getElementsByTagName
              ? function(t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : w.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function(t, e) {
                  var n,
                    i = [],
                    o = 0,
                    s = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return s;
                }),
            (_.find.CLASS =
              w.getElementsByClassName &&
              function(t, e) {
                if (void 0 !== e.getElementsByClassName && L)
                  return e.getElementsByClassName(t);
              }),
            (N = []),
            (O = []),
            (w.qsa = ft.test(A.querySelectorAll)) &&
              (o(function(t) {
                (P.appendChild(t).innerHTML =
                  "<a id='" +
                  F +
                  "'></a><select id='" +
                  F +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    O.push("[*^$]=" + tt + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    O.push("\\[" + tt + "*(?:value|" + J + ")"),
                  t.querySelectorAll("[id~=" + F + "-]").length || O.push("~="),
                  t.querySelectorAll(":checked").length || O.push(":checked"),
                  t.querySelectorAll("a#" + F + "+*").length ||
                    O.push(".#.+[+~]");
              }),
              o(function(t) {
                t.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = A.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    O.push("name" + tt + "*[*^$|!~]?="),
                  2 !== t.querySelectorAll(":enabled").length &&
                    O.push(":enabled", ":disabled"),
                  (P.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    O.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  O.push(",.*:");
              })),
            (w.matchesSelector = ft.test(
              (M =
                P.matches ||
                P.webkitMatchesSelector ||
                P.mozMatchesSelector ||
                P.oMatchesSelector ||
                P.msMatchesSelector)
            )) &&
              o(function(t) {
                (w.disconnectedMatch = M.call(t, "*")),
                  M.call(t, "[s!='']:x"),
                  N.push("!=", it);
              }),
            (O = O.length && new RegExp(O.join("|"))),
            (N = N.length && new RegExp(N.join("|"))),
            (e = ft.test(P.compareDocumentPosition)),
            (j =
              e || ft.test(P.contains)
                ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode;
                    return (
                      t === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(i))
                      )
                    );
                  }
                : function(t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (U = e
              ? function(t, e) {
                  if (t === e) return (D = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!w.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t === A || (t.ownerDocument === z && j(z, t))
                        ? -1
                        : e === A || (e.ownerDocument === z && j(z, e))
                        ? 1
                        : I
                        ? Z(I, t) - Z(I, e)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function(t, e) {
                  if (t === e) return (D = !0), 0;
                  var n,
                    i = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                  if (!o || !s)
                    return t === A
                      ? -1
                      : e === A
                      ? 1
                      : o
                      ? -1
                      : s
                      ? 1
                      : I
                      ? Z(I, t) - Z(I, e)
                      : 0;
                  if (o === s) return r(t, e);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (n = e; (n = n.parentNode); ) l.unshift(n);
                  for (; a[i] === l[i]; ) i++;
                  return i
                    ? r(a[i], l[i])
                    : a[i] === z
                    ? -1
                    : l[i] === z
                    ? 1
                    : 0;
                }),
            A)
          : A;
      }),
      (e.matches = function(t, n) {
        return e(t, null, null, n);
      }),
      (e.matchesSelector = function(t, n) {
        if (
          ((t.ownerDocument || t) !== A && k(t),
          (n = n.replace(lt, "='$1']")),
          w.matchesSelector &&
            L &&
            !q[n + " "] &&
            (!N || !N.test(n)) &&
            (!O || !O.test(n)))
        )
          try {
            var i = M.call(t, n);
            if (
              i ||
              w.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return i;
          } catch (t) {}
        return e(n, A, null, [t]).length > 0;
      }),
      (e.contains = function(t, e) {
        return (t.ownerDocument || t) !== A && k(t), j(t, e);
      }),
      (e.attr = function(t, e) {
        (t.ownerDocument || t) !== A && k(t);
        var n = _.attrHandle[e.toLowerCase()],
          i = n && Y.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
        return void 0 !== i
          ? i
          : w.attributes || !L
          ? t.getAttribute(e)
          : (i = t.getAttributeNode(e)) && i.specified
          ? i.value
          : null;
      }),
      (e.escape = function(t) {
        return (t + "").replace(bt, wt);
      }),
      (e.error = function(t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (e.uniqueSort = function(t) {
        var e,
          n = [],
          i = 0,
          o = 0;
        if (
          ((D = !w.detectDuplicates),
          (I = !w.sortStable && t.slice(0)),
          t.sort(U),
          D)
        ) {
          for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
          for (; i--; ) t.splice(n[i], 1);
        }
        return (I = null), t;
      }),
      (x = e.getText = function(t) {
        var e,
          n = "",
          i = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += x(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[i++]); ) n += x(e);
        return n;
      }),
      ((_ = e.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: ht,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(t) {
            return (
              (t[1] = t[1].replace(vt, yt)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function(t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || e.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && e.error(t[0]),
              t
            );
          },
          PSEUDO: function(t) {
            var e,
              n = !t[6] && t[2];
            return ht.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : n &&
                    ct.test(n) &&
                    (e = T(n, !0)) &&
                    (e = n.indexOf(")", n.length - e) - n.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                t.slice(0, 3));
          }
        },
        filter: {
          TAG: function(t) {
            var e = t.replace(vt, yt).toLowerCase();
            return "*" === t
              ? function() {
                  return !0;
                }
              : function(t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function(t) {
            var e = W[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) &&
                W(t, function(t) {
                  return e.test(
                    ("string" === typeof t.className && t.className) ||
                      (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function(t, n, i) {
            return function(o) {
              var s = e.attr(o, t);
              return null == s
                ? "!=" === n
                : !n ||
                    ((s += ""),
                    "=" === n
                      ? s === i
                      : "!=" === n
                      ? s !== i
                      : "^=" === n
                      ? i && 0 === s.indexOf(i)
                      : "*=" === n
                      ? i && s.indexOf(i) > -1
                      : "$=" === n
                      ? i && s.slice(-i.length) === i
                      : "~=" === n
                      ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1
                      : "|=" === n &&
                        (s === i || s.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function(t, e, n, i, o) {
            var s = "nth" !== t.slice(0, 3),
              r = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === i && 0 === o
              ? function(t) {
                  return !!t.parentNode;
                }
              : function(e, n, l) {
                  var c,
                    u,
                    h,
                    d,
                    p,
                    f,
                    g = s !== r ? "nextSibling" : "previousSibling",
                    m = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (m) {
                    if (s) {
                      for (; g; ) {
                        for (d = e; (d = d[g]); )
                          if (
                            a
                              ? d.nodeName.toLowerCase() === v
                              : 1 === d.nodeType
                          )
                            return !1;
                        f = g = "only" === t && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
                      for (
                        b =
                          (p =
                            (c =
                              (u =
                                (h = (d = m)[F] || (d[F] = {}))[d.uniqueID] ||
                                (h[d.uniqueID] = {}))[t] || [])[0] === R &&
                            c[1]) && c[2],
                          d = p && m.childNodes[p];
                        (d = (++p && d && d[g]) || (b = p = 0) || f.pop());

                      )
                        if (1 === d.nodeType && ++b && d === e) {
                          u[t] = [R, p, b];
                          break;
                        }
                    } else if (
                      (y &&
                        ((d = e),
                        (h = d[F] || (d[F] = {})),
                        (u = h[d.uniqueID] || (h[d.uniqueID] = {})),
                        (c = u[t] || []),
                        (p = c[0] === R && c[1]),
                        (b = p)),
                      !1 === b)
                    )
                      for (
                        ;
                        (d = (++p && d && d[g]) || (b = p = 0) || f.pop()) &&
                        ((a
                          ? d.nodeName.toLowerCase() !== v
                          : 1 !== d.nodeType) ||
                          !++b ||
                          (y &&
                            ((h = d[F] || (d[F] = {})),
                            (u = h[d.uniqueID] || (h[d.uniqueID] = {})),
                            (u[t] = [R, b])),
                          d !== e));

                      );
                    return (b -= o) === i || (b % i === 0 && b / i >= 0);
                  }
                };
          },
          PSEUDO: function(t, n) {
            var o,
              s =
                _.pseudos[t] ||
                _.setFilters[t.toLowerCase()] ||
                e.error("unsupported pseudo: " + t);
            return s[F]
              ? s(n)
              : s.length > 1
              ? ((o = [t, t, "", n]),
                _.setFilters.hasOwnProperty(t.toLowerCase())
                  ? i(function(t, e) {
                      for (var i, o = s(t, n), r = o.length; r--; )
                        (i = Z(t, o[r])), (t[i] = !(e[i] = o[r]));
                    })
                  : function(t) {
                      return s(t, 0, o);
                    })
              : s;
          }
        },
        pseudos: {
          not: i(function(t) {
            var e = [],
              n = [],
              o = S(t.replace(st, "$1"));
            return o[F]
              ? i(function(t, e, n, i) {
                  for (var s, r = o(t, null, i, []), a = t.length; a--; )
                    (s = r[a]) && (t[a] = !(e[a] = s));
                })
              : function(t, i, s) {
                  return (e[0] = t), o(e, null, s, n), (e[0] = null), !n.pop();
                };
          }),
          has: i(function(t) {
            return function(n) {
              return e(t, n).length > 0;
            };
          }),
          contains: i(function(t) {
            return (
              (t = t.replace(vt, yt)),
              function(e) {
                return (e.textContent || e.innerText || x(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: i(function(t) {
            return (
              ut.test(t || "") || e.error("unsupported lang: " + t),
              (t = t.replace(vt, yt).toLowerCase()),
              function(e) {
                var n;
                do {
                  if (
                    (n = L
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function(e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id;
          },
          root: function(t) {
            return t === P;
          },
          focus: function(t) {
            return (
              t === A.activeElement &&
              (!A.hasFocus || A.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: a(!1),
          disabled: a(!0),
          checked: function(t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function(t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function(t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function(t) {
            return !_.pseudos.empty(t);
          },
          header: function(t) {
            return pt.test(t.nodeName);
          },
          input: function(t) {
            return dt.test(t.nodeName);
          },
          button: function(t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function(t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: l(function() {
            return [0];
          }),
          last: l(function(t, e) {
            return [e - 1];
          }),
          eq: l(function(t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: l(function(t, e) {
            for (var n = 0; n < e; n += 2) t.push(n);
            return t;
          }),
          odd: l(function(t, e) {
            for (var n = 1; n < e; n += 2) t.push(n);
            return t;
          }),
          lt: l(function(t, e, n) {
            for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
            return t;
          }),
          gt: l(function(t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
            return t;
          })
        }
      }).pseudos.nth = _.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      _.pseudos[b] = (function(t) {
        return function(e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      })(b);
    for (b in { submit: !0, reset: !0 })
      _.pseudos[b] = (function(t) {
        return function(e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      })(b);
    return (
      (u.prototype = _.filters = _.pseudos),
      (_.setFilters = new u()),
      (T = e.tokenize = function(t, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c,
          u = B[t + " "];
        if (u) return n ? 0 : u.slice(0);
        for (a = t, l = [], c = _.preFilter; a; ) {
          (i && !(o = rt.exec(a))) ||
            (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
            (i = !1),
            (o = at.exec(a)) &&
              ((i = o.shift()),
              s.push({ value: i, type: o[0].replace(st, " ") }),
              (a = a.slice(i.length)));
          for (r in _.filter)
            !(o = ht[r].exec(a)) ||
              (c[r] && !(o = c[r](o))) ||
              ((i = o.shift()),
              s.push({ value: i, type: r, matches: o }),
              (a = a.slice(i.length)));
          if (!i) break;
        }
        return n ? a.length : a ? e.error(t) : B(t, l).slice(0);
      }),
      (S = e.compile = function(t, e) {
        var n,
          i = [],
          o = [],
          s = q[t + " "];
        if (!s) {
          for (e || (e = T(t)), n = e.length; n--; )
            (s = v(e[n]))[F] ? i.push(s) : o.push(s);
          (s = q(t, y(o, i))).selector = t;
        }
        return s;
      }),
      (E = e.select = function(t, e, n, i) {
        var o,
          s,
          r,
          a,
          l,
          u = "function" === typeof t && t,
          d = !i && T((t = u.selector || t));
        if (((n = n || []), 1 === d.length)) {
          if (
            (s = d[0] = d[0].slice(0)).length > 2 &&
            "ID" === (r = s[0]).type &&
            9 === e.nodeType &&
            L &&
            _.relative[s[1].type]
          ) {
            if (!(e = (_.find.ID(r.matches[0].replace(vt, yt), e) || [])[0]))
              return n;
            u && (e = e.parentNode), (t = t.slice(s.shift().value.length));
          }
          for (
            o = ht.needsContext.test(t) ? 0 : s.length;
            o-- && ((r = s[o]), !_.relative[(a = r.type)]);

          )
            if (
              (l = _.find[a]) &&
              (i = l(
                r.matches[0].replace(vt, yt),
                (mt.test(s[0].type) && c(e.parentNode)) || e
              ))
            ) {
              if ((s.splice(o, 1), !(t = i.length && h(s))))
                return K.apply(n, i), n;
              break;
            }
        }
        return (
          (u || S(t, d))(
            i,
            e,
            !L,
            n,
            !e || (mt.test(t) && c(e.parentNode)) || e
          ),
          n
        );
      }),
      (w.sortStable =
        F.split("")
          .sort(U)
          .join("") === F),
      (w.detectDuplicates = !!D),
      k(),
      (w.sortDetached = o(function(t) {
        return 1 & t.compareDocumentPosition(A.createElement("fieldset"));
      })),
      o(function(t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        s("type|href|height|width", function(t, e, n) {
          if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        o(function(t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        s("value", function(t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      o(function(t) {
        return null === t.getAttribute("disabled");
      }) ||
        s(J, function(t, e, n) {
          var i;
          if (!n)
            return !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
        }),
      e
    );
  })(t);
  (ft.find = bt),
    (ft.expr = bt.selectors),
    (ft.expr[":"] = ft.expr.pseudos),
    (ft.uniqueSort = ft.unique = bt.uniqueSort),
    (ft.text = bt.getText),
    (ft.isXMLDoc = bt.isXML),
    (ft.contains = bt.contains),
    (ft.escapeSelector = bt.escape);
  var wt = function(t, e, n) {
      for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (o && ft(t).is(n)) break;
          i.push(t);
        }
      return i;
    },
    _t = function(t, e) {
      for (var n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
    xt = ft.expr.match.needsContext,
    Ct = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Tt = /^.[^:#\[\.,]*$/;
  (ft.filter = function(t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? ft.find.matchesSelector(i, t)
          ? [i]
          : []
        : ft.find.matches(
            t,
            ft.grep(e, function(t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    ft.fn.extend({
      find: function(t) {
        var e,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof t)
          return this.pushStack(
            ft(t).filter(function() {
              for (e = 0; e < i; e++) if (ft.contains(o[e], this)) return !0;
            })
          );
        for (n = this.pushStack([]), e = 0; e < i; e++) ft.find(t, o[e], n);
        return i > 1 ? ft.uniqueSort(n) : n;
      },
      filter: function(t) {
        return this.pushStack(s(this, t || [], !1));
      },
      not: function(t) {
        return this.pushStack(s(this, t || [], !0));
      },
      is: function(t) {
        return !!s(
          this,
          "string" == typeof t && xt.test(t) ? ft(t) : t || [],
          !1
        ).length;
      }
    });
  var St,
    Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ft.fn.init = function(t, e, n) {
    var i, o;
    if (!t) return this;
    if (((n = n || St), "string" === typeof t)) {
      if (
        !(i =
          "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
            ? [null, t, null]
            : Et.exec(t)) ||
        (!i[1] && e)
      )
        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
      if (i[1]) {
        if (
          ((e = e instanceof ft ? e[0] : e),
          ft.merge(
            this,
            ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)
          ),
          Ct.test(i[1]) && ft.isPlainObject(e))
        )
          for (i in e)
            ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
        return this;
      }
      return (
        (o = et.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
        this
      );
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : ft.isFunction(t)
      ? void 0 !== n.ready
        ? n.ready(t)
        : t(ft)
      : ft.makeArray(t, this);
  }).prototype = ft.fn),
    (St = ft(et));
  var $t = /^(?:parents|prev(?:Until|All))/,
    It = { children: !0, contents: !0, next: !0, prev: !0 };
  ft.fn.extend({
    has: function(t) {
      var e = ft(t, this),
        n = e.length;
      return this.filter(function() {
        for (var t = 0; t < n; t++) if (ft.contains(this, e[t])) return !0;
      });
    },
    closest: function(t, e) {
      var n,
        i = 0,
        o = this.length,
        s = [],
        r = "string" != typeof t && ft(t);
      if (!xt.test(t))
        for (; i < o; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? r.index(n) > -1
                : 1 === n.nodeType && ft.find.matchesSelector(n, t))
            ) {
              s.push(n);
              break;
            }
      return this.pushStack(s.length > 1 ? ft.uniqueSort(s) : s);
    },
    index: function(t) {
      return t
        ? "string" === typeof t
          ? rt.call(ft(t), this[0])
          : rt.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(t, e) {
      return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))));
    },
    addBack: function(t) {
      return this.add(null === t ? this.prevObject : this.prevObject.filter(t));
    }
  }),
    ft.each(
      {
        parent: function(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
          return wt(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
          return wt(t, "parentNode", n);
        },
        next: function(t) {
          return r(t, "nextSibling");
        },
        prev: function(t) {
          return r(t, "previousSibling");
        },
        nextAll: function(t) {
          return wt(t, "nextSibling");
        },
        prevAll: function(t) {
          return wt(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
          return wt(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
          return wt(t, "previousSibling", n);
        },
        siblings: function(t) {
          return _t((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
          return _t(t.firstChild);
        },
        contents: function(t) {
          return o(t, "iframe")
            ? t.contentDocument
            : (o(t, "template") && (t = t.content || t),
              ft.merge([], t.childNodes));
        }
      },
      function(t, e) {
        ft.fn[t] = function(n, i) {
          var o = ft.map(this, e, n);
          return (
            "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = ft.filter(i, o)),
            this.length > 1 &&
              (It[t] || ft.uniqueSort(o), $t.test(t) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var Dt = /[^\x20\t\r\n\f]+/g;
  (ft.Callbacks = function(t) {
    t = "string" === typeof t ? a(t) : ft.extend({}, t);
    var e,
      n,
      i,
      o,
      s = [],
      r = [],
      l = -1,
      c = function() {
        for (o = o || t.once, i = e = !0; r.length; l = -1)
          for (n = r.shift(); ++l < s.length; )
            !1 === s[l].apply(n[0], n[1]) &&
              t.stopOnFalse &&
              ((l = s.length), (n = !1));
        t.memory || (n = !1), (e = !1), o && (s = n ? [] : "");
      },
      u = {
        add: function() {
          return (
            s &&
              (n && !e && ((l = s.length - 1), r.push(n)),
              (function e(n) {
                ft.each(n, function(n, i) {
                  ft.isFunction(i)
                    ? (t.unique && u.has(i)) || s.push(i)
                    : i && i.length && "string" !== ft.type(i) && e(i);
                });
              })(arguments),
              n && !e && c()),
            this
          );
        },
        remove: function() {
          return (
            ft.each(arguments, function(t, e) {
              for (var n; (n = ft.inArray(e, s, n)) > -1; )
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function(t) {
          return t ? ft.inArray(t, s) > -1 : s.length > 0;
        },
        empty: function() {
          return s && (s = []), this;
        },
        disable: function() {
          return (o = r = []), (s = n = ""), this;
        },
        disabled: function() {
          return !s;
        },
        lock: function() {
          return (o = r = []), n || e || (s = n = ""), this;
        },
        locked: function() {
          return !!o;
        },
        fireWith: function(t, n) {
          return (
            o ||
              ((n = n || []),
              (n = [t, n.slice ? n.slice() : n]),
              r.push(n),
              e || c()),
            this
          );
        },
        fire: function() {
          return u.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!i;
        }
      };
    return u;
  }),
    ft.extend({
      Deferred: function(e) {
        var n = [
            [
              "notify",
              "progress",
              ft.Callbacks("memory"),
              ft.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              ft.Callbacks("once memory"),
              ft.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              ft.Callbacks("once memory"),
              ft.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ],
          i = "pending",
          o = {
            state: function() {
              return i;
            },
            always: function() {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function(t) {
              return o.then(null, t);
            },
            pipe: function() {
              var t = arguments;
              return ft
                .Deferred(function(e) {
                  ft.each(n, function(n, i) {
                    var o = ft.isFunction(t[i[4]]) && t[i[4]];
                    s[i[1]](function() {
                      var t = o && o.apply(this, arguments);
                      t && ft.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(e.notify)
                            .done(e.resolve)
                            .fail(e.reject)
                        : e[i[0] + "With"](this, o ? [t] : arguments);
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            then: function(e, i, o) {
              function s(e, n, i, o) {
                return function() {
                  var a = this,
                    u = arguments,
                    h = function() {
                      var t, h;
                      if (!(e < r)) {
                        if ((t = i.apply(a, u)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (h =
                          t &&
                          ("object" === typeof t || "function" === typeof t) &&
                          t.then),
                          ft.isFunction(h)
                            ? o
                              ? h.call(t, s(r, n, l, o), s(r, n, c, o))
                              : (r++,
                                h.call(
                                  t,
                                  s(r, n, l, o),
                                  s(r, n, c, o),
                                  s(r, n, l, n.notifyWith)
                                ))
                            : (i !== l && ((a = void 0), (u = [t])),
                              (o || n.resolveWith)(a, u));
                      }
                    },
                    d = o
                      ? h
                      : function() {
                          try {
                            h();
                          } catch (t) {
                            ft.Deferred.exceptionHook &&
                              ft.Deferred.exceptionHook(t, d.stackTrace),
                              e + 1 >= r &&
                                (i !== c && ((a = void 0), (u = [t])),
                                n.rejectWith(a, u));
                          }
                        };
                  e
                    ? d()
                    : (ft.Deferred.getStackHook &&
                        (d.stackTrace = ft.Deferred.getStackHook()),
                      t.setTimeout(d));
                };
              }
              var r = 0;
              return ft
                .Deferred(function(t) {
                  n[0][3].add(s(0, t, ft.isFunction(o) ? o : l, t.notifyWith)),
                    n[1][3].add(s(0, t, ft.isFunction(e) ? e : l)),
                    n[2][3].add(s(0, t, ft.isFunction(i) ? i : c));
                })
                .promise();
            },
            promise: function(t) {
              return null != t ? ft.extend(t, o) : o;
            }
          },
          s = {};
        return (
          ft.each(n, function(t, e) {
            var r = e[2],
              a = e[5];
            (o[e[1]] = r.add),
              a &&
                r.add(
                  function() {
                    i = a;
                  },
                  n[3 - t][2].disable,
                  n[0][2].lock
                ),
              r.add(e[3].fire),
              (s[e[0]] = function() {
                return (
                  s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[e[0] + "With"] = r.fireWith);
          }),
          o.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function(t) {
        var e = arguments.length,
          n = e,
          i = Array(n),
          o = it.call(arguments),
          s = ft.Deferred(),
          r = function(t) {
            return function(n) {
              (i[t] = this),
                (o[t] = arguments.length > 1 ? it.call(arguments) : n),
                --e || s.resolveWith(i, o);
            };
          };
        if (
          e <= 1 &&
          (u(t, s.done(r(n)).resolve, s.reject, !e),
          "pending" === s.state() || ft.isFunction(o[n] && o[n].then))
        )
          return s.then();
        for (; n--; ) u(o[n], r(n), s.reject);
        return s.promise();
      }
    });
  var kt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ft.Deferred.exceptionHook = function(e, n) {
    t.console &&
      t.console.warn &&
      e &&
      kt.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }),
    (ft.readyException = function(e) {
      t.setTimeout(function() {
        throw e;
      });
    });
  var At = ft.Deferred();
  (ft.fn.ready = function(t) {
    return (
      At.then(t).catch(function(t) {
        ft.readyException(t);
      }),
      this
    );
  }),
    ft.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(t) {
        (!0 === t ? --ft.readyWait : ft.isReady) ||
          ((ft.isReady = !0),
          (!0 !== t && --ft.readyWait > 0) || At.resolveWith(et, [ft]));
      }
    }),
    (ft.ready.then = At.then),
    "complete" === et.readyState ||
    ("loading" !== et.readyState && !et.documentElement.doScroll)
      ? t.setTimeout(ft.ready)
      : (et.addEventListener("DOMContentLoaded", h),
        t.addEventListener("load", h));
  var Pt = function(t, e, n, i, o, s, r) {
      var a = 0,
        l = t.length,
        c = null === n;
      if ("object" === ft.type(n)) {
        o = !0;
        for (a in n) Pt(t, e, a, n[a], !0, s, r);
      } else if (
        void 0 !== i &&
        ((o = !0),
        ft.isFunction(i) || (r = !0),
        c &&
          (r
            ? (e.call(t, i), (e = null))
            : ((c = e),
              (e = function(t, e, n) {
                return c.call(ft(t), n);
              }))),
        e)
      )
        for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
      return o ? t : c ? e.call(t) : l ? e(t[0], n) : s;
    },
    Lt = function(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  (d.uid = 1),
    (d.prototype = {
      cache: function(t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            Lt(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                  }))),
          e
        );
      },
      set: function(t, e, n) {
        var i,
          o = this.cache(t);
        if ("string" === typeof e) o[ft.camelCase(e)] = n;
        else for (i in e) o[ft.camelCase(i)] = e[i];
        return o;
      },
      get: function(t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][ft.camelCase(e)];
      },
      access: function(t, e, n) {
        return void 0 === e || (e && "string" === typeof e && void 0 === n)
          ? this.get(t, e)
          : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function(t, e) {
        var n,
          i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== e) {
            Array.isArray(e)
              ? (e = e.map(ft.camelCase))
              : ((e = ft.camelCase(e)), (e = e in i ? [e] : e.match(Dt) || [])),
              (n = e.length);
            for (; n--; ) delete i[e[n]];
          }
          (void 0 === e || ft.isEmptyObject(i)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function(t) {
        var e = t[this.expando];
        return void 0 !== e && !ft.isEmptyObject(e);
      }
    });
  var Ot = new d(),
    Nt = new d(),
    Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    jt = /[A-Z]/g;
  ft.extend({
    hasData: function(t) {
      return Nt.hasData(t) || Ot.hasData(t);
    },
    data: function(t, e, n) {
      return Nt.access(t, e, n);
    },
    removeData: function(t, e) {
      Nt.remove(t, e);
    },
    _data: function(t, e, n) {
      return Ot.access(t, e, n);
    },
    _removeData: function(t, e) {
      Ot.remove(t, e);
    }
  }),
    ft.fn.extend({
      data: function(t, e) {
        var n,
          i,
          o,
          s = this[0],
          r = s && s.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((o = Nt.get(s)), 1 === s.nodeType && !Ot.get(s, "hasDataAttrs"))
          ) {
            for (n = r.length; n--; )
              r[n] &&
                0 === (i = r[n].name).indexOf("data-") &&
                ((i = ft.camelCase(i.slice(5))), f(s, i, o[i]));
            Ot.set(s, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof t
          ? this.each(function() {
              Nt.set(this, t);
            })
          : Pt(
              this,
              function(e) {
                var n;
                if (s && void 0 === e) {
                  if (void 0 !== (n = Nt.get(s, t))) return n;
                  if (void 0 !== (n = f(s, t))) return n;
                } else
                  this.each(function() {
                    Nt.set(this, t, e);
                  });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(t) {
        return this.each(function() {
          Nt.remove(this, t);
        });
      }
    }),
    ft.extend({
      queue: function(t, e, n) {
        var i;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (i = Ot.get(t, e)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Ot.access(t, e, ft.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function(t, e) {
        e = e || "fx";
        var n = ft.queue(t, e),
          i = n.length,
          o = n.shift(),
          s = ft._queueHooks(t, e);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === e && n.unshift("inprogress"),
            delete s.stop,
            o.call(
              t,
              function() {
                ft.dequeue(t, e);
              },
              s
            )),
          !i && s && s.empty.fire();
      },
      _queueHooks: function(t, e) {
        var n = e + "queueHooks";
        return (
          Ot.get(t, n) ||
          Ot.access(t, n, {
            empty: ft.Callbacks("once memory").add(function() {
              Ot.remove(t, [e + "queue", n]);
            })
          })
        );
      }
    }),
    ft.fn.extend({
      queue: function(t, e) {
        var n = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), n--),
          arguments.length < n
            ? ft.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function() {
                var n = ft.queue(this, t, e);
                ft._queueHooks(this, t),
                  "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t);
              })
        );
      },
      dequeue: function(t) {
        return this.each(function() {
          ft.dequeue(this, t);
        });
      },
      clearQueue: function(t) {
        return this.queue(t || "fx", []);
      },
      promise: function(t, e) {
        var n,
          i = 1,
          o = ft.Deferred(),
          s = this,
          r = this.length,
          a = function() {
            --i || o.resolveWith(s, [s]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          r--;

        )
          (n = Ot.get(s[r], t + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(e);
      }
    });
  var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    zt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$", "i"),
    Rt = ["Top", "Right", "Bottom", "Left"],
    Ht = function(t, e) {
      return (
        "none" === (t = e || t).style.display ||
        ("" === t.style.display &&
          ft.contains(t.ownerDocument, t) &&
          "none" === ft.css(t, "display"))
      );
    },
    Wt = function(t, e, n, i) {
      var o,
        s,
        r = {};
      for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
      o = n.apply(t, i || []);
      for (s in e) t.style[s] = r[s];
      return o;
    },
    Bt = {};
  ft.fn.extend({
    show: function() {
      return v(this, !0);
    },
    hide: function() {
      return v(this);
    },
    toggle: function(t) {
      return "boolean" === typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function() {
            Ht(this) ? ft(this).show() : ft(this).hide();
          });
    }
  });
  var qt = /^(?:checkbox|radio)$/i,
    Ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Yt = /^$|\/(?:java|ecma)script/i,
    Xt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  (Xt.optgroup = Xt.option),
    (Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead),
    (Xt.th = Xt.td);
  var Vt = /<|&#?\w+;/;
  !(function() {
    var t = et.createDocumentFragment().appendChild(et.createElement("div")),
      e = et.createElement("input");
    e.setAttribute("type", "radio"),
      e.setAttribute("checked", "checked"),
      e.setAttribute("name", "t"),
      t.appendChild(e),
      (dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var Qt = et.documentElement,
    Kt = /^key/,
    Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Zt = /^([^.]*)(?:\.(.+)|)/;
  (ft.event = {
    global: {},
    add: function(t, e, n, i, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        h,
        d,
        p,
        f,
        g,
        m = Ot.get(t);
      if (m)
        for (
          n.handler && ((s = n), (n = s.handler), (o = s.selector)),
            o && ft.find.matchesSelector(Qt, o),
            n.guid || (n.guid = ft.guid++),
            (l = m.events) || (l = m.events = {}),
            (r = m.handle) ||
              (r = m.handle = function(e) {
                return void 0 !== ft && ft.event.triggered !== e.type
                  ? ft.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            c = (e = (e || "").match(Dt) || [""]).length;
          c--;

        )
          (a = Zt.exec(e[c]) || []),
            (p = g = a[1]),
            (f = (a[2] || "").split(".").sort()),
            p &&
              ((h = ft.event.special[p] || {}),
              (p = (o ? h.delegateType : h.bindType) || p),
              (h = ft.event.special[p] || {}),
              (u = ft.extend(
                {
                  type: p,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && ft.expr.match.needsContext.test(o),
                  namespace: f.join(".")
                },
                s
              )),
              (d = l[p]) ||
                ((d = l[p] = []),
                (d.delegateCount = 0),
                (h.setup && !1 !== h.setup.call(t, i, f, r)) ||
                  (t.addEventListener && t.addEventListener(p, r))),
              h.add &&
                (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
              (ft.event.global[p] = !0));
    },
    remove: function(t, e, n, i, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        h,
        d,
        p,
        f,
        g,
        m = Ot.hasData(t) && Ot.get(t);
      if (m && (l = m.events)) {
        for (c = (e = (e || "").match(Dt) || [""]).length; c--; )
          if (
            ((a = Zt.exec(e[c]) || []),
            (p = g = a[1]),
            (f = (a[2] || "").split(".").sort()),
            p)
          ) {
            for (
              h = ft.event.special[p] || {},
                d = l[(p = (i ? h.delegateType : h.bindType) || p)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = s = d.length;
              s--;

            )
              (u = d[s]),
                (!o && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (d.splice(s, 1),
                  u.selector && d.delegateCount--,
                  h.remove && h.remove.call(t, u));
            r &&
              !d.length &&
              ((h.teardown && !1 !== h.teardown.call(t, f, m.handle)) ||
                ft.removeEvent(t, p, m.handle),
              delete l[p]);
          } else for (p in l) ft.event.remove(t, p + e[c], n, i, !0);
        ft.isEmptyObject(l) && Ot.remove(t, "handle events");
      }
    },
    dispatch: function(t) {
      var e,
        n,
        i,
        o,
        s,
        r,
        a = ft.event.fix(t),
        l = new Array(arguments.length),
        c = (Ot.get(this, "events") || {})[a.type] || [],
        u = ft.event.special[a.type] || {};
      for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
      if (
        ((a.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, a))
      ) {
        for (
          r = ft.event.handlers.call(this, a, c), e = 0;
          (o = r[e++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = o.elem, n = 0;
            (s = o.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
              ((a.handleObj = s),
              (a.data = s.data),
              void 0 !==
                (i = (
                  (ft.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function(t, e) {
      var n,
        i,
        o,
        s,
        r,
        a = [],
        l = e.delegateCount,
        c = t.target;
      if (l && c.nodeType && !("click" === t.type && t.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
            for (s = [], r = {}, n = 0; n < l; n++)
              (i = e[n]),
                (o = i.selector + " "),
                void 0 === r[o] &&
                  (r[o] = i.needsContext
                    ? ft(o, this).index(c) > -1
                    : ft.find(o, this, null, [c]).length),
                r[o] && s.push(i);
            s.length && a.push({ elem: c, handlers: s });
          }
      return (
        (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a
      );
    },
    addProp: function(t, e) {
      Object.defineProperty(ft.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: ft.isFunction(e)
          ? function() {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function(t) {
      return t[ft.expando] ? t : new ft.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== C() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === C() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && o(this, "input"))
            return this.click(), !1;
        },
        _default: function(t) {
          return o(t.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }),
    (ft.removeEvent = function(t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }),
    (ft.Event = function(t, e) {
      return this instanceof ft.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? _
                  : x),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
          e && ft.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || ft.now()),
          void (this[ft.expando] = !0))
        : new ft.Event(t, e);
    }),
    (ft.Event.prototype = {
      constructor: ft.Event,
      isDefaultPrevented: x,
      isPropagationStopped: x,
      isImmediatePropagationStopped: x,
      isSimulated: !1,
      preventDefault: function() {
        var t = this.originalEvent;
        (this.isDefaultPrevented = _),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function() {
        var t = this.originalEvent;
        (this.isPropagationStopped = _),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = _),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    ft.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
          var e = t.button;
          return null == t.which && Kt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && Gt.test(t.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : t.which;
        }
      },
      ft.event.addProp
    ),
    ft.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(t, e) {
        ft.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function(t) {
            var n,
              i = this,
              o = t.relatedTarget,
              s = t.handleObj;
            return (
              (o && (o === i || ft.contains(i, o))) ||
                ((t.type = s.origType),
                (n = s.handler.apply(this, arguments)),
                (t.type = e)),
              n
            );
          }
        };
      }
    ),
    ft.fn.extend({
      on: function(t, e, n, i) {
        return T(this, t, e, n, i);
      },
      one: function(t, e, n, i) {
        return T(this, t, e, n, i, 1);
      },
      off: function(t, e, n) {
        var i, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            ft(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (o in t) this.off(o, e, t[o]);
          return this;
        }
        return (
          (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
          !1 === n && (n = x),
          this.each(function() {
            ft.event.remove(this, t, n, e);
          })
        );
      }
    });
  var Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    te = /<script|<style|<link/i,
    ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ne = /^true\/(.*)/,
    ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ft.extend({
    htmlPrefilter: function(t) {
      return t.replace(Jt, "<$1></$2>");
    },
    clone: function(t, e, n) {
      var i,
        o,
        s,
        r,
        a = t.cloneNode(!0),
        l = ft.contains(t.ownerDocument, t);
      if (
        !(
          dt.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          ft.isXMLDoc(t)
        )
      )
        for (r = y(a), s = y(t), i = 0, o = s.length; i < o; i++) D(s[i], r[i]);
      if (e)
        if (n)
          for (s = s || y(t), r = r || y(a), i = 0, o = s.length; i < o; i++)
            I(s[i], r[i]);
        else I(t, a);
      return (r = y(a, "script")).length > 0 && b(r, !l && y(t, "script")), a;
    },
    cleanData: function(t) {
      for (var e, n, i, o = ft.event.special, s = 0; void 0 !== (n = t[s]); s++)
        if (Lt(n)) {
          if ((e = n[Ot.expando])) {
            if (e.events)
              for (i in e.events)
                o[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
            n[Ot.expando] = void 0;
          }
          n[Nt.expando] && (n[Nt.expando] = void 0);
        }
    }
  }),
    ft.fn.extend({
      detach: function(t) {
        return A(this, t, !0);
      },
      remove: function(t) {
        return A(this, t);
      },
      text: function(t) {
        return Pt(
          this,
          function(t) {
            return void 0 === t
              ? ft.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function() {
        return k(this, arguments, function(t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            S(this, t).appendChild(t);
        });
      },
      prepend: function() {
        return k(this, arguments, function(t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = S(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function() {
        return k(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function() {
        return k(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (ft.cleanData(y(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function(t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function() {
            return ft.clone(this, t, e);
          })
        );
      },
      html: function(t) {
        return Pt(
          this,
          function(t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" === typeof t &&
              !te.test(t) &&
              !Xt[(Ut.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = ft.htmlPrefilter(t);
              try {
                for (; n < i; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (ft.cleanData(y(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function() {
        var t = [];
        return k(
          this,
          arguments,
          function(e) {
            var n = this.parentNode;
            ft.inArray(this, t) < 0 &&
              (ft.cleanData(y(this)), n && n.replaceChild(e, this));
          },
          t
        );
      }
    }),
    ft.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(t, e) {
        ft.fn[t] = function(t) {
          for (var n, i = [], o = ft(t), s = o.length - 1, r = 0; r <= s; r++)
            (n = r === s ? this : this.clone(!0)),
              ft(o[r])[e](n),
              st.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var oe = /^margin/,
    se = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$", "i"),
    re = function(e) {
      var n = e.ownerDocument.defaultView;
      return (n && n.opener) || (n = t), n.getComputedStyle(e);
    };
  !(function() {
    function e() {
      if (a) {
        (a.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (a.innerHTML = ""),
          Qt.appendChild(r);
        var e = t.getComputedStyle(a);
        (n = "1%" !== e.top),
          (s = "2px" === e.marginLeft),
          (i = "4px" === e.width),
          (a.style.marginRight = "50%"),
          (o = "4px" === e.marginRight),
          Qt.removeChild(r),
          (a = null);
      }
    }
    var n,
      i,
      o,
      s,
      r = et.createElement("div"),
      a = et.createElement("div");
    a.style &&
      ((a.style.backgroundClip = "content-box"),
      (a.cloneNode(!0).style.backgroundClip = ""),
      (dt.clearCloneStyle = "content-box" === a.style.backgroundClip),
      (r.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      r.appendChild(a),
      ft.extend(dt, {
        pixelPosition: function() {
          return e(), n;
        },
        boxSizingReliable: function() {
          return e(), i;
        },
        pixelMarginRight: function() {
          return e(), o;
        },
        reliableMarginLeft: function() {
          return e(), s;
        }
      }));
  })();
  var ae = /^(none|table(?!-c[ea]).+)/,
    le = /^--/,
    ce = { position: "absolute", visibility: "hidden", display: "block" },
    ue = { letterSpacing: "0", fontWeight: "400" },
    he = ["Webkit", "Moz", "ms"],
    de = et.createElement("div").style;
  ft.extend({
    cssHooks: {
      opacity: {
        get: function(t, e) {
          if (e) {
            var n = P(t, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: "cssFloat" },
    style: function(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          s,
          r,
          a = ft.camelCase(e),
          l = le.test(e),
          c = t.style;
        return (
          l || (e = N(a)),
          (r = ft.cssHooks[e] || ft.cssHooks[a]),
          void 0 === n
            ? r && "get" in r && void 0 !== (o = r.get(t, !1, i))
              ? o
              : c[e]
            : ("string" === (s = typeof n) &&
                (o = zt.exec(n)) &&
                o[1] &&
                ((n = g(t, e, o)), (s = "number")),
              void (
                null != n &&
                n === n &&
                ("number" === s &&
                  (n += (o && o[3]) || (ft.cssNumber[a] ? "" : "px")),
                dt.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (c[e] = "inherit"),
                (r && "set" in r && void 0 === (n = r.set(t, n, i))) ||
                  (l ? c.setProperty(e, n) : (c[e] = n)))
              ))
        );
      }
    },
    css: function(t, e, n, i) {
      var o,
        s,
        r,
        a = ft.camelCase(e);
      return (
        le.test(e) || (e = N(a)),
        (r = ft.cssHooks[e] || ft.cssHooks[a]) &&
          "get" in r &&
          (o = r.get(t, !0, n)),
        void 0 === o && (o = P(t, e, i)),
        "normal" === o && e in ue && (o = ue[e]),
        "" === n || n
          ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o)
          : o
      );
    }
  }),
    ft.each(["height", "width"], function(t, e) {
      ft.cssHooks[e] = {
        get: function(t, n, i) {
          if (n)
            return !ae.test(ft.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? F(t, e, i)
              : Wt(t, ce, function() {
                  return F(t, e, i);
                });
        },
        set: function(t, n, i) {
          var o,
            s = i && re(t),
            r =
              i &&
              j(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, s), s);
          return (
            r &&
              (o = zt.exec(n)) &&
              "px" !== (o[3] || "px") &&
              ((t.style[e] = n), (n = ft.css(t, e))),
            M(0, n, r)
          );
        }
      };
    }),
    (ft.cssHooks.marginLeft = L(dt.reliableMarginLeft, function(t, e) {
      if (e)
        return (
          (parseFloat(P(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              Wt(t, { marginLeft: 0 }, function() {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ft.each({ margin: "", padding: "", border: "Width" }, function(t, e) {
      (ft.cssHooks[t + e] = {
        expand: function(n) {
          for (
            var i = 0, o = {}, s = "string" === typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            o[t + Rt[i] + e] = s[i] || s[i - 2] || s[0];
          return o;
        }
      }),
        oe.test(t) || (ft.cssHooks[t + e].set = M);
    }),
    ft.fn.extend({
      css: function(t, e) {
        return Pt(
          this,
          function(t, e, n) {
            var i,
              o,
              s = {},
              r = 0;
            if (Array.isArray(e)) {
              for (i = re(t), o = e.length; r < o; r++)
                s[e[r]] = ft.css(t, e[r], !1, i);
              return s;
            }
            return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      }
    }),
    (ft.Tween = z),
    (z.prototype = {
      constructor: z,
      init: function(t, e, n, i, o, s) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = o || ft.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = s || (ft.cssNumber[n] ? "" : "px"));
      },
      cur: function() {
        var t = z.propHooks[this.prop];
        return t && t.get ? t.get(this) : z.propHooks._default.get(this);
      },
      run: function(t) {
        var e,
          n = z.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e = ft.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : z.propHooks._default.set(this),
          this
        );
      }
    }),
    (z.prototype.init.prototype = z.prototype),
    (z.propHooks = {
      _default: {
        get: function(t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function(t) {
          ft.fx.step[t.prop]
            ? ft.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null === t.elem.style[ft.cssProps[t.prop]] &&
                !ft.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : ft.style(t.elem, t.prop, t.now + t.unit);
        }
      }
    }),
    (z.propHooks.scrollTop = z.propHooks.scrollLeft = {
      set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }),
    (ft.easing = {
      linear: function(t) {
        return t;
      },
      swing: function(t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (ft.fx = z.prototype.init),
    (ft.fx.step = {});
  var pe,
    fe,
    ge = /^(?:toggle|show|hide)$/,
    me = /queueHooks$/;
  (ft.Animation = ft.extend(U, {
    tweeners: {
      "*": [
        function(t, e) {
          var n = this.createTween(t, e);
          return g(n.elem, t, zt.exec(e), n), n;
        }
      ]
    },
    tweener: function(t, e) {
      ft.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(Dt));
      for (var n, i = 0, o = t.length; i < o; i++)
        (n = t[i]),
          (U.tweeners[n] = U.tweeners[n] || []),
          U.tweeners[n].unshift(e);
    },
    prefilters: [
      function(t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c,
          u,
          h = "width" in e || "height" in e,
          d = this,
          p = {},
          f = t.style,
          g = t.nodeType && Ht(t),
          m = Ot.get(t, "fxshow");
        n.queue ||
          (null === (r = ft._queueHooks(t, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function() {
              r.unqueued || a();
            })),
          r.unqueued++,
          d.always(function() {
            d.always(function() {
              r.unqueued--, ft.queue(t, "fx").length || r.empty.fire();
            });
          }));
        for (i in e)
          if (((o = e[i]), ge.test(o))) {
            if (
              (delete e[i],
              (s = s || "toggle" === o),
              o === (g ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[i]) continue;
              g = !0;
            }
            p[i] = (m && m[i]) || ft.style(t, i);
          }
        if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(p)) {
          h &&
            1 === t.nodeType &&
            ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null === (c = m && m.display) && (c = Ot.get(t, "display")),
            "none" === (u = ft.css(t, "display")) &&
              (c
                ? (u = c)
                : (v([t], !0),
                  (c = t.style.display || c),
                  (u = ft.css(t, "display")),
                  v([t]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === ft.css(t, "float") &&
              (l ||
                (d.done(function() {
                  f.display = c;
                }),
                null === c && ((u = f.display), (c = "none" === u ? "" : u))),
              (f.display = "inline-block"))),
            n.overflow &&
              ((f.overflow = "hidden"),
              d.always(function() {
                (f.overflow = n.overflow[0]),
                  (f.overflowX = n.overflow[1]),
                  (f.overflowY = n.overflow[2]);
              })),
            (l = !1);
          for (i in p)
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = Ot.access(t, "fxshow", { display: c })),
              s && (m.hidden = !g),
              g && v([t], !0),
              d.done(function() {
                g || v([t]), Ot.remove(t, "fxshow");
                for (i in p) ft.style(t, i, p[i]);
              })),
              (l = B(g ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
        }
      }
    ],
    prefilter: function(t, e) {
      e ? U.prefilters.unshift(t) : U.prefilters.push(t);
    }
  })),
    (ft.speed = function(t, e, n) {
      var i =
        t && "object" === typeof t
          ? ft.extend({}, t)
          : {
              complete: n || (!n && e) || (ft.isFunction(t) && t),
              duration: t,
              easing: (n && e) || (e && !ft.isFunction(e) && e)
            };
      return (
        ft.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in ft.fx.speeds
              ? (i.duration = ft.fx.speeds[i.duration])
              : (i.duration = ft.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function() {
          ft.isFunction(i.old) && i.old.call(this),
            i.queue && ft.dequeue(this, i.queue);
        }),
        i
      );
    }),
    ft.fn.extend({
      fadeTo: function(t, e, n, i) {
        return this.filter(Ht)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function(t, e, n, i) {
        var o = ft.isEmptyObject(t),
          s = ft.speed(e, n, i),
          r = function() {
            var e = U(this, ft.extend({}, t), s);
            (o || Ot.get(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        );
      },
      stop: function(t, e, n) {
        var i = function(t) {
          var e = t.stop;
          delete t.stop, e(n);
        };
        return (
          "string" != typeof t && ((n = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || "fx", []),
          this.each(function() {
            var e = !0,
              o = null != t && t + "queueHooks",
              s = ft.timers,
              r = Ot.get(this);
            if (o) r[o] && r[o].stop && i(r[o]);
            else for (o in r) r[o] && r[o].stop && me.test(o) && i(r[o]);
            for (o = s.length; o--; )
              s[o].elem !== this ||
                (null != t && s[o].queue !== t) ||
                (s[o].anim.stop(n), (e = !1), s.splice(o, 1));
            (!e && n) || ft.dequeue(this, t);
          })
        );
      },
      finish: function(t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function() {
            var e,
              n = Ot.get(this),
              i = n[t + "queue"],
              o = n[t + "queueHooks"],
              s = ft.timers,
              r = i ? i.length : 0;
            for (
              n.finish = !0,
                ft.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = s.length;
              e--;

            )
              s[e].elem === this &&
                s[e].queue === t &&
                (s[e].anim.stop(!0), s.splice(e, 1));
            for (e = 0; e < r; e++)
              i[e] && i[e].finish && i[e].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    ft.each(["toggle", "show", "hide"], function(t, e) {
      var n = ft.fn[e];
      ft.fn[e] = function(t, i, o) {
        return null === t || "boolean" ===typeof t
          ? n.apply(this, arguments)
          : this.animate(W(e, !0), t, i, o);
      };
    }),
    ft.each(
      {
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(t, e) {
        ft.fn[t] = function(t, n, i) {
          return this.animate(e, t, n, i);
        };
      }
    ),
    (ft.timers = []),
    (ft.fx.tick = function() {
      var t,
        e = 0,
        n = ft.timers;
      for (pe = ft.now(); e < n.length; e++)
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || ft.fx.stop(), (pe = void 0);
    }),
    (ft.fx.timer = function(t) {
      ft.timers.push(t), ft.fx.start();
    }),
    (ft.fx.interval = 13),
    (ft.fx.start = function() {
      fe || ((fe = !0), R());
    }),
    (ft.fx.stop = function() {
      fe = null;
    }),
    (ft.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ft.fn.delay = function(e, n) {
      return (
        (e = ft.fx ? ft.fx.speeds[e] || e : e),
        (n = n || "fx"),
        this.queue(n, function(n, i) {
          var o = t.setTimeout(n, e);
          i.stop = function() {
            t.clearTimeout(o);
          };
        })
      );
    }),
    (function() {
      var t = et.createElement("input"),
        e = et.createElement("select").appendChild(et.createElement("option"));
      (t.type = "checkbox"),
        (dt.checkOn = "" !== t.value),
        (dt.optSelected = e.selected),
        ((t = et.createElement("input")).value = "t"),
        (t.type = "radio"),
        (dt.radioValue = "t" === t.value);
    })();
  var ve,
    ye = ft.expr.attrHandle;
  ft.fn.extend({
    attr: function(t, e) {
      return Pt(this, ft.attr, t, e, arguments.length > 1);
    },
    removeAttr: function(t) {
      return this.each(function() {
        ft.removeAttr(this, t);
      });
    }
  }),
    ft.extend({
      attr: function(t, e, n) {
        var i,
          o,
          s = t.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return void 0 === t.getAttribute
            ? ft.prop(t, e, n)
            : ((1 === s && ft.isXMLDoc(t)) ||
                (o =
                  ft.attrHooks[e.toLowerCase()] ||
                  (ft.expr.match.bool.test(e) ? ve : void 0)),
              void 0 !== n
                ? null === n
                  ? void ft.removeAttr(t, e)
                  : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t.setAttribute(e, n + ""), n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : null === (i = ft.find.attr(t, e))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function(t, e) {
            if (!dt.radioValue && "radio" === e && o(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          }
        }
      },
      removeAttr: function(t, e) {
        var n,
          i = 0,
          o = e && e.match(Dt);
        if (o && 1 === t.nodeType) for (; (n = o[i++]); ) t.removeAttribute(n);
      }
    }),
    (ve = {
      set: function(t, e, n) {
        return !1 === e ? ft.removeAttr(t, n) : t.setAttribute(n, n), n;
      }
    }),
    ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var n = ye[e] || ft.find.attr;
      ye[e] = function(t, e, i) {
        var o,
          s,
          r = e.toLowerCase();
        return (
          i ||
            ((s = ye[r]),
            (ye[r] = o),
            (o = null != n(t, e, i) ? r : null),
            (ye[r] = s)),
          o
        );
      };
    });
  var be = /^(?:input|select|textarea|button)$/i,
    we = /^(?:a|area)$/i;
  ft.fn.extend({
    prop: function(t, e) {
      return Pt(this, ft.prop, t, e, arguments.length > 1);
    },
    removeProp: function(t) {
      return this.each(function() {
        delete this[ft.propFix[t] || t];
      });
    }
  }),
    ft.extend({
      prop: function(t, e, n) {
        var i,
          o,
          s = t.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && ft.isXMLDoc(t)) ||
              ((e = ft.propFix[e] || e), (o = ft.propHooks[e])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                ? i
                : (t[e] = n)
              : o && "get" in o && null !== (i = o.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(t) {
            var e = ft.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : be.test(t.nodeName) || (we.test(t.nodeName) && t.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    dt.optSelected ||
      (ft.propHooks.selected = {
        get: function(t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
      }),
    ft.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        ft.propFix[this.toLowerCase()] = this;
      }
    ),
    ft.fn.extend({
      addClass: function(t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (ft.isFunction(t))
          return this.each(function(e) {
            ft(this).addClass(t.call(this, e, X(this)));
          });
        if ("string" === typeof t && t)
          for (e = t.match(Dt) || []; (n = this[l++]); )
            if (((o = X(n)), (i = 1 === n.nodeType && " " + Y(o) + " "))) {
              for (r = 0; (s = e[r++]); )
                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              o !== (a = Y(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function(t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (ft.isFunction(t))
          return this.each(function(e) {
            ft(this).removeClass(t.call(this, e, X(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" === typeof t && t)
          for (e = t.match(Dt) || []; (n = this[l++]); )
            if (((o = X(n)), (i = 1 === n.nodeType && " " + Y(o) + " "))) {
              for (r = 0; (s = e[r++]); )
                for (; i.indexOf(" " + s + " ") > -1; )
                  i = i.replace(" " + s + " ", " ");
              o !== (a = Y(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function(t, e) {
        var n = typeof t;
        return "boolean" === typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : ft.isFunction(t)
          ? this.each(function(n) {
              ft(this).toggleClass(t.call(this, n, X(this), e), e);
            })
          : this.each(function() {
              var e, i, o, s;
              if ("string" === n)
                for (i = 0, o = ft(this), s = t.match(Dt) || []; (e = s[i++]); )
                  o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && "boolean" !== n) ||
                  ((e = X(this)) && Ot.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === t ? "" : Ot.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function(t) {
        var e,
          n,
          i = 0;
        for (e = " " + t + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + Y(X(n)) + " ").indexOf(e) > -1)
            return !0;
        return !1;
      }
    });
  var _e = /\r/g;
  ft.fn.extend({
    val: function(t) {
      var e,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = ft.isFunction(t)),
          this.each(function(n) {
            var o;
            1 === this.nodeType &&
              (null === (o = i ? t.call(this, n, ft(this).val()) : t)
                ? (o = "")
                : "number" === typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = ft.map(o, function(t) {
                    return null === t ? "" : t + "";
                  })),
              ((e =
                ft.valHooks[this.type] ||
                ft.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in e &&
          void 0 !== (n = e.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(_e, "")
          : null == n
          ? ""
          : n
        : void 0;
    }
  }),
    ft.extend({
      valHooks: {
        option: {
          get: function(t) {
            var e = ft.find.attr(t, "value");
            return null != e ? e : Y(ft.text(t));
          }
        },
        select: {
          get: function(t) {
            var e,
              n,
              i,
              s = t.options,
              r = t.selectedIndex,
              a = "select-one" === t.type,
              l = a ? null : [],
              c = a ? r + 1 : s.length;
            for (i = r < 0 ? c : a ? r : 0; i < c; i++)
              if (
                ((n = s[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))
              ) {
                if (((e = ft(n).val()), a)) return e;
                l.push(e);
              }
            return l;
          },
          set: function(t, e) {
            for (
              var n, i, o = t.options, s = ft.makeArray(e), r = o.length;
              r--;

            )
              (i = o[r]),
                (i.selected = ft.inArray(ft.valHooks.option.get(i), s) > -1) &&
                  (n = !0);
            return n || (t.selectedIndex = -1), s;
          }
        }
      }
    }),
    ft.each(["radio", "checkbox"], function() {
      (ft.valHooks[this] = {
        set: function(t, e) {
          if (Array.isArray(e))
            return (t.checked = ft.inArray(ft(t).val(), e) > -1);
        }
      }),
        dt.checkOn ||
          (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var xe = /^(?:focusinfocus|focusoutblur)$/;
  ft.extend(ft.event, {
    trigger: function(e, n, i, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        h,
        d = [i || et],
        p = ct.call(e, "type") ? e.type : e,
        f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((r = a = i = i || et),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !xe.test(p + ft.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((f = p.split(".")), (p = f.shift()), f.sort()),
          (c = p.indexOf(":") < 0 && "on" + p),
          (e = e[ft.expando] ? e : new ft.Event(p, "object" == typeof e && e)),
          (e.isTrigger = o ? 2 : 3),
          (e.namespace = f.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = i),
          (n = null == n ? [e] : ft.makeArray(n, [e])),
          (h = ft.event.special[p] || {}),
          o || !h.trigger || !1 !== h.trigger.apply(i, n)))
      ) {
        if (!o && !h.noBubble && !ft.isWindow(i)) {
          for (
            l = h.delegateType || p, xe.test(l + p) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            d.push(r), (a = r);
          a === (i.ownerDocument || et) &&
            d.push(a.defaultView || a.parentWindow || t);
        }
        for (s = 0; (r = d[s++]) && !e.isPropagationStopped(); )
          (e.type = s > 1 ? l : h.bindType || p),
            (u = (Ot.get(r, "events") || {})[e.type] && Ot.get(r, "handle")) &&
              u.apply(r, n),
            (u = c && r[c]) &&
              u.apply &&
              Lt(r) &&
              ((e.result = u.apply(r, n)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          o ||
            e.isDefaultPrevented() ||
            (h._default && !1 !== h._default.apply(d.pop(), n)) ||
            !Lt(i) ||
            (c &&
              ft.isFunction(i[p]) &&
              !ft.isWindow(i) &&
              ((a = i[c]) && (i[c] = null),
              (ft.event.triggered = p),
              i[p](),
              (ft.event.triggered = void 0),
              a && (i[c] = a))),
          e.result
        );
      }
    },
    simulate: function(t, e, n) {
      var i = ft.extend(new ft.Event(), n, { type: t, isSimulated: !0 });
      ft.event.trigger(i, null, e);
    }
  }),
    ft.fn.extend({
      trigger: function(t, e) {
        return this.each(function() {
          ft.event.trigger(t, e, this);
        });
      },
      triggerHandler: function(t, e) {
        var n = this[0];
        if (n) return ft.event.trigger(t, e, n, !0);
      }
    }),
    ft.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function(t, e) {
        ft.fn[e] = function(t, n) {
          return arguments.length > 0
            ? this.on(e, null, t, n)
            : this.trigger(e);
        };
      }
    ),
    ft.fn.extend({
      hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      }
    }),
    (dt.focusin = "onfocusin" in t),
    dt.focusin ||
      ft.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
        var n = function(t) {
          ft.event.simulate(e, t.target, ft.event.fix(t));
        };
        ft.event.special[e] = {
          setup: function() {
            var i = this.ownerDocument || this,
              o = Ot.access(i, e);
            o || i.addEventListener(t, n, !0), Ot.access(i, e, (o || 0) + 1);
          },
          teardown: function() {
            var i = this.ownerDocument || this,
              o = Ot.access(i, e) - 1;
            o
              ? Ot.access(i, e, o)
              : (i.removeEventListener(t, n, !0), Ot.remove(i, e));
          }
        };
      });
  var Ce = t.location,
    Te = ft.now(),
    Se = /\?/;
  ft.parseXML = function(e) {
    var n;
    if (!e || "string" != typeof e) return null;
    try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (t) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        ft.error("Invalid XML: " + e),
      n
    );
  };
  var Ee = /\[\]$/,
    $e = /\r?\n/g,
    Ie = /^(?:submit|button|image|reset|file)$/i,
    De = /^(?:input|select|textarea|keygen)/i;
  (ft.param = function(t, e) {
    var n,
      i = [],
      o = function(t, e) {
        var n = ft.isFunction(e) ? e() : e;
        i[i.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(t) || (t.jquery && !ft.isPlainObject(t)))
      ft.each(t, function() {
        o(this.name, this.value);
      });
    else for (n in t) V(n, t[n], e, o);
    return i.join("&");
  }),
    ft.fn.extend({
      serialize: function() {
        return ft.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var t = ft.prop(this, "elements");
          return t ? ft.makeArray(t) : this;
        })
          .filter(function() {
            var t = this.type;
            return (
              this.name &&
              !ft(this).is(":disabled") &&
              De.test(this.nodeName) &&
              !Ie.test(t) &&
              (this.checked || !qt.test(t))
            );
          })
          .map(function(t, e) {
            var n = ft(this).val();
            return null === n
              ? null
              : Array.isArray(n)
              ? ft.map(n, function(t) {
                  return { name: e.name, value: t.replace($e, "\r\n") };
                })
              : { name: e.name, value: n.replace($e, "\r\n") };
          })
          .get();
      }
    });
  var ke = /%20/g,
    Ae = /#.*$/,
    Pe = /([?&])_=[^&]*/,
    Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ne = /^(?:GET|HEAD)$/,
    Me = /^\/\//,
    je = {},
    Fe = {},
    ze = "*/".concat("*"),
    Re = et.createElement("a");
  (Re.href = Ce.href),
    ft.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ce.href,
        type: "GET",
        isLocal: Oe.test(Ce.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ze,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ft.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(t, e) {
        return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t);
      },
      ajaxPrefilter: Q(je),
      ajaxTransport: Q(Fe),
      ajax: function(e, n) {
        function i(e, n, i, a) {
          var c,
            d,
            p,
            w,
            _,
            x = n;
          u ||
            ((u = !0),
            l && t.clearTimeout(l),
            (o = void 0),
            (r = a || ""),
            (C.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && e < 300) || 304 === e),
            i && (w = Z(f, C, i)),
            (w = J(f, w, C, c)),
            c
              ? (f.ifModified &&
                  ((_ = C.getResponseHeader("Last-Modified")) &&
                    (ft.lastModified[s] = _),
                  (_ = C.getResponseHeader("etag")) && (ft.etag[s] = _)),
                204 === e || "HEAD" === f.type
                  ? (x = "nocontent")
                  : 304 === e
                  ? (x = "notmodified")
                  : ((x = w.state), (d = w.data), (p = w.error), (c = !p)))
              : ((p = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
            (C.status = e),
            (C.statusText = (n || x) + ""),
            c ? v.resolveWith(g, [d, x, C]) : v.rejectWith(g, [C, x, p]),
            C.statusCode(b),
            (b = void 0),
            h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : p]),
            y.fireWith(g, [C, x]),
            h &&
              (m.trigger("ajaxComplete", [C, f]),
              --ft.active || ft.event.trigger("ajaxStop")));
        }
        "object" === typeof e && ((n = e), (e = void 0)), (n = n || {});
        var o,
          s,
          r,
          a,
          l,
          c,
          u,
          h,
          d,
          p,
          f = ft.ajaxSetup({}, n),
          g = f.context || f,
          m = f.context && (g.nodeType || g.jquery) ? ft(g) : ft.event,
          v = ft.Deferred(),
          y = ft.Callbacks("once memory"),
          b = f.statusCode || {},
          w = {},
          _ = {},
          x = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function(t) {
              var e;
              if (u) {
                if (!a)
                  for (a = {}; (e = Le.exec(r)); ) a[e[1].toLowerCase()] = e[2];
                e = a[t.toLowerCase()];
              }
              return null === e ? null : e;
            },
            getAllResponseHeaders: function() {
              return u ? r : null;
            },
            setRequestHeader: function(t, e) {
              return (
                null === u &&
                  ((t = _[t.toLowerCase()] = _[t.toLowerCase()] || t),
                  (w[t] = e)),
                this
              );
            },
            overrideMimeType: function(t) {
              return null === u && (f.mimeType = t), this;
            },
            statusCode: function(t) {
              var e;
              if (t)
                if (u) C.always(t[C.status]);
                else for (e in t) b[e] = [b[e], t[e]];
              return this;
            },
            abort: function(t) {
              var e = t || x;
              return o && o.abort(e), i(0, e), this;
            }
          };
        if (
          (v.promise(C),
          (f.url = ((e || f.url || Ce.href) + "").replace(
            Me,
            Ce.protocol + "//"
          )),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(Dt) || [""]),
          null == f.crossDomain)
        ) {
          c = et.createElement("a");
          try {
            (c.href = f.url),
              (c.href = c.href),
              (f.crossDomain =
                Re.protocol + "//" + Re.host != c.protocol + "//" + c.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = ft.param(f.data, f.traditional)),
          K(je, f, n, C),
          u)
        )
          return C;
        (h = ft.event && f.global) &&
          0 === ft.active++ &&
          ft.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !Ne.test(f.type)),
          (s = f.url.replace(Ae, "")),
          f.hasContent
            ? f.data &&
              f.processData &&
              0 ===
                (f.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (f.data = f.data.replace(ke, "+"))
            : ((p = f.url.slice(s.length)),
              f.data &&
                ((s += (Se.test(s) ? "&" : "?") + f.data), delete f.data),
              !1 === f.cache &&
                ((s = s.replace(Pe, "$1")),
                (p = (Se.test(s) ? "&" : "?") + "_=" + Te++ + p)),
              (f.url = s + p)),
          f.ifModified &&
            (ft.lastModified[s] &&
              C.setRequestHeader("If-Modified-Since", ft.lastModified[s]),
            ft.etag[s] && C.setRequestHeader("If-None-Match", ft.etag[s])),
          ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
            C.setRequestHeader("Content-Type", f.contentType),
          C.setRequestHeader(
            "Accept",
            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
              ? f.accepts[f.dataTypes[0]] +
                  ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "")
              : f.accepts["*"]
          );
        for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (!1 === f.beforeSend.call(g, C, f) || u))
          return C.abort();
        if (
          ((x = "abort"),
          y.add(f.complete),
          C.done(f.success),
          C.fail(f.error),
          (o = K(Fe, f, n, C)))
        ) {
          if (((C.readyState = 1), h && m.trigger("ajaxSend", [C, f]), u))
            return C;
          f.async &&
            f.timeout > 0 &&
            (l = t.setTimeout(function() {
              C.abort("timeout");
            }, f.timeout));
          try {
            (u = !1), o.send(w, i);
          } catch (t) {
            if (u) throw t;
            i(-1, t);
          }
        } else i(-1, "No Transport");
        return C;
      },
      getJSON: function(t, e, n) {
        return ft.get(t, e, n, "json");
      },
      getScript: function(t, e) {
        return ft.get(t, void 0, e, "script");
      }
    }),
    ft.each(["get", "post"], function(t, e) {
      ft[e] = function(t, n, i, o) {
        return (
          ft.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
          ft.ajax(
            ft.extend(
              { url: t, type: e, dataType: o, data: n, success: i },
              ft.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    (ft._evalUrl = function(t) {
      return ft.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    ft.fn.extend({
      wrapAll: function(t) {
        var e;
        return (
          this[0] &&
            (ft.isFunction(t) && (t = t.call(this[0])),
            (e = ft(t, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function() {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(t) {
        return ft.isFunction(t)
          ? this.each(function(e) {
              ft(this).wrapInner(t.call(this, e));
            })
          : this.each(function() {
              var e = ft(this),
                n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t);
            });
      },
      wrap: function(t) {
        var e = ft.isFunction(t);
        return this.each(function(n) {
          ft(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function(t) {
        return (
          this.parent(t)
            .not("body")
            .each(function() {
              ft(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (ft.expr.pseudos.hidden = function(t) {
      return !ft.expr.pseudos.visible(t);
    }),
    (ft.expr.pseudos.visible = function(t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (ft.ajaxSettings.xhr = function() {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var He = { 0: 200, 1223: 204 },
    We = ft.ajaxSettings.xhr();
  (dt.cors = !!We && "withCredentials" in We),
    (dt.ajax = We = !!We),
    ft.ajaxTransport(function(e) {
      var n, i;
      if (dt.cors || (We && !e.crossDomain))
        return {
          send: function(o, s) {
            var r,
              a = e.xhr();
            if (
              (a.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (r in e.xhrFields) a[r] = e.xhrFields[r];
            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
              e.crossDomain ||
                o["X-Requested-With"] ||
                (o["X-Requested-With"] = "XMLHttpRequest");
            for (r in o) a.setRequestHeader(r, o[r]);
            (n = function(t) {
              return function() {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                  "abort" === t
                    ? a.abort()
                    : "error" === t
                    ? "number" != typeof a.status
                      ? s(0, "error")
                      : s(a.status, a.statusText)
                    : s(
                        He[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function() {
                    4 === a.readyState &&
                      t.setTimeout(function() {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((e.hasContent && e.data) || null);
            } catch (t) {
              if (n) throw t;
            }
          },
          abort: function() {
            n && n();
          }
        };
    }),
    ft.ajaxPrefilter(function(t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    ft.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function(t) {
          return ft.globalEval(t), t;
        }
      }
    }),
    ft.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    ft.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
        var e, n;
        return {
          send: function(i, o) {
            (e = ft("<script>")
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (n = function(t) {
                  e.remove(),
                    (n = null),
                    t && o("error" === t.type ? 404 : 200, t.type);
                })
              )),
              et.head.appendChild(e[0]);
          },
          abort: function() {
            n && n();
          }
        };
      }
    });
  var Be = [],
    qe = /(=)\?(?=&|$)|\?\?/;
  ft.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var t = Be.pop() || ft.expando + "_" + Te++;
      return (this[t] = !0), t;
    }
  }),
    ft.ajaxPrefilter("json jsonp", function(e, n, i) {
      var o,
        s,
        r,
        a =
          !1 !== e.jsonp &&
          (qe.test(e.url)
            ? "url"
            : "string" === typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              qe.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (o = e.jsonpCallback = ft.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(qe, "$1" + o))
            : !1 !== e.jsonp &&
              (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          (e.converters["script json"] = function() {
            return r || ft.error(o + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (s = t[o]),
          (t[o] = function() {
            r = arguments;
          }),
          i.always(function() {
            void 0 === s ? ft(t).removeProp(o) : (t[o] = s),
              e[o] && ((e.jsonpCallback = n.jsonpCallback), Be.push(o)),
              r && ft.isFunction(s) && s(r[0]),
              (r = s = void 0);
          }),
          "script"
        );
    }),
    (dt.createHTMLDocument = (function() {
      var t = et.implementation.createHTMLDocument("").body;
      return (
        (t.innerHTML = "<form></form><form></form>"), 2 === t.childNodes.length
      );
    })()),
    (ft.parseHTML = function(t, e, n) {
      if ("string" != typeof t) return [];
      "boolean" === typeof e && ((n = e), (e = !1));
      var i, o, s;
      return (
        e ||
          (dt.createHTMLDocument
            ? ((e = et.implementation.createHTMLDocument("")),
              (i = e.createElement("base")),
              (i.href = et.location.href),
              e.head.appendChild(i))
            : (e = et)),
        (o = Ct.exec(t)),
        (s = !n && []),
        o
          ? [e.createElement(o[1])]
          : ((o = w([t], e, s)),
            s && s.length && ft(s).remove(),
            ft.merge([], o.childNodes))
      );
    }),
    (ft.fn.load = function(t, e, n) {
      var i,
        o,
        s,
        r = this,
        a = t.indexOf(" ");
      return (
        a > -1 && ((i = Y(t.slice(a))), (t = t.slice(0, a))),
        ft.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        r.length > 0 &&
          ft
            .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
            .done(function(t) {
              (s = arguments),
                r.html(
                  i
                    ? ft("<div>")
                        .append(ft.parseHTML(t))
                        .find(i)
                    : t
                );
            })
            .always(
              n &&
                function(t, e) {
                  r.each(function() {
                    n.apply(this, s || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    ft.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(t, e) {
        ft.fn[e] = function(t) {
          return this.on(e, t);
        };
      }
    ),
    (ft.expr.pseudos.animated = function(t) {
      return ft.grep(ft.timers, function(e) {
        return t === e.elem;
      }).length;
    }),
    (ft.offset = {
      setOffset: function(t, e, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c = ft.css(t, "position"),
          u = ft(t),
          h = {};
        "static" === c && (t.style.position = "relative"),
          (a = u.offset()),
          (s = ft.css(t, "top")),
          (l = ft.css(t, "left")),
          ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1
            ? ((i = u.position()), (r = i.top), (o = i.left))
            : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
          ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))),
          null != e.top && (h.top = e.top - a.top + r),
          null != e.left && (h.left = e.left - a.left + o),
          "using" in e ? e.using.call(t, h) : u.css(h);
      }
    }),
    ft.fn.extend({
      offset: function(t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function(e) {
                ft.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i,
          o,
          s = this[0];
        return s
          ? s.getClientRects().length
            ? ((i = s.getBoundingClientRect()),
              (e = s.ownerDocument),
              (n = e.documentElement),
              (o = e.defaultView),
              {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
              })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var t,
            e,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === ft.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                o(t[0], "html") || (i = t.offset()),
                (i = {
                  top: i.top + ft.css(t[0], "borderTopWidth", !0),
                  left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                })),
            {
              top: e.top - i.top - ft.css(n, "marginTop", !0),
              left: e.left - i.left - ft.css(n, "marginLeft", !0)
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var t = this.offsetParent;
            t && "static" === ft.css(t, "position");

          )
            t = t.offsetParent;
          return t || Qt;
        });
      }
    }),
    ft.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      t,
      e
    ) {
      var n = "pageYOffset" === e;
      ft.fn[t] = function(i) {
        return Pt(
          this,
          function(t, i, o) {
            var s;
            return (
              ft.isWindow(t)
                ? (s = t)
                : 9 === t.nodeType && (s = t.defaultView),
              void 0 === o
                ? s
                  ? s[e]
                  : t[i]
                : void (s
                    ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset)
                    : (t[i] = o))
            );
          },
          t,
          i,
          arguments.length
        );
      };
    }),
    ft.each(["top", "left"], function(t, e) {
      ft.cssHooks[e] = L(dt.pixelPosition, function(t, n) {
        if (n)
          return (n = P(t, e)), se.test(n) ? ft(t).position()[e] + "px" : n;
      });
    }),
    ft.each({ Height: "height", Width: "width" }, function(t, e) {
      ft.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(
        n,
        i
      ) {
        ft.fn[i] = function(o, s) {
          var r = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === s ? "margin" : "border");
          return Pt(
            this,
            function(e, n, o) {
              var s;
              return ft.isWindow(e)
                ? 0 === i.indexOf("outer")
                  ? e["inner" + t]
                  : e.document.documentElement["client" + t]
                : 9 === e.nodeType
                ? ((s = e.documentElement),
                  Math.max(
                    e.body["scroll" + t],
                    s["scroll" + t],
                    e.body["offset" + t],
                    s["offset" + t],
                    s["client" + t]
                  ))
                : void 0 === o
                ? ft.css(e, n, a)
                : ft.style(e, n, o, a);
            },
            e,
            r ? o : void 0,
            r
          );
        };
      });
    }),
    ft.fn.extend({
      bind: function(t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function(t, e) {
        return this.off(t, null, e);
      },
      delegate: function(t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function(t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      }
    }),
    (ft.holdReady = function(t) {
      t ? ft.readyWait++ : ft.ready(!0);
    }),
    (ft.isArray = Array.isArray),
    (ft.parseJSON = JSON.parse),
    (ft.nodeName = o),
    "function" &&  typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return ft;
      });
  var Ue = t.jQuery,
    Ye = t.$;
  return (
    (ft.noConflict = function(e) {
      return (
        t.$ === ft && (t.$ = Ye), e && t.jQuery === ft && (t.jQuery = Ue), ft
      );
    }),
    e || (t.jQuery = t.$ = ft),
    ft
  );
}),
  (function(t, e) {
    "object" === typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" === typeof define && define.amd
      ? define(e)
      : (t.Popper = e());
  })(this, function() {
    "use strict";
    function t(t) {
      return t && "[object Function]" === {}.toString.call(t);
    }
    function e(t, e) {
      if (1 !== t.nodeType) return [];
      var n = getComputedStyle(t, null);
      return e ? n[e] : n;
    }
    function n(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }
    function i(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case "HTML":
        case "BODY":
          return t.ownerDocument.body;
        case "#document":
          return t.body;
      }
      var o = e(t),
        s = o.overflow,
        r = o.overflowX,
        a = o.overflowY;
      return /(auto|scroll)/.test(s + a + r) ? t : i(n(t));
    }
    function o(t) {
      var n = t && t.offsetParent,
        i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i
        ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
          "static" === e(n, "position")
          ? o(n)
          : n
        : t
        ? t.ownerDocument.documentElement
        : document.documentElement;
    }
    function s(t) {
      var e = t.nodeName;
      return "BODY" !== e && ("HTML" === e || o(t.firstElementChild) === t);
    }
    function r(t) {
      return null === t.parentNode ? t : r(t.parentNode);
    }
    function a(t, e) {
      if (!(t && t.nodeType && e && e.nodeType))
        return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        l = n ? e : t,
        c = document.createRange();
      c.setStart(i, 0), c.setEnd(l, 0);
      var u = c.commonAncestorContainer;
      if ((t !== u && e !== u) || i.contains(l)) return s(u) ? u : o(u);
      var h = r(t);
      return h.host ? a(h.host, e) : a(t, r(e).host);
    }
    function l(t) {
      var e =
          "top" ===
          (1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "top")
            ? "scrollTop"
            : "scrollLeft",
        n = t.nodeName;
      if ("BODY" === n || "HTML" === n) {
        var i = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || i)[e];
      }
      return t[e];
    }
    function c(t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(e, "top"),
        o = l(e, "left"),
        s = n ? -1 : 1;
      return (
        (t.top += i * s),
        (t.bottom += i * s),
        (t.left += o * s),
        (t.right += o * s),
        t
      );
    }
    function u(t, e) {
      var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
      return (
        parseFloat(t["border" + n + "Width"], 10) +
        parseFloat(t["border" + i + "Width"], 10)
      );
    }
    function h(t, e, n, i) {
      return V(
        e["offset" + t],
        e["scroll" + t],
        n["client" + t],
        n["offset" + t],
        n["scroll" + t],
        et()
          ? n["offset" + t] +
              i["margin" + ("Height" === t ? "Top" : "Left")] +
              i["margin" + ("Height" === t ? "Bottom" : "Right")]
          : 0
      );
    }
    function d() {
      var t = document.body,
        e = document.documentElement,
        n = et() && getComputedStyle(e);
      return { height: h("Height", t, e, n), width: h("Width", t, e, n) };
    }
    function p(t) {
      return st({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function f(t) {
      var n = {};
      if (et())
        try {
          n = t.getBoundingClientRect();
          var i = l(t, "top"),
            o = l(t, "left");
          (n.top += i), (n.left += o), (n.bottom += i), (n.right += o);
        } catch (t) {}
      else n = t.getBoundingClientRect();
      var s = {
          left: n.left,
          top: n.top,
          width: n.right - n.left,
          height: n.bottom - n.top
        },
        r = "HTML" === t.nodeName ? d() : {},
        a = r.width || t.clientWidth || s.right - s.left,
        c = r.height || t.clientHeight || s.bottom - s.top,
        h = t.offsetWidth - a,
        f = t.offsetHeight - c;
      if (h || f) {
        var g = e(t);
        (h -= u(g, "x")), (f -= u(g, "y")), (s.width -= h), (s.height -= f);
      }
      return p(s);
    }
    function g(t, n) {
      var o = et(),
        s = "HTML" === n.nodeName,
        r = f(t),
        a = f(n),
        l = i(t),
        u = e(n),
        h = parseFloat(u.borderTopWidth, 10),
        d = parseFloat(u.borderLeftWidth, 10),
        g = p({
          top: r.top - a.top - h,
          left: r.left - a.left - d,
          width: r.width,
          height: r.height
        });
      if (((g.marginTop = 0), (g.marginLeft = 0), !o && s)) {
        var m = parseFloat(u.marginTop, 10),
          v = parseFloat(u.marginLeft, 10);
        (g.top -= h - m),
          (g.bottom -= h - m),
          (g.left -= d - v),
          (g.right -= d - v),
          (g.marginTop = m),
          (g.marginLeft = v);
      }
      return (
        (o ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (g = c(g, n)),
        g
      );
    }
    function m(t) {
      var e = t.ownerDocument.documentElement,
        n = g(t, e),
        i = V(e.clientWidth, window.innerWidth || 0),
        o = V(e.clientHeight, window.innerHeight || 0),
        s = l(e),
        r = l(e, "left");
      return p({
        top: s - n.top + n.marginTop,
        left: r - n.left + n.marginLeft,
        width: i,
        height: o
      });
    }
    function v(t) {
      var i = t.nodeName;
      return (
        "BODY" !== i &&
        "HTML" !== i &&
        ("fixed" === e(t, "position") || v(n(t)))
      );
    }
    function y(t, e, o, s) {
      var r = { top: 0, left: 0 },
        l = a(t, e);
      if ("viewport" === s) r = m(l);
      else {
        var c;
        "scrollParent" === s
          ? "BODY" === (c = i(n(e))).nodeName &&
            (c = t.ownerDocument.documentElement)
          : (c = "window" === s ? t.ownerDocument.documentElement : s);
        var u = g(c, l);
        if ("HTML" !== c.nodeName || v(l)) r = u;
        else {
          var h = d(),
            p = h.height,
            f = h.width;
          (r.top += u.top - u.marginTop),
            (r.bottom = p + u.top),
            (r.left += u.left - u.marginLeft),
            (r.right = f + u.left);
        }
      }
      return (r.left += o), (r.top += o), (r.right -= o), (r.bottom -= o), r;
    }
    function b(t) {
      return t.width * t.height;
    }
    function w(t, e, n, i, o) {
      var s =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf("auto")) return t;
      var r = y(n, i, s, o),
        a = {
          top: { width: r.width, height: e.top - r.top },
          right: { width: r.right - e.right, height: r.height },
          bottom: { width: r.width, height: r.bottom - e.bottom },
          left: { width: e.left - r.left, height: r.height }
        },
        l = Object.keys(a)
          .map(function(t) {
            return st({ key: t }, a[t], { area: b(a[t]) });
          })
          .sort(function(t, e) {
            return e.area - t.area;
          }),
        c = l.filter(function(t) {
          var e = t.width,
            i = t.height;
          return e >= n.clientWidth && i >= n.clientHeight;
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        h = t.split("-")[1];
      return u + (h ? "-" + h : "");
    }
    function _(t, e, n) {
      return g(n, a(e, n));
    }
    function x(t) {
      var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }
    function C(t) {
      var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return t.replace(/left|right|bottom|top/g, function(t) {
        return e[t];
      });
    }
    function T(t, e, n) {
      n = n.split("-")[0];
      var i = x(t),
        o = { width: i.width, height: i.height },
        s = -1 !== ["right", "left"].indexOf(n),
        r = s ? "top" : "left",
        a = s ? "left" : "top",
        l = s ? "height" : "width",
        c = s ? "width" : "height";
      return (
        (o[r] = e[r] + e[l] / 2 - i[l] / 2),
        (o[a] = n === a ? e[a] - i[c] : e[C(a)]),
        o
      );
    }
    function S(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function E(t, e, n) {
      if (Array.prototype.findIndex)
        return t.findIndex(function(t) {
          return t[e] === n;
        });
      var i = S(t, function(t) {
        return t[e] === n;
      });
      return t.indexOf(i);
    }
    function $(e, n, i) {
      return (
        (void 0 === i ? e : e.slice(0, E(e, "name", i))).forEach(function(e) {
          e.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var i = e.function || e.fn;
          e.enabled &&
            t(i) &&
            ((n.offsets.popper = p(n.offsets.popper)),
            (n.offsets.reference = p(n.offsets.reference)),
            (n = i(n, e)));
        }),
        n
      );
    }
    function I() {
      if (!this.state.isDestroyed) {
        var t = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {}
        };
        (t.offsets.reference = _(this.state, this.popper, this.reference)),
          (t.placement = w(
            this.options.placement,
            t.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (t.originalPlacement = t.placement),
          (t.offsets.popper = T(this.popper, t.offsets.reference, t.placement)),
          (t.offsets.popper.position = "absolute"),
          (t = $(this.modifiers, t)),
          this.state.isCreated
            ? this.options.onUpdate(t)
            : ((this.state.isCreated = !0), this.options.onCreate(t));
      }
    }
    function D(t, e) {
      return t.some(function(t) {
        var n = t.name;
        return t.enabled && n === e;
      });
    }
    function k(t) {
      for (
        var e = [!1, "ms", "Webkit", "Moz", "O"],
          n = t.charAt(0).toUpperCase() + t.slice(1),
          i = 0;
        i < e.length - 1;
        i++
      ) {
        var o = e[i],
          s = o ? "" + o + n : t;
        if (void 0 !== document.body.style[s]) return s;
      }
      return null;
    }
    function A() {
      return (
        (this.state.isDestroyed = !0),
        D(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.left = ""),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style[k("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function P(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }
    function L(t, e, n, o) {
      var s = "BODY" === t.nodeName,
        r = s ? t.ownerDocument.defaultView : t;
      r.addEventListener(e, n, { passive: !0 }),
        s || L(i(r.parentNode), e, n, o),
        o.push(r);
    }
    function O(t, e, n, o) {
      (n.updateBound = o),
        P(t).addEventListener("resize", n.updateBound, { passive: !0 });
      var s = i(t);
      return (
        L(s, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = s),
        (n.eventsEnabled = !0),
        n
      );
    }
    function N() {
      this.state.eventsEnabled ||
        (this.state = O(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function M(t, e) {
      return (
        P(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e
      );
    }
    function j() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = M(this.reference, this.state)));
    }
    function F(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function z(t, e) {
      Object.keys(e).forEach(function(n) {
        var i = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
          F(e[n]) &&
          (i = "px"),
          (t.style[n] = e[n] + i);
      });
    }
    function R(t, e) {
      Object.keys(e).forEach(function(n) {
        !1 === e[n] ? t.removeAttribute(n) : t.setAttribute(n, e[n]);
      });
    }
    function H(t, e, n) {
      var i = S(t, function(t) {
          return t.name === e;
        }),
        o =
          !!i &&
          t.some(function(t) {
            return t.name === n && t.enabled && t.order < i.order;
          });
      if (!o) {
        var s = "`" + e + "`";
        console.warn(
          "`" +
            n +
            "` modifier is required by " +
            s +
            " modifier in order to work, be sure to include it before " +
            s +
            "!"
        );
      }
      return o;
    }
    function W(t) {
      return "end" === t ? "start" : "start" === t ? "end" : t;
    }
    function B(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = at.indexOf(t),
        i = at.slice(n + 1).concat(at.slice(0, n));
      return e ? i.reverse() : i;
    }
    function q(t, e, n, i) {
      var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        s = +o[1],
        r = o[2];
      if (!s) return t;
      if (0 === r.indexOf("%")) {
        var a;
        switch (r) {
          case "%p":
            a = n;
            break;
          case "%":
          case "%r":
          default:
            a = i;
        }
        return (p(a)[e] / 100) * s;
      }
      if ("vh" === r || "vw" === r) {
        return (
          (("vh" === r
            ? V(document.documentElement.clientHeight, window.innerHeight || 0)
            : V(document.documentElement.clientWidth, window.innerWidth || 0)) /
            100) *
          s
        );
      }
      return s;
    }
    function U(t, e, n, i) {
      var o = [0, 0],
        s = -1 !== ["right", "left"].indexOf(i),
        r = t.split(/(\+|\-)/).map(function(t) {
          return t.trim();
        }),
        a = r.indexOf(
          S(r, function(t) {
            return -1 !== t.search(/,|\s/);
          })
        );
      r[a] &&
        -1 === r[a].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var l = /\s*,\s*|\s+/,
        c =
          -1 === a
            ? [r]
            : [
                r.slice(0, a).concat([r[a].split(l)[0]]),
                [r[a].split(l)[1]].concat(r.slice(a + 1))
              ];
      return (
        (c = c.map(function(t, i) {
          var o = (1 === i ? !s : s) ? "height" : "width",
            r = !1;
          return t
            .reduce(function(t, e) {
              return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                ? ((t[t.length - 1] = e), (r = !0), t)
                : r
                ? ((t[t.length - 1] += e), (r = !1), t)
                : t.concat(e);
            }, [])
            .map(function(t) {
              return q(t, o, e, n);
            });
        })).forEach(function(t, e) {
          t.forEach(function(n, i) {
            F(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
          });
        }),
        o
      );
    }
    for (
      var Y = Math.min,
        X = Math.floor,
        V = Math.max,
        Q = "undefined" != typeof window && "undefined" != typeof document,
        K = ["Edge", "Trident", "Firefox"],
        G = 0,
        Z = 0;
      Z < K.length;
      Z += 1
    )
      if (Q && 0 <= navigator.userAgent.indexOf(K[Z])) {
        G = 1;
        break;
      }
    var J,
      tt =
        Q && window.Promise
          ? function(t) {
              var e = !1;
              return function() {
                e ||
                  ((e = !0),
                  window.Promise.resolve().then(function() {
                    (e = !1), t();
                  }));
              };
            }
          : function(t) {
              var e = !1;
              return function() {
                e ||
                  ((e = !0),
                  setTimeout(function() {
                    (e = !1), t();
                  }, G));
              };
            },
      et = function() {
        return (
          void 0 == J && (J = -1 !== navigator.appVersion.indexOf("MSIE 10")), J
        );
      },
      nt = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      },
      it = (function() {
        function t(t, e) {
          for (var n, i = 0; i < e.length; i++)
            (n = e[i]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })(),
      ot = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      },
      st =
        Object.assign ||
        function(t) {
          for (var e, n = 1; n < arguments.length; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        },
      rt = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start"
      ],
      at = rt.slice(3),
      lt = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
      },
      ct = (function() {
        function e(n, i) {
          var o = this,
            s =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          nt(this, e),
            (this.scheduleUpdate = function() {
              return requestAnimationFrame(o.update);
            }),
            (this.update = tt(this.update.bind(this))),
            (this.options = st({}, e.Defaults, s)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
            }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(st({}, e.Defaults.modifiers, s.modifiers)).forEach(
              function(t) {
                o.options.modifiers[t] = st(
                  {},
                  e.Defaults.modifiers[t] || {},
                  s.modifiers ? s.modifiers[t] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function(t) {
                return st({ name: t }, o.options.modifiers[t]);
              })
              .sort(function(t, e) {
                return t.order - e.order;
              })),
            this.modifiers.forEach(function(e) {
              e.enabled &&
                t(e.onLoad) &&
                e.onLoad(o.reference, o.popper, o.options, e, o.state);
            }),
            this.update();
          var r = this.options.eventsEnabled;
          r && this.enableEventListeners(), (this.state.eventsEnabled = r);
        }
        return (
          it(e, [
            {
              key: "update",
              value: function() {
                return I.call(this);
              }
            },
            {
              key: "destroy",
              value: function() {
                return A.call(this);
              }
            },
            {
              key: "enableEventListeners",
              value: function() {
                return N.call(this);
              }
            },
            {
              key: "disableEventListeners",
              value: function() {
                return j.call(this);
              }
            }
          ]),
          e
        );
      })();
    return (
      (ct.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (ct.placements = rt),
      (ct.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function(t) {
              var e = t.placement,
                n = e.split("-")[0],
                i = e.split("-")[1];
              if (i) {
                var o = t.offsets,
                  s = o.reference,
                  r = o.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  c = a ? "width" : "height",
                  u = {
                    start: ot({}, l, s[l]),
                    end: ot({}, l, s[l] + s[c] - r[c])
                  };
                t.offsets.popper = st({}, r, u[i]);
              }
              return t;
            }
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function(t, e) {
              var n,
                i = e.offset,
                o = t.placement,
                s = t.offsets,
                r = s.popper,
                a = s.reference,
                l = o.split("-")[0];
              return (
                (n = F(+i) ? [+i, 0] : U(i, r, a, l)),
                "left" === l
                  ? ((r.top += n[0]), (r.left -= n[1]))
                  : "right" === l
                  ? ((r.top += n[0]), (r.left += n[1]))
                  : "top" === l
                  ? ((r.left += n[0]), (r.top -= n[1]))
                  : "bottom" === l && ((r.left += n[0]), (r.top += n[1])),
                (t.popper = r),
                t
              );
            },
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function(t, e) {
              var n = e.boundariesElement || o(t.instance.popper);
              t.instance.reference === n && (n = o(n));
              var i = y(t.instance.popper, t.instance.reference, e.padding, n);
              e.boundaries = i;
              var s = e.priority,
                r = t.offsets.popper,
                a = {
                  primary: function(t) {
                    var n = r[t];
                    return (
                      r[t] < i[t] &&
                        !e.escapeWithReference &&
                        (n = V(r[t], i[t])),
                      ot({}, t, n)
                    );
                  },
                  secondary: function(t) {
                    var n = "right" === t ? "left" : "top",
                      o = r[n];
                    return (
                      r[t] > i[t] &&
                        !e.escapeWithReference &&
                        (o = Y(
                          r[n],
                          i[t] - ("right" === t ? r.width : r.height)
                        )),
                      ot({}, n, o)
                    );
                  }
                };
              return (
                s.forEach(function(t) {
                  var e =
                    -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                  r = st({}, r, a[e](t));
                }),
                (t.offsets.popper = r),
                t
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function(t) {
              var e = t.offsets,
                n = e.popper,
                i = e.reference,
                o = t.placement.split("-")[0],
                s = X,
                r = -1 !== ["top", "bottom"].indexOf(o),
                a = r ? "right" : "bottom",
                l = r ? "left" : "top",
                c = r ? "width" : "height";
              return (
                n[a] < s(i[l]) && (t.offsets.popper[l] = s(i[l]) - n[c]),
                n[l] > s(i[a]) && (t.offsets.popper[l] = s(i[a])),
                t
              );
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function(t, n) {
              var i;
              if (!H(t.instance.modifiers, "arrow", "keepTogether")) return t;
              var o = n.element;
              if ("string" === typeof o) {
                if (!(o = t.instance.popper.querySelector(o))) return t;
              } else if (!t.instance.popper.contains(o))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  t
                );
              var s = t.placement.split("-")[0],
                r = t.offsets,
                a = r.popper,
                l = r.reference,
                c = -1 !== ["left", "right"].indexOf(s),
                u = c ? "height" : "width",
                h = c ? "Top" : "Left",
                d = h.toLowerCase(),
                f = c ? "left" : "top",
                g = c ? "bottom" : "right",
                m = x(o)[u];
              l[g] - m < a[d] && (t.offsets.popper[d] -= a[d] - (l[g] - m)),
                l[d] + m > a[g] && (t.offsets.popper[d] += l[d] + m - a[g]),
                (t.offsets.popper = p(t.offsets.popper));
              var v = l[d] + l[u] / 2 - m / 2,
                y = e(t.instance.popper),
                b = parseFloat(y["margin" + h], 10),
                w = parseFloat(y["border" + h + "Width"], 10),
                _ = v - t.offsets.popper[d] - b - w;
              return (
                (_ = V(Y(a[u] - m, _), 0)),
                (t.arrowElement = o),
                (t.offsets.arrow =
                  ((i = {}), ot(i, d, Math.round(_)), ot(i, f, ""), i)),
                t
              );
            },
            element: "[x-arrow]"
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function(t, e) {
              if (D(t.instance.modifiers, "inner")) return t;
              if (t.flipped && t.placement === t.originalPlacement) return t;
              var n = y(
                  t.instance.popper,
                  t.instance.reference,
                  e.padding,
                  e.boundariesElement
                ),
                i = t.placement.split("-")[0],
                o = C(i),
                s = t.placement.split("-")[1] || "",
                r = [];
              switch (e.behavior) {
                case lt.FLIP:
                  r = [i, o];
                  break;
                case lt.CLOCKWISE:
                  r = B(i);
                  break;
                case lt.COUNTERCLOCKWISE:
                  r = B(i, !0);
                  break;
                default:
                  r = e.behavior;
              }
              return (
                r.forEach(function(a, l) {
                  if (i !== a || r.length === l + 1) return t;
                  (i = t.placement.split("-")[0]), (o = C(i));
                  var c = t.offsets.popper,
                    u = t.offsets.reference,
                    h = X,
                    d =
                      ("left" === i && h(c.right) > h(u.left)) ||
                      ("right" === i && h(c.left) < h(u.right)) ||
                      ("top" === i && h(c.bottom) > h(u.top)) ||
                      ("bottom" === i && h(c.top) < h(u.bottom)),
                    p = h(c.left) < h(n.left),
                    f = h(c.right) > h(n.right),
                    g = h(c.top) < h(n.top),
                    m = h(c.bottom) > h(n.bottom),
                    v =
                      ("left" === i && p) ||
                      ("right" === i && f) ||
                      ("top" === i && g) ||
                      ("bottom" === i && m),
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b =
                      !!e.flipVariations &&
                      ((y && "start" === s && p) ||
                        (y && "end" === s && f) ||
                        (!y && "start" === s && g) ||
                        (!y && "end" === s && m));
                  (d || v || b) &&
                    ((t.flipped = !0),
                    (d || v) && (i = r[l + 1]),
                    b && (s = W(s)),
                    (t.placement = i + (s ? "-" + s : "")),
                    (t.offsets.popper = st(
                      {},
                      t.offsets.popper,
                      T(t.instance.popper, t.offsets.reference, t.placement)
                    )),
                    (t = $(t.instance.modifiers, t, "flip")));
                }),
                t
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function(t) {
              var e = t.placement,
                n = e.split("-")[0],
                i = t.offsets,
                o = i.popper,
                s = i.reference,
                r = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return (
                (o[r ? "left" : "top"] =
                  s[n] - (a ? o[r ? "width" : "height"] : 0)),
                (t.placement = C(e)),
                (t.offsets.popper = p(o)),
                t
              );
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function(t) {
              if (!H(t.instance.modifiers, "hide", "preventOverflow")) return t;
              var e = t.offsets.reference,
                n = S(t.instance.modifiers, function(t) {
                  return "preventOverflow" === t.name;
                }).boundaries;
              if (
                e.bottom < n.top ||
                e.left > n.right ||
                e.top > n.bottom ||
                e.right < n.left
              ) {
                if (!0 === t.hide) return t;
                (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === t.hide) return t;
                (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
              }
              return t;
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function(t, e) {
              var n = e.x,
                i = e.y,
                s = t.offsets.popper,
                r = S(t.instance.modifiers, function(t) {
                  return "applyStyle" === t.name;
                }).gpuAcceleration;
              void 0 !== r &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var a,
                l,
                c = void 0 === r ? e.gpuAcceleration : r,
                u = f(o(t.instance.popper)),
                h = { position: s.position },
                d = {
                  left: X(s.left),
                  top: X(s.top),
                  bottom: X(s.bottom),
                  right: X(s.right)
                },
                p = "bottom" === n ? "top" : "bottom",
                g = "right" === i ? "left" : "right",
                m = k("transform");
              if (
                ((l = "bottom" === p ? -u.height + d.bottom : d.top),
                (a = "right" === g ? -u.width + d.right : d.left),
                c && m)
              )
                (h[m] = "translate3d(" + a + "px, " + l + "px, 0)"),
                  (h[p] = 0),
                  (h[g] = 0),
                  (h.willChange = "transform");
              else {
                var v = "bottom" === p ? -1 : 1,
                  y = "right" === g ? -1 : 1;
                (h[p] = l * v), (h[g] = a * y), (h.willChange = p + ", " + g);
              }
              var b = { "x-placement": t.placement };
              return (
                (t.attributes = st({}, b, t.attributes)),
                (t.styles = st({}, h, t.styles)),
                (t.arrowStyles = st({}, t.offsets.arrow, t.arrowStyles)),
                t
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function(t) {
              return (
                z(t.instance.popper, t.styles),
                R(t.instance.popper, t.attributes),
                t.arrowElement &&
                  Object.keys(t.arrowStyles).length &&
                  z(t.arrowElement, t.arrowStyles),
                t
              );
            },
            onLoad: function(t, e, n, i, o) {
              var s = _(o, e, t),
                r = w(
                  n.placement,
                  s,
                  e,
                  t,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
              return (
                e.setAttribute("x-placement", r),
                z(e, { position: "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0
          }
        }
      }),
      ct
    );
  }),
  (function(t, e) {
    "object" === typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" === typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e((t.bootstrap = {}), t.jQuery, t.Popper);
  })(this, function(t, e, n) {
    "use strict";
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function o(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function s() {
      return (s =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }).apply(this, arguments);
    }
    (e = e && e.hasOwnProperty("default") ? e.default : e),
      (n = n && n.hasOwnProperty("default") ? n.default : n);
    var r = (function(t) {
        function e(t) {
          return {}.toString
            .call(t)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
        }
        var n = !1,
          i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
              do {
                t += ~~(1e6 * Math.random());
              } while (document.getElementById(t));
              return t;
            },
            getSelectorFromElement: function(e) {
              var n = e.getAttribute("data-target");
              (n && "#" !== n) || (n = e.getAttribute("href") || ""),
                "#" === n.charAt(0) &&
                  (n = (function(e) {
                    return (e =
                      "function" === typeof t.escapeSelector
                        ? t.escapeSelector(e).substr(1)
                        : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                  })(n));
              try {
                return t(document).find(n).length > 0 ? n : null;
              } catch (t) {
                return null;
              }
            },
            reflow: function(t) {
              return t.offsetHeight;
            },
            triggerTransitionEnd: function(e) {
              t(e).trigger(n.end);
            },
            supportsTransitionEnd: function() {
              return Boolean(n);
            },
            isElement: function(t) {
              return (t[0] || t).nodeType;
            },
            typeCheckConfig: function(t, n, o) {
              for (var s in o)
                if (Object.prototype.hasOwnProperty.call(o, s)) {
                  var r = o[s],
                    a = n[s],
                    l = a && i.isElement(a) ? "element" : e(a);
                  if (!new RegExp(r).test(l))
                    throw new Error(
                      t.toUpperCase() +
                        ': Option "' +
                        s +
                        '" provided type "' +
                        l +
                        '" but expected type "' +
                        r +
                        '".'
                    );
                }
            }
          };
        return (
          (n = !window.QUnit && { end: "transitionend" }),
          (t.fn.emulateTransitionEnd = function(e) {
            var n = this,
              o = !1;
            return (
              t(this).one(i.TRANSITION_END, function() {
                o = !0;
              }),
              setTimeout(function() {
                o || i.triggerTransitionEnd(n);
              }, e),
              this
            );
          }),
          i.supportsTransitionEnd() &&
            (t.event.special[i.TRANSITION_END] = {
              bindType: n.end,
              delegateType: n.end,
              handle: function(e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              }
            }),
          i
        );
      })(e),
      a = (function(t) {
        var e = "alert",
          n = "bs.alert",
          i = "." + n,
          s = t.fn[e],
          a = {
            CLOSE: "close" + i,
            CLOSED: "closed" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
          },
          l = (function() {
            function e(t) {
              this._element = t;
            }
            var i = e.prototype;
            return (
              (i.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() ||
                  this._removeElement(e);
              }),
              (i.dispose = function() {
                t.removeData(this._element, n), (this._element = null);
              }),
              (i._getRootElement = function(e) {
                var n = r.getSelectorFromElement(e),
                  i = !1;
                return (
                  n && (i = t(n)[0]), i || (i = t(e).closest(".alert")[0]), i
                );
              }),
              (i._triggerCloseEvent = function(e) {
                var n = t.Event(a.CLOSE);
                return t(e).trigger(n), n;
              }),
              (i._removeElement = function(e) {
                var n = this;
                t(e).removeClass("show"),
                  r.supportsTransitionEnd() && t(e).hasClass("fade")
                    ? t(e)
                        .one(r.TRANSITION_END, function(t) {
                          return n._destroyElement(e, t);
                        })
                        .emulateTransitionEnd(150)
                    : this._destroyElement(e);
              }),
              (i._destroyElement = function(e) {
                t(e)
                  .detach()
                  .trigger(a.CLOSED)
                  .remove();
              }),
              (e._jQueryInterface = function(i) {
                return this.each(function() {
                  var o = t(this),
                    s = o.data(n);
                  s || ((s = new e(this)), o.data(n, s)),
                    "close" === i && s[i](this);
                });
              }),
              (e._handleDismiss = function(t) {
                return function(e) {
                  e && e.preventDefault(), t.close(this);
                };
              }),
              o(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                }
              ]),
              e
            );
          })();
        return (
          t(document).on(
            a.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            l._handleDismiss(new l())
          ),
          (t.fn[e] = l._jQueryInterface),
          (t.fn[e].Constructor = l),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = s), l._jQueryInterface;
          }),
          l
        );
      })(e),
      l = (function(t) {
        var e = "button",
          n = "bs.button",
          i = "." + n,
          s = ".data-api",
          r = t.fn[e],
          a = "active",
          l = '[data-toggle^="button"]',
          c = ".btn",
          u = {
            CLICK_DATA_API: "click" + i + s,
            FOCUS_BLUR_DATA_API: "focus" + i + s + " blur" + i + s
          },
          h = (function() {
            function e(t) {
              this._element = t;
            }
            var i = e.prototype;
            return (
              (i.toggle = function() {
                var e = !0,
                  n = !0,
                  i = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                  var o = t(this._element).find("input")[0];
                  if (o) {
                    if ("radio" === o.type)
                      if (o.checked && t(this._element).hasClass(a)) e = !1;
                      else {
                        var s = t(i).find(".active")[0];
                        s && t(s).removeClass(a);
                      }
                    if (e) {
                      if (
                        o.hasAttribute("disabled") ||
                        i.hasAttribute("disabled") ||
                        o.classList.contains("disabled") ||
                        i.classList.contains("disabled")
                      )
                        return;
                      (o.checked = !t(this._element).hasClass(a)),
                        t(o).trigger("change");
                    }
                    o.focus(), (n = !1);
                  }
                }
                n &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !t(this._element).hasClass(a)
                  ),
                  e && t(this._element).toggleClass(a);
              }),
              (i.dispose = function() {
                t.removeData(this._element, n), (this._element = null);
              }),
              (e._jQueryInterface = function(i) {
                return this.each(function() {
                  var o = t(this).data(n);
                  o || ((o = new e(this)), t(this).data(n, o)),
                    "toggle" === i && o[i]();
                });
              }),
              o(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                }
              ]),
              e
            );
          })();
        return (
          t(document)
            .on(u.CLICK_DATA_API, l, function(e) {
              e.preventDefault();
              var n = e.target;
              t(n).hasClass("btn") || (n = t(n).closest(c)),
                h._jQueryInterface.call(t(n), "toggle");
            })
            .on(u.FOCUS_BLUR_DATA_API, l, function(e) {
              var n = t(e.target).closest(c)[0];
              t(n).toggleClass("focus", /^focus(in)?$/.test(e.type));
            }),
          (t.fn[e] = h._jQueryInterface),
          (t.fn[e].Constructor = h),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = r), h._jQueryInterface;
          }),
          h
        );
      })(e),
      c = (function(t) {
        var e = "carousel",
          n = "bs.carousel",
          i = "." + n,
          a = t.fn[e],
          l = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
          },
          c = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
          },
          u = "next",
          h = "prev",
          d = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api"
          },
          p = "active",
          f = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
          },
          g = (function() {
            function a(e, n) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(n)),
                (this._element = t(e)[0]),
                (this._indicatorsElement = t(this._element).find(
                  f.INDICATORS
                )[0]),
                this._addEventListeners();
            }
            var g = a.prototype;
            return (
              (g.next = function() {
                this._isSliding || this._slide(u);
              }),
              (g.nextWhenVisible = function() {
                !document.hidden &&
                  t(this._element).is(":visible") &&
                  "hidden" !== t(this._element).css("visibility") &&
                  this.next();
              }),
              (g.prev = function() {
                this._isSliding || this._slide(h);
              }),
              (g.pause = function(e) {
                e || (this._isPaused = !0),
                  t(this._element).find(f.NEXT_PREV)[0] &&
                    r.supportsTransitionEnd() &&
                    (r.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (g.cycle = function(t) {
                t || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (g.to = function(e) {
                var n = this;
                this._activeElement = t(this._element).find(f.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    t(this._element).one(d.SLID, function() {
                      return n.to(e);
                    });
                  else {
                    if (i === e) return this.pause(), void this.cycle();
                    var o = e > i ? u : h;
                    this._slide(o, this._items[e]);
                  }
              }),
              (g.dispose = function() {
                t(this._element).off(i),
                  t.removeData(this._element, n),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (g._getConfig = function(t) {
                return (t = s({}, l, t)), r.typeCheckConfig(e, t, c), t;
              }),
              (g._addEventListeners = function() {
                var e = this;
                this._config.keyboard &&
                  t(this._element).on(d.KEYDOWN, function(t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    (t(this._element)
                      .on(d.MOUSEENTER, function(t) {
                        return e.pause(t);
                      })
                      .on(d.MOUSELEAVE, function(t) {
                        return e.cycle(t);
                      }),
                    "ontouchstart" in document.documentElement &&
                      t(this._element).on(d.TOUCHEND, function() {
                        e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function(t) {
                            return e.cycle(t);
                          }, 500 + e._config.interval));
                      }));
              }),
              (g._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName))
                  switch (t.which) {
                    case 37:
                      t.preventDefault(), this.prev();
                      break;
                    case 39:
                      t.preventDefault(), this.next();
                      break;
                    default:
                      return;
                  }
              }),
              (g._getItemIndex = function(e) {
                return (
                  (this._items = t.makeArray(
                    t(e)
                      .parent()
                      .find(f.ITEM)
                  )),
                  this._items.indexOf(e)
                );
              }),
              (g._getItemByDirection = function(t, e) {
                var n = t === u,
                  i = t === h,
                  o = this._getItemIndex(e),
                  s = this._items.length - 1;
                if (((i && 0 === o) || (n && o === s)) && !this._config.wrap)
                  return e;
                var r = (o + (t === h ? -1 : 1)) % this._items.length;
                return -1 === r
                  ? this._items[this._items.length - 1]
                  : this._items[r];
              }),
              (g._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e),
                  o = this._getItemIndex(
                    t(this._element).find(f.ACTIVE_ITEM)[0]
                  ),
                  s = t.Event(d.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: o,
                    to: i
                  });
                return t(this._element).trigger(s), s;
              }),
              (g._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                  t(this._indicatorsElement)
                    .find(f.ACTIVE)
                    .removeClass(p);
                  var n = this._indicatorsElement.children[
                    this._getItemIndex(e)
                  ];
                  n && t(n).addClass(p);
                }
              }),
              (g._slide = function(e, n) {
                var i,
                  o,
                  s,
                  a = this,
                  l = t(this._element).find(f.ACTIVE_ITEM)[0],
                  c = this._getItemIndex(l),
                  h = n || (l && this._getItemByDirection(e, l)),
                  g = this._getItemIndex(h),
                  m = Boolean(this._interval);
                if (
                  (e === u
                    ? ((i = "carousel-item-left"),
                      (o = "carousel-item-next"),
                      (s = "left"))
                    : ((i = "carousel-item-right"),
                      (o = "carousel-item-prev"),
                      (s = "right")),
                  h && t(h).hasClass(p))
                )
                  this._isSliding = !1;
                else if (
                  !this._triggerSlideEvent(h, s).isDefaultPrevented() &&
                  l &&
                  h
                ) {
                  (this._isSliding = !0),
                    m && this.pause(),
                    this._setActiveIndicatorElement(h);
                  var v = t.Event(d.SLID, {
                    relatedTarget: h,
                    direction: s,
                    from: c,
                    to: g
                  });
                  r.supportsTransitionEnd() &&
                  t(this._element).hasClass("slide")
                    ? (t(h).addClass(o),
                      r.reflow(h),
                      t(l).addClass(i),
                      t(h).addClass(i),
                      t(l)
                        .one(r.TRANSITION_END, function() {
                          t(h)
                            .removeClass(i + " " + o)
                            .addClass(p),
                            t(l).removeClass(p + " " + o + " " + i),
                            (a._isSliding = !1),
                            setTimeout(function() {
                              return t(a._element).trigger(v);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (t(l).removeClass(p),
                      t(h).addClass(p),
                      (this._isSliding = !1),
                      t(this._element).trigger(v)),
                    m && this.cycle();
                }
              }),
              (a._jQueryInterface = function(e) {
                return this.each(function() {
                  var i = t(this).data(n),
                    o = s({}, l, t(this).data());
                  "object" === typeof e && (o = s({}, o, e));
                  var r = "string" === typeof e ? e : o.slide;
                  if (
                    (i || ((i = new a(this, o)), t(this).data(n, i)),
                    "number" === typeof e)
                  )
                    i.to(e);
                  else if ("string" === typeof r) {
                    if (void 0 === i[r])
                      throw new Error('No method named "' + r + '"');
                    i[r]();
                  } else o.interval && (i.pause(), i.cycle());
                });
              }),
              (a._dataApiClickHandler = function(e) {
                var i = r.getSelectorFromElement(this);
                if (i) {
                  var o = t(i)[0];
                  if (o && t(o).hasClass("carousel")) {
                    var l = s({}, t(o).data(), t(this).data()),
                      c = this.getAttribute("data-slide-to");
                    c && (l.interval = !1),
                      a._jQueryInterface.call(t(o), l),
                      c &&
                        t(o)
                          .data(n)
                          .to(c),
                      e.preventDefault();
                  }
                }
              }),
              o(a, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return l;
                  }
                }
              ]),
              a
            );
          })();
        return (
          t(document).on(
            d.CLICK_DATA_API,
            f.DATA_SLIDE,
            g._dataApiClickHandler
          ),
          t(window).on(d.LOAD_DATA_API, function() {
            t(f.DATA_RIDE).each(function() {
              var e = t(this);
              g._jQueryInterface.call(e, e.data());
            });
          }),
          (t.fn[e] = g._jQueryInterface),
          (t.fn[e].Constructor = g),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = a), g._jQueryInterface;
          }),
          g
        );
      })(e),
      u = (function(t) {
        var e = "collapse",
          n = "bs.collapse",
          i = "." + n,
          a = t.fn[e],
          l = { toggle: !0, parent: "" },
          c = { toggle: "boolean", parent: "(string|element)" },
          u = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
          },
          h = "show",
          d = "collapse",
          p = "collapsing",
          f = "collapsed",
          g = "width",
          m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
          },
          v = (function() {
            function i(e, n) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(n)),
                (this._triggerArray = t.makeArray(
                  t(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (var i = t(m.DATA_TOGGLE), o = 0; o < i.length; o++) {
                var s = i[o],
                  a = r.getSelectorFromElement(s);
                null !== a &&
                  t(a).filter(e).length > 0 &&
                  this._triggerArray.push(s);
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var a = i.prototype;
            return (
              (a.toggle = function() {
                t(this._element).hasClass(h) ? this.hide() : this.show();
              }),
              (a.show = function() {
                var e = this;
                if (!this._isTransitioning && !t(this._element).hasClass(h)) {
                  var o, s;
                  if (
                    (this._parent &&
                      ((o = t.makeArray(
                        t(this._parent)
                          .children()
                          .children(m.ACTIVES)
                      )).length ||
                        (o = null)),
                    !(o && (s = t(o).data(n)) && s._isTransitioning))
                  ) {
                    var a = t.Event(u.SHOW);
                    if (
                      (t(this._element).trigger(a), !a.isDefaultPrevented())
                    ) {
                      o &&
                        (i._jQueryInterface.call(t(o), "hide"),
                        s || t(o).data(n, null));
                      var l = this._getDimension();
                      t(this._element)
                        .removeClass(d)
                        .addClass(p),
                        (this._element.style[l] = 0),
                        this._triggerArray.length &&
                          t(this._triggerArray)
                            .removeClass(f)
                            .attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                      var c = function() {
                        t(e._element)
                          .removeClass(p)
                          .addClass(d)
                          .addClass(h),
                          (e._element.style[l] = ""),
                          e.setTransitioning(!1),
                          t(e._element).trigger(u.SHOWN);
                      };
                      if (r.supportsTransitionEnd()) {
                        var g = "scroll" + (l[0].toUpperCase() + l.slice(1));
                        t(this._element)
                          .one(r.TRANSITION_END, c)
                          .emulateTransitionEnd(600),
                          (this._element.style[l] = this._element[g] + "px");
                      } else c();
                    }
                  }
                }
              }),
              (a.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(h)) {
                  var n = t.Event(u.HIDE);
                  if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension();
                    if (
                      ((this._element.style[i] =
                        this._element.getBoundingClientRect()[i] + "px"),
                      r.reflow(this._element),
                      t(this._element)
                        .addClass(p)
                        .removeClass(d)
                        .removeClass(h),
                      this._triggerArray.length)
                    )
                      for (var o = 0; o < this._triggerArray.length; o++) {
                        var s = this._triggerArray[o],
                          a = r.getSelectorFromElement(s);
                        null !== a &&
                          (t(a).hasClass(h) ||
                            t(s)
                              .addClass(f)
                              .attr("aria-expanded", !1));
                      }
                    this.setTransitioning(!0);
                    var l = function() {
                      e.setTransitioning(!1),
                        t(e._element)
                          .removeClass(p)
                          .addClass(d)
                          .trigger(u.HIDDEN);
                    };
                    (this._element.style[i] = ""),
                      r.supportsTransitionEnd()
                        ? t(this._element)
                            .one(r.TRANSITION_END, l)
                            .emulateTransitionEnd(600)
                        : l();
                  }
                }
              }),
              (a.setTransitioning = function(t) {
                this._isTransitioning = t;
              }),
              (a.dispose = function() {
                t.removeData(this._element, n),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (a._getConfig = function(t) {
                return (
                  (t = s({}, l, t)),
                  (t.toggle = Boolean(t.toggle)),
                  r.typeCheckConfig(e, t, c),
                  t
                );
              }),
              (a._getDimension = function() {
                return t(this._element).hasClass(g) ? g : "height";
              }),
              (a._getParent = function() {
                var e = this,
                  n = null;
                r.isElement(this._config.parent)
                  ? ((n = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (n = this._config.parent[0]))
                  : (n = t(this._config.parent)[0]);
                var o =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]';
                return (
                  t(n)
                    .find(o)
                    .each(function(t, n) {
                      e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [
                        n
                      ]);
                    }),
                  n
                );
              }),
              (a._addAriaAndCollapsedClass = function(e, n) {
                if (e) {
                  var i = t(e).hasClass(h);
                  n.length &&
                    t(n)
                      .toggleClass(f, !i)
                      .attr("aria-expanded", i);
                }
              }),
              (i._getTargetFromElement = function(e) {
                var n = r.getSelectorFromElement(e);
                return n ? t(n)[0] : null;
              }),
              (i._jQueryInterface = function(e) {
                return this.each(function() {
                  var o = t(this),
                    r = o.data(n),
                    a = s({}, l, o.data(), "object" == typeof e && e);
                  if (
                    (!r && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
                    r || ((r = new i(this, a)), o.data(n, r)),
                    "string" === typeof e)
                  ) {
                    if (void 0 === r[e])
                      throw new Error('No method named "' + e + '"');
                    r[e]();
                  }
                });
              }),
              o(i, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return l;
                  }
                }
              ]),
              i
            );
          })();
        return (
          t(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this),
              o = r.getSelectorFromElement(this);
            t(o).each(function() {
              var e = t(this),
                o = e.data(n) ? "toggle" : i.data();
              v._jQueryInterface.call(e, o);
            });
          }),
          (t.fn[e] = v._jQueryInterface),
          (t.fn[e].Constructor = v),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = a), v._jQueryInterface;
          }),
          v
        );
      })(e),
      h = (function(t) {
        var e = "dropdown",
          i = "bs.dropdown",
          a = "." + i,
          l = ".data-api",
          c = t.fn[e],
          u = new RegExp("38|40|27"),
          h = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            CLICK: "click" + a,
            CLICK_DATA_API: "click" + a + l,
            KEYDOWN_DATA_API: "keydown" + a + l,
            KEYUP_DATA_API: "keyup" + a + l
          },
          d = "disabled",
          p = "show",
          f = "dropup",
          g = "dropdown-menu-right",
          m = '[data-toggle="dropdown"]',
          v = ".dropdown-menu",
          y = { offset: 0, flip: !0, boundary: "scrollParent" },
          b = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
          },
          w = (function() {
            function l(t, e) {
              (this._element = t),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var c = l.prototype;
            return (
              (c.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(d)) {
                  var e = l._getParentFromElement(this._element),
                    i = t(this._menu).hasClass(p);
                  if ((l._clearMenus(), !i)) {
                    var o = { relatedTarget: this._element },
                      s = t.Event(h.SHOW, o);
                    if ((t(e).trigger(s), !s.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === n)
                          throw new Error(
                            "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                          );
                        var r = this._element;
                        t(e).hasClass(f) &&
                          (t(this._menu).hasClass("dropdown-menu-left") ||
                            t(this._menu).hasClass(g)) &&
                          (r = e),
                          "scrollParent" !== this._config.boundary &&
                            t(e).addClass("position-static"),
                          (this._popper = new n(
                            r,
                            this._menu,
                            this._getPopperConfig()
                          ));
                      }
                      "ontouchstart" in document.documentElement &&
                        !t(e).closest(".navbar-nav").length &&
                        t("body")
                          .children()
                          .on("mouseover", null, t.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        t(this._menu).toggleClass(p),
                        t(e)
                          .toggleClass(p)
                          .trigger(t.Event(h.SHOWN, o));
                    }
                  }
                }
              }),
              (c.dispose = function() {
                t.removeData(this._element, i),
                  t(this._element).off(a),
                  (this._element = null),
                  (this._menu = null),
                  null !== this._popper &&
                    (this._popper.destroy(), (this._popper = null));
              }),
              (c.update = function() {
                (this._inNavbar = this._detectNavbar()),
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (c._addEventListeners = function() {
                var e = this;
                t(this._element).on(h.CLICK, function(t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle();
                });
              }),
              (c._getConfig = function(n) {
                return (
                  (n = s(
                    {},
                    this.constructor.Default,
                    t(this._element).data(),
                    n
                  )),
                  r.typeCheckConfig(e, n, this.constructor.DefaultType),
                  n
                );
              }),
              (c._getMenuElement = function() {
                if (!this._menu) {
                  var e = l._getParentFromElement(this._element);
                  this._menu = t(e).find(v)[0];
                }
                return this._menu;
              }),
              (c._getPlacement = function() {
                var e = t(this._element).parent(),
                  n = "bottom-start";
                return (
                  e.hasClass(f)
                    ? ((n = "top-start"),
                      t(this._menu).hasClass(g) && (n = "top-end"))
                    : e.hasClass("dropright")
                    ? (n = "right-start")
                    : e.hasClass("dropleft")
                    ? (n = "left-start")
                    : t(this._menu).hasClass(g) && (n = "bottom-end"),
                  n
                );
              }),
              (c._detectNavbar = function() {
                return t(this._element).closest(".navbar").length > 0;
              }),
              (c._getPopperConfig = function() {
                var t = this,
                  e = {};
                return (
                  "function" === typeof this._config.offset
                    ? (e.fn = function(e) {
                        return (
                          (e.offsets = s(
                            {},
                            e.offsets,
                            t._config.offset(e.offsets) || {}
                          )),
                          e
                        );
                      })
                    : (e.offset = this._config.offset),
                  {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: e,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary
                      }
                    }
                  }
                );
              }),
              (l._jQueryInterface = function(e) {
                return this.each(function() {
                  var n = t(this).data(i);
                  if (
                    (n ||
                      ((n = new l(this, "object" == typeof e ? e : null)),
                      t(this).data(i, n)),
                    "string" === typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new Error('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              (l._clearMenus = function(e) {
                if (
                  !e ||
                  (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                )
                  for (var n = t.makeArray(t(m)), o = 0; o < n.length; o++) {
                    var s = l._getParentFromElement(n[o]),
                      r = t(n[o]).data(i),
                      a = { relatedTarget: n[o] };
                    if (r) {
                      var c = r._menu;
                      if (
                        t(s).hasClass(p) &&
                        !(
                          e &&
                          (("click" === e.type &&
                            /input|textarea/i.test(e.target.tagName)) ||
                            ("keyup" === e.type && 9 === e.which)) &&
                          t.contains(s, e.target)
                        )
                      ) {
                        var u = t.Event(h.HIDE, a);
                        t(s).trigger(u),
                          u.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              t("body")
                                .children()
                                .off("mouseover", null, t.noop),
                            n[o].setAttribute("aria-expanded", "false"),
                            t(c).removeClass(p),
                            t(s)
                              .removeClass(p)
                              .trigger(t.Event(h.HIDDEN, a)));
                      }
                    }
                  }
              }),
              (l._getParentFromElement = function(e) {
                var n,
                  i = r.getSelectorFromElement(e);
                return i && (n = t(i)[0]), n || e.parentNode;
              }),
              (l._dataApiKeydownHandler = function(e) {
                if (
                  (/input|textarea/i.test(e.target.tagName)
                    ? !(
                        32 === e.which ||
                        (27 !== e.which &&
                          ((40 !== e.which && 38 !== e.which) ||
                            t(e.target).closest(v).length))
                      )
                    : u.test(e.which)) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  !this.disabled && !t(this).hasClass(d))
                ) {
                  var n = l._getParentFromElement(this),
                    i = t(n).hasClass(p);
                  if (
                    (i || (27 === e.which && 32 === e.which)) &&
                    (!i || (27 !== e.which && 32 !== e.which))
                  ) {
                    var o = t(n)
                      .find(".dropdown-menu .dropdown-item:not(.disabled)")
                      .get();
                    if (o.length) {
                      var s = o.indexOf(e.target);
                      38 === e.which && s > 0 && s--,
                        40 === e.which && s < o.length - 1 && s++,
                        s < 0 && (s = 0),
                        o[s].focus();
                    }
                  } else {
                    if (27 === e.which) {
                      var r = t(n).find(m)[0];
                      t(r).trigger("focus");
                    }
                    t(this).trigger("click");
                  }
                }
              }),
              o(l, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return y;
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return b;
                  }
                }
              ]),
              l
            );
          })();
        return (
          t(document)
            .on(h.KEYDOWN_DATA_API, m, w._dataApiKeydownHandler)
            .on(h.KEYDOWN_DATA_API, v, w._dataApiKeydownHandler)
            .on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, w._clearMenus)
            .on(h.CLICK_DATA_API, m, function(e) {
              e.preventDefault(),
                e.stopPropagation(),
                w._jQueryInterface.call(t(this), "toggle");
            })
            .on(h.CLICK_DATA_API, ".dropdown form", function(t) {
              t.stopPropagation();
            }),
          (t.fn[e] = w._jQueryInterface),
          (t.fn[e].Constructor = w),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = c), w._jQueryInterface;
          }),
          w
        );
      })(e),
      d = (function(t) {
        var e = "bs.modal",
          n = "." + e,
          i = t.fn.modal,
          a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          l = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
          },
          c = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click" + n + ".data-api"
          },
          u = "modal-open",
          h = "fade",
          d = "show",
          p = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
          },
          f = (function() {
            function i(e, n) {
              (this._config = this._getConfig(n)),
                (this._element = e),
                (this._dialog = t(e).find(p.DIALOG)[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
            }
            var f = i.prototype;
            return (
              (f.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t);
              }),
              (f.show = function(e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                  r.supportsTransitionEnd() &&
                    t(this._element).hasClass(h) &&
                    (this._isTransitioning = !0);
                  var i = t.Event(c.SHOW, { relatedTarget: e });
                  t(this._element).trigger(i),
                    this._isShown ||
                      i.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      t(document.body).addClass(u),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(this._element).on(
                        c.CLICK_DISMISS,
                        p.DATA_DISMISS,
                        function(t) {
                          return n.hide(t);
                        }
                      ),
                      t(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(c.MOUSEUP_DISMISS, function(e) {
                          t(e.target).is(n._element) &&
                            (n._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function() {
                        return n._showElement(e);
                      }));
                }
              }),
              (f.hide = function(e) {
                var n = this;
                if (
                  (e && e.preventDefault(),
                  !this._isTransitioning && this._isShown)
                ) {
                  var i = t.Event(c.HIDE);
                  if (
                    (t(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented())
                  ) {
                    this._isShown = !1;
                    var o =
                      r.supportsTransitionEnd() && t(this._element).hasClass(h);
                    o && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(document).off(c.FOCUSIN),
                      t(this._element).removeClass(d),
                      t(this._element).off(c.CLICK_DISMISS),
                      t(this._dialog).off(c.MOUSEDOWN_DISMISS),
                      o
                        ? t(this._element)
                            .one(r.TRANSITION_END, function(t) {
                              return n._hideModal(t);
                            })
                            .emulateTransitionEnd(300)
                        : this._hideModal();
                  }
                }
              }),
              (f.dispose = function() {
                t.removeData(this._element, e),
                  t(window, document, this._element, this._backdrop).off(n),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._scrollbarWidth = null);
              }),
              (f.handleUpdate = function() {
                this._adjustDialog();
              }),
              (f._getConfig = function(t) {
                return (t = s({}, a, t)), r.typeCheckConfig("modal", t, l), t;
              }),
              (f._showElement = function(e) {
                var n = this,
                  i = r.supportsTransitionEnd() && t(this._element).hasClass(h);
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  (this._element.scrollTop = 0),
                  i && r.reflow(this._element),
                  t(this._element).addClass(d),
                  this._config.focus && this._enforceFocus();
                var o = t.Event(c.SHOWN, { relatedTarget: e }),
                  s = function() {
                    n._config.focus && n._element.focus(),
                      (n._isTransitioning = !1),
                      t(n._element).trigger(o);
                  };
                i
                  ? t(this._dialog)
                      .one(r.TRANSITION_END, s)
                      .emulateTransitionEnd(300)
                  : s();
              }),
              (f._enforceFocus = function() {
                var e = this;
                t(document)
                  .off(c.FOCUSIN)
                  .on(c.FOCUSIN, function(n) {
                    document === n.target ||
                      e._element === n.target ||
                      t(e._element).has(n.target).length ||
                      e._element.focus();
                  });
              }),
              (f._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard
                  ? t(this._element).on(c.KEYDOWN_DISMISS, function(t) {
                      27 === t.which && (t.preventDefault(), e.hide());
                    })
                  : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS);
              }),
              (f._setResizeEvent = function() {
                var e = this;
                this._isShown
                  ? t(window).on(c.RESIZE, function(t) {
                      return e.handleUpdate(t);
                    })
                  : t(window).off(c.RESIZE);
              }),
              (f._hideModal = function() {
                var e = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function() {
                    t(document.body).removeClass(u),
                      e._resetAdjustments(),
                      e._resetScrollbar(),
                      t(e._element).trigger(c.HIDDEN);
                  });
              }),
              (f._removeBackdrop = function() {
                this._backdrop &&
                  (t(this._backdrop).remove(), (this._backdrop = null));
              }),
              (f._showBackdrop = function(e) {
                var n = this,
                  i = t(this._element).hasClass(h) ? h : "";
                if (this._isShown && this._config.backdrop) {
                  var o = r.supportsTransitionEnd() && i;
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = "modal-backdrop"),
                    i && t(this._backdrop).addClass(i),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(c.CLICK_DISMISS, function(t) {
                      n._ignoreBackdropClick
                        ? (n._ignoreBackdropClick = !1)
                        : t.target === t.currentTarget &&
                          ("static" === n._config.backdrop
                            ? n._element.focus()
                            : n.hide());
                    }),
                    o && r.reflow(this._backdrop),
                    t(this._backdrop).addClass(d),
                    !e)
                  )
                    return;
                  if (!o) return void e();
                  t(this._backdrop)
                    .one(r.TRANSITION_END, e)
                    .emulateTransitionEnd(150);
                } else if (!this._isShown && this._backdrop) {
                  t(this._backdrop).removeClass(d);
                  var s = function() {
                    n._removeBackdrop(), e && e();
                  };
                  r.supportsTransitionEnd() && t(this._element).hasClass(h)
                    ? t(this._backdrop)
                        .one(r.TRANSITION_END, s)
                        .emulateTransitionEnd(150)
                    : s();
                } else e && e();
              }),
              (f._adjustDialog = function() {
                var t =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                  t &&
                  (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"),
                  this._isBodyOverflowing &&
                    !t &&
                    (this._element.style.paddingRight =
                      this._scrollbarWidth + "px");
              }),
              (f._resetAdjustments = function() {
                (this._element.style.paddingLeft = ""),
                  (this._element.style.paddingRight = "");
              }),
              (f._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                  t.left + t.right < window.innerWidth),
                  (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (f._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                  t(p.FIXED_CONTENT).each(function(n, i) {
                    var o = t(i)[0].style.paddingRight,
                      s = t(i).css("padding-right");
                    t(i)
                      .data("padding-right", o)
                      .css(
                        "padding-right",
                        parseFloat(s) + e._scrollbarWidth + "px"
                      );
                  }),
                    t(p.STICKY_CONTENT).each(function(n, i) {
                      var o = t(i)[0].style.marginRight,
                        s = t(i).css("margin-right");
                      t(i)
                        .data("margin-right", o)
                        .css(
                          "margin-right",
                          parseFloat(s) - e._scrollbarWidth + "px"
                        );
                    }),
                    t(p.NAVBAR_TOGGLER).each(function(n, i) {
                      var o = t(i)[0].style.marginRight,
                        s = t(i).css("margin-right");
                      t(i)
                        .data("margin-right", o)
                        .css(
                          "margin-right",
                          parseFloat(s) + e._scrollbarWidth + "px"
                        );
                    });
                  var n = document.body.style.paddingRight,
                    i = t("body").css("padding-right");
                  t("body")
                    .data("padding-right", n)
                    .css(
                      "padding-right",
                      parseFloat(i) + this._scrollbarWidth + "px"
                    );
                }
              }),
              (f._resetScrollbar = function() {
                t(p.FIXED_CONTENT).each(function(e, n) {
                  var i = t(n).data("padding-right");
                  void 0 !== i &&
                    t(n)
                      .css("padding-right", i)
                      .removeData("padding-right");
                }),
                  t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function(
                    e,
                    n
                  ) {
                    var i = t(n).data("margin-right");
                    void 0 !== i &&
                      t(n)
                        .css("margin-right", i)
                        .removeData("margin-right");
                  });
                var e = t("body").data("padding-right");
                void 0 !== e &&
                  t("body")
                    .css("padding-right", e)
                    .removeData("padding-right");
              }),
              (f._getScrollbarWidth = function() {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"),
                  document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e;
              }),
              (i._jQueryInterface = function(n, o) {
                return this.each(function() {
                  var r = t(this).data(e),
                    a = s(
                      {},
                      i.Default,
                      t(this).data(),
                      "object" === typeof n && n
                    );
                  if (
                    (r || ((r = new i(this, a)), t(this).data(e, r)),
                    "string" === typeof n)
                  ) {
                    if (void 0 === r[n])
                      throw new Error('No method named "' + n + '"');
                    r[n](o);
                  } else a.show && r.show(o);
                });
              }),
              o(i, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return a;
                  }
                }
              ]),
              i
            );
          })();
        return (
          t(document).on(c.CLICK_DATA_API, p.DATA_TOGGLE, function(n) {
            var i,
              o = this,
              a = r.getSelectorFromElement(this);
            a && (i = t(a)[0]);
            var l = t(i).data(e)
              ? "toggle"
              : s({}, t(i).data(), t(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
              n.preventDefault();
            var u = t(i).one(c.SHOW, function(e) {
              e.isDefaultPrevented() ||
                u.one(c.HIDDEN, function() {
                  t(o).is(":visible") && o.focus();
                });
            });
            f._jQueryInterface.call(t(i), l, this);
          }),
          (t.fn.modal = f._jQueryInterface),
          (t.fn.modal.Constructor = f),
          (t.fn.modal.noConflict = function() {
            return (t.fn.modal = i), f._jQueryInterface;
          }),
          f
        );
      })(e),
      p = (function(t) {
        var e = "tooltip",
          i = "bs.tooltip",
          a = "." + i,
          l = t.fn[e],
          c = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          u = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
          },
          h = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
          },
          d = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
          },
          p = "show",
          f = "out",
          g = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            INSERTED: "inserted" + a,
            CLICK: "click" + a,
            FOCUSIN: "focusin" + a,
            FOCUSOUT: "focusout" + a,
            MOUSEENTER: "mouseenter" + a,
            MOUSELEAVE: "mouseleave" + a
          },
          m = "fade",
          v = "show",
          y = "hover",
          b = "focus",
          w = (function() {
            function l(t, e) {
              if (void 0 === n)
                throw new Error(
                  "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                );
              (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = t),
                (this.config = this._getConfig(e)),
                (this.tip = null),
                this._setListeners();
            }
            var w = l.prototype;
            return (
              (w.enable = function() {
                this._isEnabled = !0;
              }),
              (w.disable = function() {
                this._isEnabled = !1;
              }),
              (w.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled;
              }),
              (w.toggle = function(e) {
                if (this._isEnabled)
                  if (e) {
                    var n = this.constructor.DATA_KEY,
                      i = t(e.currentTarget).data(n);
                    i ||
                      ((i = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(e.currentTarget).data(n, i)),
                      (i._activeTrigger.click = !i._activeTrigger.click),
                      i._isWithActiveTrigger()
                        ? i._enter(null, i)
                        : i._leave(null, i);
                  } else {
                    if (t(this.getTipElement()).hasClass(v))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (w.dispose = function() {
                clearTimeout(this._timeout),
                  t.removeData(this.element, this.constructor.DATA_KEY),
                  t(this.element).off(this.constructor.EVENT_KEY),
                  t(this.element)
                    .closest(".modal")
                    .off("hide.bs.modal"),
                  this.tip && t(this.tip).remove(),
                  (this._isEnabled = null),
                  (this._timeout = null),
                  (this._hoverState = null),
                  (this._activeTrigger = null),
                  null !== this._popper && this._popper.destroy(),
                  (this._popper = null),
                  (this.element = null),
                  (this.config = null),
                  (this.tip = null);
              }),
              (w.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display"))
                  throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  t(this.element).trigger(i);
                  var o = t.contains(
                    this.element.ownerDocument.documentElement,
                    this.element
                  );
                  if (i.isDefaultPrevented() || !o) return;
                  var s = this.getTipElement(),
                    a = r.getUID(this.constructor.NAME);
                  s.setAttribute("id", a),
                    this.element.setAttribute("aria-describedby", a),
                    this.setContent(),
                    this.config.animation && t(s).addClass(m);
                  var c =
                      "function" === typeof this.config.placement
                        ? this.config.placement.call(this, s, this.element)
                        : this.config.placement,
                    u = this._getAttachment(c);
                  this.addAttachmentClass(u);
                  var h =
                    !1 === this.config.container
                      ? document.body
                      : t(this.config.container);
                  t(s).data(this.constructor.DATA_KEY, this),
                    t.contains(
                      this.element.ownerDocument.documentElement,
                      this.tip
                    ) || t(s).appendTo(h),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new n(this.element, s, {
                      placement: u,
                      modifiers: {
                        offset: { offset: this.config.offset },
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: ".arrow" },
                        preventOverflow: {
                          boundariesElement: this.config.boundary
                        }
                      },
                      onCreate: function(t) {
                        t.originalPlacement !== t.placement &&
                          e._handlePopperPlacementChange(t);
                      },
                      onUpdate: function(t) {
                        e._handlePopperPlacementChange(t);
                      }
                    })),
                    t(s).addClass(v),
                    "ontouchstart" in document.documentElement &&
                      t("body")
                        .children()
                        .on("mouseover", null, t.noop);
                  var d = function() {
                    e.config.animation && e._fixTransition();
                    var n = e._hoverState;
                    (e._hoverState = null),
                      t(e.element).trigger(e.constructor.Event.SHOWN),
                      n === f && e._leave(null, e);
                  };
                  r.supportsTransitionEnd() && t(this.tip).hasClass(m)
                    ? t(this.tip)
                        .one(r.TRANSITION_END, d)
                        .emulateTransitionEnd(l._TRANSITION_DURATION)
                    : d();
                }
              }),
              (w.hide = function(e) {
                var n = this,
                  i = this.getTipElement(),
                  o = t.Event(this.constructor.Event.HIDE),
                  s = function() {
                    n._hoverState !== p &&
                      i.parentNode &&
                      i.parentNode.removeChild(i),
                      n._cleanTipClass(),
                      n.element.removeAttribute("aria-describedby"),
                      t(n.element).trigger(n.constructor.Event.HIDDEN),
                      null !== n._popper && n._popper.destroy(),
                      e && e();
                  };
                t(this.element).trigger(o),
                  o.isDefaultPrevented() ||
                    (t(i).removeClass(v),
                    "ontouchstart" in document.documentElement &&
                      t("body")
                        .children()
                        .off("mouseover", null, t.noop),
                    (this._activeTrigger.click = !1),
                    (this._activeTrigger[b] = !1),
                    (this._activeTrigger[y] = !1),
                    r.supportsTransitionEnd() && t(this.tip).hasClass(m)
                      ? t(i)
                          .one(r.TRANSITION_END, s)
                          .emulateTransitionEnd(150)
                      : s(),
                    (this._hoverState = ""));
              }),
              (w.update = function() {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (w.isWithContent = function() {
                return Boolean(this.getTitle());
              }),
              (w.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e);
              }),
              (w.getTipElement = function() {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (w.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(
                  e.find(".tooltip-inner"),
                  this.getTitle()
                ),
                  e.removeClass(m + " " + v);
              }),
              (w.setElementContent = function(e, n) {
                var i = this.config.html;
                "object" === typeof n && (n.nodeType || n.jquery)
                  ? i
                    ? t(n)
                        .parent()
                        .is(e) || e.empty().append(n)
                    : e.text(t(n).text())
                  : e[i ? "html" : "text"](n);
              }),
              (w.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return (
                  t ||
                    (t =
                      "function" === typeof this.config.title
                        ? this.config.title.call(this.element)
                        : this.config.title),
                  t
                );
              }),
              (w._getAttachment = function(t) {
                return h[t.toUpperCase()];
              }),
              (w._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                  if ("click" === n)
                    t(e.element).on(
                      e.constructor.Event.CLICK,
                      e.config.selector,
                      function(t) {
                        return e.toggle(t);
                      }
                    );
                  else if ("manual" !== n) {
                    var i =
                        n === y
                          ? e.constructor.Event.MOUSEENTER
                          : e.constructor.Event.FOCUSIN,
                      o =
                        n === y
                          ? e.constructor.Event.MOUSELEAVE
                          : e.constructor.Event.FOCUSOUT;
                    t(e.element)
                      .on(i, e.config.selector, function(t) {
                        return e._enter(t);
                      })
                      .on(o, e.config.selector, function(t) {
                        return e._leave(t);
                      });
                  }
                  t(e.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function() {
                      return e.hide();
                    });
                }),
                  this.config.selector
                    ? (this.config = s({}, this.config, {
                        trigger: "manual",
                        selector: ""
                      }))
                    : this._fixTitle();
              }),
              (w._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) &&
                  (this.element.setAttribute(
                    "data-original-title",
                    this.element.getAttribute("title") || ""
                  ),
                  this.element.setAttribute("title", ""));
              }),
              (w._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(i, n)),
                  e && (n._activeTrigger["focusin" === e.type ? b : y] = !0),
                  t(n.getTipElement()).hasClass(v) || n._hoverState === p
                    ? (n._hoverState = p)
                    : (clearTimeout(n._timeout),
                      (n._hoverState = p),
                      n.config.delay && n.config.delay.show
                        ? (n._timeout = setTimeout(function() {
                            n._hoverState === p && n.show();
                          }, n.config.delay.show))
                        : n.show());
              }),
              (w._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(i, n)),
                  e && (n._activeTrigger["focusout" === e.type ? b : y] = !1),
                  n._isWithActiveTrigger() ||
                    (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.hide
                      ? (n._timeout = setTimeout(function() {
                          n._hoverState === f && n.hide();
                        }, n.config.delay.hide))
                      : n.hide());
              }),
              (w._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                  if (this._activeTrigger[t]) return !0;
                return !1;
              }),
              (w._getConfig = function(n) {
                return (
                  "number" ===
                    typeof (n = s(
                      {},
                      this.constructor.Default,
                      t(this.element).data(),
                      n
                    )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                  "number" === typeof n.title && (n.title = n.title.toString()),
                  "number" === typeof n.content &&
                    (n.content = n.content.toString()),
                  r.typeCheckConfig(e, n, this.constructor.DefaultType),
                  n
                );
              }),
              (w._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                  for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] &&
                      (t[e] = this.config[e]);
                return t;
              }),
              (w._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                  n = e.attr("class").match(c);
                null !== n && n.length > 0 && e.removeClass(n.join(""));
              }),
              (w._handlePopperPlacementChange = function(t) {
                this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(t.placement));
              }),
              (w._fixTransition = function() {
                var e = this.getTipElement(),
                  n = this.config.animation;
                null === e.getAttribute("x-placement") &&
                  (t(e).removeClass(m),
                  (this.config.animation = !1),
                  this.hide(),
                  this.show(),
                  (this.config.animation = n));
              }),
              (l._jQueryInterface = function(e) {
                return this.each(function() {
                  var n = t(this).data(i),
                    o = "object" === typeof e && e;
                  if (
                    (n || !/dispose|hide/.test(e)) &&
                    (n || ((n = new l(this, o)), t(this).data(i, n)),
                    "string" === typeof e)
                  ) {
                    if (void 0 === n[e])
                      throw new Error('No method named "' + e + '"');
                    n[e]();
                  }
                });
              }),
              o(l, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return d;
                  }
                },
                {
                  key: "NAME",
                  get: function() {
                    return e;
                  }
                },
                {
                  key: "DATA_KEY",
                  get: function() {
                    return i;
                  }
                },
                {
                  key: "Event",
                  get: function() {
                    return g;
                  }
                },
                {
                  key: "EVENT_KEY",
                  get: function() {
                    return a;
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return u;
                  }
                }
              ]),
              l
            );
          })();
        return (
          (t.fn[e] = w._jQueryInterface),
          (t.fn[e].Constructor = w),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = l), w._jQueryInterface;
          }),
          w
        );
      })(e),
      f = (function(t) {
        var e = "popover",
          n = "bs.popover",
          i = "." + n,
          r = t.fn[e],
          a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          l = s({}, p.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
          }),
          c = s({}, p.DefaultType, { content: "(string|element|function)" }),
          u = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
          },
          h = (function(s) {
            function r() {
              return s.apply(this, arguments) || this;
            }
            !(function(t, e) {
              (t.prototype = Object.create(e.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = e);
            })(r, s);
            var h = r.prototype;
            return (
              (h.isWithContent = function() {
                return this.getTitle() || this._getContent();
              }),
              (h.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-popover-" + e);
              }),
              (h.getTipElement = function() {
                return (
                  (this.tip = this.tip || t(this.config.template)[0]), this.tip
                );
              }),
              (h.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(
                  e.find(".popover-header"),
                  this.getTitle()
                );
                var n = this._getContent();
                "function" === typeof n && (n = n.call(this.element)),
                  this.setElementContent(e.find(".popover-body"), n),
                  e.removeClass("fade show");
              }),
              (h._getContent = function() {
                return (
                  this.element.getAttribute("data-content") ||
                  this.config.content
                );
              }),
              (h._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                  n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""));
              }),
              (r._jQueryInterface = function(e) {
                return this.each(function() {
                  var i = t(this).data(n),
                    o = "object" === typeof e ? e : null;
                  if (
                    (i || !/destroy|hide/.test(e)) &&
                    (i || ((i = new r(this, o)), t(this).data(n, i)),
                    "string" === typeof e)
                  ) {
                    if (void 0 === i[e])
                      throw new Error('No method named "' + e + '"');
                    i[e]();
                  }
                });
              }),
              o(r, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return l;
                  }
                },
                {
                  key: "NAME",
                  get: function() {
                    return e;
                  }
                },
                {
                  key: "DATA_KEY",
                  get: function() {
                    return n;
                  }
                },
                {
                  key: "Event",
                  get: function() {
                    return u;
                  }
                },
                {
                  key: "EVENT_KEY",
                  get: function() {
                    return i;
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return c;
                  }
                }
              ]),
              r
            );
          })(p);
        return (
          (t.fn[e] = h._jQueryInterface),
          (t.fn[e].Constructor = h),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = r), h._jQueryInterface;
          }),
          h
        );
      })(e),
      g = (function(t) {
        var e = "scrollspy",
          n = "bs.scrollspy",
          i = "." + n,
          a = t.fn[e],
          l = { offset: 10, method: "auto", target: "" },
          c = {
            offset: "number",
            method: "string",
            target: "(string|element)"
          },
          u = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + ".data-api"
          },
          h = "active",
          d = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
          },
          p = "position",
          f = (function() {
            function a(e, n) {
              var i = this;
              (this._element = e),
                (this._scrollElement = "BODY" === e.tagName ? window : e),
                (this._config = this._getConfig(n)),
                (this._selector =
                  this._config.target +
                  " " +
                  d.NAV_LINKS +
                  "," +
                  this._config.target +
                  " " +
                  d.LIST_ITEMS +
                  "," +
                  this._config.target +
                  " " +
                  d.DROPDOWN_ITEMS),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                t(this._scrollElement).on(u.SCROLL, function(t) {
                  return i._process(t);
                }),
                this.refresh(),
                this._process();
            }
            var f = a.prototype;
            return (
              (f.refresh = function() {
                var e = this,
                  n =
                    this._scrollElement !== this._scrollElement.window
                      ? p
                      : "offset",
                  i = "auto" === this._config.method ? n : this._config.method,
                  o = i === p ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  t
                    .makeArray(t(this._selector))
                    .map(function(e) {
                      var n,
                        s = r.getSelectorFromElement(e);
                      if ((s && (n = t(s)[0]), n)) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height) return [t(n)[i]().top + o, s];
                      }
                      return null;
                    })
                    .filter(function(t) {
                      return t;
                    })
                    .sort(function(t, e) {
                      return t[0] - e[0];
                    })
                    .forEach(function(t) {
                      e._offsets.push(t[0]), e._targets.push(t[1]);
                    });
              }),
              (f.dispose = function() {
                t.removeData(this._element, n),
                  t(this._scrollElement).off(i),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (f._getConfig = function(n) {
                if ("string" != typeof (n = s({}, l, n)).target) {
                  var i = t(n.target).attr("id");
                  i || ((i = r.getUID(e)), t(n.target).attr("id", i)),
                    (n.target = "#" + i);
                }
                return r.typeCheckConfig(e, n, c), n;
              }),
              (f._getScrollTop = function() {
                return this._scrollElement === window
                  ? this._scrollElement.pageYOffset
                  : this._scrollElement.scrollTop;
              }),
              (f._getScrollHeight = function() {
                return (
                  this._scrollElement.scrollHeight ||
                  Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              }),
              (f._getOffsetHeight = function() {
                return this._scrollElement === window
                  ? window.innerHeight
                  : this._scrollElement.getBoundingClientRect().height;
              }),
              (f._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                  e = this._getScrollHeight(),
                  n = this._config.offset + e - this._getOffsetHeight();
                if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                  var i = this._targets[this._targets.length - 1];
                  this._activeTarget !== i && this._activate(i);
                } else {
                  if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var o = this._offsets.length; o--; )
                    this._activeTarget !== this._targets[o] &&
                      t >= this._offsets[o] &&
                      (void 0 === this._offsets[o + 1] ||
                        t < this._offsets[o + 1]) &&
                      this._activate(this._targets[o]);
                }
              }),
              (f._activate = function(e) {
                (this._activeTarget = e), this._clear();
                var n = this._selector.split(",");
                n = n.map(function(t) {
                  return (
                    t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  );
                });
                var i = t(n.join(","));
                i.hasClass("dropdown-item")
                  ? (i
                      .closest(d.DROPDOWN)
                      .find(d.DROPDOWN_TOGGLE)
                      .addClass(h),
                    i.addClass(h))
                  : (i.addClass(h),
                    i
                      .parents(d.NAV_LIST_GROUP)
                      .prev(d.NAV_LINKS + ", " + d.LIST_ITEMS)
                      .addClass(h),
                    i
                      .parents(d.NAV_LIST_GROUP)
                      .prev(d.NAV_ITEMS)
                      .children(d.NAV_LINKS)
                      .addClass(h)),
                  t(this._scrollElement).trigger(u.ACTIVATE, {
                    relatedTarget: e
                  });
              }),
              (f._clear = function() {
                t(this._selector)
                  .filter(d.ACTIVE)
                  .removeClass(h);
              }),
              (a._jQueryInterface = function(e) {
                return this.each(function() {
                  var i = t(this).data(n);
                  if (
                    (i ||
                      ((i = new a(this, "object" === typeof e && e)),
                      t(this).data(n, i)),
                    "string" === typeof e)
                  ) {
                    if (void 0 === i[e])
                      throw new Error('No method named "' + e + '"');
                    i[e]();
                  }
                });
              }),
              o(a, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return l;
                  }
                }
              ]),
              a
            );
          })();
        return (
          t(window).on(u.LOAD_DATA_API, function() {
            for (var e = t.makeArray(t(d.DATA_SPY)), n = e.length; n--; ) {
              var i = t(e[n]);
              f._jQueryInterface.call(i, i.data());
            }
          }),
          (t.fn[e] = f._jQueryInterface),
          (t.fn[e].Constructor = f),
          (t.fn[e].noConflict = function() {
            return (t.fn[e] = a), f._jQueryInterface;
          }),
          f
        );
      })(e),
      m = (function(t) {
        var e = "bs.tab",
          n = "." + e,
          i = t.fn.tab,
          s = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK_DATA_API: "click.bs.tab.data-api"
          },
          a = "active",
          l = "show",
          c = ".active",
          u = "> li > .active",
          h = (function() {
            function n(t) {
              this._element = t;
            }
            var i = n.prototype;
            return (
              (i.show = function() {
                var e = this;
                if (
                  !(
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                      t(this._element).hasClass(a)) ||
                    t(this._element).hasClass("disabled")
                  )
                ) {
                  var n,
                    i,
                    o = t(this._element).closest(".nav, .list-group")[0],
                    l = r.getSelectorFromElement(this._element);
                  if (o) {
                    var h = "UL" === o.nodeName ? u : c;
                    i = (i = t.makeArray(t(o).find(h)))[i.length - 1];
                  }
                  var d = t.Event(s.HIDE, { relatedTarget: this._element }),
                    p = t.Event(s.SHOW, { relatedTarget: i });
                  if (
                    (i && t(i).trigger(d),
                    t(this._element).trigger(p),
                    !p.isDefaultPrevented() && !d.isDefaultPrevented())
                  ) {
                    l && (n = t(l)[0]), this._activate(this._element, o);
                    var f = function() {
                      var n = t.Event(s.HIDDEN, { relatedTarget: e._element }),
                        o = t.Event(s.SHOWN, { relatedTarget: i });
                      t(i).trigger(n), t(e._element).trigger(o);
                    };
                    n ? this._activate(n, n.parentNode, f) : f();
                  }
                }
              }),
              (i.dispose = function() {
                t.removeData(this._element, e), (this._element = null);
              }),
              (i._activate = function(e, n, i) {
                var o = this,
                  s = ("UL" === n.nodeName
                    ? t(n).find(u)
                    : t(n).children(c))[0],
                  a =
                    i &&
                    r.supportsTransitionEnd() &&
                    s &&
                    t(s).hasClass("fade"),
                  l = function() {
                    return o._transitionComplete(e, s, i);
                  };
                s && a
                  ? t(s)
                      .one(r.TRANSITION_END, l)
                      .emulateTransitionEnd(150)
                  : l();
              }),
              (i._transitionComplete = function(e, n, i) {
                if (n) {
                  t(n).removeClass(l + " " + a);
                  var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
                  o && t(o).removeClass(a),
                    "tab" === n.getAttribute("role") &&
                      n.setAttribute("aria-selected", !1);
                }
                if (
                  (t(e).addClass(a),
                  "tab" === e.getAttribute("role") &&
                    e.setAttribute("aria-selected", !0),
                  r.reflow(e),
                  t(e).addClass(l),
                  e.parentNode && t(e.parentNode).hasClass("dropdown-menu"))
                ) {
                  var s = t(e).closest(".dropdown")[0];
                  s &&
                    t(s)
                      .find(".dropdown-toggle")
                      .addClass(a),
                    e.setAttribute("aria-expanded", !0);
                }
                i && i();
              }),
              (n._jQueryInterface = function(i) {
                return this.each(function() {
                  var o = t(this),
                    s = o.data(e);
                  if (
                    (s || ((s = new n(this)), o.data(e, s)),
                    "string" == typeof i)
                  ) {
                    if (void 0 === s[i])
                      throw new Error('No method named "' + i + '"');
                    s[i]();
                  }
                });
              }),
              o(n, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.0.0-beta.3";
                  }
                }
              ]),
              n
            );
          })();
        return (
          t(document).on(
            s.CLICK_DATA_API,
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function(e) {
              e.preventDefault(), h._jQueryInterface.call(t(this), "show");
            }
          ),
          (t.fn.tab = h._jQueryInterface),
          (t.fn.tab.Constructor = h),
          (t.fn.tab.noConflict = function() {
            return (t.fn.tab = i), h._jQueryInterface;
          }),
          h
        );
      })(e);
    !(function(t) {
      if (void 0 === t)
        throw new Error(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (
        (e[0] < 2 && e[1] < 9) ||
        (1 === e[0] && 9 === e[1] && e[2] < 1) ||
        e[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(e),
      (t.Util = r),
      (t.Alert = a),
      (t.Button = l),
      (t.Carousel = c),
      (t.Collapse = u),
      (t.Dropdown = h),
      (t.Modal = d),
      (t.Popover = f),
      (t.Scrollspy = g),
      (t.Tab = m),
      (t.Tooltip = p),
      Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  (function(t) {
    "function" === typeof define && define.amd
      ? define(["jquery"], t)
      : "object" === typeof exports
      ? (module.exports = t)
      : t(jQuery);
  })(function(t) {
    function e(e) {
      var r = e || window.event,
        a = l.call(arguments, 1),
        c = 0,
        h = 0,
        d = 0,
        p = 0,
        f = 0,
        g = 0;
      if (
        ((e = t.event.fix(r)),
        (e.type = "mousewheel"),
        "detail" in r && (d = -1 * r.detail),
        "wheelDelta" in r && (d = r.wheelDelta),
        "wheelDeltaY" in r && (d = r.wheelDeltaY),
        "wheelDeltaX" in r && (h = -1 * r.wheelDeltaX),
        "axis" in r && r.axis === r.HORIZONTAL_AXIS && ((h = -1 * d), (d = 0)),
        (c = 0 === d ? h : d),
        "deltaY" in r && ((d = -1 * r.deltaY), (c = d)),
        "deltaX" in r && ((h = r.deltaX), 0 === d && (c = -1 * h)),
        0 !== d || 0 !== h)
      ) {
        if (1 === r.deltaMode) {
          var m = t.data(this, "mousewheel-line-height");
          (c *= m), (d *= m), (h *= m);
        } else if (2 === r.deltaMode) {
          var v = t.data(this, "mousewheel-page-height");
          (c *= v), (d *= v), (h *= v);
        }
        if (
          ((p = Math.max(Math.abs(d), Math.abs(h))),
          (!s || s > p) && ((s = p), i(r, p) && (s /= 40)),
          i(r, p) && ((c /= 40), (h /= 40), (d /= 40)),
          (c = Math[c >= 1 ? "floor" : "ceil"](c / s)),
          (h = Math[h >= 1 ? "floor" : "ceil"](h / s)),
          (d = Math[d >= 1 ? "floor" : "ceil"](d / s)),
          u.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var y = this.getBoundingClientRect();
          (f = e.clientX - y.left), (g = e.clientY - y.top);
        }
        return (
          (e.deltaX = h),
          (e.deltaY = d),
          (e.deltaFactor = s),
          (e.offsetX = f),
          (e.offsetY = g),
          (e.deltaMode = 0),
          a.unshift(e, c, h, d),
          o && clearTimeout(o),
          (o = setTimeout(n, 200)),
          (t.event.dispatch || t.event.handle).apply(this, a)
        );
      }
    }
    function n() {
      s = null;
    }
    function i(t, e) {
      return (
        u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
      );
    }
    var o,
      s,
      r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      a =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      l = Array.prototype.slice;
    if (t.event.fixHooks)
      for (var c = r.length; c; ) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
    var u = (t.event.special.mousewheel = {
      version: "3.1.12",
      setup: function() {
        if (this.addEventListener)
          for (var n = a.length; n; ) this.addEventListener(a[--n], e, !1);
        else this.onmousewheel = e;
        t.data(this, "mousewheel-line-height", u.getLineHeight(this)),
          t.data(this, "mousewheel-page-height", u.getPageHeight(this));
      },
      teardown: function() {
        if (this.removeEventListener)
          for (var n = a.length; n; ) this.removeEventListener(a[--n], e, !1);
        else this.onmousewheel = null;
        t.removeData(this, "mousewheel-line-height"),
          t.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function(e) {
        var n = t(e),
          i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
        return (
          i.length || (i = t("body")),
          parseInt(i.css("fontSize"), 10) ||
            parseInt(n.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function(e) {
        return t(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
    });
    t.fn.extend({
      mousewheel: function(t) {
        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
      },
      unmousewheel: function(t) {
        return this.unbind("mousewheel", t);
      }
    });
  }),
  (function(t) {
    if ("object" === typeof exports && "undefined" != typeof module)
      module.exports = t();
    else if ("function" === typeof define && define.amd) define([], t);
    else {
      ("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).ProgressBar = t();
    }
  })(function() {
    return (function t(e, n, i) {
      function o(r, a) {
        if (!n[r]) {
          if (!e[r]) {
            var l = "function" === typeof require && require;
            if (!a && l) return l(r, !0);
            if (s) return s(r, !0);
            var c = new Error("Cannot find module '" + r + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          var u = (n[r] = { exports: {} });
          e[r][0].call(
            u.exports,
            function(t) {
              var n = e[r][1][t];
              return o(n || t);
            },
            u,
            u.exports,
            t,
            e,
            n,
            i
          );
        }
        return n[r].exports;
      }
      for (
        var s = "function" === typeof require && require, r = 0;
        r < i.length;
        r++
      )
        o(i[r]);
      return o;
    })(
      {
        1: [
          function(t, e, n) {
            (function() {
              var t = this || Function("return this")(),
                i = (function() {
                  "use strict";
                  function i() {}
                  function o(t, e) {
                    var n;
                    for (n in t) Object.hasOwnProperty.call(t, n) && e(n);
                  }
                  function s(t, e) {
                    return (
                      o(e, function(n) {
                        t[n] = e[n];
                      }),
                      t
                    );
                  }
                  function r(t, e) {
                    o(e, function(n) {
                      void 0 === t[n] && (t[n] = e[n]);
                    });
                  }
                  function a(t, e, n, i, o, s, r) {
                    var a,
                      c,
                      u,
                      h = t < s ? 0 : (t - s) / o;
                    for (a in e)
                      e.hasOwnProperty(a) &&
                        ((u = "function" === typeof (c = r[a]) ? c : p[c]),
                        (e[a] = l(n[a], i[a], u, h)));
                    return e;
                  }
                  function l(t, e, n, i) {
                    return t + (e - t) * n(i);
                  }
                  function c(t, e) {
                    var n = d.prototype.filter,
                      i = t._filterArgs;
                    o(n, function(o) {
                      void 0 !== n[o][e] && n[o][e].apply(t, i);
                    });
                  }
                  function u(t, e, n, i, o, s, r, l, u, h, d) {
                    (b = e + n + i),
                      (w = Math.min(d || y(), b)),
                      (_ = w >= b),
                      (x = i - (b - w)),
                      t.isPlaying() &&
                        (_
                          ? (u(r, t._attachment, x), t.stop(!0))
                          : ((t._scheduleId = h(t._timeoutHandler, m)),
                            c(t, "beforeTween"),
                            w < e + n
                              ? a(1, o, s, r, 1, 1, l)
                              : a(w, o, s, r, i, e + n, l),
                            c(t, "afterTween"),
                            u(o, t._attachment, x)));
                  }
                  function h(t, e) {
                    var n = {},
                      i = typeof e;
                    return (
                      "string" === i || "function" === i
                        ? o(t, function(t) {
                            n[t] = e;
                          })
                        : o(t, function(t) {
                            n[t] || (n[t] = e[t] || g);
                          }),
                      n
                    );
                  }
                  function d(t, e) {
                    (this._currentState = t || {}),
                      (this._configured = !1),
                      (this._scheduleFunction = f),
                      void 0 !== e && this.setConfig(e);
                  }
                  var p,
                    f,
                    g = "linear",
                    m = 1e3 / 60,
                    v = Date.now
                      ? Date.now
                      : function() {
                          return +new Date();
                        },
                    y =
                      "undefined" != typeof SHIFTY_DEBUG_NOW
                        ? SHIFTY_DEBUG_NOW
                        : v;
                  f =
                    "undefined" != typeof window
                      ? window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        (window.mozCancelRequestAnimationFrame &&
                          window.mozRequestAnimationFrame) ||
                        setTimeout
                      : setTimeout;
                  var b, w, _, x;
                  return (
                    (d.prototype.tween = function(t) {
                      return this._isTweening
                        ? this
                        : ((void 0 === t && this._configured) ||
                            this.setConfig(t),
                          (this._timestamp = y()),
                          this._start(this.get(), this._attachment),
                          this.resume());
                    }),
                    (d.prototype.setConfig = function(t) {
                      (t = t || {}),
                        (this._configured = !0),
                        (this._attachment = t.attachment),
                        (this._pausedAtTime = null),
                        (this._scheduleId = null),
                        (this._delay = t.delay || 0),
                        (this._start = t.start || i),
                        (this._step = t.step || i),
                        (this._finish = t.finish || i),
                        (this._duration = t.duration || 500),
                        (this._currentState = s({}, t.from || this.get())),
                        (this._originalState = this.get()),
                        (this._targetState = s({}, t.to || this.get()));
                      var e = this;
                      this._timeoutHandler = function() {
                        u(
                          e,
                          e._timestamp,
                          e._delay,
                          e._duration,
                          e._currentState,
                          e._originalState,
                          e._targetState,
                          e._easing,
                          e._step,
                          e._scheduleFunction
                        );
                      };
                      var n = this._currentState,
                        o = this._targetState;
                      return (
                        r(o, n),
                        (this._easing = h(n, t.easing || g)),
                        (this._filterArgs = [
                          n,
                          this._originalState,
                          o,
                          this._easing
                        ]),
                        c(this, "tweenCreated"),
                        this
                      );
                    }),
                    (d.prototype.get = function() {
                      return s({}, this._currentState);
                    }),
                    (d.prototype.set = function(t) {
                      this._currentState = t;
                    }),
                    (d.prototype.pause = function() {
                      return (
                        (this._pausedAtTime = y()), (this._isPaused = !0), this
                      );
                    }),
                    (d.prototype.resume = function() {
                      return (
                        this._isPaused &&
                          (this._timestamp += y() - this._pausedAtTime),
                        (this._isPaused = !1),
                        (this._isTweening = !0),
                        this._timeoutHandler(),
                        this
                      );
                    }),
                    (d.prototype.seek = function(t) {
                      t = Math.max(t, 0);
                      var e = y();
                      return this._timestamp + t === 0
                        ? this
                        : ((this._timestamp = e - t),
                          this.isPlaying() ||
                            ((this._isTweening = !0),
                            (this._isPaused = !1),
                            u(
                              this,
                              this._timestamp,
                              this._delay,
                              this._duration,
                              this._currentState,
                              this._originalState,
                              this._targetState,
                              this._easing,
                              this._step,
                              this._scheduleFunction,
                              e
                            ),
                            this.pause()),
                          this);
                    }),
                    (d.prototype.stop = function(e) {
                      return (
                        (this._isTweening = !1),
                        (this._isPaused = !1),
                        (this._timeoutHandler = i),
                        (t.cancelAnimationFrame ||
                          t.webkitCancelAnimationFrame ||
                          t.oCancelAnimationFrame ||
                          t.msCancelAnimationFrame ||
                          t.mozCancelRequestAnimationFrame ||
                          t.clearTimeout)(this._scheduleId),
                        e &&
                          (c(this, "beforeTween"),
                          a(
                            1,
                            this._currentState,
                            this._originalState,
                            this._targetState,
                            1,
                            0,
                            this._easing
                          ),
                          c(this, "afterTween"),
                          c(this, "afterTweenEnd"),
                          this._finish.call(
                            this,
                            this._currentState,
                            this._attachment
                          )),
                        this
                      );
                    }),
                    (d.prototype.isPlaying = function() {
                      return this._isTweening && !this._isPaused;
                    }),
                    (d.prototype.setScheduleFunction = function(t) {
                      this._scheduleFunction = t;
                    }),
                    (d.prototype.dispose = function() {
                      var t;
                      for (t in this) this.hasOwnProperty(t) && delete this[t];
                    }),
                    (d.prototype.filter = {}),
                    (d.prototype.formula = {
                      linear: function(t) {
                        return t;
                      }
                    }),
                    (p = d.prototype.formula),
                    s(d, {
                      now: y,
                      each: o,
                      tweenProps: a,
                      tweenProp: l,
                      applyFilter: c,
                      shallowCopy: s,
                      defaults: r,
                      composeEasingObject: h
                    }),
                    "function" === typeof SHIFTY_DEBUG_NOW &&
                      (t.timeoutHandler = u),
                    "object" === typeof n
                      ? (e.exports = d)
                      : void 0 === t.Tweenable && (t.Tweenable = d),
                    d
                  );
                })();
              i.shallowCopy(i.prototype.formula, {
                easeInQuad: function(t) {
                  return Math.pow(t, 2);
                },
                easeOutQuad: function(t) {
                  return -(Math.pow(t - 1, 2) - 1);
                },
                easeInOutQuad: function(t) {
                  return (t /= 0.5) < 1
                    ? 0.5 * Math.pow(t, 2)
                    : -0.5 * ((t -= 2) * t - 2);
                },
                easeInCubic: function(t) {
                  return Math.pow(t, 3);
                },
                easeOutCubic: function(t) {
                  return Math.pow(t - 1, 3) + 1;
                },
                easeInOutCubic: function(t) {
                  return (t /= 0.5) < 1
                    ? 0.5 * Math.pow(t, 3)
                    : 0.5 * (Math.pow(t - 2, 3) + 2);
                },
                easeInQuart: function(t) {
                  return Math.pow(t, 4);
                },
                easeOutQuart: function(t) {
                  return -(Math.pow(t - 1, 4) - 1);
                },
                easeInOutQuart: function(t) {
                  return (t /= 0.5) < 1
                    ? 0.5 * Math.pow(t, 4)
                    : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
                },
                easeInQuint: function(t) {
                  return Math.pow(t, 5);
                },
                easeOutQuint: function(t) {
                  return Math.pow(t - 1, 5) + 1;
                },
                easeInOutQuint: function(t) {
                  return (t /= 0.5) < 1
                    ? 0.5 * Math.pow(t, 5)
                    : 0.5 * (Math.pow(t - 2, 5) + 2);
                },
                easeInSine: function(t) {
                  return 1 - Math.cos(t * (Math.PI / 2));
                },
                easeOutSine: function(t) {
                  return Math.sin(t * (Math.PI / 2));
                },
                easeInOutSine: function(t) {
                  return -0.5 * (Math.cos(Math.PI * t) - 1);
                },
                easeInExpo: function(t) {
                  return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
                },
                easeOutExpo: function(t) {
                  return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                },
                easeInOutExpo: function(t) {
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (t /= 0.5) < 1
                    ? 0.5 * Math.pow(2, 10 * (t - 1))
                    : 0.5 * (2 - Math.pow(2, -10 * --t));
                },
                easeInCirc: function(t) {
                  return -(Math.sqrt(1 - t * t) - 1);
                },
                easeOutCirc: function(t) {
                  return Math.sqrt(1 - Math.pow(t - 1, 2));
                },
                easeInOutCirc: function(t) {
                  return (t /= 0.5) < 1
                    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                },
                easeOutBounce: function(t) {
                  return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                },
                easeInBack: function(t) {
                  var e = 1.70158;
                  return t * t * ((e + 1) * t - e);
                },
                easeOutBack: function(t) {
                  var e = 1.70158;
                  return (t -= 1) * t * ((e + 1) * t + e) + 1;
                },
                easeInOutBack: function(t) {
                  var e = 1.70158;
                  return (t /= 0.5) < 1
                    ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                    : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                },
                elastic: function(t) {
                  return (
                    -1 *
                      Math.pow(4, -8 * t) *
                      Math.sin(((6 * t - 1) * (2 * Math.PI)) / 2) +
                    1
                  );
                },
                swingFromTo: function(t) {
                  var e = 1.70158;
                  return (t /= 0.5) < 1
                    ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                    : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                },
                swingFrom: function(t) {
                  var e = 1.70158;
                  return t * t * ((e + 1) * t - e);
                },
                swingTo: function(t) {
                  var e = 1.70158;
                  return (t -= 1) * t * ((e + 1) * t + e) + 1;
                },
                bounce: function(t) {
                  return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                },
                bouncePast: function(t) {
                  return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                    : t < 2.5 / 2.75
                    ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                    : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                },
                easeFromTo: function(t) {
                  return (t /= 0.5) < 1
                    ? 0.5 * Math.pow(t, 4)
                    : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
                },
                easeFrom: function(t) {
                  return Math.pow(t, 4);
                },
                easeTo: function(t) {
                  return Math.pow(t, 0.25);
                }
              }),
                (function() {
                  function t(t, e, n, i, o, s) {
                    function r(t) {
                      return ((h * t + d) * t + p) * t;
                    }
                    function a(t) {
                      return ((f * t + g) * t + m) * t;
                    }
                    function l(t) {
                      return (3 * h * t + 2 * d) * t + p;
                    }
                    function c(t) {
                      return t >= 0 ? t : 0 - t;
                    }
                    function u(t, e) {
                      var n, i, o, s, a, u;
                      for (o = t, u = 0; u < 8; u++) {
                        if (((s = r(o) - t), c(s) < e)) return o;
                        if (((a = l(o)), c(a) < 1e-6)) break;
                        o -= s / a;
                      }
                      if (((n = 0), (i = 1), (o = t) < n)) return n;
                      if (o > i) return i;
                      for (; n < i; ) {
                        if (((s = r(o)), c(s - t) < e)) return o;
                        t > s ? (n = o) : (i = o), (o = 0.5 * (i - n) + n);
                      }
                      return o;
                    }
                    var h = 0,
                      d = 0,
                      p = 0,
                      f = 0,
                      g = 0,
                      m = 0;
                    return (
                      (p = 3 * e),
                      (d = 3 * (i - e) - p),
                      (h = 1 - p - d),
                      (m = 3 * n),
                      (g = 3 * (o - n) - m),
                      (f = 1 - m - g),
                      (function(t, e) {
                        return a(u(t, e));
                      })(
                        t,
                        (function(t) {
                          return 1 / (200 * t);
                        })(s)
                      )
                    );
                  }
                  function e(e, n, i, o) {
                    return function(s) {
                      return t(s, e, n, i, o, 1);
                    };
                  }
                  (i.setBezierFunction = function(t, n, o, s, r) {
                    var a = e(n, o, s, r);
                    return (
                      (a.displayName = t),
                      (a.x1 = n),
                      (a.y1 = o),
                      (a.x2 = s),
                      (a.y2 = r),
                      (i.prototype.formula[t] = a)
                    );
                  }),
                    (i.unsetBezierFunction = function(t) {
                      delete i.prototype.formula[t];
                    });
                })(),
                (function() {
                  function t(t, e, n, o, s, r) {
                    return i.tweenProps(o, e, t, n, 1, r, s);
                  }
                  var e = new i();
                  (e._filterArgs = []),
                    (i.interpolate = function(n, o, s, r, a) {
                      var l = i.shallowCopy({}, n),
                        c = a || 0,
                        u = i.composeEasingObject(n, r || "linear");
                      e.set({});
                      var h = e._filterArgs;
                      (h.length = 0),
                        (h[0] = l),
                        (h[1] = n),
                        (h[2] = o),
                        (h[3] = u),
                        i.applyFilter(e, "tweenCreated"),
                        i.applyFilter(e, "beforeTween");
                      var d = t(n, l, o, s, u, c);
                      return i.applyFilter(e, "afterTween"), d;
                    });
                })(),
                (function(t) {
                  function e(t, e) {
                    var n,
                      i = [],
                      o = t.length;
                    for (n = 0; n < o; n++) i.push("_" + e + "_" + n);
                    return i;
                  }
                  function n(t) {
                    var e = t.match(_);
                    return (
                      e
                        ? (1 === e.length || t.charAt(0).match(w)) &&
                          e.unshift("")
                        : (e = ["", ""]),
                      e.join(E)
                    );
                  }
                  function i(e) {
                    t.each(e, function(t) {
                      var n = e[t];
                      "string" === typeof n && n.match(S) && (e[t] = o(n));
                    });
                  }
                  function o(t) {
                    return l(S, t, s);
                  }
                  function s(t) {
                    var e = r(t);
                    return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")";
                  }
                  function r(t) {
                    return (
                      3 === (t = t.replace(/#/, "")).length &&
                        (t =
                          (t = t.split(""))[0] +
                          t[0] +
                          t[1] +
                          t[1] +
                          t[2] +
                          t[2]),
                      ($[0] = a(t.substr(0, 2))),
                      ($[1] = a(t.substr(2, 2))),
                      ($[2] = a(t.substr(4, 2))),
                      $
                    );
                  }
                  function a(t) {
                    return parseInt(t, 16);
                  }
                  function l(t, e, n) {
                    var i = e.match(t),
                      o = e.replace(t, E);
                    if (i)
                      for (var s, r = i.length, a = 0; a < r; a++)
                        (s = i.shift()), (o = o.replace(E, n(s)));
                    return o;
                  }
                  function c(t) {
                    return l(C, t, u);
                  }
                  function u(t) {
                    for (
                      var e = t.match(x),
                        n = e.length,
                        i = t.match(T)[0],
                        o = 0;
                      o < n;
                      o++
                    )
                      i += parseInt(e[o], 10) + ",";
                    return (i = i.slice(0, -1) + ")");
                  }
                  function h(i) {
                    var o = {};
                    return (
                      t.each(i, function(t) {
                        var s = i[t];
                        if ("string" === typeof s) {
                          var r = v(s);
                          o[t] = { formatString: n(s), chunkNames: e(r, t) };
                        }
                      }),
                      o
                    );
                  }
                  function d(e, n) {
                    t.each(n, function(t) {
                      for (var i = v(e[t]), o = i.length, s = 0; s < o; s++)
                        e[n[t].chunkNames[s]] = +i[s];
                      delete e[t];
                    });
                  }
                  function p(e, n) {
                    t.each(n, function(t) {
                      var i = e[t],
                        o = g(f(e, n[t].chunkNames), n[t].chunkNames);
                      (i = m(n[t].formatString, o)), (e[t] = c(i));
                    });
                  }
                  function f(t, e) {
                    for (var n, i = {}, o = e.length, s = 0; s < o; s++)
                      (i[(n = e[s])] = t[n]), delete t[n];
                    return i;
                  }
                  function g(t, e) {
                    I.length = 0;
                    for (var n = e.length, i = 0; i < n; i++) I.push(t[e[i]]);
                    return I;
                  }
                  function m(t, e) {
                    for (var n = t, i = e.length, o = 0; o < i; o++)
                      n = n.replace(E, +e[o].toFixed(4));
                    return n;
                  }
                  function v(t) {
                    return t.match(x);
                  }
                  function y(e, n) {
                    t.each(n, function(t) {
                      var i,
                        o = n[t].chunkNames,
                        s = o.length,
                        r = e[t];
                      if ("string" === typeof r) {
                        var a = r.split(" "),
                          l = a[a.length - 1];
                        for (i = 0; i < s; i++) e[o[i]] = a[i] || l;
                      } else for (i = 0; i < s; i++) e[o[i]] = r;
                      delete e[t];
                    });
                  }
                  function b(e, n) {
                    t.each(n, function(t) {
                      var i = n[t].chunkNames,
                        o = i.length,
                        s = e[i[0]];
                      if ("string" === typeof s) {
                        for (var r = "", a = 0; a < o; a++)
                          (r += " " + e[i[a]]), delete e[i[a]];
                        e[t] = r.substr(1);
                      } else e[t] = s;
                    });
                  }
                  var w = /(\d|\-|\.)/,
                    _ = /([^\-0-9\.]+)/g,
                    x = /[0-9.\-]+/g,
                    C = new RegExp(
                      "rgb\\(" +
                        x.source +
                        /,\s*/.source +
                        x.source +
                        /,\s*/.source +
                        x.source +
                        "\\)",
                      "g"
                    ),
                    T = /^.*\(/,
                    S = /#([0-9]|[a-f]){3,6}/gi,
                    E = "VAL",
                    $ = [],
                    I = [];
                  t.prototype.filter.token = {
                    tweenCreated: function(t, e, n, o) {
                      i(t), i(e), i(n), (this._tokenData = h(t));
                    },
                    beforeTween: function(t, e, n, i) {
                      y(i, this._tokenData),
                        d(t, this._tokenData),
                        d(e, this._tokenData),
                        d(n, this._tokenData);
                    },
                    afterTween: function(t, e, n, i) {
                      p(t, this._tokenData),
                        p(e, this._tokenData),
                        p(n, this._tokenData),
                        b(i, this._tokenData);
                    }
                  };
                })(i);
            }.call(null));
          },
          {}
        ],
        2: [
          function(t, e, n) {
            var i = t("./shape"),
              o = t("./utils"),
              s = function(t, e) {
                (this._pathTemplate =
                  "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"),
                  (this.containerAspectRatio = 1),
                  i.apply(this, arguments);
              };
            ((s.prototype = new i()).constructor = s),
              (s.prototype._pathString = function(t) {
                var e = t.strokeWidth;
                t.trailWidth &&
                  t.trailWidth > t.strokeWidth &&
                  (e = t.trailWidth);
                var n = 50 - e / 2;
                return o.render(this._pathTemplate, {
                  radius: n,
                  "2radius": 2 * n
                });
              }),
              (s.prototype._trailString = function(t) {
                return this._pathString(t);
              }),
              (e.exports = s);
          },
          { "./shape": 7, "./utils": 9 }
        ],
        3: [
          function(t, e, n) {
            var i = t("./shape"),
              o = t("./utils"),
              s = function(t, e) {
                (this._pathTemplate = "M 0,{center} L 100,{center}"),
                  i.apply(this, arguments);
              };
            ((s.prototype = new i()).constructor = s),
              (s.prototype._initializeSvg = function(t, e) {
                t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth),
                  t.setAttribute("preserveAspectRatio", "none");
              }),
              (s.prototype._pathString = function(t) {
                return o.render(this._pathTemplate, {
                  center: t.strokeWidth / 2
                });
              }),
              (s.prototype._trailString = function(t) {
                return this._pathString(t);
              }),
              (e.exports = s);
          },
          { "./shape": 7, "./utils": 9 }
        ],
        4: [
          function(t, e, n) {
            e.exports = {
              Line: t("./line"),
              Circle: t("./circle"),
              SemiCircle: t("./semicircle"),
              Square: t("./square"),
              Path: t("./path"),
              Shape: t("./shape"),
              utils: t("./utils")
            };
          },
          {
            "./circle": 2,
            "./line": 3,
            "./path": 5,
            "./semicircle": 6,
            "./shape": 7,
            "./square": 8,
            "./utils": 9
          }
        ],
        5: [
          function(t, e, n) {
            var i = t("shifty"),
              o = t("./utils"),
              s = {
                easeIn: "easeInCubic",
                easeOut: "easeOutCubic",
                easeInOut: "easeInOutCubic"
              },
              r = function t(e, n) {
                if (!(this instanceof t))
                  throw new Error("Constructor was called without new keyword");
                n = o.extend(
                  {
                    duration: 800,
                    easing: "linear",
                    from: {},
                    to: {},
                    step: function() {}
                  },
                  n
                );
                var i;
                (i = o.isString(e) ? document.querySelector(e) : e),
                  (this.path = i),
                  (this._opts = n),
                  (this._tweenable = null);
                var s = this.path.getTotalLength();
                (this.path.style.strokeDasharray = s + " " + s), this.set(0);
              };
            (r.prototype.value = function() {
              var t =
                1 - this._getComputedDashOffset() / this.path.getTotalLength();
              return parseFloat(t.toFixed(6), 10);
            }),
              (r.prototype.set = function(t) {
                this.stop(),
                  (this.path.style.strokeDashoffset = this._progressToOffset(
                    t
                  ));
                var e = this._opts.step;
                if (o.isFunction(e)) {
                  var n = this._easing(this._opts.easing);
                  e(
                    this._calculateTo(t, n),
                    this._opts.shape || this,
                    this._opts.attachment
                  );
                }
              }),
              (r.prototype.stop = function() {
                this._stopTween(),
                  (this.path.style.strokeDashoffset = this._getComputedDashOffset());
              }),
              (r.prototype.animate = function(t, e, n) {
                (e = e || {}), o.isFunction(e) && ((n = e), (e = {}));
                var s = o.extend({}, e),
                  r = o.extend({}, this._opts);
                e = o.extend(r, e);
                var a = this._easing(e.easing),
                  l = this._resolveFromAndTo(t, a, s);
                this.stop(), this.path.getBoundingClientRect();
                var c = this._getComputedDashOffset(),
                  u = this._progressToOffset(t),
                  h = this;
                (this._tweenable = new i()),
                  this._tweenable.tween({
                    from: o.extend({ offset: c }, l.from),
                    to: o.extend({ offset: u }, l.to),
                    duration: e.duration,
                    easing: a,
                    step: function(t) {
                      h.path.style.strokeDashoffset = t.offset;
                      var n = e.shape || h;
                      e.step(t, n, e.attachment);
                    },
                    finish: function(t) {
                      o.isFunction(n) && n();
                    }
                  });
              }),
              (r.prototype._getComputedDashOffset = function() {
                var t = window.getComputedStyle(this.path, null);
                return parseFloat(t.getPropertyValue("stroke-dashoffset"), 10);
              }),
              (r.prototype._progressToOffset = function(t) {
                var e = this.path.getTotalLength();
                return e - t * e;
              }),
              (r.prototype._resolveFromAndTo = function(t, e, n) {
                return n.from && n.to
                  ? { from: n.from, to: n.to }
                  : {
                      from: this._calculateFrom(e),
                      to: this._calculateTo(t, e)
                    };
              }),
              (r.prototype._calculateFrom = function(t) {
                return i.interpolate(
                  this._opts.from,
                  this._opts.to,
                  this.value(),
                  t
                );
              }),
              (r.prototype._calculateTo = function(t, e) {
                return i.interpolate(this._opts.from, this._opts.to, t, e);
              }),
              (r.prototype._stopTween = function() {
                null !== this._tweenable &&
                  (this._tweenable.stop(), (this._tweenable = null));
              }),
              (r.prototype._easing = function(t) {
                return s.hasOwnProperty(t) ? s[t] : t;
              }),
              (e.exports = r);
          },
          { "./utils": 9, shifty: 1 }
        ],
        6: [
          function(t, e, n) {
            var i = t("./shape"),
              o = t("./circle"),
              s = t("./utils"),
              r = function(t, e) {
                (this._pathTemplate =
                  "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"),
                  (this.containerAspectRatio = 2),
                  i.apply(this, arguments);
              };
            ((r.prototype = new i()).constructor = r),
              (r.prototype._initializeSvg = function(t, e) {
                t.setAttribute("viewBox", "0 0 100 50");
              }),
              (r.prototype._initializeTextContainer = function(t, e, n) {
                t.text.style &&
                  ((n.style.top = "auto"),
                  (n.style.bottom = "0"),
                  t.text.alignToBottom
                    ? s.setStyle(n, "transform", "translate(-50%, 0)")
                    : s.setStyle(n, "transform", "translate(-50%, 50%)"));
              }),
              (r.prototype._pathString = o.prototype._pathString),
              (r.prototype._trailString = o.prototype._trailString),
              (e.exports = r);
          },
          { "./circle": 2, "./shape": 7, "./utils": 9 }
        ],
        7: [
          function(t, e, n) {
            var i = t("./path"),
              o = t("./utils"),
              s = function t(e, n) {
                if (!(this instanceof t))
                  throw new Error("Constructor was called without new keyword");
                if (0 !== arguments.length) {
                  (this._opts = o.extend(
                    {
                      color: "#555",
                      strokeWidth: 1,
                      trailColor: null,
                      trailWidth: null,
                      fill: null,
                      text: {
                        style: {
                          color: null,
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          padding: 0,
                          margin: 0,
                          transform: {
                            prefix: !0,
                            value: "translate(-50%, -50%)"
                          }
                        },
                        autoStyleContainer: !0,
                        alignToBottom: !0,
                        value: null,
                        className: "progressbar-text"
                      },
                      svgStyle: { display: "block", width: "100%" },
                      warnings: !1
                    },
                    n,
                    !0
                  )),
                    o.isObject(n) &&
                      void 0 !== n.svgStyle &&
                      (this._opts.svgStyle = n.svgStyle),
                    o.isObject(n) &&
                      o.isObject(n.text) &&
                      void 0 !== n.text.style &&
                      (this._opts.text.style = n.text.style);
                  var s,
                    r = this._createSvgView(this._opts);
                  if (!(s = o.isString(e) ? document.querySelector(e) : e))
                    throw new Error("Container does not exist: " + e);
                  (this._container = s),
                    this._container.appendChild(r.svg),
                    this._opts.warnings &&
                      this._warnContainerAspectRatio(this._container),
                    this._opts.svgStyle &&
                      o.setStyles(r.svg, this._opts.svgStyle),
                    (this.svg = r.svg),
                    (this.path = r.path),
                    (this.trail = r.trail),
                    (this.text = null);
                  var a = o.extend(
                    { attachment: void 0, shape: this },
                    this._opts
                  );
                  (this._progressPath = new i(r.path, a)),
                    o.isObject(this._opts.text) &&
                      null !== this._opts.text.value &&
                      this.setText(this._opts.text.value);
                }
              };
            (s.prototype.animate = function(t, e, n) {
              if (null === this._progressPath)
                throw new Error("Object is destroyed");
              this._progressPath.animate(t, e, n);
            }),
              (s.prototype.stop = function() {
                if (null === this._progressPath)
                  throw new Error("Object is destroyed");
                void 0 !== this._progressPath && this._progressPath.stop();
              }),
              (s.prototype.destroy = function() {
                if (null === this._progressPath)
                  throw new Error("Object is destroyed");
                this.stop(),
                  this.svg.parentNode.removeChild(this.svg),
                  (this.svg = null),
                  (this.path = null),
                  (this.trail = null),
                  (this._progressPath = null),
                  null !== this.text &&
                    (this.text.parentNode.removeChild(this.text),
                    (this.text = null));
              }),
              (s.prototype.set = function(t) {
                if (null === this._progressPath)
                  throw new Error("Object is destroyed");
                this._progressPath.set(t);
              }),
              (s.prototype.value = function() {
                if (null === this._progressPath)
                  throw new Error("Object is destroyed");
                return void 0 === this._progressPath
                  ? 0
                  : this._progressPath.value();
              }),
              (s.prototype.setText = function(t) {
                if (null === this._progressPath)
                  throw new Error("Object is destroyed");
                null === this.text &&
                  ((this.text = this._createTextContainer(
                    this._opts,
                    this._container
                  )),
                  this._container.appendChild(this.text)),
                  o.isObject(t)
                    ? (o.removeChildren(this.text), this.text.appendChild(t))
                    : (this.text.innerHTML = t);
              }),
              (s.prototype._createSvgView = function(t) {
                var e = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                this._initializeSvg(e, t);
                var n = null;
                (t.trailColor || t.trailWidth) &&
                  ((n = this._createTrail(t)), e.appendChild(n));
                var i = this._createPath(t);
                return e.appendChild(i), { svg: e, path: i, trail: n };
              }),
              (s.prototype._initializeSvg = function(t, e) {
                t.setAttribute("viewBox", "0 0 100 100");
              }),
              (s.prototype._createPath = function(t) {
                var e = this._pathString(t);
                return this._createPathElement(e, t);
              }),
              (s.prototype._createTrail = function(t) {
                var e = this._trailString(t),
                  n = o.extend({}, t);
                return (
                  n.trailColor || (n.trailColor = "#eee"),
                  n.trailWidth || (n.trailWidth = n.strokeWidth),
                  (n.color = n.trailColor),
                  (n.strokeWidth = n.trailWidth),
                  (n.fill = null),
                  this._createPathElement(e, n)
                );
              }),
              (s.prototype._createPathElement = function(t, e) {
                var n = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                );
                return (
                  n.setAttribute("d", t),
                  n.setAttribute("stroke", e.color),
                  n.setAttribute("stroke-width", e.strokeWidth),
                  e.fill
                    ? n.setAttribute("fill", e.fill)
                    : n.setAttribute("fill-opacity", "0"),
                  n
                );
              }),
              (s.prototype._createTextContainer = function(t, e) {
                var n = document.createElement("div");
                n.className = t.text.className;
                var i = t.text.style;
                return (
                  i &&
                    (t.text.autoStyleContainer &&
                      (e.style.position = "relative"),
                    o.setStyles(n, i),
                    i.color || (n.style.color = t.color)),
                  this._initializeTextContainer(t, e, n),
                  n
                );
              }),
              (s.prototype._initializeTextContainer = function(t, e, n) {}),
              (s.prototype._pathString = function(t) {
                throw new Error("Override this function for each progress bar");
              }),
              (s.prototype._trailString = function(t) {
                throw new Error("Override this function for each progress bar");
              }),
              (s.prototype._warnContainerAspectRatio = function(t) {
                if (this.containerAspectRatio) {
                  var e = window.getComputedStyle(t, null),
                    n = parseFloat(e.getPropertyValue("width"), 10),
                    i = parseFloat(e.getPropertyValue("height"), 10);
                  o.floatEquals(this.containerAspectRatio, n / i) ||
                    (console.warn(
                      "Incorrect aspect ratio of container",
                      "#" + t.id,
                      "detected:",
                      e.getPropertyValue("width") + "(width)",
                      "/",
                      e.getPropertyValue("height") + "(height)",
                      "=",
                      n / i
                    ),
                    console.warn(
                      "Aspect ratio of should be",
                      this.containerAspectRatio
                    ));
                }
              }),
              (e.exports = s);
          },
          { "./path": 5, "./utils": 9 }
        ],
        8: [
          function(t, e, n) {
            var i = t("./shape"),
              o = t("./utils"),
              s = function(t, e) {
                (this._pathTemplate =
                  "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}"),
                  (this._trailTemplate =
                    "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}"),
                  i.apply(this, arguments);
              };
            ((s.prototype = new i()).constructor = s),
              (s.prototype._pathString = function(t) {
                var e = 100 - t.strokeWidth / 2;
                return o.render(this._pathTemplate, {
                  width: e,
                  strokeWidth: t.strokeWidth,
                  halfOfStrokeWidth: t.strokeWidth / 2
                });
              }),
              (s.prototype._trailString = function(t) {
                var e = 100 - t.strokeWidth / 2;
                return o.render(this._trailTemplate, {
                  width: e,
                  strokeWidth: t.strokeWidth,
                  halfOfStrokeWidth: t.strokeWidth / 2,
                  startMargin: t.strokeWidth / 2 - t.trailWidth / 2
                });
              }),
              (e.exports = s);
          },
          { "./shape": 7, "./utils": 9 }
        ],
        9: [
          function(t, e, n) {
            function i(t, e, n) {
              (t = t || {}), (e = e || {}), (n = n || !1);
              for (var o in e)
                if (e.hasOwnProperty(o)) {
                  var s = t[o],
                    r = e[o];
                  n && a(s) && a(r) ? (t[o] = i(s, r, n)) : (t[o] = r);
                }
              return t;
            }
            function o(t, e, n) {
              for (var i = t.style, o = 0; o < c.length; ++o)
                i[c[o] + s(e)] = n;
              i[e] = n;
            }
            function s(t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            }
            function r(t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }
            function a(t) {
              return !r(t) && ("object" === typeof t && !!t);
            }
            function l(t, e) {
              for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
            }
            var c = "Webkit Moz O ms".split(" "),
              u = 0.001;
            e.exports = {
              extend: i,
              render: function(t, e) {
                var n = t;
                for (var i in e)
                  if (e.hasOwnProperty(i)) {
                    var o = e[i],
                      s = "\\{" + i + "\\}",
                      r = new RegExp(s, "g");
                    n = n.replace(r, o);
                  }
                return n;
              },
              setStyle: o,
              setStyles: function(t, e) {
                l(e, function(e, n) {
                  null !== e &&
                    void 0 !== e &&
                    (a(e) && !0 === e.prefix
                      ? o(t, n, e.value)
                      : (t.style[n] = e));
                });
              },
              capitalize: s,
              isString: function(t) {
                return "string" == typeof t || t instanceof String;
              },
              isFunction: function(t) {
                return "function" == typeof t;
              },
              isObject: a,
              forEachObject: l,
              floatEquals: function(t, e) {
                return Math.abs(t - e) < u;
              },
              removeChildren: function(t) {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
              }
            };
          },
          {}
        ]
      },
      {},
      [4]
    )(4);
  }),
  (function(t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function(t) {
    var e = -1,
      n = -1,
      i = function(t) {
        return parseFloat(t) || 0;
      },
      o = function(e) {
        var n = null,
          o = [];
        return (
          t(e).each(function() {
            var e = t(this),
              s = e.offset().top - i(e.css("margin-top")),
              r = o.length > 0 ? o[o.length - 1] : null;
            null === r
              ? o.push(e)
              : Math.floor(Math.abs(n - s)) <= 1
              ? (o[o.length - 1] = r.add(e))
              : o.push(e),
              (n = s);
          }),
          o
        );
      },
      s = function(e) {
        var n = { byRow: !0, property: "height", target: null, remove: !1 };
        return "object" == typeof e
          ? t.extend(n, e)
          : ("boolean" == typeof e
              ? (n.byRow = e)
              : "remove" === e && (n.remove = !0),
            n);
      },
      r = (t.fn.matchHeight = function(e) {
        var n = s(e);
        if (n.remove) {
          var i = this;
          return (
            this.css(n.property, ""),
            t.each(r._groups, function(t, e) {
              e.elements = e.elements.not(i);
            }),
            this
          );
        }
        return this.length <= 1 && !n.target
          ? this
          : (r._groups.push({ elements: this, options: n }),
            r._apply(this, n),
            this);
      });
    (r.version = "0.7.2"),
      (r._groups = []),
      (r._throttle = 80),
      (r._maintainScroll = !1),
      (r._beforeUpdate = null),
      (r._afterUpdate = null),
      (r._rows = o),
      (r._parse = i),
      (r._parseOptions = s),
      (r._apply = function(e, n) {
        var a = s(n),
          l = t(e),
          c = [l],
          u = t(window).scrollTop(),
          h = t("html").outerHeight(!0),
          d = l.parents().filter(":hidden");
        return (
          d.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"));
          }),
          d.css("display", "block"),
          a.byRow &&
            !a.target &&
            (l.each(function() {
              var e = t(this),
                n = e.css("display");
              "inline-block" !== n &&
                "flex" !== n &&
                "inline-flex" !== n &&
                (n = "block"),
                e.data("style-cache", e.attr("style")),
                e.css({
                  display: n,
                  "padding-top": "0",
                  "padding-bottom": "0",
                  "margin-top": "0",
                  "margin-bottom": "0",
                  "border-top-width": "0",
                  "border-bottom-width": "0",
                  height: "100px",
                  overflow: "hidden"
                });
            }),
            (c = o(l)),
            l.each(function() {
              var e = t(this);
              e.attr("style", e.data("style-cache") || "");
            })),
          t.each(c, function(e, n) {
            var o = t(n),
              s = 0;
            if (a.target) s = a.target.outerHeight(!1);
            else {
              if (a.byRow && o.length <= 1) return void o.css(a.property, "");
              o.each(function() {
                var e = t(this),
                  n = e.attr("style"),
                  i = e.css("display");
                "inline-block" !== i &&
                  "flex" !== i &&
                  "inline-flex" !== i &&
                  (i = "block");
                var o = { display: i };
                (o[a.property] = ""),
                  e.css(o),
                  e.outerHeight(!1) > s && (s = e.outerHeight(!1)),
                  n ? e.attr("style", n) : e.css("display", "");
              });
            }
            o.each(function() {
              var e = t(this),
                n = 0;
              (a.target && e.is(a.target)) ||
                ("border-box" !== e.css("box-sizing") &&
                  ((n +=
                    i(e.css("border-top-width")) +
                    i(e.css("border-bottom-width"))),
                  (n += i(e.css("padding-top")) + i(e.css("padding-bottom")))),
                e.css(a.property, s - n + "px"));
            });
          }),
          d.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null);
          }),
          r._maintainScroll &&
            t(window).scrollTop((u / h) * t("html").outerHeight(!0)),
          this
        );
      }),
      (r._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
          var n = t(this),
            i = n.attr("data-mh") || n.attr("data-match-height");
          e[i] = i in e ? e[i].add(n) : n;
        }),
          t.each(e, function() {
            this.matchHeight(!0);
          });
      });
    var a = function(e) {
      r._beforeUpdate && r._beforeUpdate(e, r._groups),
        t.each(r._groups, function() {
          r._apply(this.elements, this.options);
        }),
        r._afterUpdate && r._afterUpdate(e, r._groups);
    };
    (r._update = function(i, o) {
      if (o && "resize" === o.type) {
        var s = t(window).width();
        if (s === e) return;
        e = s;
      }
      i
        ? -1 === n &&
          (n = setTimeout(function() {
            a(o), (n = -1);
          }, r._throttle))
        : a(o);
    }),
      t(r._applyDataApi);
    var l = t.fn.on ? "on" : "bind";
    t(window)[l]("load", function(t) {
      r._update(!1, t);
    }),
      t(window)[l]("resize orientationchange", function(t) {
        r._update(!0, t);
      });
  }),
  (function(t, e) {
    "function" === typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
          return e(t, n);
        })
      : "object" === typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function(t, e) {
    "use strict";
    function n(n, s, a) {
      function l(t, e, i) {
        var o,
          s = "$()." + n + '("' + e + '")';
        return (
          t.each(function(t, l) {
            var c = a.data(l, n);
            if (c) {
              var u = c[e];
              if (u && "_" != e.charAt(0)) {
                var h = u.apply(c, i);
                o = void 0 === o ? h : o;
              } else r(s + " is not a valid method");
            } else r(n + " not initialized. Cannot call methods, i.e. " + s);
          }),
          void 0 !== o ? o : t
        );
      }
      function c(t, e) {
        t.each(function(t, i) {
          var o = a.data(i, n);
          o ? (o.option(e), o._init()) : ((o = new s(i, e)), a.data(i, n, o));
        });
      }
      (a = a || e || t.jQuery) &&
        (s.prototype.option ||
          (s.prototype.option = function(t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[n] = function(t) {
          return "string" === typeof t
            ? l(this, t, o.call(arguments, 1))
            : (c(this, t), this);
        }),
        i(a));
    }
    function i(t) {
      !t || (t && t.bridget) || (t.bridget = n);
    }
    var o = Array.prototype.slice,
      s = t.console,
      r =
        void 0 === s
          ? function() {}
          : function(t) {
              s.error(t);
            };
    return i(e || t.jQuery), n;
  }),
  (function(t, e) {
    "function" === typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" === typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function(t, e) {
        if (t && e) {
          var n = (this._events = this._events || {}),
            i = (n[t] = n[t] || []);
          return -1 === i.indexOf(e) && i.push(e), this;
        }
      }),
      (e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[t] = n[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          var i = n.indexOf(e);
          return -1 != i && n.splice(i, 1), this;
        }
      }),
      (e.emitEvent = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          (n = n.slice(0)), (e = e || []);
          for (
            var i = this._onceEvents && this._onceEvents[t], o = 0;
            o < n.length;
            o++
          ) {
            var s = n[o];
            i && i[s] && (this.off(t, s), delete i[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function() {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function(t, e) {
    "use strict";
    "function" === typeof define && define.amd
      ? define("get-size/get-size", [], function() {
          return e();
        })
      : "object" === typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function() {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 === t.indexOf("%") && !isNaN(e) && e;
    }
    function e() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          },
          e = 0;
        l > e;
        e++
      )
        t[a[e]] = 0;
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          r(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function i() {
      if (!c) {
        c = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var r = n(e);
        (o.isBoxSizeOuter = s = 200 === t(r.width)), i.removeChild(e);
      }
    }
    function o(o) {
      if (
        (i(),
        "string" === typeof o && (o = document.querySelector(o)),
        o && "object" === typeof o && o.nodeType)
      ) {
        var r = n(o);
        if ("none" === r.display) return e();
        var c = {};
        (c.width = o.offsetWidth), (c.height = o.offsetHeight);
        for (
          var u = (c.isBorderBox = "border-box" === r.boxSizing), h = 0;
          l > h;
          h++
        ) {
          var d = a[h],
            p = r[d],
            f = parseFloat(p);
          c[d] = isNaN(f) ? 0 : f;
        }
        var g = c.paddingLeft + c.paddingRight,
          m = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          b = c.borderLeftWidth + c.borderRightWidth,
          w = c.borderTopWidth + c.borderBottomWidth,
          _ = u && s,
          x = t(r.width);
        !1 !== x && (c.width = x + (_ ? 0 : g + b));
        var C = t(r.height);
        return (
          !1 !== C && (c.height = C + (_ ? 0 : m + w)),
          (c.innerWidth = c.width - (g + b)),
          (c.innerHeight = c.height - (m + w)),
          (c.outerWidth = c.width + v),
          (c.outerHeight = c.height + y),
          c
        );
      }
    }
    var s,
      r =
        "undefined" === typeof console
          ? function() {}
          : function(t) {
              console.error(t);
            },
      a = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
      ],
      l = a.length,
      c = !1;
    return o;
  }),
  (function(t, e) {
    "use strict";
    "function" === typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" === typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function() {
    "use strict";
    var t = (function() {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
        var i = e[n] + "MatchesSelector";
        if (t[i]) return i;
      }
    })();
    return function(e, n) {
      return e[t](n);
    };
  }),
  (function(t, e) {
    "function" === typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "desandro-matches-selector/matches-selector"
        ], function(n) {
          return e(t, n);
        })
      : "object" === typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function(t, e) {
    var n = {};
    (n.extend = function(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }),
      (n.modulo = function(t, e) {
        return ((t % e) + e) % e;
      }),
      (n.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" === typeof t && "number" === typeof t.length)
          for (var n = 0; n < t.length; n++) e.push(t[n]);
        else e.push(t);
        return e;
      }),
      (n.removeFrom = function(t, e) {
        var n = t.indexOf(e);
        -1 != n && t.splice(n, 1);
      }),
      (n.getParent = function(t, n) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, n))) return t;
      }),
      (n.getQueryElement = function(t) {
        return "string" === typeof t ? document.querySelector(t) : t;
      }),
      (n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (n.filterFindElements = function(t, i) {
        var o = [];
        return (
          (t = n.makeArray(t)).forEach(function(t) {
            if (t instanceof HTMLElement) {
              if (!i) return void o.push(t);
              e(t, i) && o.push(t);
              for (var n = t.querySelectorAll(i), s = 0; s < n.length; s++)
                o.push(n[s]);
            }
          }),
          o
        );
      }),
      (n.debounceMethod = function(t, e, n) {
        var i = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function() {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
            s = this;
          this[o] = setTimeout(function() {
            i.apply(s, e), delete s[o];
          }, n || 100);
        };
      }),
      (n.docReady = function(t) {
        var e = document.readyState;
        "complete" === e || "interactive" === e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (n.toDashed = function(t) {
        return t
          .replace(/(.)([A-Z])/g, function(t, e, n) {
            return e + "-" + n;
          })
          .toLowerCase();
      });
    var i = t.console;
    return (
      (n.htmlInit = function(e, o) {
        n.docReady(function() {
          var s = n.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            l = document.querySelectorAll(".js-" + s),
            c = n.makeArray(a).concat(n.makeArray(l)),
            u = r + "-options",
            h = t.jQuery;
          c.forEach(function(t) {
            var n,
              s = t.getAttribute(r) || t.getAttribute(u);
            try {
              n = s && JSON.parse(s);
            } catch (e) {
              return void (
                i &&
                i.error("Error parsing " + r + " on " + t.className + ": " + e)
              );
            }
            var a = new e(t, n);
            h && h.data(t, o, a);
          });
        });
      }),
      n
    );
  }),
  (function(t, e) {
    "function" === typeof define && define.amd
      ? define("outlayer/item", [
          "ev-emitter/ev-emitter",
          "get-size/get-size"
        ], e)
      : "object" === typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function(t, e) {
    "use strict";
    function n(t) {
      for (var e in t) return !1;
      return null, !0;
    }
    function i(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var o = document.documentElement.style,
      s = "string" === typeof o.transition ? "transition" : "WebkitTransition",
      r = "string" === typeof o.transform ? "transform" : "WebkitTransform",
      a = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[s],
      l = {
        transform: r,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
      },
      c = (i.prototype = Object.create(t.prototype));
    (c.constructor = i),
      (c._create = function() {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (c.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (c.getSize = function() {
        this.size = e(this.element);
      }),
      (c.css = function(t) {
        var e = this.element.style;
        for (var n in t) e[l[n] || n] = t[n];
      }),
      (c.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          i = t[e ? "left" : "right"],
          o = t[n ? "top" : "bottom"],
          s = this.layout.size,
          r =
            -1 != i.indexOf("%")
              ? (parseFloat(i) / 100) * s.width
              : parseInt(i, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * s.height
              : parseInt(o, 10);
        (r = isNaN(r) ? 0 : r),
          (a = isNaN(a) ? 0 : a),
          (r -= e ? s.paddingLeft : s.paddingRight),
          (a -= n ? s.paddingTop : s.paddingBottom),
          (this.position.x = r),
          (this.position.y = a);
      }),
      (c.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          n = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = n ? "paddingLeft" : "paddingRight",
          s = n ? "left" : "right",
          r = n ? "right" : "left",
          a = this.position.x + t[o];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var l = i ? "paddingTop" : "paddingBottom",
          c = i ? "top" : "bottom",
          u = i ? "bottom" : "top",
          h = this.position.y + t[l];
        (e[c] = this.getYValue(h)),
          (e[u] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (c.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (c.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (c._transitionTo = function(t, e) {
        this.getPosition();
        var n = this.position.x,
          i = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10),
          r = o === this.position.x && s === this.position.y;
        if ((this.setPosition(t, e), !r || this.isTransitioning)) {
          var a = t - n,
            l = e - i,
            c = {};
          (c.transform = this.getTranslate(a, l)),
            this.transition({
              to: c,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0
            });
        } else this.layoutPosition();
      }),
      (c.getTranslate = function(t, e) {
        var n = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop");
        return (
          (t = n ? t : -t),
          (e = i ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (c.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (c.moveTo = c._transitionTo),
      (c.setPosition = function(t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (c._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (c.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
          for (n in t.to)
            (e.ingProperties[n] = !0), t.isCleaning && (e.clean[n] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var u =
      "opacity," +
      (function(t) {
        return t.replace(/([A-Z])/g, function(t) {
          return "-" + t.toLowerCase();
        });
      })(r);
    (c.enableTransition = function() {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" === typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: u,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0
          }),
          this.element.addEventListener(a, this, !1);
      }
    }),
      (c.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
      }),
      (c.onotransitionend = function(t) {
        this.ontransitionend(t);
      });
    var h = { "-webkit-transform": "transform" };
    (c.ontransitionend = function(t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = h[t.propertyName] || t.propertyName;
        delete e.ingProperties[i],
          n(e.ingProperties) && this.disableTransition(),
          i in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
          this.emitEvent("transitionEnd", [this]);
      }
    }),
      (c.disableTransition = function() {
        this.removeTransitionStyles(),
          this.element.removeEventListener(a, this, !1),
          (this.isTransitioning = !1);
      }),
      (c._removeStyles = function(t) {
        var e = {};
        for (var n in t) e[n] = "";
        this.css(e);
      });
    var d = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
    };
    return (
      (c.removeTransitionStyles = function() {
        this.css(d);
      }),
      (c.stagger = function(t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (c.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (c.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function() {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (c.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[
          this.getHideRevealTransitionEndProperty("visibleStyle")
        ] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
      }),
      (c.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
      }),
      (c.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var n in e) return n;
      }),
      (c.hide = function() {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[
          this.getHideRevealTransitionEndProperty("hiddenStyle")
        ] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
      }),
      (c.onHideTransitionEnd = function() {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (c.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      }),
      i
    );
  }),
  (function(t, e) {
    "use strict";
    "function" === typeof define && define.amd
      ? define("outlayer/outlayer", [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item"
        ], function(n, i, o, s) {
          return e(t, n, i, o, s);
        })
      : "object" === typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function(t, e, n, i, o) {
    "use strict";
    function s(t, e) {
      var n = i.getQueryElement(t);
      if (n) {
        (this.element = n),
          c && (this.$element = c(this.element)),
          (this.options = i.extend({}, this.constructor.defaults)),
          this.option(e);
        var o = ++h;
        (this.element.outlayerGUID = o),
          (d[o] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t));
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        n = e && e[1],
        i = e && e[2];
      return n.length ? (n = parseFloat(n)) * (f[i] || 1) : 0;
    }
    var l = t.console,
      c = t.jQuery,
      u = function() {},
      h = 0,
      d = {};
    (s.namespace = "outlayer"),
      (s.Item = o),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" }
      });
    var p = s.prototype;
    i.extend(p, e.prototype),
      (p.option = function(t) {
        i.extend(this.options, t);
      }),
      (p._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }),
      (p._create = function() {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          i.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (p.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }),
      (p._itemize = function(t) {
        for (
          var e = this._filterFindItemElements(t),
            n = this.constructor.Item,
            i = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var s = new n(e[o], this);
          i.push(s);
        }
        return i;
      }),
      (p._filterFindItemElements = function(t) {
        return i.filterFindElements(t, this.options.itemSelector);
      }),
      (p.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element;
        });
      }),
      (p.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (p._init = p.layout),
      (p._resetLayout = function() {
        this.getSize();
      }),
      (p.getSize = function() {
        this.size = n(this.element);
      }),
      (p._getMeasurement = function(t, e) {
        var i,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (i = this.element.querySelector(o))
              : o instanceof HTMLElement && (i = o),
            (this[t] = i ? n(i)[e] : o))
          : (this[t] = 0);
      }),
      (p.layoutItems = function(t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (p._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored;
        });
      }),
      (p._layoutItems = function(t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var n = [];
          t.forEach(function(t) {
            var i = this._getItemLayoutPosition(t);
            (i.item = t), (i.isInstant = e || t.isLayoutInstant), n.push(i);
          }, this),
            this._processLayoutQueue(n);
        }
      }),
      (p._getItemLayoutPosition = function() {
        return { x: 0, y: 0 };
      }),
      (p._processLayoutQueue = function(t) {
        this.updateStagger(),
          t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (p.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (p._positionItem = function(t, e, n, i, o) {
        i ? t.goTo(e, n) : (t.stagger(o * this.stagger), t.moveTo(e, n));
      }),
      (p._postLayout = function() {
        this.resizeContainer();
      }),
      (p.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (p._getContainerSize = u),
      (p._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
          var n = this.size;
          n.isBorderBox &&
            (t += e
              ? n.paddingLeft +
                n.paddingRight +
                n.borderLeftWidth +
                n.borderRightWidth
              : n.paddingBottom +
                n.paddingTop +
                n.borderTopWidth +
                n.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (p._emitCompleteOnItems = function(t, e) {
        function n() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function i() {
          ++r === s && n();
        }
        var o = this,
          s = e.length;
        if (e && s) {
          var r = 0;
          e.forEach(function(e) {
            e.once(t, i);
          });
        } else n();
      }),
      (p.dispatchEvent = function(t, e, n) {
        var i = e ? [e].concat(n) : n;
        if ((this.emitEvent(t, i), c))
          if (((this.$element = this.$element || c(this.element)), e)) {
            var o = c.Event(e);
            (o.type = t), this.$element.trigger(o, n);
          } else this.$element.trigger(t, n);
      }),
      (p.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (p.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (p.stamp = function(t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (p.unstamp = function(t) {
        (t = this._find(t)) &&
          t.forEach(function(t) {
            i.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (p._find = function(t) {
        return t
          ? ("string" === typeof t && (t = this.element.querySelectorAll(t)),
            (t = i.makeArray(t)))
          : void 0;
      }),
      (p._manageStamps = function() {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (p._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
      }),
      (p._manageStamp = u),
      (p._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          i = this._boundingRect,
          o = n(t);
        return {
          left: e.left - i.left - o.marginLeft,
          top: e.top - i.top - o.marginTop,
          right: i.right - e.right - o.marginRight,
          bottom: i.bottom - e.bottom - o.marginBottom
        };
      }),
      (p.handleEvent = i.handleEvent),
      (p.bindResize = function() {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (p.unbindResize = function() {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (p.onresize = function() {
        this.resize();
      }),
      i.debounceMethod(s, "onresize", 100),
      (p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (p.needsResizeLayout = function() {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (p.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (p.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (p.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
          var n = this.items.slice(0);
          (this.items = e.concat(n)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(n);
        }
      }),
      (p.reveal = function(t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function(t, n) {
            t.stagger(n * e), t.reveal();
          });
        }
      }),
      (p.hide = function(t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function(t, n) {
            t.stagger(n * e), t.hide();
          });
        }
      }),
      (p.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (p.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (p.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var n = this.items[e];
          if (n.element === t) return n;
        }
      }),
      (p.getItems = function(t) {
        var e = [];
        return (
          (t = i.makeArray(t)).forEach(function(t) {
            var n = this.getItem(t);
            n && e.push(n);
          }, this),
          e
        );
      }),
      (p.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function(t) {
              t.remove(), i.removeFrom(this.items, t);
            }, this);
      }),
      (p.destroy = function() {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function(t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e],
          delete this.element.outlayerGUID,
          c && c.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function(t) {
        var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
        return e && d[e];
      }),
      (s.create = function(t, e) {
        var n = r(s);
        return (
          (n.defaults = i.extend({}, s.defaults)),
          i.extend(n.defaults, e),
          (n.compatOptions = i.extend({}, s.compatOptions)),
          (n.namespace = t),
          (n.data = s.data),
          (n.Item = r(o)),
          i.htmlInit(n, t),
          c && c.bridget && c.bridget(t, n),
          n
        );
      });
    var f = { ms: 1, s: 1e3 };
    return (s.Item = o), s;
  }),
  (function(t, e) {
    "function" === typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" === typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function(t, e) {
    var n = t.create("masonry");
    n.compatOptions.fitWidth = "isFitWidth";
    var i = n.prototype;
    return (
      (i._resetLayout = function() {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (i.measureColumns = function() {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            n = t && t.element;
          this.columnWidth = (n && e(n).outerWidth) || this.containerWidth;
        }
        var i = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          s = o / i,
          r = i - (o % i),
          a = r && 1 > r ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (i.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          n = e(t);
        this.containerWidth = n && n.innerWidth;
      }),
      (i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          n = e && 1 > e ? "round" : "ceil",
          i = Math[n](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (
          var o = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](i, t),
            s = { x: this.columnWidth * o.col, y: o.y },
            r = o.y + t.size.outerHeight,
            a = i + o.col,
            l = o.col;
          a > l;
          l++
        )
          this.colYs[l] = r;
        return s;
      }),
      (i._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
          n = Math.min.apply(Math, e);
        return { col: e.indexOf(n), y: n };
      }),
      (i._getTopColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++)
          e[i] = this._getColGroupY(i, t);
        return e;
      }),
      (i._getColGroupY = function(t, e) {
        if (2 > e) return this.colYs[t];
        var n = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, n);
      }),
      (i._getHorizontalColPosition = function(t, e) {
        var n = this.horizontalColIndex % this.cols;
        n = t > 1 && n + t > this.cols ? 0 : n;
        var i = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = i ? n + t : this.horizontalColIndex),
          { col: n, y: this._getColGroupY(n, t) }
        );
      }),
      (i._manageStamp = function(t) {
        var n = e(t),
          i = this._getElementOffset(t),
          o = this._getOption("originLeft") ? i.left : i.right,
          s = o + n.outerWidth,
          r = Math.floor(o / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        (a -= s % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
        for (
          var l =
              (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight,
            c = r;
          a >= c;
          c++
        )
          this.colYs[c] = Math.max(l, this.colYs[c]);
      }),
      (i._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (i._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (i.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      n
    );
  }),
  (function(t, e, n, i) {
    function o(e, n) {
      (this.settings = null),
        (this.options = t.extend({}, o.Defaults, n)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"]
          }
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function(e, n) {
            this._handlers[n] = t.proxy(this[n], this);
          }, this)
        ),
        t.each(
          o.Plugins,
          t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          o.Workers,
          t.proxy(function(e, n) {
            this._pipe.push({ filter: n.filter, run: t.proxy(n.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (o.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
    }),
      (o.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (o.Type = { Event: "event", State: "state" }),
      (o.Plugins = {}),
      (o.Workers = [
        {
          filter: ["width", "settings"],
          run: function() {
            this._width = this.$element.width();
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          }
        },
        {
          filter: ["items", "settings"],
          run: function() {
            this.$stage.children(".cloned").remove();
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            var e = this.settings.margin || "",
              n = !this.settings.autoWidth,
              i = this.settings.rtl,
              o = {
                width: "auto",
                "margin-left": i ? e : "",
                "margin-right": i ? "" : e
              };
            !n && this.$stage.children().css(o), (t.css = o);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              n = null,
              i = this._items.length,
              o = !this.settings.autoWidth,
              s = [];
            for (t.items = { merge: !1, width: e }; i--; )
              (n = this._mergers[i]),
                (n =
                  (this.settings.mergeFit &&
                    Math.min(n, this.settings.items)) ||
                  n),
                (t.items.merge = n > 1 || t.items.merge),
                (s[i] = o ? e * n : this._items[i].width());
            this._widths = s;
          }
        },
        {
          filter: ["items", "settings"],
          run: function() {
            var e = [],
              n = this._items,
              i = this.settings,
              o = Math.max(2 * i.items, 4),
              s = 2 * Math.ceil(n.length / 2),
              r = i.loop && n.length ? (i.rewind ? o : Math.max(o, s)) : 0,
              a = "",
              l = "";
            for (r /= 2; r--; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += n[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)),
                (l = n[e[e.length - 1]][0].outerHTML + l);
            (this._clones = e),
              t(a)
                .addClass("cloned")
                .appendTo(this.$stage),
              t(l)
                .addClass("cloned")
                .prependTo(this.$stage);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function() {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                n = -1,
                i = 0,
                o = 0,
                s = [];
              ++n < e;

            )
              (i = s[n - 1] || 0),
                (o = this._widths[this.relative(n)] + this.settings.margin),
                s.push(i + o * t);
            this._coordinates = s;
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function() {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              n = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
              };
            this.$stage.css(n);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            var e = this._coordinates.length,
              n = !this.settings.autoWidth,
              i = this.$stage.children();
            if (n && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  i.eq(e).css(t.css);
            else n && ((t.css.width = t.items.width), i.css(t.css));
          }
        },
        {
          filter: ["items"],
          run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          }
        },
        {
          filter: ["position"],
          run: function() {
            this.animate(this.coordinates(this._current));
          }
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function() {
            var t,
              e,
              n,
              i,
              o = this.settings.rtl ? 1 : -1,
              s = 2 * this.settings.stagePadding,
              r = this.coordinates(this.current()) + s,
              a = r + this.width() * o,
              l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++)
              (t = this._coordinates[n - 1] || 0),
                (e = Math.abs(this._coordinates[n]) + s * o),
                ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                  (this.op(e, "<", r) && this.op(e, ">", a))) &&
                  l.push(n);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.settings.center &&
                (this.$stage.children(".center").removeClass("center"),
                this.$stage
                  .children()
                  .eq(this.current())
                  .addClass("center"));
          }
        }
      ]),
      (o.prototype.initialize = function() {
        if (
          (this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is("pre-loading"))
        ) {
          var e, n, o;
          (e = this.$element.find("img")),
            (n = this.settings.nestedItemSelector
              ? "." + this.settings.nestedItemSelector
              : i),
            (o = this.$element.children(n).width()),
            e.length && o <= 0 && this.preloadAutoWidthImages(e);
        }
        this.$element.addClass(this.options.loadingClass),
          (this.$stage = t(
            "<" +
              this.settings.stageElement +
              ' class="' +
              this.settings.stageClass +
              '"/>'
          ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(":visible")
            ? this.refresh()
            : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (o.prototype.setup = function() {
        var e = this.viewport(),
          n = this.options.responsive,
          i = -1,
          o = null;
        n
          ? (t.each(n, function(t) {
              t <= e && t > i && (i = Number(t));
            }),
            "function" ===
              typeof (o = t.extend({}, this.options, n[i])).stagePadding &&
              (o.stagePadding = o.stagePadding()),
            delete o.responsive,
            o.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + i
                  )
              ))
          : (o = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: o } }),
          (this._breakpoint = i),
          (this.settings = o),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings }
          });
      }),
      (o.prototype.optionsLogic = function() {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (o.prototype.prepare = function(e) {
        var n = this.trigger("prepare", { content: e });
        return (
          n.data ||
            (n.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: n.data }),
          n.data
        );
      }),
      (o.prototype.update = function() {
        for (
          var e = 0,
            n = this._pipe.length,
            i = t.proxy(function(t) {
              return this[t];
            }, this._invalidated),
            o = {};
          e < n;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, i).length > 0) &&
            this._pipe[e].run(o),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (o.prototype.width = function(t) {
        switch ((t = t || o.Width.Default)) {
          case o.Width.Inner:
          case o.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (o.prototype.refresh = function() {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (o.prototype.onResize = function() {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.$element.is(":visible") &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (o.prototype.registerEventHandlers = function() {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function() {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (o.prototype.onDragStart = function(e) {
        var i = null;
        3 !== e.which &&
          (t.support.transform
            ? ((i = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(",")),
              (i = {
                x: i[16 === i.length ? 12 : 4],
                y: i[16 === i.length ? 13 : 5]
              }))
            : ((i = this.$stage.position()),
              (i = {
                x: this.settings.rtl
                  ? i.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : i.left,
                y: i.top
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(i.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = i),
          (this._drag.stage.current = i),
          (this._drag.pointer = this.pointer(e)),
          t(n).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(n).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function(e) {
              var i = this.difference(this._drag.pointer, this.pointer(e));
              t(n).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(i.x) < Math.abs(i.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (o.prototype.onDragMove = function(t) {
        var e = null,
          n = null,
          i = null,
          o = this.difference(this._drag.pointer, this.pointer(t)),
          s = this.difference(this._drag.stage.start, o);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (n = this.coordinates(this.maximum() + 1) - e),
              (s.x = ((((s.x - e) % n) + n) % n) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (n = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (i = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
              (s.x = Math.max(Math.min(s.x, e + i), n + i))),
          (this._drag.stage.current = s),
          this.animate(s.x));
      }),
      (o.prototype.onDragEnd = function(e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)),
          o = this._drag.stage.current,
          s = (i.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== i.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(o.x, 0 !== i.x ? s : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = s),
            (Math.abs(i.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function() {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (o.prototype.closest = function(e, n) {
        var i = -1,
          o = this.width(),
          s = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              s,
              t.proxy(function(t, r) {
                return (
                  "left" === n && e > r - 30 && e < r + 30
                    ? (i = t)
                    : "right" === n && e > r - o - 30 && e < r - o + 30
                    ? (i = t + 1)
                    : this.op(e, "<", r) &&
                      this.op(e, ">", s[t + 1] || r - o) &&
                      (i = "left" === n ? t + 1 : t),
                  -1 === i
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", s[this.minimum()])
              ? (i = e = this.minimum())
              : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())),
          i
        );
      }),
      (o.prototype.animate = function(e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          n && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
              })
            : n
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (o.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (o.prototype.current = function(t) {
        if (t === i) return this._current;
        if (0 === this._items.length) return i;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger("change", {
            property: { name: "position", value: t }
          });
          e.data !== i && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current }
            });
        }
        return this._current;
      }),
      (o.prototype.invalidate = function(e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function(t, e) {
            return e;
          })
        );
      }),
      (o.prototype.reset = function(t) {
        (t = this.normalize(t)) !== i &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (o.prototype.normalize = function(t, e) {
        var n = this._items.length,
          o = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || n < 1
            ? (t = i)
            : (t < 0 || t >= n + o) &&
              (t = ((((t - o / 2) % n) + n) % n) + o / 2),
          t
        );
      }),
      (o.prototype.relative = function(t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (o.prototype.maximum = function(t) {
        var e,
          n,
          i,
          o = this.settings,
          s = this._coordinates.length;
        if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
          for (
            e = this._items.length,
              n = this._items[--e].width(),
              i = this.$element.width();
            e-- && !((n += this._items[e].width() + this.settings.margin) > i);

          );
          s = e + 1;
        } else
          s = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0);
      }),
      (o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (o.prototype.items = function(t) {
        return t === i
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (o.prototype.mergers = function(t) {
        return t === i
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (o.prototype.clones = function(e) {
        var n = this._clones.length / 2,
          o = n + this._items.length,
          s = function(t) {
            return t % 2 / 0 ? o + t / 2 : n - (t + 1) / 2;
          };
        return e = i
          ? t.map(this._clones, function(t, e) {
              return s(e);
            })
          : t.map(this._clones, function(t, n) {
              return t === e ? s(n) : null;
            });
      }),
      (o.prototype.speed = function(t) {
        return t !== i && (this._speed = t), this._speed;
      }),
      (o.prototype.coordinates = function(e) {
        var n,
          o = 1,
          s = e - 1;
        return e === i
          ? t.map(
              this._coordinates,
              t.proxy(function(t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((o = -1), (s = e + 1)),
                (n = this._coordinates[e]),
                (n +=
                  ((this.width() - n + (this._coordinates[s] || 0)) / 2) * o))
              : (n = this._coordinates[s] || 0),
            (n = Math.ceil(n)));
      }),
      (o.prototype.duration = function(t, e, n) {
        return 0 === n
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(n || this.settings.smartSpeed);
      }),
      (o.prototype.to = function(t, e) {
        var n = this.current(),
          i = null,
          o = t - this.relative(n),
          s = (o > 0) - (o < 0),
          r = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r),
            (t = n + o),
            (i = ((((t - a) % r) + r) % r) + a) !== t &&
              i - o <= l &&
              i - o > 0 &&
              ((n = i - o), (t = i), this.reset(n)))
          : this.settings.rewind
          ? ((l += 1), (t = ((t % l) + l) % l))
          : (t = Math.max(a, Math.min(l, t))),
          this.speed(this.duration(n, t, e)),
          this.current(t),
          this.$element.is(":visible") && this.update();
      }),
      (o.prototype.next = function(t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (o.prototype.prev = function(t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (o.prototype.onTransitionEnd = function(t) {
        if (
          t !== i &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (o.prototype.viewport = function() {
        var i;
        return (
          this.options.responsiveBaseElement !== e
            ? (i = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (i = e.innerWidth)
            : n.documentElement && n.documentElement.clientWidth
            ? (i = n.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          i
        );
      }),
      (o.prototype.replace = function(e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function() {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function(t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (o.prototype.add = function(e, n) {
        var o = this.relative(this._current);
        (n = n === i ? this._items.length : this.normalize(n, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: n }),
          (e = this.prepare(e)),
          0 === this._items.length || n === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[n - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[n].before(e),
              this._items.splice(n, 0, e),
              this._mergers.splice(
                n,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[o] && this.reset(this._items[o].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: n });
      }),
      (o.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== i &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (o.prototype.preloadAutoWidthImages = function(e) {
        e.each(
          t.proxy(function(e, n) {
            this.enter("pre-loading"),
              (n = t(n)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function(t) {
                    n.attr("src", t.target.src),
                      n.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  n.attr("src") ||
                    n.attr("data-src") ||
                    n.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (o.prototype.destroy = function() {
        this.$element.off(".owl.core"),
          this.$stage.off(".owl.core"),
          t(n).off(".owl.core"),
          !1 !== this.settings.responsive &&
            (e.clearTimeout(this.resizeTimer),
            this.off(e, "resize", this._handlers.onThrottledResize));
        for (var i in this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage
            .children()
            .contents()
            .unwrap(),
          this.$stage.children().unwrap(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (o.prototype.op = function(t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
          case "<":
            return i ? t > n : t < n;
          case ">":
            return i ? t < n : t > n;
          case ">=":
            return i ? t <= n : t >= n;
          case "<=":
            return i ? t >= n : t <= n;
        }
      }),
      (o.prototype.on = function(t, e, n, i) {
        t.addEventListener
          ? t.addEventListener(e, n, i)
          : t.attachEvent && t.attachEvent("on" + e, n);
      }),
      (o.prototype.off = function(t, e, n, i) {
        t.removeEventListener
          ? t.removeEventListener(e, n, i)
          : t.detachEvent && t.detachEvent("on" + e, n);
      }),
      (o.prototype.trigger = function(e, n, i, s, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, i], function(t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          c = t.Event(
            [e, "owl", i || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, n)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function(t, e) {
              e.onTrigger && e.onTrigger(c);
            }),
            this.register({ type: o.Type.Event, name: e }),
            this.$element.trigger(c),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, c)),
          c
        );
      }),
      (o.prototype.enter = function(e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function(t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (o.prototype.leave = function(e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function(t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (o.prototype.register = function(e) {
        if (e.type === o.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var n = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function(t) {
              return !n ||
                !n.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : n.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === o.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function(n, i) {
                return t.inArray(n, this._states.tags[e.name]) === i;
              }, this)
            )));
      }),
      (o.prototype.suppress = function(e) {
        t.each(
          e,
          t.proxy(function(t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (o.prototype.release = function(e) {
        t.each(
          e,
          t.proxy(function(t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (o.prototype.pointer = function(t) {
        var n = { x: null, y: null };
        return (
          (t = t.originalEvent || t || e.event),
          (t =
            t.touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((n.x = t.pageX), (n.y = t.pageY))
            : ((n.x = t.clientX), (n.y = t.clientY)),
          n
        );
      }),
      (o.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t));
      }),
      (o.prototype.difference = function(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
          var i = t(this),
            s = i.data("owl.carousel");
          s ||
            ((s = new o(this, "object" == typeof e && e)),
            i.data("owl.carousel", s),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove"
              ],
              function(e, n) {
                s.register({ type: o.Type.Event, name: n }),
                  s.$element.on(
                    n + ".owl.carousel.core",
                    t.proxy(function(t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([n]),
                        s[n].apply(this, [].slice.call(arguments, 1)),
                        this.release([n]));
                    }, s)
                  );
              }
            )),
            "string" === typeof e && "_" !== e.charAt(0) && s[e].apply(s, n);
        });
      }),
      (t.fn.owlCarousel.Constructor = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    var o = function(e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this)
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (o.prototype.watch = function() {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (o.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (o.prototype.destroy = function() {
        var t, n;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    var o = function(e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(
            function(e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" === e.property.name) ||
                  "initialized" === e.type)
              )
                for (
                  var n = this._core.settings,
                    i = (n.center && Math.ceil(n.items / 2)) || n.items,
                    o = (n.center && -1 * i) || 0,
                    s =
                      (e.property && void 0 !== e.property.value
                        ? e.property.value
                        : this._core.current()) + o,
                    r = this._core.clones().length,
                    a = t.proxy(function(t, e) {
                      this.load(e);
                    }, this);
                  o++ < i;

                )
                  this.load(r / 2 + this._core.relative(s)),
                    r && t.each(this._core.clones(this._core.relative(s)), a),
                    s++;
            },
            this
          )
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { lazyLoad: !1 }),
      (o.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
          o = i && i.find(".owl-lazy");
        !o ||
          t.inArray(i.get(0), this._loaded) > -1 ||
          (o.each(
            t.proxy(function(n, i) {
              var o,
                s = t(i),
                r =
                  (e.devicePixelRatio > 1 && s.attr("data-src-retina")) ||
                  s.attr("data-src");
              this._core.trigger("load", { element: s, url: r }, "lazy"),
                s.is("img")
                  ? s
                      .one(
                        "load.owl.lazy",
                        t.proxy(function() {
                          s.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : ((o = new Image()),
                    (o.onload = t.proxy(function() {
                      s.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1"
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: s, url: r },
                          "lazy"
                        );
                    }, this)),
                    (o.src = r));
            }, this)
          ),
          this._loaded.push(i.get(0)));
      }),
      (o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    var o = function(e) {
      (this._core = e),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" == t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this)
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (o.prototype.update = function() {
        var e = this._core._current,
          n = e + this._core.settings.items,
          i = this._core.$stage
            .children()
            .toArray()
            .slice(e, n),
          o = [],
          s = 0;
        t.each(i, function(e, n) {
          o.push(t(n).height());
        }),
          (s = Math.max.apply(null, o)),
          this._core.$stage
            .parent()
            .height(s)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (o.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    var o = function(e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"]
              });
          }, this),
          "resize.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function(e) {
            if (e.namespace) {
              var n = t(e.content).find(".owl-video");
              n.length &&
                (n.css("display", "none"), this.fetch(n, t(e.content)));
            }
          }, this)
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function(t) {
            this.play(t);
          }, this)
        );
    };
    (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (o.prototype.fetch = function(t, e) {
        var n = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          i =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          o = t.attr("data-width") || this._core.settings.videoWidth,
          s = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          (i = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
          if (!(i[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          n = "vzaar";
        }
        (i = i[6]),
          (this._videos[r] = { type: n, id: i, width: o, height: s }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (o.prototype.thumbnail = function(e, n) {
        var i,
          o,
          s,
          r =
            n.width && n.height
              ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"'
              : "",
          a = e.find("img"),
          l = "src",
          c = "",
          u = this._core.settings,
          h = function(t) {
            (o = '<div class="owl-video-play-icon"></div>'),
              (i = u.lazyLoad
                ? '<div class="owl-video-tn ' +
                  c +
                  '" ' +
                  l +
                  '="' +
                  t +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  t +
                  ')"></div>'),
              e.after(i),
              e.after(o);
          };
        if (
          (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"),
          this._core.settings.lazyLoad && ((l = "data-src"), (c = "owl-lazy")),
          a.length)
        )
          return h(a.attr(l)), a.remove(), !1;
        "youtube" === n.type
          ? ((s = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg"), h(s))
          : "vimeo" === n.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + n.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(t) {
                (s = t[0].thumbnail_large), h(s);
              }
            })
          : "vzaar" === n.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + n.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(t) {
                (s = t.framegrab_url), h(s);
              }
            });
      }),
      (o.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (o.prototype.play = function(e) {
        var n,
          i = t(e.target).closest("." + this._core.settings.itemClass),
          o = this._videos[i.attr("data-video")],
          s = o.width || "100%",
          r = o.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (i = this._core.items(this._core.relative(i.index()))),
          this._core.reset(i.index()),
          "youtube" === o.type
            ? (n =
                '<iframe width="' +
                s +
                '" height="' +
                r +
                '" src="//www.youtube.com/embed/' +
                o.id +
                "?autoplay=1&rel=0&v=" +
                o.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === o.type
            ? (n =
                '<iframe src="//player.vimeo.com/video/' +
                o.id +
                '?autoplay=1" width="' +
                s +
                '" height="' +
                r +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === o.type &&
              (n =
                '<iframe frameborder="0"height="' +
                r +
                '"width="' +
                s +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                o.id +
                '/player?autoplay=true"></iframe>'),
          t('<div class="owl-video-frame">' + n + "</div>").insertAfter(
            i.find(".owl-video")
          ),
          (this._playing = i.addClass("owl-video-playing")));
      }),
      (o.prototype.isInFullScreen = function() {
        var e =
          n.fullscreenElement ||
          n.mozFullScreenElement ||
          n.webkitFullscreenElement;
        return (
          e &&
          t(e)
            .parent()
            .hasClass("owl-video-frame")
        );
      }),
      (o.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    var o = function(e) {
      (this.core = e),
        (this.core.options = t.extend({}, o.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = i),
        (this.next = i),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              "position" === t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(
            function(t) {
              t.namespace && (this.swapping = "translated" === t.type);
            },
            this
          ),
          "translate.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this)
        }),
        this.core.$element.on(this.handlers);
    };
    (o.Defaults = { animateOut: !1, animateIn: !1 }),
      (o.prototype.swap = function() {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            n = t.proxy(this.clear, this),
            i = this.core.$stage.children().eq(this.previous),
            o = this.core.$stage.children().eq(this.next),
            s = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              i
                .one(t.support.animation.end, n)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            s &&
              o
                .one(t.support.animation.end, n)
                .addClass("animated owl-animated-in")
                .addClass(s));
        }
      }),
      (o.prototype.clear = function(e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    var o = function(e) {
      (this._core = e),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function(t, e, n) {
            t.namespace && this.play(e, n);
          }, this),
          "stop.owl.autoplay": t.proxy(function(t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function() {
            this._core.settings.autoplayHoverPause && this.play();
          }, this)
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, o.Defaults, this._core.options));
    };
    (o.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }),
      (o.prototype.play = function(t, e) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (o.prototype._getNextTimeout = function(i, o) {
        return (
          this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(
            t.proxy(function() {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                n.hidden ||
                this._core.next(o || this._core.settings.autoplaySpeed);
            }, this),
            i || this._core.settings.autoplayTimeout
          )
        );
      }),
      (o.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
      }),
      (o.prototype.stop = function() {
        this._core.is("rotating") &&
          (e.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (o.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (o.prototype.destroy = function() {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    "use strict";
    var o = function(e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function(e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this)
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (o.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }),
      (o.prototype.initialize = function() {
        var e,
          n = this._core.settings;
        (this._controls.$relative = (n.navContainer
          ? t(n.navContainer)
          : t("<div>")
              .addClass(n.navContainerClass)
              .appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = t("<" + n.navElement + ">")
            .addClass(n.navClass[0])
            .html(n.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              t.proxy(function(t) {
                this.prev(n.navSpeed);
              }, this)
            )),
          (this._controls.$next = t("<" + n.navElement + ">")
            .addClass(n.navClass[1])
            .html(n.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              t.proxy(function(t) {
                this.next(n.navSpeed);
              }, this)
            )),
          n.dotsData ||
            (this._templates = [
              t("<div>")
                .addClass(n.dotClass)
                .append(t("<span>"))
                .prop("outerHTML")
            ]),
          (this._controls.$absolute = (n.dotsContainer
            ? t(n.dotsContainer)
            : t("<div>")
                .addClass(n.dotsClass)
                .appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            t.proxy(function(e) {
              var i = t(e.target)
                .parent()
                .is(this._controls.$absolute)
                ? t(e.target).index()
                : t(e.target)
                    .parent()
                    .index();
              e.preventDefault(), this.to(i, n.dotsSpeed);
            }, this)
          );
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this);
      }),
      (o.prototype.destroy = function() {
        var t, e, n, i;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (o.prototype.update = function() {
        var t,
          e,
          n = this._core.clones().length / 2,
          i = n + this._core.items().length,
          o = this._core.maximum(!0),
          s = this._core.settings,
          r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if (
          ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)),
          s.dots || "page" || s.slideBy)
        )
          for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
            if (e < r || 0 = e) {
              if (
                (this._pages.push({
                  start: Math.min(o, t - n),
                  end: t - n + r - 1
                }),
                Math.min(o, t - n) === o)
              )
                break;
              (e = 0), 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (o.prototype.draw = function() {
        var e,
          n = this._core.settings,
          i = this._core.items().length <= n.items,
          o = this._core.relative(this._core.current()),
          s = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i),
          n.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !s && o <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !s && o >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !n.dots || i),
          n.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            n.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 &&
                this._controls.$absolute
                  .children()
                  .slice(e)
                  .remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (o.prototype.onTrigger = function(e) {
        var n = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            n &&
            (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        };
      }),
      (o.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function(t, n) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (o.prototype.getPosition = function(e) {
        var n,
          i,
          o = this._core.settings;
        return (
          "page" === o.slideBy
            ? ((n = t.inArray(this.current(), this._pages)),
              (i = this._pages.length),
              e ? ++n : --n,
              (n = this._pages[((n % i) + i) % i].start))
            : ((n = this._core.relative(this._core.current())),
              (i = this._core.items().length),
              e ? (n += o.slideBy) : (n -= o.slideBy)),
          n
        );
      }),
      (o.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (o.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (o.prototype.to = function(e, n, i) {
        var o;
        !i && this._pages.length
          ? ((o = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % o) + o) % o].start,
              n
            ))
          : t.proxy(this._overrides.to, this._core)(e, n);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    "use strict";
    var o = function(n) {
      (this._core = n),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function(n) {
            n.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function(e) {
            if (e.namespace) {
              var n = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!n) return;
              this._hashes[n] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function(n) {
            if (n.namespace && "position" === n.property.name) {
              var i = this._core.items(
                  this._core.relative(this._core.current())
                ),
                o = t
                  .map(this._hashes, function(t, e) {
                    return t === i ? e : null;
                  })
                  .join();
              if (!o || e.location.hash.slice(1) === o) return;
              e.location.hash = o;
            }
          }, this)
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function(t) {
            var n = e.location.hash.substring(1),
              i = this._core.$stage.children(),
              o = this._hashes[n] && i.index(this._hashes[n]);
            void 0 !== o &&
              o !== this._core.current() &&
              this._core.to(this._core.relative(o), !1, !0);
          }, this)
        );
    };
    (o.Defaults = { URLhashListener: !1 }),
      (o.prototype.destroy = function() {
        var n, i;
        t(e).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    function o(e, n) {
      var o = !1,
        s = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(s + " ") + s).split(" "), function(t, e) {
          if (r[e] !== i) return (o = !n || e), !1;
        }),
        o
      );
    }
    function s(t) {
      return o(t, !0);
    }
    var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      l = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
          }
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend"
          }
        }
      },
      c = {
        csstransforms: function() {
          return !!o("transform");
        },
        csstransforms3d: function() {
          return !!o("perspective");
        },
        csstransitions: function() {
          return !!o("transition");
        },
        cssanimations: function() {
          return !!o("animation");
        }
      };
    c.csstransitions() &&
      ((t.support.transition = new String(s("transition"))),
      (t.support.transition.end = l.transition.end[t.support.transition])),
      c.cssanimations() &&
        ((t.support.animation = new String(s("animation"))),
        (t.support.animation.end = l.animation.end[t.support.animation])),
      c.csstransforms() &&
        ((t.support.transform = new String(s("transform"))),
        (t.support.transform3d = c.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, n, i) {
    "use strict";
    function o(t, e) {
      var i,
        o,
        s = [],
        r = 0;
      (t && t.isDefaultPrevented()) ||
        (t.preventDefault(),
        (o =
          (i =
            (e = t && t.data ? t.data.options : e || {}).$target ||
            n(t.currentTarget)).attr("data-fancybox") || "")
          ? (r = (s = (s = e.selector
              ? n(e.selector)
              : t.data
              ? t.data.items
              : []).length
              ? s.filter('[data-fancybox="' + o + '"]')
              : n('[data-fancybox="' + o + '"]')).index(i)) < 0 && (r = 0)
          : (s = [i]),
        n.fancybox.open(s, e, r));
    }
    if (((t.console = t.console || { info: function(t) {} }), n))
      if (n.fn.fancybox) console.info("fancyBox already initialized");
      else {
        var s = {
            loop: !1,
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: { preload: !1 },
            ajax: { settings: { data: { fancybox: !0 } } },
            iframe: {
              tpl:
                '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
              preload: !0,
              css: {},
              attr: { scrolling: "auto" }
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl:
              '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
              download:
                '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
              zoom:
                '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
              close:
                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
              smallBtn:
                '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
              arrowLeft:
                '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
              arrowRight:
                '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'
            },
            parentEl: "body",
            autoFocus: !1,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: { autoStart: !1 },
            touch: { vertical: !0, momentum: !0 },
            hash: null,
            media: {},
            slideShow: { autoStart: !1, speed: 4e3 },
            thumbs: {
              autoStart: !1,
              hideOnClose: !0,
              parentEl: ".fancybox-container",
              axis: "y"
            },
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(t, e) {
              return "image" === t.type && "zoom";
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
              idleTime: !1,
              clickContent: function(t, e) {
                return "image" === t.type && "toggleControls";
              },
              clickSlide: function(t, e) {
                return "image" === t.type ? "toggleControls" : "close";
              },
              dblclickContent: function(t, e) {
                return "image" === t.type && "zoom";
              },
              dblclickSlide: function(t, e) {
                return "image" === t.type && "zoom";
              }
            },
            lang: "en",
            i18n: {
              en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR:
                  "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom"
              },
              de: {
                CLOSE: "Schliessen",
                NEXT: "Weiter",
                PREV: "Zurück",
                ERROR:
                  "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Maßstab"
              }
            }
          },
          r = n(t),
          a = n(e),
          l = 0,
          c = function(t) {
            return t && t.hasOwnProperty && t instanceof n;
          },
          u =
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            function(e) {
              return t.setTimeout(e, 1e3 / 60);
            },
          h = (function() {
            var t,
              n = e.createElement("fakeelement"),
              i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
              };
            for (t in i) if (void 0 !== n.style[t]) return i[t];
            return "transitionend";
          })(),
          d = function(t) {
            return t && t.length && t[0].offsetHeight;
          },
          p = function(t, e) {
            var i = n.extend(!0, {}, t, e);
            return (
              n.each(e, function(t, e) {
                n.isArray(e) && (i[t] = e);
              }),
              i
            );
          },
          f = function(t, i, o) {
            var s = this;
            (s.opts = p({ index: o }, n.fancybox.defaults)),
              n.isPlainObject(i) && (s.opts = p(s.opts, i)),
              n.fancybox.isMobile && (s.opts = p(s.opts, s.opts.mobile)),
              (s.id = s.opts.id || ++l),
              (s.currIndex = parseInt(s.opts.index, 10) || 0),
              (s.prevIndex = null),
              (s.prevPos = null),
              (s.currPos = 0),
              (s.firstRun = !0),
              (s.group = []),
              (s.slides = {}),
              s.addContent(t),
              s.group.length &&
                ((s.$lastFocus = n(e.activeElement).trigger("blur")), s.init());
          };
        n.extend(f.prototype, {
          init: function() {
            var i,
              o,
              s,
              r = this,
              a = r.group[r.currIndex].opts,
              l = n.fancybox.scrollbarWidth;
            n.fancybox.getInstance() ||
              !1 === a.hideScrollbar ||
              (n("body").addClass("fancybox-active"),
              !n.fancybox.isMobile &&
                e.body.scrollHeight > t.innerHeight &&
                (void 0 === l &&
                  ((i = n(
                    '<div style="width:100px;height:100px;overflow:scroll;" />'
                  ).appendTo("body")),
                  (l = n.fancybox.scrollbarWidth =
                    i[0].offsetWidth - i[0].clientWidth),
                  i.remove()),
                n("head").append(
                  '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
                    l +
                    "px; }</style>"
                ),
                n("body").addClass("compensate-for-scrollbar"))),
              (s = ""),
              n.each(a.buttons, function(t, e) {
                s += a.btnTpl[e] || "";
              }),
              (o = n(
                r.translate(
                  r,
                  a.baseTpl
                    .replace("{{buttons}}", s)
                    .replace(
                      "{{arrows}}",
                      a.btnTpl.arrowLeft + a.btnTpl.arrowRight
                    )
                )
              )
                .attr("id", "fancybox-container-" + r.id)
                .addClass("fancybox-is-hidden")
                .addClass(a.baseClass)
                .data("FancyBox", r)
                .appendTo(a.parentEl)),
              (r.$refs = { container: o }),
              [
                "bg",
                "inner",
                "infobar",
                "toolbar",
                "stage",
                "caption",
                "navigation"
              ].forEach(function(t) {
                r.$refs[t] = o.find(".fancybox-" + t);
              }),
              r.trigger("onInit"),
              r.activate(),
              r.jumpTo(r.currIndex);
          },
          translate: function(t, e) {
            var n = t.opts.i18n[t.opts.lang];
            return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
              var i = n[e];
              return void 0 === i ? t : i;
            });
          },
          addContent: function(t) {
            var e,
              i = this,
              o = n.makeArray(t);
            n.each(o, function(t, e) {
              var o,
                s,
                r,
                a,
                l,
                c = {},
                u = {};
              n.isPlainObject(e)
                ? ((c = e), (u = e.opts || e))
                : "object" === n.type(e) && n(e).length
                ? ((u = (o = n(e)).data() || {}),
                  ((u = n.extend(!0, {}, u, u.options)).$orig = o),
                  (c.src = i.opts.src || u.src || o.attr("href")),
                  c.type || c.src || ((c.type = "inline"), (c.src = e)))
                : (c = { type: "html", src: e + "" }),
                (c.opts = n.extend(!0, {}, i.opts, u)),
                n.isArray(u.buttons) && (c.opts.buttons = u.buttons),
                (s = c.type || c.opts.type),
                (a = c.src || ""),
                !s &&
                  a &&
                  ((r = a.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))
                    ? ((s = "video"),
                      c.opts.videoFormat ||
                        (c.opts.videoFormat =
                          "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                    : a.match(
                        /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                      )
                    ? (s = "image")
                    : a.match(/\.(pdf)((\?|#).*)?$/i)
                    ? (s = "iframe")
                    : "#" === a.charAt(0) && (s = "inline")),
                s ? (c.type = s) : i.trigger("objectNeedsType", c),
                c.contentType ||
                  (c.contentType =
                    n.inArray(c.type, ["html", "inline", "ajax"]) > -1
                      ? "html"
                      : c.type),
                (c.index = i.group.length),
                "auto" == c.opts.smallBtn &&
                  (c.opts.smallBtn =
                    n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                "auto" === c.opts.toolbar &&
                  (c.opts.toolbar = !c.opts.smallBtn),
                c.opts.$trigger &&
                  c.index === i.opts.index &&
                  (c.opts.$thumb = c.opts.$trigger.find("img:first")),
                (c.opts.$thumb && c.opts.$thumb.length) ||
                  !c.opts.$orig ||
                  (c.opts.$thumb = c.opts.$orig.find("img:first")),
                "function" === n.type(c.opts.caption) &&
                  (c.opts.caption = c.opts.caption.apply(e, [i, c])),
                "function" === n.type(i.opts.caption) &&
                  (c.opts.caption = i.opts.caption.apply(e, [i, c])),
                c.opts.caption instanceof n ||
                  (c.opts.caption =
                    void 0 === c.opts.caption ? "" : c.opts.caption + ""),
                "ajax" === c.type &&
                  (l = a.split(/\s+/, 2)).length > 1 &&
                  ((c.src = l.shift()), (c.opts.filter = l.shift())),
                c.opts.modal &&
                  (c.opts = n.extend(!0, c.opts, {
                    infobar: 0,
                    toolbar: 0,
                    smallBtn: 0,
                    keyboard: 0,
                    slideShow: 0,
                    fullScreen: 0,
                    thumbs: 0,
                    touch: 0,
                    clickContent: !1,
                    clickSlide: !1,
                    clickOutside: !1,
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1
                  })),
                i.group.push(c);
            }),
              Object.keys(i.slides).length &&
                (i.updateControls(),
                (e = i.Thumbs) && e.isActive && (e.create(), e.focus()));
          },
          addEvents: function() {
            var i = this;
            i.removeEvents(),
              i.$refs.container
                .on("click.fb-close", "[data-fancybox-close]", function(t) {
                  t.stopPropagation(), t.preventDefault(), i.close(t);
                })
                .on(
                  "touchstart.fb-prev click.fb-prev",
                  "[data-fancybox-prev]",
                  function(t) {
                    t.stopPropagation(), t.preventDefault(), i.previous();
                  }
                )
                .on(
                  "touchstart.fb-next click.fb-next",
                  "[data-fancybox-next]",
                  function(t) {
                    t.stopPropagation(), t.preventDefault(), i.next();
                  }
                )
                .on("click.fb", "[data-fancybox-zoom]", function(t) {
                  i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                }),
              r.on("orientationchange.fb resize.fb", function(t) {
                t && t.originalEvent && "resize" === t.originalEvent.type
                  ? u(function() {
                      i.update();
                    })
                  : (i.$refs.stage.hide(),
                    setTimeout(
                      function() {
                        i.$refs.stage.show(), i.update();
                      },
                      n.fancybox.isMobile ? 600 : 250
                    ));
              }),
              a.on("focusin.fb", function(t) {
                var i = n.fancybox ? n.fancybox.getInstance() : null;
                i.isClosing ||
                  !i.current ||
                  !i.current.opts.trapFocus ||
                  n(t.target).hasClass("fancybox-container") ||
                  n(t.target).is(e) ||
                  (i &&
                    "fixed" !== n(t.target).css("position") &&
                    !i.$refs.container.has(t.target).length &&
                    (t.stopPropagation(), i.focus()));
              }),
              a.on("keydown.fb", function(t) {
                var e = i.current,
                  o = t.keyCode || t.which;
                if (
                  e &&
                  e.opts.keyboard &&
                  !(
                    t.ctrlKey ||
                    t.altKey ||
                    t.shiftKey ||
                    n(t.target).is("input") ||
                    n(t.target).is("textarea")
                  )
                )
                  return 8 === o || 27 === o
                    ? (t.preventDefault(), void i.close(t))
                    : 37 === o || 38 === o
                    ? (t.preventDefault(), void i.previous())
                    : 39 === o || 40 === o
                    ? (t.preventDefault(), void i.next())
                    : void i.trigger("afterKeydown", t, o);
              }),
              i.group[i.currIndex].opts.idleTime &&
                ((i.idleSecondsCounter = 0),
                a.on(
                  "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                  function(t) {
                    (i.idleSecondsCounter = 0),
                      i.isIdle && i.showControls(),
                      (i.isIdle = !1);
                  }
                ),
                (i.idleInterval = t.setInterval(function() {
                  i.idleSecondsCounter++,
                    i.idleSecondsCounter >=
                      i.group[i.currIndex].opts.idleTime &&
                      !i.isDragging &&
                      ((i.isIdle = !0),
                      (i.idleSecondsCounter = 0),
                      i.hideControls());
                }, 1e3)));
          },
          removeEvents: function() {
            var e = this;
            r.off("orientationchange.fb resize.fb"),
              a.off("focusin.fb keydown.fb .fb-idle"),
              this.$refs.container.off(".fb-close .fb-prev .fb-next"),
              e.idleInterval &&
                (t.clearInterval(e.idleInterval), (e.idleInterval = null));
          },
          previous: function(t) {
            return this.jumpTo(this.currPos - 1, t);
          },
          next: function(t) {
            return this.jumpTo(this.currPos + 1, t);
          },
          jumpTo: function(t, e) {
            var i,
              o,
              s,
              r,
              a,
              l,
              c,
              u = this,
              h = u.group.length;
            if (
              !(u.isDragging || u.isClosing || (u.isAnimating && u.firstRun))
            ) {
              if (
                ((t = parseInt(t, 10)),
                !(o = u.current ? u.current.opts.loop : u.opts.loop) &&
                  (t < 0 || t >= h))
              )
                return !1;
              if (
                ((i = u.firstRun = !Object.keys(u.slides).length),
                !(h < 2 && !i && u.isDragging))
              ) {
                if (
                  ((r = u.current),
                  (u.prevIndex = u.currIndex),
                  (u.prevPos = u.currPos),
                  (s = u.createSlide(t)),
                  h > 1 &&
                    ((o || s.index > 0) && u.createSlide(t - 1),
                    (o || s.index < h - 1) && u.createSlide(t + 1)),
                  (u.current = s),
                  (u.currIndex = s.index),
                  (u.currPos = s.pos),
                  u.trigger("beforeShow", i),
                  u.updateControls(),
                  (l = n.fancybox.getTranslate(s.$slide)),
                  (s.isMoved =
                    (0 !== l.left || 0 !== l.top) &&
                    !s.$slide.hasClass("fancybox-animated")),
                  (s.forcedDuration = void 0),
                  n.isNumeric(e)
                    ? (s.forcedDuration = e)
                    : (e =
                        s.opts[i ? "animationDuration" : "transitionDuration"]),
                  (e = parseInt(e, 10)),
                  i)
                )
                  return (
                    s.opts.animationEffect &&
                      e &&
                      u.$refs.container.css("transition-duration", e + "ms"),
                    u.$refs.container.removeClass("fancybox-is-hidden"),
                    d(u.$refs.container),
                    u.$refs.container.addClass("fancybox-is-open"),
                    d(u.$refs.container),
                    s.$slide.addClass("fancybox-slide--previous"),
                    u.loadSlide(s),
                    s.$slide
                      .removeClass("fancybox-slide--previous")
                      .addClass("fancybox-slide--current"),
                    void u.preload("image")
                  );
                n.each(u.slides, function(t, e) {
                  n.fancybox.stop(e.$slide);
                }),
                  s.$slide
                    .removeClass(
                      "fancybox-slide--next fancybox-slide--previous"
                    )
                    .addClass("fancybox-slide--current"),
                  s.isMoved
                    ? ((a = Math.round(s.$slide.width())),
                      n.each(u.slides, function(t, i) {
                        var o = i.pos - s.pos;
                        n.fancybox.animate(
                          i.$slide,
                          { top: 0, left: o * a + o * i.opts.gutter },
                          e,
                          function() {
                            i.$slide
                              .removeAttr("style")
                              .removeClass(
                                "fancybox-slide--next fancybox-slide--previous"
                              ),
                              i.pos === u.currPos &&
                                ((s.isMoved = !1), u.complete());
                          }
                        );
                      }))
                    : u.$refs.stage.children().removeAttr("style"),
                  s.isLoaded ? u.revealContent(s) : u.loadSlide(s),
                  u.preload("image"),
                  r.pos !== s.pos &&
                    ((c =
                      "fancybox-slide--" +
                      (r.pos > s.pos ? "next" : "previous")),
                    r.$slide.removeClass(
                      "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                    ),
                    (r.isComplete = !1),
                    e &&
                      (s.isMoved || s.opts.transitionEffect) &&
                      (s.isMoved
                        ? r.$slide.addClass(c)
                        : ((c =
                            "fancybox-animated " +
                            c +
                            " fancybox-fx-" +
                            s.opts.transitionEffect),
                          n.fancybox.animate(r.$slide, c, e, function() {
                            r.$slide.removeClass(c).removeAttr("style");
                          }))));
              }
            }
          },
          createSlide: function(t) {
            var e,
              i,
              o = this;
            return (
              (i = t % o.group.length),
              (i = i < 0 ? o.group.length + i : i),
              !o.slides[t] &&
                o.group[i] &&
                ((e = n('<div class="fancybox-slide"></div>').appendTo(
                  o.$refs.stage
                )),
                (o.slides[t] = n.extend(!0, {}, o.group[i], {
                  pos: t,
                  $slide: e,
                  isLoaded: !1
                })),
                o.updateSlide(o.slides[t])),
              o.slides[t]
            );
          },
          scaleToActual: function(t, e, i) {
            var o,
              s,
              r,
              a,
              l,
              c = this,
              u = c.current,
              h = u.$content,
              d = n.fancybox.getTranslate(u.$slide).width,
              p = n.fancybox.getTranslate(u.$slide).height,
              f = u.width,
              g = u.height;
            !c.isAnimating &&
              h &&
              "image" === u.type &&
              u.isLoaded &&
              !u.hasError &&
              (n.fancybox.stop(h),
              (c.isAnimating = !0),
              (t = void 0 === t ? 0.5 * d : t),
              (e = void 0 === e ? 0.5 * p : e),
              ((o = n.fancybox.getTranslate(h)).top -= n.fancybox.getTranslate(
                u.$slide
              ).top),
              (o.left -= n.fancybox.getTranslate(u.$slide).left),
              (a = f / o.width),
              (l = g / o.height),
              (s = 0.5 * d - 0.5 * f),
              (r = 0.5 * p - 0.5 * g),
              f > d &&
                ((s = o.left * a - (t * a - t)) > 0 && (s = 0),
                s < d - f && (s = d - f)),
              g > p &&
                ((r = o.top * l - (e * l - e)) > 0 && (r = 0),
                r < p - g && (r = p - g)),
              c.updateCursor(f, g),
              n.fancybox.animate(
                h,
                { top: r, left: s, scaleX: a, scaleY: l },
                i || 330,
                function() {
                  c.isAnimating = !1;
                }
              ),
              c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
          },
          scaleToFit: function(t) {
            var e,
              i = this,
              o = i.current,
              s = o.$content;
            !i.isAnimating &&
              s &&
              "image" == o.type &&
              o.isLoaded &&
              !o.hasError &&
              (n.fancybox.stop(s),
              (i.isAnimating = !0),
              (e = i.getFitPos(o)),
              i.updateCursor(e.width, e.height),
              n.fancybox.animate(
                s,
                {
                  top: e.top,
                  left: e.left,
                  scaleX: e.width / s.width(),
                  scaleY: e.height / s.height()
                },
                t || 330,
                function() {
                  i.isAnimating = !1;
                }
              ));
          },
          getFitPos: function(t) {
            var e,
              n,
              i,
              o,
              s,
              r = this,
              a = t.$content,
              l = t.width || t.opts.width,
              c = t.height || t.opts.height,
              u = {};
            return (
              !!(t.isLoaded && a && a.length) &&
              ((o = {
                top: parseInt(t.$slide.css("paddingTop"), 10),
                right: parseInt(t.$slide.css("paddingRight"), 10),
                bottom: parseInt(t.$slide.css("paddingBottom"), 10),
                left: parseInt(t.$slide.css("paddingLeft"), 10)
              }),
              (e = parseInt(r.$refs.stage.width(), 10) - (o.left + o.right)),
              (n = parseInt(r.$refs.stage.height(), 10) - (o.top + o.bottom)),
              (l && c) || ((l = e), (c = n)),
              (i = Math.min(1, e / l, n / c)),
              (l = Math.floor(i * l)),
              (c = Math.floor(i * c)),
              "image" === t.type
                ? ((u.top = Math.floor(0.5 * (n - c)) + o.top),
                  (u.left = Math.floor(0.5 * (e - l)) + o.left))
                : "video" === t.contentType &&
                  (c >
                  l /
                    (s =
                      t.opts.width && t.opts.height
                        ? l / c
                        : t.opts.ratio || 16 / 9)
                    ? (c = l / s)
                    : l > c * s && (l = c * s)),
              (u.width = l),
              (u.height = c),
              u)
            );
          },
          update: function() {
            var t = this;
            n.each(t.slides, function(e, n) {
              t.updateSlide(n);
            });
          },
          updateSlide: function(t, e) {
            var i = this,
              o = t && t.$content,
              s = t.width || t.opts.width,
              r = t.height || t.opts.height;
            o &&
              (s || r || "video" === t.contentType) &&
              !t.hasError &&
              (n.fancybox.stop(o),
              n.fancybox.setTranslate(o, i.getFitPos(t)),
              t.pos === i.currPos && ((i.isAnimating = !1), i.updateCursor())),
              t.$slide.trigger("refresh"),
              i.$refs.toolbar.toggleClass(
                "compensate-for-scrollbar",
                t.$slide.get(0).scrollHeight > t.$slide.get(0).clientHeight
              ),
              i.trigger("onUpdate", t);
          },
          centerSlide: function(t, e) {
            var i,
              o,
              s = this;
            s.current &&
              ((i = Math.round(t.$slide.width())),
              (o = t.pos - s.current.pos),
              n.fancybox.animate(
                t.$slide,
                { top: 0, left: o * i + o * t.opts.gutter, opacity: 1 },
                void 0 === e ? 0 : e,
                null,
                !1
              ));
          },
          updateCursor: function(t, e) {
            var i,
              o = this,
              s = o.current,
              r = o.$refs.container.removeClass(
                "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
              );
            s &&
              !o.isClosing &&
              ((i = o.isZoomable()),
              r.toggleClass("fancybox-is-zoomable", i),
              n("[data-fancybox-zoom]").prop("disabled", !i),
              i &&
              ("zoom" === s.opts.clickContent ||
                (n.isFunction(s.opts.clickContent) &&
                  "zoom" === s.opts.clickContent(s)))
                ? o.isScaledDown(t, e)
                  ? r.addClass("fancybox-can-zoomIn")
                  : s.opts.touch
                  ? r.addClass("fancybox-can-drag")
                  : r.addClass("fancybox-can-zoomOut")
                : s.opts.touch &&
                  "video" !== s.contentType &&
                  r.addClass("fancybox-can-drag"));
          },
          isZoomable: function() {
            var t,
              e = this,
              n = e.current;
            if (n && !e.isClosing && "image" === n.type && !n.hasError) {
              if (!n.isLoaded) return !0;
              if (
                ((t = e.getFitPos(n)), n.width > t.width || n.height > t.height)
              )
                return !0;
            }
            return !1;
          },
          isScaledDown: function(t, e) {
            var i = !1,
              o = this.current,
              s = o.$content;
            return (
              void 0 !== t && void 0 !== e
                ? (i = t < o.width && e < o.height)
                : s &&
                  (i =
                    (i = n.fancybox.getTranslate(s)).width < o.width &&
                    i.height < o.height),
              i
            );
          },
          canPan: function() {
            var t,
              e = this,
              n = !1,
              i = e.current;
            return (
              "image" === i.type &&
                (t = i.$content) &&
                !i.hasError &&
                ((n = e.getFitPos(i)),
                (n =
                  Math.abs(t.width() - n.width) > 1 ||
                  Math.abs(t.height() - n.height) > 1)),
              n
            );
          },
          loadSlide: function(t) {
            var e,
              i,
              o,
              s = this;
            if (!t.isLoading && !t.isLoaded) {
              switch (
                ((t.isLoading = !0),
                s.trigger("beforeLoad", t),
                (e = t.type),
                (i = t.$slide)
                  .off("refresh")
                  .trigger("onReset")
                  .addClass(t.opts.slideClass),
                e)
              ) {
                case "image":
                  s.setImage(t);
                  break;
                case "iframe":
                  s.setIframe(t);
                  break;
                case "html":
                  s.setContent(t, t.src || t.content);
                  break;
                case "video":
                  s.setContent(
                    t,
                    '<video class="fancybox-video" controls controlsList="nodownload"><source src="' +
                      t.src +
                      '" type="' +
                      t.opts.videoFormat +
                      "\">Your browser doesn't support HTML5 video</video"
                  );
                  break;
                case "inline":
                  n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                  break;
                case "ajax":
                  s.showLoading(t),
                    (o = n.ajax(
                      n.extend({}, t.opts.ajax.settings, {
                        url: t.src,
                        success: function(e, n) {
                          "success" === n && s.setContent(t, e);
                        },
                        error: function(e, n) {
                          e && "abort" !== n && s.setError(t);
                        }
                      })
                    )),
                    i.one("onReset", function() {
                      o.abort();
                    });
                  break;
                default:
                  s.setError(t);
              }
              return !0;
            }
          },
          setImage: function(e) {
            var i,
              o,
              s,
              r,
              a,
              l = this,
              c = e.opts.srcset || e.opts.image.srcset;
            if (
              ((e.timouts = setTimeout(function() {
                var t = e.$image;
                !e.isLoading ||
                  (t && t[0].complete) ||
                  e.hasError ||
                  l.showLoading(e);
              }, 350)),
              c)
            ) {
              (r = t.devicePixelRatio || 1),
                (a = t.innerWidth * r),
                (s = c.split(",").map(function(t) {
                  var e = {};
                  return (
                    t
                      .trim()
                      .split(/\s+/)
                      .forEach(function(t, n) {
                        var i = parseInt(t.substring(0, t.length - 1), 10);
                        if (0 === n) return (e.url = t);
                        i && ((e.value = i), (e.postfix = t[t.length - 1]));
                      }),
                    e
                  );
                })).sort(function(t, e) {
                  return t.value - e.value;
                });
              for (var u = 0; u < s.length; u++) {
                var h = s[u];
                if (
                  ("w" === h.postfix && h.value >= a) ||
                  ("x" === h.postfix && h.value >= r)
                ) {
                  o = h;
                  break;
                }
              }
              !o && s.length && (o = s[s.length - 1]),
                o &&
                  ((e.src = o.url),
                  e.width &&
                    e.height &&
                    "w" === o.postfix &&
                    ((e.height = (e.width / e.height) * o.value),
                    (e.width = o.value)),
                  (e.opts.srcset = c));
            }
            (e.$content = n('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(e.$slide.addClass("fancybox-slide--image"))),
              (i =
                e.opts.thumb ||
                (!(!e.opts.$thumb || !e.opts.$thumb.length) &&
                  e.opts.$thumb.attr("src"))),
              !1 !== e.opts.preload &&
                e.opts.width &&
                e.opts.height &&
                i &&
                ((e.width = e.opts.width),
                (e.height = e.opts.height),
                (e.$ghost = n("<img />")
                  .one("error", function() {
                    n(this).remove(), (e.$ghost = null);
                  })
                  .one("load", function() {
                    l.afterLoad(e);
                  })
                  .addClass("fancybox-image")
                  .appendTo(e.$content)
                  .attr("src", i))),
              l.setBigImage(e);
          },
          setBigImage: function(t) {
            var e = this,
              i = n("<img />");
            (t.$image = i
              .one("error", function() {
                e.setError(t);
              })
              .one("load", function() {
                var n;
                t.$ghost ||
                  (e.resolveImageSlideSize(
                    t,
                    this.naturalWidth,
                    this.naturalHeight
                  ),
                  e.afterLoad(t)),
                  t.timouts && (clearTimeout(t.timouts), (t.timouts = null)),
                  e.isClosing ||
                    (t.opts.srcset &&
                      (((n = t.opts.sizes) && "auto" !== n) ||
                        (n =
                          (t.width / t.height > 1 && r.width() / r.height() > 1
                            ? "100"
                            : Math.round((t.width / t.height) * 100)) + "vw"),
                      i.attr("sizes", n).attr("srcset", t.opts.srcset)),
                    t.$ghost &&
                      setTimeout(function() {
                        t.$ghost && !e.isClosing && t.$ghost.hide();
                      }, Math.min(300, Math.max(1e3, t.height / 1600))),
                    e.hideLoading(t));
              })
              .addClass("fancybox-image")
              .attr("src", t.src)
              .appendTo(t.$content)),
              (i[0].complete || "complete" == i[0].readyState) &&
              i[0].naturalWidth &&
              i[0].naturalHeight
                ? i.trigger("load")
                : i[0].error && i.trigger("error");
          },
          resolveImageSlideSize: function(t, e, n) {
            var i = parseInt(t.opts.width, 10),
              o = parseInt(t.opts.height, 10);
            (t.width = e),
              (t.height = n),
              i > 0 && ((t.width = i), (t.height = Math.floor((i * n) / e))),
              o > 0 && ((t.width = Math.floor((o * e) / n)), (t.height = o));
          },
          setIframe: function(t) {
            var e,
              i = this,
              o = t.opts.iframe,
              s = t.$slide;
            (t.$content = n(
              '<div class="fancybox-content' +
                (o.preload ? " fancybox-is-hidden" : "") +
                '"></div>'
            )
              .css(o.css)
              .appendTo(s)),
              s.addClass("fancybox-slide--" + t.contentType),
              (t.$iframe = e = n(
                o.tpl.replace(/\{rnd\}/g, new Date().getTime())
              )
                .attr(o.attr)
                .appendTo(t.$content)),
              o.preload
                ? (i.showLoading(t),
                  e.on("load.fb error.fb", function(e) {
                    (this.isReady = 1),
                      t.$slide.trigger("refresh"),
                      i.afterLoad(t);
                  }),
                  s.on("refresh.fb", function() {
                    var n,
                      i = t.$content,
                      s = o.css.width,
                      r = o.css.height;
                    if (1 === e[0].isReady) {
                      try {
                        n = e.contents().find("body");
                      } catch (t) {}
                      n &&
                        n.length &&
                        n.children().length &&
                        (i.css({ width: "", height: "" }),
                        void 0 === s &&
                          (s = Math.ceil(
                            Math.max(n[0].clientWidth, n.outerWidth(!0))
                          )),
                        s && i.width(s),
                        void 0 === r &&
                          (r = Math.ceil(
                            Math.max(n[0].clientHeight, n.outerHeight(!0))
                          )),
                        r && i.height(r)),
                        i.removeClass("fancybox-is-hidden");
                    }
                  }))
                : this.afterLoad(t),
              e.attr("src", t.src),
              s.one("onReset", function() {
                try {
                  n(this)
                    .find("iframe")
                    .hide()
                    .unbind()
                    .attr("src", "//about:blank");
                } catch (t) {}
                n(this)
                  .off("refresh.fb")
                  .empty(),
                  (t.isLoaded = !1);
              });
          },
          setContent: function(t, e) {
            var i = this;
            i.isClosing ||
              (i.hideLoading(t),
              t.$content && n.fancybox.stop(t.$content),
              t.$slide.empty(),
              c(e) && e.parent().length
                ? (e
                    .parent()
                    .parent(".fancybox-slide--inline")
                    .trigger("onReset"),
                  (t.$placeholder = n("<div>")
                    .hide()
                    .insertAfter(e)),
                  e.css("display", "inline-block"))
                : t.hasError ||
                  ("string" === n.type(e) &&
                    3 ===
                      (e = n("<div>")
                        .append(n.trim(e))
                        .contents())[0].nodeType &&
                    (e = n("<div>").html(e)),
                  t.opts.filter &&
                    (e = n("<div>")
                      .html(e)
                      .find(t.opts.filter))),
              t.$slide.one("onReset", function() {
                n(this)
                  .find("video,audio")
                  .trigger("pause"),
                  t.$placeholder &&
                    (t.$placeholder.after(e.hide()).remove(),
                    (t.$placeholder = null)),
                  t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                  t.hasError || (n(this).empty(), (t.isLoaded = !1));
              }),
              n(e).appendTo(t.$slide),
              n(e).is("video,audio") &&
                (n(e).addClass("fancybox-video"),
                n(e).wrap("<div></div>"),
                (t.contentType = "video"),
                (t.opts.width = t.opts.width || n(e).attr("width")),
                (t.opts.height = t.opts.height || n(e).attr("height"))),
              (t.$content = t.$slide
                .children()
                .filter("div,form,main,video,audio")
                .first()
                .addClass("fancybox-content")),
              t.$slide.addClass("fancybox-slide--" + t.contentType),
              this.afterLoad(t));
          },
          setError: function(t) {
            (t.hasError = !0),
              t.$slide
                .trigger("onReset")
                .removeClass("fancybox-slide--" + t.contentType)
                .addClass("fancybox-slide--error"),
              (t.contentType = "html"),
              this.setContent(t, this.translate(t, t.opts.errorTpl)),
              t.pos === this.currPos && (this.isAnimating = !1);
          },
          showLoading: function(t) {
            var e = this;
            (t = t || e.current) &&
              !t.$spinner &&
              (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(
                t.$slide
              ));
          },
          hideLoading: function(t) {
            var e = this;
            (t = t || e.current) &&
              t.$spinner &&
              (t.$spinner.remove(), delete t.$spinner);
          },
          afterLoad: function(t) {
            var e = this;
            e.isClosing ||
              ((t.isLoading = !1),
              (t.isLoaded = !0),
              e.trigger("afterLoad", t),
              e.hideLoading(t),
              t.pos === e.currPos && e.updateCursor(),
              !t.opts.smallBtn ||
                (t.$smallBtn && t.$smallBtn.length) ||
                (t.$smallBtn = n(
                  e.translate(t, t.opts.btnTpl.smallBtn)
                ).prependTo(t.$content)),
              t.opts.protect &&
                t.$content &&
                !t.hasError &&
                (t.$content.on("contextmenu.fb", function(t) {
                  return 2 == t.button && t.preventDefault(), !0;
                }),
                "image" === t.type &&
                  n('<div class="fancybox-spaceball"></div>').appendTo(
                    t.$content
                  )),
              e.revealContent(t));
          },
          revealContent: function(t) {
            var e,
              i,
              o,
              s,
              r = this,
              a = t.$slide,
              l = !1,
              c = !1;
            return (
              (e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"]),
              (o =
                t.opts[
                  r.firstRun ? "animationDuration" : "transitionDuration"
                ]),
              (o = parseInt(
                void 0 === t.forcedDuration ? o : t.forcedDuration,
                10
              )),
              t.pos === r.currPos &&
                (t.isComplete ? (e = !1) : (r.isAnimating = !0)),
              (!t.isMoved && t.pos === r.currPos && o) || (e = !1),
              "zoom" === e &&
                (t.pos === r.currPos &&
                o &&
                "image" === t.type &&
                !t.hasError &&
                (c = r.getThumbPos(t))
                  ? (l = r.getFitPos(t))
                  : (e = "fade")),
              "zoom" === e
                ? ((l.scaleX = l.width / c.width),
                  (l.scaleY = l.height / c.height),
                  "auto" == (s = t.opts.zoomOpacity) &&
                    (s =
                      Math.abs(t.width / t.height - c.width / c.height) > 0.1),
                  s && ((c.opacity = 0.1), (l.opacity = 1)),
                  n.fancybox.setTranslate(
                    t.$content.removeClass("fancybox-is-hidden"),
                    c
                  ),
                  d(t.$content),
                  void n.fancybox.animate(t.$content, l, o, function() {
                    (r.isAnimating = !1), r.complete();
                  }))
                : (r.updateSlide(t),
                  e
                    ? (n.fancybox.stop(a),
                      (i =
                        "fancybox-animated fancybox-slide--" +
                        (t.pos >= r.prevPos ? "next" : "previous") +
                        " fancybox-fx-" +
                        e),
                      a
                        .removeAttr("style")
                        .removeClass(
                          "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                        )
                        .addClass(i),
                      t.$content.removeClass("fancybox-is-hidden"),
                      d(a),
                      void n.fancybox.animate(
                        a,
                        "fancybox-slide--current",
                        o,
                        function(e) {
                          a.removeClass(i).removeAttr("style"),
                            t.pos === r.currPos && r.complete();
                        },
                        !0
                      ))
                    : (d(a),
                      t.$content.removeClass("fancybox-is-hidden"),
                      void (t.pos === r.currPos && r.complete())))
            );
          },
          getThumbPos: function(i) {
            var o,
              s = this,
              r = !1,
              a = i.opts.$thumb,
              l = a && a.length && a[0].ownerDocument === e ? a.offset() : 0;
            return (
              l &&
                (function(e) {
                  for (
                    var i = e[0], o = i.getBoundingClientRect(), s = [];
                    null !== i.parentElement;

                  )
                    ("hidden" !== n(i.parentElement).css("overflow") &&
                      "auto" !== n(i.parentElement).css("overflow")) ||
                      s.push(i.parentElement.getBoundingClientRect()),
                      (i = i.parentElement);
                  return (
                    s.every(function(t) {
                      var e =
                          Math.min(o.right, t.right) - Math.max(o.left, t.left),
                        n =
                          Math.min(o.bottom, t.bottom) - Math.max(o.top, t.top);
                      return e > 0 && n > 0;
                    }) &&
                    o.bottom > 0 &&
                    o.right > 0 &&
                    o.left < n(t).width() &&
                    o.top < n(t).height()
                  );
                })(a) &&
                ((o = s.$refs.stage.offset()),
                (r = {
                  top:
                    l.top - o.top + parseFloat(a.css("border-top-width") || 0),
                  left:
                    l.left -
                    o.left +
                    parseFloat(a.css("border-left-width") || 0),
                  width: a.width(),
                  height: a.height(),
                  scaleX: 1,
                  scaleY: 1
                })),
              r
            );
          },
          complete: function() {
            var t = this,
              i = t.current,
              o = {};
            !i.isMoved &&
              i.isLoaded &&
              (i.isComplete ||
                ((i.isComplete = !0),
                i.$slide.siblings().trigger("onReset"),
                t.preload("inline"),
                d(i.$slide),
                i.$slide.addClass("fancybox-slide--complete"),
                n.each(t.slides, function(e, i) {
                  i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1
                    ? (o[i.pos] = i)
                    : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
                }),
                (t.slides = o)),
              (t.isAnimating = !1),
              t.updateCursor(),
              t.trigger("afterShow"),
              i.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play"),
              (n(e.activeElement).is("[disabled]") ||
                (i.opts.autoFocus &&
                  "image" != i.type &&
                  "iframe" !== i.type)) &&
                t.focus());
          },
          preload: function(t) {
            var e = this,
              n = e.slides[e.currPos + 1],
              i = e.slides[e.currPos - 1];
            n && n.type === t && e.loadSlide(n),
              i && i.type === t && e.loadSlide(i);
          },
          focus: function() {
            var t,
              e = this.current;
            this.isClosing ||
              (e &&
                e.isComplete &&
                e.$content &&
                ((t = e.$content.find("input[autofocus]:enabled:visible:first"))
                  .length ||
                  (t = e.$content
                    .find("button,:input,[tabindex],a")
                    .filter(":enabled:visible:first")),
                (t = t && t.length ? t : e.$content).trigger("focus")));
          },
          activate: function() {
            var t = this;
            n(".fancybox-container").each(function() {
              var e = n(this).data("FancyBox");
              e &&
                e.id !== t.id &&
                !e.isClosing &&
                (e.trigger("onDeactivate"),
                e.removeEvents(),
                (e.isVisible = !1));
            }),
              (t.isVisible = !0),
              (t.current || t.isIdle) && (t.update(), t.updateControls()),
              t.trigger("onActivate"),
              t.addEvents();
          },
          close: function(t, e) {
            var i,
              o,
              s,
              r,
              a,
              l,
              c,
              p = this,
              f = p.current,
              g = function() {
                p.cleanUp(t);
              };
            return (
              !p.isClosing &&
              ((p.isClosing = !0),
              !1 === p.trigger("beforeClose", t)
                ? ((p.isClosing = !1),
                  u(function() {
                    p.update();
                  }),
                  !1)
                : (p.removeEvents(),
                  f.timouts && clearTimeout(f.timouts),
                  (s = f.$content),
                  (i = f.opts.animationEffect),
                  (o = n.isNumeric(e) ? e : i ? f.opts.animationDuration : 0),
                  f.$slide
                    .off(h)
                    .removeClass(
                      "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                    ),
                  f.$slide
                    .siblings()
                    .trigger("onReset")
                    .remove(),
                  o &&
                    p.$refs.container
                      .removeClass("fancybox-is-open")
                      .addClass("fancybox-is-closing"),
                  p.hideLoading(f),
                  p.hideControls(),
                  p.updateCursor(),
                  "zoom" !== i ||
                    (!0 !== t &&
                      s &&
                      o &&
                      "image" === f.type &&
                      !f.hasError &&
                      (c = p.getThumbPos(f))) ||
                    (i = "fade"),
                  "zoom" === i
                    ? (n.fancybox.stop(s),
                      (r = n.fancybox.getTranslate(s)),
                      (l = {
                        top: r.top,
                        left: r.left,
                        scaleX: r.width / c.width,
                        scaleY: r.height / c.height,
                        width: c.width,
                        height: c.height
                      }),
                      "auto" == (a = f.opts.zoomOpacity) &&
                        (a =
                          Math.abs(f.width / f.height - c.width / c.height) >
                          0.1),
                      a && (c.opacity = 0),
                      n.fancybox.setTranslate(s, l),
                      d(s),
                      n.fancybox.animate(s, c, o, g),
                      !0)
                    : (i && o
                        ? !0 === t
                          ? setTimeout(g, o)
                          : n.fancybox.animate(
                              f.$slide.removeClass("fancybox-slide--current"),
                              "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                                i,
                              o,
                              g
                            )
                        : g(),
                      !0)))
            );
          },
          cleanUp: function(t) {
            var e,
              i = this,
              o = n("body");
            i.current.$slide.trigger("onReset"),
              i.$refs.container.empty().remove(),
              i.trigger("afterClose", t),
              i.$lastFocus &&
                i.current.opts.backFocus &&
                i.$lastFocus.trigger("focus"),
              (i.current = null),
              (e = n.fancybox.getInstance())
                ? e.activate()
                : (o.removeClass("fancybox-active compensate-for-scrollbar"),
                  n("#fancybox-style-noscroll").remove());
          },
          trigger: function(t, e) {
            var i,
              o = Array.prototype.slice.call(arguments, 1),
              s = this,
              r = e && e.opts ? e : s.current;
            if (
              (r ? o.unshift(r) : (r = s),
              o.unshift(s),
              n.isFunction(r.opts[t]) && (i = r.opts[t].apply(r, o)),
              !1 === i)
            )
              return i;
            "afterClose" !== t && s.$refs
              ? s.$refs.container.trigger(t + ".fb", o)
              : a.trigger(t + ".fb", o);
          },
          updateControls: function(t) {
            var e = this,
              n = e.current,
              i = n.index,
              o = n.opts.caption,
              s = e.$refs.container,
              r = e.$refs.caption;
            n.$slide.trigger("refresh"),
              (e.$caption = o && o.length ? r.html(o) : null),
              e.isHiddenControls || e.isIdle || e.showControls(),
              s.find("[data-fancybox-count]").html(e.group.length),
              s.find("[data-fancybox-index]").html(i + 1),
              s
                .find("[data-fancybox-prev]")
                .toggleClass("disabled", !n.opts.loop && i <= 0),
              s
                .find("[data-fancybox-next]")
                .toggleClass(
                  "disabled",
                  !n.opts.loop && i >= e.group.length - 1
                ),
              "image" === n.type
                ? s
                    .find("[data-fancybox-zoom]")
                    .show()
                    .end()
                    .find("[data-fancybox-download]")
                    .attr("href", n.opts.image.src || n.src)
                    .show()
                : n.opts.toolbar &&
                  s
                    .find("[data-fancybox-download],[data-fancybox-zoom]")
                    .hide();
          },
          hideControls: function() {
            (this.isHiddenControls = !0),
              this.$refs.container.removeClass(
                "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
              );
          },
          showControls: function() {
            var t = this,
              e = t.current ? t.current.opts : t.opts,
              n = t.$refs.container;
            (t.isHiddenControls = !1),
              (t.idleSecondsCounter = 0),
              n
                .toggleClass(
                  "fancybox-show-toolbar",
                  !(!e.toolbar || !e.buttons)
                )
                .toggleClass(
                  "fancybox-show-infobar",
                  !!(e.infobar && t.group.length > 1)
                )
                .toggleClass(
                  "fancybox-show-nav",
                  !!(e.arrows && t.group.length > 1)
                )
                .toggleClass("fancybox-is-modal", !!e.modal),
              t.$caption
                ? n.addClass("fancybox-show-caption ")
                : n.removeClass("fancybox-show-caption");
          },
          toggleControls: function() {
            this.isHiddenControls ? this.showControls() : this.hideControls();
          }
        }),
          (n.fancybox = {
            version: "3.3.5",
            defaults: s,
            getInstance: function(t) {
              var e = n(
                  '.fancybox-container:not(".fancybox-is-closing"):last'
                ).data("FancyBox"),
                i = Array.prototype.slice.call(arguments, 1);
              return (
                e instanceof f &&
                ("string" === n.type(t)
                  ? e[t].apply(e, i)
                  : "function" === n.type(t) && t.apply(e, i),
                e)
              );
            },
            open: function(t, e, n) {
              return new f(t, e, n);
            },
            close: function(t) {
              var e = this.getInstance();
              e && (e.close(), !0 === t && this.close());
            },
            destroy: function() {
              this.close(!0), a.add("body").off("click.fb-start", "**");
            },
            isMobile:
              void 0 !== e.createTouch &&
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              ),
            use3d: (function() {
              var n = e.createElement("div");
              return (
                t.getComputedStyle &&
                t.getComputedStyle(n) &&
                t.getComputedStyle(n).getPropertyValue("transform") &&
                !(e.documentMode && e.documentMode < 11)
              );
            })(),
            getTranslate: function(t) {
              var e;
              return (
                !(!t || !t.length) &&
                ((e = t[0].getBoundingClientRect()),
                {
                  top: e.top || 0,
                  left: e.left || 0,
                  width: e.width,
                  height: e.height,
                  opacity: parseFloat(t.css("opacity"))
                })
              );
            },
            setTranslate: function(t, e) {
              var n = "",
                i = {};
              if (t && e)
                return (
                  (void 0 === e.left && void 0 === e.top) ||
                    ((n =
                      (void 0 === e.left ? t.position().left : e.left) +
                      "px, " +
                      (void 0 === e.top ? t.position().top : e.top) +
                      "px"),
                    (n = this.use3d
                      ? "translate3d(" + n + ", 0px)"
                      : "translate(" + n + ")")),
                  void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    (n =
                      (n.length ? n + " " : "") +
                      "scale(" +
                      e.scaleX +
                      ", " +
                      e.scaleY +
                      ")"),
                  n.length && (i.transform = n),
                  void 0 !== e.opacity && (i.opacity = e.opacity),
                  void 0 !== e.width && (i.width = e.width),
                  void 0 !== e.height && (i.height = e.height),
                  t.css(i)
                );
            },
            animate: function(t, e, i, o, s) {
              var r = !1;
              n.isFunction(i) && ((o = i), (i = null)),
                n.isPlainObject(e) || t.removeAttr("style"),
                n.fancybox.stop(t),
                t.on(h, function(i) {
                  (!i ||
                    !i.originalEvent ||
                    (t.is(i.originalEvent.target) &&
                      "z-index" != i.originalEvent.propertyName)) &&
                    (n.fancybox.stop(t),
                    r && n.fancybox.setTranslate(t, r),
                    n.isPlainObject(e)
                      ? !1 === s && t.removeAttr("style")
                      : !0 !== s && t.removeClass(e),
                    n.isFunction(o) && o(i));
                }),
                n.isNumeric(i) && t.css("transition-duration", i + "ms"),
                n.isPlainObject(e)
                  ? (void 0 !== e.scaleX &&
                      void 0 !== e.scaleY &&
                      ((r = n.extend({}, e, {
                        width: t.width() * e.scaleX,
                        height: t.height() * e.scaleY,
                        scaleX: 1,
                        scaleY: 1
                      })),
                      delete e.width,
                      delete e.height,
                      t.parent().hasClass("fancybox-slide--image") &&
                        t.parent().addClass("fancybox-is-scaling")),
                    n.fancybox.setTranslate(t, e))
                  : t.addClass(e),
                t.data(
                  "timer",
                  setTimeout(function() {
                    t.trigger("transitionend");
                  }, i + 16)
                );
            },
            stop: function(t) {
              t &&
                t.length &&
                (clearTimeout(t.data("timer")),
                t.off("transitionend").css("transition-duration", ""),
                t.parent().removeClass("fancybox-is-scaling"));
            }
          }),
          (n.fn.fancybox = function(t) {
            var e;
            return (
              (t = t || {}),
              (e = t.selector || !1)
                ? n("body")
                    .off("click.fb-start", e)
                    .on("click.fb-start", e, { options: t }, o)
                : this.off("click.fb-start").on(
                    "click.fb-start",
                    { items: this, options: t },
                    o
                  ),
              this
            );
          }),
          a.on("click.fb-start", "[data-fancybox]", o),
          a.on("click.fb-start", "[data-trigger]", function(t) {
            o(t, {
              $target: n(
                '[data-fancybox="' +
                  n(t.currentTarget).attr("data-trigger") +
                  '"]'
              ).eq(n(t.currentTarget).attr("data-index") || 0),
              $trigger: n(this)
            });
          });
      }
  })(window, document, window.jQuery || jQuery),
  (function(t) {
    "use strict";
    var e = function(e, n, i) {
        if (e)
          return (
            (i = i || ""),
            "object" === t.type(i) && (i = t.param(i, !0)),
            t.each(n, function(t, n) {
              e = e.replace("$" + t, n || "");
            }),
            i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
            e
          );
      },
      n = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2"
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function(t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          }
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function(t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          }
        }
      };
    t(document).on("objectNeedsType.fb", function(i, o, s) {
      var r,
        a,
        l,
        c,
        u,
        h,
        d,
        p = s.src || "",
        f = !1;
      (r = t.extend(!0, {}, n, s.opts.media)),
        t.each(r, function(n, i) {
          if ((l = p.match(i.matcher))) {
            if (
              ((f = i.type), (d = n), (h = {}), i.paramPlace && l[i.paramPlace])
            ) {
              "?" === (u = l[i.paramPlace])[0] && (u = u.substring(1)),
                (u = u.split("&"));
              for (var o = 0; o < u.length; ++o) {
                var r = u[o].split("=", 2);
                2 === r.length &&
                  (h[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
              }
            }
            return (
              (c = t.extend(!0, {}, i.params, s.opts[n], h)),
              (p =
                "function" === t.type(i.url)
                  ? i.url.call(this, l, c, s)
                  : e(i.url, l, c)),
              (a =
                "function" === t.type(i.thumb)
                  ? i.thumb.call(this, l, c, s)
                  : e(i.thumb, l)),
              "youtube" === n
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, i) {
                    return (
                      "&start=" +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                    );
                  }))
                : "vimeo" === n && (p = p.replace("&%23", "#")),
              !1
            );
          }
        }),
        f
          ? (s.opts.thumb ||
              (s.opts.$thumb && s.opts.$thumb.length) ||
              (s.opts.thumb = a),
            "iframe" === f &&
              (s.opts = t.extend(!0, s.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } }
              })),
            t.extend(s, {
              type: f,
              src: p,
              origSrc: s.src,
              contentSource: d,
              contentType:
                "image" === f
                  ? "image"
                  : "gmap_place" === d || "gmap_search" === d
                  ? "map"
                  : "video"
            }))
          : p && (s.type = s.opts.defaultType);
    });
  })(window.jQuery || jQuery),
  (function(t, e, n) {
    "use strict";
    var i =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        function(e) {
          return t.setTimeout(e, 1e3 / 60);
        },
      o =
        t.cancelAnimationFrame ||
        t.webkitCancelAnimationFrame ||
        t.mozCancelAnimationFrame ||
        t.oCancelAnimationFrame ||
        function(e) {
          t.clearTimeout(e);
        },
      s = function(e) {
        var n = [];
        e =
          (e = e.originalEvent || e || t.e).touches && e.touches.length
            ? e.touches
            : e.changedTouches && e.changedTouches.length
            ? e.changedTouches
            : [e];
        for (var i in e)
          e[i].pageX
            ? n.push({ x: e[i].pageX, y: e[i].pageY })
            : e[i].clientX && n.push({ x: e[i].clientX, y: e[i].clientY });
        return n;
      },
      r = function(t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      a = function(t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
          if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      l = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          i = t.getComputedStyle(e)["overflow-x"],
          o =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          s = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
        return o || s;
      },
      c = function(t) {
        for (var e = !1; ; ) {
          if ((e = l(t.get(0)))) break;
          if (
            !(t = t.parent()).length ||
            t.hasClass("fancybox-stage") ||
            t.is("body")
          )
            break;
        }
        return e;
      },
      u = function(t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (u.prototype.destroy = function() {
      this.$container.off(".fb.touch");
    }),
      (u.prototype.ontouchstart = function(i) {
        var o = this,
          l = n(i.target),
          u = o.instance,
          h = u.current,
          d = h.$content,
          p = "touchstart" === i.type;
        if (
          (p && o.$container.off("mousedown.fb.touch"),
          (!i.originalEvent || 2 != i.originalEvent.button) &&
            l.length &&
            !a(l) &&
            !a(l.parent()) &&
            (l.is("img") ||
              !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left)))
        ) {
          if (!h || u.isAnimating || u.isClosing)
            return i.stopPropagation(), void i.preventDefault();
          (o.realPoints = o.startPoints = s(i)),
            o.startPoints.length &&
              (i.stopPropagation(),
              (o.startEvent = i),
              (o.canTap = !0),
              (o.$target = l),
              (o.$content = d),
              (o.opts = h.opts.touch),
              (o.isPanning = !1),
              (o.isSwiping = !1),
              (o.isZooming = !1),
              (o.isScrolling = !1),
              (o.startTime = new Date().getTime()),
              (o.distanceX = o.distanceY = o.distance = 0),
              (o.canvasWidth = Math.round(h.$slide[0].clientWidth)),
              (o.canvasHeight = Math.round(h.$slide[0].clientHeight)),
              (o.contentLastPos = null),
              (o.contentStartPos = n.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
              }),
              (o.sliderStartPos =
                o.sliderLastPos || n.fancybox.getTranslate(h.$slide)),
              (o.stagePos = n.fancybox.getTranslate(u.$refs.stage)),
              (o.sliderStartPos.top -= o.stagePos.top),
              (o.sliderStartPos.left -= o.stagePos.left),
              (o.contentStartPos.top -= o.stagePos.top),
              (o.contentStartPos.left -= o.stagePos.left),
              n(e)
                .off(".fb.touch")
                .on(
                  p
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(o, "ontouchend")
                )
                .on(
                  p ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(o, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", o.onscroll, !0),
              (o.opts || u.canPan()) &&
              (l.is(o.$stage) || o.$stage.find(l).length)
                ? ((n.fancybox.isMobile && (c(l) || c(l.parent()))) ||
                    i.preventDefault(),
                  (1 === o.startPoints.length || h.hasError) &&
                    (o.instance.canPan()
                      ? (n.fancybox.stop(o.$content),
                        o.$content.css("transition-duration", ""),
                        (o.isPanning = !0))
                      : (o.isSwiping = !0),
                    o.$container.addClass("fancybox-controls--isGrabbing")),
                  2 === o.startPoints.length &&
                    "image" === h.type &&
                    (h.isLoaded || h.$ghost) &&
                    ((o.canTap = !1),
                    (o.isSwiping = !1),
                    (o.isPanning = !1),
                    (o.isZooming = !0),
                    n.fancybox.stop(o.$content),
                    o.$content.css("transition-duration", ""),
                    (o.centerPointStartX =
                      0.5 * (o.startPoints[0].x + o.startPoints[1].x) -
                      n(t).scrollLeft()),
                    (o.centerPointStartY =
                      0.5 * (o.startPoints[0].y + o.startPoints[1].y) -
                      n(t).scrollTop()),
                    (o.percentageOfImageAtPinchPointX =
                      (o.centerPointStartX - o.contentStartPos.left) /
                      o.contentStartPos.width),
                    (o.percentageOfImageAtPinchPointY =
                      (o.centerPointStartY - o.contentStartPos.top) /
                      o.contentStartPos.height),
                    (o.startDistanceBetweenFingers = r(
                      o.startPoints[0],
                      o.startPoints[1]
                    ))))
                : l.is(".fancybox-image") && i.preventDefault());
        }
      }),
      (u.prototype.onscroll = function(t) {
        var n = this;
        (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
      }),
      (u.prototype.ontouchmove = function(t) {
        var e = this,
          i = n(t.target);
        void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons
          ? e.isScrolling || (!i.is(e.$stage) && !e.$stage.find(i).length)
            ? (e.canTap = !1)
            : ((e.newPoints = s(t)),
              (e.opts || e.instance.canPan()) &&
                e.newPoints.length &&
                e.newPoints.length &&
                ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                (e.distanceX = r(e.newPoints[0], e.startPoints[0], "x")),
                (e.distanceY = r(e.newPoints[0], e.startPoints[0], "y")),
                (e.distance = r(e.newPoints[0], e.startPoints[0])),
                e.distance > 0 &&
                  (e.isSwiping
                    ? e.onSwipe(t)
                    : e.isPanning
                    ? e.onPan()
                    : e.isZooming && e.onZoom())))
          : e.ontouchend(t);
      }),
      (u.prototype.onSwipe = function(e) {
        var s,
          r = this,
          a = r.isSwiping,
          l = r.sliderStartPos.left || 0;
        if (!0 !=== a)
          "x" === a &&
            (r.distanceX > 0 &&
            (r.instance.group.length < 2 ||
              (0 === r.instance.current.index && !r.instance.current.opts.loop))
              ? (l += Math.pow(r.distanceX, 0.8))
              : r.distanceX < 0 &&
                (r.instance.group.length < 2 ||
                  (r.instance.current.index === r.instance.group.length - 1 &&
                    !r.instance.current.opts.loop))
              ? (l -= Math.pow(-r.distanceX, 0.8))
              : (l += r.distanceX)),
            (r.sliderLastPos = {
              top: "x" === a ? 0 : r.sliderStartPos.top + r.distanceY,
              left: l
            }),
            r.requestId && (o(r.requestId), (r.requestId = null)),
            (r.requestId = i(function() {
              r.sliderLastPos &&
                (n.each(r.instance.slides, function(t, e) {
                  var i = e.pos - r.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: r.sliderLastPos.top,
                    left:
                      r.sliderLastPos.left +
                      i * r.canvasWidth +
                      i * e.opts.gutter
                  });
                }),
                r.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(r.distance) > 10) {
          if (
            ((r.canTap = !1),
            r.instance.group.length < 2 && r.opts.vertical
              ? (r.isSwiping = "y")
              : r.instance.isDragging ||
                !1 === r.opts.vertical ||
                ("auto" === r.opts.vertical && n(t).width() > 800)
              ? (r.isSwiping = "x")
              : ((s = Math.abs(
                  (180 * Math.atan2(r.distanceY, r.distanceX)) / Math.PI
                )),
                (r.isSwiping = s > 45 && s < 135 ? "y" : "x")),
            (r.canTap = !1),
            "y" === r.isSwiping &&
              n.fancybox.isMobile &&
              (c(r.$target) || c(r.$target.parent())))
          )
            return void (r.isScrolling = !0);
          (r.instance.isDragging = r.isSwiping),
            (r.startPoints = r.newPoints),
            n.each(r.instance.slides, function(t, e) {
              n.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", ""),
                (e.inTransition = !1),
                e.pos === r.instance.current.pos &&
                  (r.sliderStartPos.left =
                    n.fancybox.getTranslate(e.$slide).left -
                    n.fancybox.getTranslate(r.instance.$refs.stage).left);
            }),
            r.instance.SlideShow &&
              r.instance.SlideShow.isActive &&
              r.instance.SlideShow.stop();
        }
      }),
      (u.prototype.onPan = function() {
        var t = this;
        r(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
          ? (t.startPoints = t.newPoints)
          : ((t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && (o(t.requestId), (t.requestId = null)),
            (t.requestId = i(function() {
              n.fancybox.setTranslate(t.$content, t.contentLastPos);
            })));
      }),
      (u.prototype.limitMovement = function() {
        var t,
          e,
          n,
          i,
          o,
          s,
          r = this,
          a = r.canvasWidth,
          l = r.canvasHeight,
          c = r.distanceX,
          u = r.distanceY,
          h = r.contentStartPos,
          d = h.left,
          p = h.top,
          f = h.width,
          g = h.height;
        return (
          (o = f > a ? d + c : d),
          (s = p + u),
          (t = Math.max(0, 0.5 * a - 0.5 * f)),
          (e = Math.max(0, 0.5 * l - 0.5 * g)),
          (n = Math.min(a - f, 0.5 * a - 0.5 * f)),
          (i = Math.min(l - g, 0.5 * l - 0.5 * g)),
          c > 0 && o > t && (o = t - 1 + Math.pow(-t + d + c, 0.8) || 0),
          c < 0 && o < n && (o = n + 1 - Math.pow(n - d - c, 0.8) || 0),
          u > 0 && s > e && (s = e - 1 + Math.pow(-e + p + u, 0.8) || 0),
          u < 0 && s < i && (s = i + 1 - Math.pow(i - p - u, 0.8) || 0),
          { top: s, left: o }
        );
      }),
      (u.prototype.limitPosition = function(t, e, n, i) {
        var o = this,
          s = o.canvasWidth,
          r = o.canvasHeight;
        return (
          (t =
            n > s
              ? (t = t > 0 ? 0 : t) < s - n
                ? s - n
                : t
              : Math.max(0, s / 2 - n / 2)),
          (e =
            i > r
              ? (e = e > 0 ? 0 : e) < r - i
                ? r - i
                : e
              : Math.max(0, r / 2 - i / 2)),
          { top: e, left: t }
        );
      }),
      (u.prototype.onZoom = function() {
        var e = this,
          s = e.contentStartPos,
          a = s.width,
          l = s.height,
          c = s.left,
          u = s.top,
          h = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
          d = Math.floor(a * h),
          p = Math.floor(l * h),
          f = (a - d) * e.percentageOfImageAtPinchPointX,
          g = (l - p) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          b = {
            top: u + (g + (v - e.centerPointStartY)),
            left: c + (f + y),
            scaleX: h,
            scaleY: h
          };
        (e.canTap = !1),
          (e.newWidth = d),
          (e.newHeight = p),
          (e.contentLastPos = b),
          e.requestId && (o(e.requestId), (e.requestId = null)),
          (e.requestId = i(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (u.prototype.ontouchend = function(t) {
        var i = this,
          r = Math.max(new Date().getTime() - i.startTime, 1),
          a = i.isSwiping,
          l = i.isPanning,
          c = i.isZooming,
          u = i.isScrolling;
        if (
          ((i.endPoints = s(t)),
          i.$container.removeClass("fancybox-controls--isGrabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", i.onscroll, !0),
          i.requestId && (o(i.requestId), (i.requestId = null)),
          (i.isSwiping = !1),
          (i.isPanning = !1),
          (i.isZooming = !1),
          (i.isScrolling = !1),
          (i.instance.isDragging = !1),
          i.canTap)
        )
          return i.onTap(t);
        (i.speed = 366),
          (i.velocityX = (i.distanceX / r) * 0.5),
          (i.velocityY = (i.distanceY / r) * 0.5),
          (i.speedX = Math.max(
            0.5 * i.speed,
            Math.min(1.5 * i.speed, (1 / Math.abs(i.velocityX)) * i.speed)
          )),
          l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(a, u);
      }),
      (u.prototype.endSwiping = function(t, e) {
        var i = this,
          o = !1,
          s = i.instance.group.length;
        (i.sliderLastPos = null),
          "y" === t && !e && Math.abs(i.distanceY) > 50
            ? (n.fancybox.animate(
                i.instance.current.$slide,
                {
                  top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
                  opacity: 0
                },
                200
              ),
              (o = i.instance.close(!0, 200)))
            : "x" === t && i.distanceX > 50 && s > 1
            ? (o = i.instance.previous(i.speedX))
            : "x" === t &&
              i.distanceX < -50 &&
              s > 1 &&
              (o = i.instance.next(i.speedX)),
          !1 !== o ||
            ("x" != t && "y" != t) ||
            (e || s < 2
              ? i.instance.centerSlide(i.instance.current, 150)
              : i.instance.jumpTo(i.instance.current.index)),
          i.$container.removeClass("fancybox-is-sliding");
      }),
      (u.prototype.endPanning = function() {
        var t,
          e,
          i,
          o = this;
        o.contentLastPos &&
          (!1 === o.opts.momentum
            ? ((t = o.contentLastPos.left), (e = o.contentLastPos.top))
            : ((t = o.contentLastPos.left + o.velocityX * o.speed),
              (e = o.contentLastPos.top + o.velocityY * o.speed)),
          ((i = o.limitPosition(
            t,
            e,
            o.contentStartPos.width,
            o.contentStartPos.height
          )).width = o.contentStartPos.width),
          (i.height = o.contentStartPos.height),
          n.fancybox.animate(o.$content, i, 330));
      }),
      (u.prototype.endZooming = function() {
        var t,
          e,
          i,
          o,
          s = this,
          r = s.instance.current,
          a = s.newWidth,
          l = s.newHeight;
        s.contentLastPos &&
          ((t = s.contentLastPos.left),
          (o = {
            top: (e = s.contentLastPos.top),
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
          }),
          n.fancybox.setTranslate(s.$content, o),
          a < s.canvasWidth && l < s.canvasHeight
            ? s.instance.scaleToFit(150)
            : a > r.width || l > r.height
            ? s.instance.scaleToActual(
                s.centerPointStartX,
                s.centerPointStartY,
                150
              )
            : ((i = s.limitPosition(t, e, a, l)),
              n.fancybox.setTranslate(
                s.$content,
                n.fancybox.getTranslate(s.$content)
              ),
              n.fancybox.animate(s.$content, i, 150)));
      }),
      (u.prototype.onTap = function(e) {
        var i,
          o = this,
          r = n(e.target),
          a = o.instance,
          l = a.current,
          c = (e && s(e)) || o.startPoints,
          u = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0,
          h = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0,
          d = function(t) {
            var i = l.opts[t];
            if ((n.isFunction(i) && (i = i.apply(a, [l, e])), i))
              switch (i) {
                case "close":
                  a.close(o.startEvent);
                  break;
                case "toggleControls":
                  a.toggleControls(!0);
                  break;
                case "next":
                  a.next();
                  break;
                case "nextOrClose":
                  a.group.length > 1 ? a.next() : a.close(o.startEvent);
                  break;
                case "zoom":
                  "image" === l.type &&
                    (l.isLoaded || l.$ghost) &&
                    (a.canPan()
                      ? a.scaleToFit()
                      : a.isScaledDown()
                      ? a.scaleToActual(u, h)
                      : a.group.length < 2 && a.close(o.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (r.is("img") || !(u > r[0].clientWidth + r.offset().left))
        ) {
          if (
            r.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            i = "Outside";
          else if (r.is(".fancybox-slide")) i = "Slide";
          else {
            if (
              !a.current.$content ||
              !a.current.$content
                .find(r)
                .addBack()
                .filter(r).length
            )
              return;
            i = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
              (o.tapped = null),
              Math.abs(u - o.tapX) > 50 || Math.abs(h - o.tapY) > 50)
            )
              return this;
            d("dblclick" + i);
          } else
            (o.tapX = u),
              (o.tapY = h),
              l.opts["dblclick" + i] &&
              l.opts["dblclick" + i] !== l.opts["click" + i]
                ? (o.tapped = setTimeout(function() {
                    (o.tapped = null), d("click" + i);
                  }, 500))
                : d("click" + i);
          return this;
        }
      }),
      n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
      });
  })(window, document, window.jQuery || jQuery),
  (function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
      },
      slideShow: { autoStart: !1, speed: 3e3 }
    });
    var n = function(t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function() {
        var t = this;
        (t.$button = t.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function() {
            t.toggle();
          })),
          (t.instance.group.length < 2 ||
            !t.instance.group[t.instance.currIndex].opts.slideShow) &&
            t.$button.hide();
      },
      set: function(t) {
        var e = this;
        e.instance &&
        e.instance.current &&
        (!0 === t ||
          e.instance.current.opts.loop ||
          e.instance.currIndex < e.instance.group.length - 1)
          ? (e.timer = setTimeout(function() {
              e.isActive &&
                e.instance.jumpTo(
                  (e.instance.currIndex + 1) % e.instance.group.length
                );
            }, e.instance.current.opts.slideShow.speed))
          : (e.stop(),
            (e.instance.idleSecondsCounter = 0),
            e.instance.showControls());
      },
      clear: function() {
        var t = this;
        clearTimeout(t.timer), (t.timer = null);
      },
      start: function() {
        var t = this,
          e = t.instance.current;
        e &&
          ((t.isActive = !0),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          t.set(!0));
      },
      stop: function() {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1);
      },
      toggle: function() {
        var t = this;
        t.isActive ? t.stop() : t.start();
      }
    }),
      e(t).on({
        "onInit.fb": function(t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function(t, e, n, i) {
          var o = e && e.SlideShow;
          i
            ? o && n.opts.slideShow.autoStart && o.start()
            : o && o.isActive && o.clear();
        },
        "afterShow.fb": function(t, e, n) {
          var i = e && e.SlideShow;
          i && i.isActive && i.set();
        },
        "afterKeydown.fb": function(n, i, o, s, r) {
          var a = i && i.SlideShow;
          !a ||
            !o.opts.slideShow ||
            (80 !== r && 32 !== r) ||
            e(t.activeElement).is("button,a,input") ||
            (s.preventDefault(), a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        }
      }),
      e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance(),
          i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set());
      });
  })(document, window.jQuery || jQuery),
  (function(t, e) {
    "use strict";
    var n = (function() {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror"
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror"
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror"
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror"
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError"
            ]
          ],
          n = {},
          i = 0;
        i < e.length;
        i++
      ) {
        var o = e[i];
        if (o && o[1] in t) {
          for (var s = 0; s < o.length; s++) n[e[0][s]] = o[s];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var i = {
        request: function(e) {
          (e = e || t.documentElement)[n.requestFullscreen](
            e.ALLOW_KEYBOARD_INPUT
          );
        },
        exit: function() {
          t[n.exitFullscreen]();
        },
        toggle: function(e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function() {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function() {
          return Boolean(t[n.fullscreenEnabled]);
        }
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'
        },
        fullScreen: { autoStart: !1 }
      }),
        e(t).on({
          "onInit.fb": function(t, e) {
            e && e.group[e.currIndex].opts.fullScreen
              ? (e.$refs.container.on(
                  "click.fb-fullscreen",
                  "[data-fancybox-fullscreen]",
                  function(t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle();
                  }
                ),
                e.opts.fullScreen &&
                  !0 === e.opts.fullScreen.autoStart &&
                  i.request(),
                (e.FullScreen = i))
              : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
          },
          "afterKeydown.fb": function(t, e, n, i, o) {
            e &&
              e.FullScreen &&
              70 === o &&
              (i.preventDefault(), e.FullScreen.toggle());
          },
          "beforeClose.fb": function(t, e) {
            e &&
              e.FullScreen &&
              e.$refs.container.hasClass("fancybox-is-fullscreen") &&
              i.exit();
          }
        }),
        e(t).on(n.fullscreenchange, function() {
          var t = i.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              "image" === n.current.type &&
              n.isAnimating &&
              (n.current.$content.css("transition", "none"),
              (n.isAnimating = !1),
              n.update(!0, !0, 0)),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t));
        });
    } else e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1);
  })(document, window.jQuery || jQuery),
  (function(t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        }
      },
      e.fancybox.defaults
    );
    var i = function(t) {
      this.init(t);
    };
    e.extend(i.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function(t) {
        var e,
          n,
          i = this;
        (i.instance = t),
          (t.Thumbs = i),
          (i.opts = t.group[t.currIndex].opts.thumbs),
          (e =
            (e = t.group[0]).opts.thumb ||
            (!(!e.opts.$thumb || !e.opts.$thumb.length) &&
              e.opts.$thumb.attr("src"))),
          t.group.length > 1 &&
            (n =
              (n = t.group[1]).opts.thumb ||
              (!(!n.opts.$thumb || !n.opts.$thumb.length) &&
                n.opts.$thumb.attr("src"))),
          (i.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]")),
          i.opts && e && n && e && n
            ? (i.$button.show().on("click", function() {
                i.toggle();
              }),
              (i.isActive = !0))
            : i.$button.hide();
      },
      create: function() {
        var t,
          i = this,
          o = i.instance,
          s = i.opts.parentEl,
          r = [];
        i.$grid ||
          ((i.$grid = e(
            '<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>'
          ).appendTo(
            o.$refs.container
              .find(s)
              .addBack()
              .filter(s)
          )),
          i.$grid.on("click", "li", function() {
            o.jumpTo(e(this).attr("data-index"));
          })),
          i.$list || (i.$list = e("<ul>").appendTo(i.$grid)),
          e.each(o.group, function(e, n) {
            (t =
              n.opts.thumb ||
              (n.opts.$thumb ? n.opts.$thumb.attr("src") : null)) ||
              "image" !== n.type ||
              (t = n.src),
              r.push(
                '<li data-index="' +
                  e +
                  '" tabindex="0" class="fancybox-thumbs-loading"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')" />'
                    : "") +
                  "></li>"
              );
          }),
          (i.$list[0].innerHTML = r.join("")),
          "x" === i.opts.axis &&
            i.$list.width(
              parseInt(i.$grid.css("padding-right"), 10) +
                o.group.length *
                  i.$list
                    .children()
                    .eq(0)
                    .outerWidth(!0)
            );
      },
      focus: function(t) {
        var e,
          n,
          i = this,
          o = i.$list,
          s = i.$grid;
        i.instance.current &&
          ((n = (e = o
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + i.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")).position()),
          "y" === i.opts.axis &&
          (n.top < 0 || n.top > o.height() - e.outerHeight())
            ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, t)
            : "x" === i.opts.axis &&
              (n.left < s.scrollLeft() ||
                n.left > s.scrollLeft() + (s.width() - e.outerWidth())) &&
              o
                .parent()
                .stop()
                .animate({ scrollLeft: n.left }, t));
      },
      update: function() {
        var t = this;
        t.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger("onThumbsShow"),
              t.focus(0))
            : t.$grid && t.instance.trigger("onThumbsHide"),
          t.instance.update();
      },
      hide: function() {
        (this.isVisible = !1), this.update();
      },
      show: function() {
        (this.isVisible = !0), this.update();
      },
      toggle: function() {
        (this.isVisible = !this.isVisible), this.update();
      }
    }),
      e(t).on({
        "onInit.fb": function(t, e) {
          var n;
          e &&
            !e.Thumbs &&
            (n = new i(e)).isActive &&
            !0 === n.opts.autoStart &&
            n.show();
        },
        "beforeShow.fb": function(t, e, n, i) {
          var o = e && e.Thumbs;
          o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
          var s = e && e.Thumbs;
          s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function(t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        }
      });
  })(document, window.jQuery || jQuery),
  (function(t, e) {
    "use strict";
    function n(t) {
      var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      return String(t).replace(/[&<>"'`=\/]/g, function(t) {
        return e[t];
      });
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
      },
      share: {
        url: function(t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl:
          '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href=""><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
      }
    }),
      e(t).on("click", "[data-fancybox-share]", function() {
        var t,
          i,
          o = e.fancybox.getInstance(),
          s = o.current || null;
        s &&
          ("function" === e.type(s.opts.share.url) &&
            (t = s.opts.share.url.apply(s, [o, s])),
          (i = s.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === s.type ? encodeURIComponent(s.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              o.$caption ? encodeURIComponent(o.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: o.translate(o, i),
            type: "html",
            opts: {
              animationEffect: !1,
              afterLoad: function(t, e) {
                o.$refs.container.one("beforeClose.fb", function() {
                  t.close(null, 0);
                }),
                  e.$content.find(".fancybox-share__links a").click(function() {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              }
            }
          }));
      });
  })(document, window.jQuery || jQuery),
  (function(t, e, n) {
    "use strict";
    function i() {
      var t = e.location.hash.substr(1),
        n = t.split("-"),
        i =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        o = n.join("-");
      return { hash: t, index: i < 1 ? 1 : i, gallery: o };
    }
    function o(t) {
      "" !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .trigger("click.fb-start");
    }
    function s(t) {
      var e, n;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") : "")) && n)
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        return (t + "").replace(e, function(t, e) {
          return e
            ? "\0" === t
              ? "�"
              : t.slice(0, -1) +
                "\\" +
                t.charCodeAt(t.length - 1).toString(16) +
                " "
            : "\\" + t;
        });
      }),
      n(function() {
        !1 !== n.fancybox.defaults.hash &&
          (n(t).on({
            "onInit.fb": function(t, e) {
              var n, o;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = i()),
                (o = s(e)) &&
                  n.gallery &&
                  o == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function(n, i, o, r) {
              var a;
              o &&
                !1 !== o.opts.hash &&
                (a = s(i)) &&
                ((i.currentHash =
                  a + (i.group.length > 1 ? "-" + (o.index + 1) : "")),
                e.location.hash !== "#" + i.currentHash &&
                  (i.origHash || (i.origHash = e.location.hash),
                  i.hashTimer && clearTimeout(i.hashTimer),
                  (i.hashTimer = setTimeout(function() {
                    "replaceState" in e.history
                      ? (e.history[r ? "pushState" : "replaceState"](
                          {},
                          t.title,
                          e.location.pathname +
                            e.location.search +
                            "#" +
                            i.currentHash
                        ),
                        r && (i.hasCreatedHistory = !0))
                      : (e.location.hash = i.currentHash),
                      (i.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function(n, i, o) {
              !1 !== o.opts.hash &&
                (s(i),
                i.currentHash && i.hasCreatedHistory
                  ? e.history.back()
                  : i.currentHash &&
                    ("replaceState" in e.history
                      ? e.history.replaceState(
                          {},
                          t.title,
                          e.location.pathname +
                            e.location.search +
                            (i.origHash || "")
                        )
                      : (e.location.hash = i.origHash)),
                (i.currentHash = null),
                clearTimeout(i.hashTimer));
            }
          }),
          n(e).on("hashchange.fb", function() {
            var t,
              e = i();
            n.each(
              n(".fancybox-container")
                .get()
                .reverse(),
              function(e, i) {
                var o = n(i).data("FancyBox");
                if (o.currentHash) return (t = o), !1;
              }
            ),
              t
                ? !t.currentHash ||
                  t.currentHash === e.gallery + "-" + e.index ||
                  (1 === e.index && t.currentHash === e.gallery) ||
                  ((t.currentHash = null), t.close())
                : "" !== e.gallery && o(e);
          }),
          setTimeout(function() {
            n.fancybox.getInstance() || o(i());
          }, 50));
      });
  })(document, window, window.jQuery || jQuery),
  (function(t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function(t, e, i) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function(t) {
            var i = e.current,
              o = new Date().getTime();
            e.group.length < 2 ||
              !1 === i.opts.wheel ||
              ("auto" === i.opts.wheel && "image" !== i.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              i.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                o - n < 250 ||
                  ((n = o),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      }
    });
  })(document, window.jQuery || jQuery),
  (function(t) {
    "function" === typeof define && define.amd
      ? define(["jquery"], function(e) {
          t(e, window, document);
        })
      : "object" === typeof module && module.exports
      ? (module.exports = t(require("jquery"), window, document))
      : t(jQuery, window, document);
  })(function(t, e, n, i) {
    "use strict";
    function o(e, n) {
      (this.telInput = t(e)),
        (this.options = t.extend({}, a, n)),
        (this.ns = "." + s + r++),
        (this.isGoodBrowser = Boolean(e.setSelectionRange)),
        (this.hadInitialPlaceholder = Boolean(t(e).attr("placeholder")));
    }
    var s = "intlTelInput",
      r = 1,
      a = {
        allowDropdown: !0,
        autoHideDialCode: !0,
        autoPlaceholder: "polite",
        customPlaceholder: null,
        dropdownContainer: "",
        excludeCountries: [],
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: "",
        initialCountry: "",
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: !1,
        utilsScript: ""
      },
      l = {
        UP: 38,
        DOWN: 40,
        ENTER: 13,
        ESC: 27,
        PLUS: 43,
        A: 65,
        Z: 90,
        SPACE: 32,
        TAB: 9
      },
      c = [
        "800",
        "822",
        "833",
        "844",
        "855",
        "866",
        "877",
        "880",
        "881",
        "882",
        "883",
        "884",
        "885",
        "886",
        "887",
        "888",
        "889"
      ];
    t(e).on("load", function() {
      t.fn[s].windowLoaded = !0;
    }),
      (o.prototype = {
        _init: function() {
          return (
            this.options.nationalMode && (this.options.autoHideDialCode = !1),
            this.options.separateDialCode &&
              (this.options.autoHideDialCode = this.options.nationalMode = !1),
            (this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )),
            this.isMobile &&
              (t("body").addClass("iti-mobile"),
              this.options.dropdownContainer ||
                (this.options.dropdownContainer = "body")),
            (this.autoCountryDeferred = new t.Deferred()),
            (this.utilsScriptDeferred = new t.Deferred()),
            (this.selectedCountryData = {}),
            this._processCountryData(),
            this._generateMarkup(),
            this._setInitialState(),
            this._initListeners(),
            this._initRequests(),
            [this.autoCountryDeferred, this.utilsScriptDeferred]
          );
        },
        _processCountryData: function() {
          this._processAllCountries(),
            this._processCountryCodes(),
            this._processPreferredCountries();
        },
        _addCountryCode: function(t, e, n) {
          e in this.countryCodes || (this.countryCodes[e] = []);
          var i = n || 0;
          this.countryCodes[e][i] = t;
        },
        _processAllCountries: function() {
          if (this.options.onlyCountries.length) {
            var t = this.options.onlyCountries.map(function(t) {
              return t.toLowerCase();
            });
            this.countries = u.filter(function(e) {
              return t.indexOf(e.iso2) > -1;
            });
          } else if (this.options.excludeCountries.length) {
            var e = this.options.excludeCountries.map(function(t) {
              return t.toLowerCase();
            });
            this.countries = u.filter(function(t) {
              return -1 === e.indexOf(t.iso2);
            });
          } else this.countries = u;
        },
        _processCountryCodes: function() {
          this.countryCodes = {};
          for (var t = 0; t < this.countries.length; t++) {
            var e = this.countries[t];
            if (
              (this._addCountryCode(e.iso2, e.dialCode, e.priority),
              e.areaCodes)
            )
              for (var n = 0; n < e.areaCodes.length; n++)
                this._addCountryCode(e.iso2, e.dialCode + e.areaCodes[n]);
          }
        },
        _processPreferredCountries: function() {
          this.preferredCountries = [];
          for (var t = 0; t < this.options.preferredCountries.length; t++) {
            var e = this.options.preferredCountries[t].toLowerCase(),
              n = this._getCountryData(e, !1, !0);
            n && this.preferredCountries.push(n);
          }
        },
        _generateMarkup: function() {
          this.telInput.attr("autocomplete", "off");
          var e = "intl-tel-input";
          this.options.allowDropdown && (e += " allow-dropdown"),
            this.options.separateDialCode && (e += " separate-dial-code"),
            this.telInput.wrap(t("<div>", { class: e })),
            (this.flagsContainer = t("<div>", {
              class: "flag-container"
            }).insertBefore(this.telInput));
          var n = t("<div>", { class: "selected-flag" });
          n.appendTo(this.flagsContainer),
            (this.selectedFlagInner = t("<div>", {
              class: "iti-flag"
            }).appendTo(n)),
            this.options.separateDialCode &&
              (this.selectedDialCode = t("<div>", {
                class: "selected-dial-code"
              }).appendTo(n)),
            this.options.allowDropdown
              ? (n.attr("tabindex", "0"),
                t("<div>", { class: "iti-arrow" }).appendTo(n),
                (this.countryList = t("<ul>", { class: "country-list hide" })),
                this.preferredCountries.length &&
                  (this._appendListItems(this.preferredCountries, "preferred"),
                  t("<li>", { class: "divider" }).appendTo(this.countryList)),
                this._appendListItems(this.countries, ""),
                (this.countryListItems = this.countryList.children(".country")),
                this.options.dropdownContainer
                  ? (this.dropdown = t("<div>", {
                      class: "intl-tel-input iti-container"
                    }).append(this.countryList))
                  : this.countryList.appendTo(this.flagsContainer))
              : (this.countryListItems = t()),
            this.options.hiddenInput &&
              (this.hiddenInput = t("<input>", {
                type: "hidden",
                name: this.options.hiddenInput
              }).insertBefore(this.telInput));
        },
        _appendListItems: function(t, e) {
          for (var n = "", i = 0; i < t.length; i++) {
            var o = t[i];
            (n +=
              "<li class='country " +
              e +
              "' data-dial-code='" +
              o.dialCode +
              "' data-country-code='" +
              o.iso2 +
              "'>"),
              (n +=
                "<div class='flag-box'><div class='iti-flag " +
                o.iso2 +
                "'></div></div>"),
              (n += "<span class='country-name'>" + o.name + "</span>"),
              (n += "<span class='dial-code'>+" + o.dialCode + "</span>"),
              (n += "</li>");
          }
          this.countryList.append(n);
        },
        _setInitialState: function() {
          var t = this.telInput.val();
          this._getDialCode(t) &&
          (!this._isRegionlessNanp(t) ||
            (this.options.nationalMode && !this.options.initialCountry))
            ? this._updateFlagFromNumber(t)
            : "auto" !== this.options.initialCountry &&
              (this.options.initialCountry
                ? this._setFlag(this.options.initialCountry.toLowerCase())
                : ((this.defaultCountry = this.preferredCountries.length
                    ? this.preferredCountries[0].iso2
                    : this.countries[0].iso2),
                  t || this._setFlag(this.defaultCountry)),
              t ||
                this.options.nationalMode ||
                this.options.autoHideDialCode ||
                this.options.separateDialCode ||
                this.telInput.val("+" + this.selectedCountryData.dialCode)),
            t && this._updateValFromNumber(t);
        },
        _initListeners: function() {
          this._initKeyListeners(),
            this.options.autoHideDialCode && this._initFocusListeners(),
            this.options.allowDropdown && this._initDropdownListeners(),
            this.hiddenInput && this._initHiddenInputListener();
        },
        _initHiddenInputListener: function() {
          var t = this,
            e = this.telInput.closest("form");
          e.length &&
            e.submit(function() {
              t.hiddenInput.val(t.getNumber());
            });
        },
        _initDropdownListeners: function() {
          var t = this,
            e = this.telInput.closest("label");
          e.length &&
            e.on("click" + this.ns, function(e) {
              t.countryList.hasClass("hide")
                ? t.telInput.focus()
                : e.preventDefault();
            }),
            this.selectedFlagInner.parent().on("click" + this.ns, function(e) {
              !t.countryList.hasClass("hide") ||
                t.telInput.prop("disabled") ||
                t.telInput.prop("readonly") ||
                t._showDropdown();
            }),
            this.flagsContainer.on("keydown" + t.ns, function(e) {
              !t.countryList.hasClass("hide") ||
                (e.which != l.UP &&
                  e.which != l.DOWN &&
                  e.which != l.SPACE &&
                  e.which != l.ENTER) ||
                (e.preventDefault(), e.stopPropagation(), t._showDropdown()),
                e.which == l.TAB && t._closeDropdown();
            });
        },
        _initRequests: function() {
          var n = this;
          this.options.utilsScript
            ? t.fn[s].windowLoaded
              ? t.fn[s].loadUtils(
                  this.options.utilsScript,
                  this.utilsScriptDeferred
                )
              : t(e).on("load", function() {
                  t.fn[s].loadUtils(
                    n.options.utilsScript,
                    n.utilsScriptDeferred
                  );
                })
            : this.utilsScriptDeferred.resolve(),
            "auto" === this.options.initialCountry
              ? this._loadAutoCountry()
              : this.autoCountryDeferred.resolve();
        },
        _loadAutoCountry: function() {
          t.fn[s].autoCountry
            ? this.handleAutoCountry()
            : t.fn[s].startedLoadingAutoCountry ||
              ((t.fn[s].startedLoadingAutoCountry = !0),
              "function" == typeof this.options.geoIpLookup &&
                this.options.geoIpLookup(function(e) {
                  (t.fn[s].autoCountry = e.toLowerCase()),
                    setTimeout(function() {
                      t(".intl-tel-input input").intlTelInput(
                        "handleAutoCountry"
                      );
                    });
                }));
        },
        _initKeyListeners: function() {
          var t = this;
          this.telInput.on("keyup" + this.ns, function() {
            t._updateFlagFromNumber(t.telInput.val()) &&
              t._triggerCountryChange();
          }),
            this.telInput.on("cut" + this.ns + " paste" + this.ns, function() {
              setTimeout(function() {
                t._updateFlagFromNumber(t.telInput.val()) &&
                  t._triggerCountryChange();
              });
            });
        },
        _cap: function(t) {
          var e = this.telInput.attr("maxlength");
          return e && t.length > e ? t.substr(0, e) : t;
        },
        _initFocusListeners: function() {
          var e = this;
          this.telInput.on("mousedown" + this.ns, function(t) {
            e.telInput.is(":focus") ||
              e.telInput.val() ||
              (t.preventDefault(), e.telInput.focus());
          }),
            this.telInput.on("focus" + this.ns, function(t) {
              e.telInput.val() ||
                e.telInput.prop("readonly") ||
                !e.selectedCountryData.dialCode ||
                (e.telInput.val("+" + e.selectedCountryData.dialCode),
                e.telInput.one("keypress.plus" + e.ns, function(t) {
                  t.which == l.PLUS && e.telInput.val("");
                }),
                setTimeout(function() {
                  var t = e.telInput[0];
                  if (e.isGoodBrowser) {
                    var n = e.telInput.val().length;
                    t.setSelectionRange(n, n);
                  }
                }));
            });
          var n = this.telInput.prop("form");
          n &&
            t(n).on("submit" + this.ns, function() {
              e._removeEmptyDialCode();
            }),
            this.telInput.on("blur" + this.ns, function() {
              e._removeEmptyDialCode();
            });
        },
        _removeEmptyDialCode: function() {
          var t = this.telInput.val();
          if ("+" === t.charAt(0)) {
            var e = this._getNumeric(t);
            (e && this.selectedCountryData.dialCode != e) ||
              this.telInput.val("");
          }
          this.telInput.off("keypress.plus" + this.ns);
        },
        _getNumeric: function(t) {
          return t.replace(/\D/g, "");
        },
        _showDropdown: function() {
          this._setDropdownPosition();
          var t = this.countryList.children(".active");
          t.length && (this._highlightListItem(t), this._scrollTo(t)),
            this._bindDropdownListeners(),
            this.selectedFlagInner.children(".iti-arrow").addClass("up"),
            this.telInput.trigger("open:countrydropdown");
        },
        _setDropdownPosition: function() {
          var n = this;
          if (
            (this.options.dropdownContainer &&
              this.dropdown.appendTo(this.options.dropdownContainer),
            (this.dropdownHeight = this.countryList
              .removeClass("hide")
              .outerHeight()),
            !this.isMobile)
          ) {
            var i = this.telInput.offset(),
              o = i.top,
              s = t(e).scrollTop(),
              r =
                o + this.telInput.outerHeight() + this.dropdownHeight <
                s + t(e).height(),
              a = o - this.dropdownHeight > s;
            if (
              (this.countryList.toggleClass("dropup", !r && a),
              this.options.dropdownContainer)
            ) {
              var l = !r && a ? 0 : this.telInput.innerHeight();
              this.dropdown.css({ top: o + l, left: i.left }),
                t(e).on("scroll" + this.ns, function() {
                  n._closeDropdown();
                });
            }
          }
        },
        _bindDropdownListeners: function() {
          var e = this;
          this.countryList.on("mouseover" + this.ns, ".country", function(n) {
            e._highlightListItem(t(this));
          }),
            this.countryList.on("click" + this.ns, ".country", function(n) {
              e._selectListItem(t(this));
            });
          var i = !0;
          t("html").on("click" + this.ns, function(t) {
            i || e._closeDropdown(), (i = !1);
          });
          var o = "",
            s = null;
          t(n).on("keydown" + this.ns, function(t) {
            t.preventDefault(),
              t.which === l.UP || t.which === l.DOWN
                ? e._handleUpDownKey(t.which)
                : t.which === l.ENTER
                ? e._handleEnterKey()
                : t.which === l.ESC
                ? e._closeDropdown()
                : ((t.which >= l.A && t.which <= l.Z) || t.which === l.SPACE) &&
                  (s && clearTimeout(s),
                  (o += String.fromCharCode(t.which)),
                  e._searchForCountry(o),
                  (s = setTimeout(function() {
                    o = "";
                  }, 1e3)));
          });
        },
        _handleUpDownKey: function(t) {
          var e = this.countryList.children(".highlight").first(),
            n = t === l.UP ? e.prev() : e.next();
          n.length &&
            (n.hasClass("divider") && (n = t === l.UP ? n.prev() : n.next()),
            this._highlightListItem(n),
            this._scrollTo(n));
        },
        _handleEnterKey: function() {
          var t = this.countryList.children(".highlight").first();
          t.length && this._selectListItem(t);
        },
        _searchForCountry: function(t) {
          for (var e = 0; e < this.countries.length; e++)
            if (this._startsWith(this.countries[e].name, t)) {
              var n = this.countryList
                .children("[data-country-code=" + this.countries[e].iso2 + "]")
                .not(".preferred");
              this._highlightListItem(n), this._scrollTo(n, !0);
              break;
            }
        },
        _startsWith: function(t, e) {
          return t.substr(0, e.length).toUpperCase() === e;
        },
        _updateValFromNumber: function(t) {
          if (
            this.options.formatOnDisplay &&
            e.intlTelInputUtils &&
            this.selectedCountryData
          ) {
            var n =
              this.options.separateDialCode ||
              (!this.options.nationalMode && "+" === t.charAt(0))
                ? intlTelInputUtils.numberFormat.INTERNATIONAL
                : intlTelInputUtils.numberFormat.NATIONAL;
            t = intlTelInputUtils.formatNumber(
              t,
              this.selectedCountryData.iso2,
              n
            );
          }
          (t = this._beforeSetNumber(t)), this.telInput.val(t);
        },
        _updateFlagFromNumber: function(e) {
          e &&
            this.options.nationalMode &&
            "1" === this.selectedCountryData.dialCode &&
            "+" != e.charAt(0) &&
            ("1" != e.charAt(0) && (e = "1" + e), (e = "+" + e));
          var n = this._getDialCode(e),
            i = null,
            o = this._getNumeric(e);
          if (n) {
            var s = this.countryCodes[this._getNumeric(n)],
              r = t.inArray(this.selectedCountryData.iso2, s) > -1,
              a = "+1" === n && o.length >= 4;
            if (
              (!("1" === this.selectedCountryData.dialCode) ||
                !this._isRegionlessNanp(o)) &&
              (!r || a)
            )
              for (var l = 0; l < s.length; l++)
                if (s[l]) {
                  i = s[l];
                  break;
                }
          } else
            "+" === e.charAt(0) && o.length
              ? (i = "")
              : (e && "+" != e) || (i = this.defaultCountry);
          return null !=== i && this._setFlag(i);
        },
        _isRegionlessNanp: function(e) {
          var n = this._getNumeric(e);
          if ("1" === n.charAt(0)) {
            var i = n.substr(1, 3);
            return t.inArray(i, c) > -1;
          }
          return !1;
        },
        _highlightListItem: function(t) {
          this.countryListItems.removeClass("highlight"),
            t.addClass("highlight");
        },
        _getCountryData: function(t, e, n) {
          for (var i = e ? u : this.countries, o = 0; o < i.length; o++)
            if (i[o].iso2 === t) return i[o];
          if (n) return null;
          throw new Error("No country data for '" + t + "'");
        },
        _setFlag: function(t) {
          var e = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
          (this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}),
            this.selectedCountryData.iso2 &&
              (this.defaultCountry = this.selectedCountryData.iso2),
            this.selectedFlagInner.attr("class", "iti-flag " + t);
          var n = t
            ? this.selectedCountryData.name +
              ": +" +
              this.selectedCountryData.dialCode
            : "Unknown";
          if (
            (this.selectedFlagInner.parent().attr("title", n),
            this.options.separateDialCode)
          ) {
            var i = this.selectedCountryData.dialCode
                ? "+" + this.selectedCountryData.dialCode
                : "",
              o = this.telInput.parent();
            e.dialCode && o.removeClass("iti-sdc-" + (e.dialCode.length + 1)),
              i && o.addClass("iti-sdc-" + i.length),
              this.selectedDialCode.text(i);
          }
          return (
            this._updatePlaceholder(),
            this.countryListItems.removeClass("active"),
            t &&
              this.countryListItems
                .find(".iti-flag." + t)
                .first()
                .closest(".country")
                .addClass("active"),
            e.iso2 !== t
          );
        },
        _updatePlaceholder: function() {
          var t =
            "aggressive" === this.options.autoPlaceholder ||
            (!this.hadInitialPlaceholder &&
              (!0 === this.options.autoPlaceholder ||
                "polite" === this.options.autoPlaceholder));
          if (e.intlTelInputUtils && t) {
            var n =
                intlTelInputUtils.numberType[
                  this.options.placeholderNumberType
                ],
              i = this.selectedCountryData.iso2
                ? intlTelInputUtils.getExampleNumber(
                    this.selectedCountryData.iso2,
                    this.options.nationalMode,
                    n
                  )
                : "";
            (i = this._beforeSetNumber(i)),
              "function" === typeof this.options.customPlaceholder &&
                (i = this.options.customPlaceholder(
                  i,
                  this.selectedCountryData
                )),
              this.telInput.attr("placeholder", i);
          }
        },
        _selectListItem: function(t) {
          var e = this._setFlag(t.attr("data-country-code"));
          if (
            (this._closeDropdown(),
            this._updateDialCode(t.attr("data-dial-code"), !0),
            this.telInput.focus(),
            this.isGoodBrowser)
          ) {
            var n = this.telInput.val().length;
            this.telInput[0].setSelectionRange(n, n);
          }
          e && this._triggerCountryChange();
        },
        _closeDropdown: function() {
          this.countryList.addClass("hide"),
            this.selectedFlagInner.children(".iti-arrow").removeClass("up"),
            t(n).off(this.ns),
            t("html").off(this.ns),
            this.countryList.off(this.ns),
            this.options.dropdownContainer &&
              (this.isMobile || t(e).off("scroll" + this.ns),
              this.dropdown.detach()),
            this.telInput.trigger("close:countrydropdown");
        },
        _scrollTo: function(t, e) {
          var n = this.countryList,
            i = n.height(),
            o = n.offset().top,
            s = o + i,
            r = t.outerHeight(),
            a = t.offset().top,
            l = a + r,
            c = a - o + n.scrollTop(),
            u = i / 2 - r / 2;
          if (a < o) e && (c -= u), n.scrollTop(c);
          else if (l > s) {
            e && (c += u);
            var h = i - r;
            n.scrollTop(c - h);
          }
        },
        _updateDialCode: function(t, e) {
          var n,
            i = this.telInput.val();
          if (((t = "+" + t), "+" === i.charAt(0))) {
            var o = this._getDialCode(i);
            n = o ? i.replace(o, t) : t;
          } else {
            if (this.options.nationalMode || this.options.separateDialCode)
              return;
            if (i) n = t + i;
            else {
              if (!e && this.options.autoHideDialCode) return;
              n = t;
            }
          }
          this.telInput.val(n);
        },
        _getDialCode: function(e) {
          var n = "";
          if ("+" === e.charAt(0))
            for (var i = "", o = 0; o < e.length; o++) {
              var s = e.charAt(o);
              if (
                t.isNumeric(s) &&
                ((i += s),
                this.countryCodes[i] && (n = e.substr(0, o + 1)),
                4 === i.length)
              )
                break;
            }
          return n;
        },
        _getFullNumber: function() {
          var e = t.trim(this.telInput.val()),
            n = this.selectedCountryData.dialCode,
            i = this._getNumeric(e),
            o = "1" === i.charAt(0) ? i : "1" + i;
          return (
            (this.options.separateDialCode
              ? "+" + n
              : "+" != e.charAt(0) &&
                "1" != e.charAt(0) &&
                n &&
                "1" === n.charAt(0) &&
                4 === n.length &&
                n != o.substr(0, 4)
              ? n.substr(1)
              : "") + e
          );
        },
        _beforeSetNumber: function(t) {
          if (this.options.separateDialCode) {
            var e = this._getDialCode(t);
            if (e) {
              null !== this.selectedCountryData.areaCodes &&
                (e = "+" + this.selectedCountryData.dialCode);
              var n =
                " " === t[e.length] || "-" === t[e.length]
                  ? e.length + 1
                  : e.length;
              t = t.substr(n);
            }
          }
          return this._cap(t);
        },
        _triggerCountryChange: function() {
          this.telInput.trigger("countrychange", this.selectedCountryData);
        },
        handleAutoCountry: function() {
          "auto" === this.options.initialCountry &&
            ((this.defaultCountry = t.fn[s].autoCountry),
            this.telInput.val() || this.setCountry(this.defaultCountry),
            this.autoCountryDeferred.resolve());
        },
        handleUtils: function() {
          e.intlTelInputUtils &&
            (this.telInput.val() &&
              this._updateValFromNumber(this.telInput.val()),
            this._updatePlaceholder()),
            this.utilsScriptDeferred.resolve();
        },
        destroy: function() {
          if (
            (this.allowDropdown &&
              (this._closeDropdown(),
              this.selectedFlagInner.parent().off(this.ns),
              this.telInput.closest("label").off(this.ns)),
            this.options.autoHideDialCode)
          ) {
            var e = this.telInput.prop("form");
            e && t(e).off(this.ns);
          }
          this.telInput.off(this.ns),
            this.telInput
              .parent()
              .before(this.telInput)
              .remove();
        },
        getExtension: function() {
          return e.intlTelInputUtils
            ? intlTelInputUtils.getExtension(
                this._getFullNumber(),
                this.selectedCountryData.iso2
              )
            : "";
        },
        getNumber: function(t) {
          return e.intlTelInputUtils
            ? intlTelInputUtils.formatNumber(
                this._getFullNumber(),
                this.selectedCountryData.iso2,
                t
              )
            : "";
        },
        getNumberType: function() {
          return e.intlTelInputUtils
            ? intlTelInputUtils.getNumberType(
                this._getFullNumber(),
                this.selectedCountryData.iso2
              )
            : -99;
        },
        getSelectedCountryData: function() {
          return this.selectedCountryData;
        },
        getValidationError: function() {
          return e.intlTelInputUtils
            ? intlTelInputUtils.getValidationError(
                this._getFullNumber(),
                this.selectedCountryData.iso2
              )
            : -99;
        },
        isValidNumber: function() {
          var n = t.trim(this._getFullNumber()),
            i = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
          return e.intlTelInputUtils
            ? intlTelInputUtils.isValidNumber(n, i)
            : null;
        },
        setCountry: function(t) {
          (t = t.toLowerCase()),
            this.selectedFlagInner.hasClass(t) ||
              (this._setFlag(t),
              this._updateDialCode(this.selectedCountryData.dialCode, !1),
              this._triggerCountryChange());
        },
        setNumber: function(t) {
          var e = this._updateFlagFromNumber(t);
          this._updateValFromNumber(t), e && this._triggerCountryChange();
        },
        setPlaceholderNumberType: function(t) {
          (this.options.placeholderNumberType = t), this._updatePlaceholder();
        }
      }),
      (t.fn[s] = function(e) {
        var n = arguments;
        if (e === i || "object" == typeof e) {
          var r = [];
          return (
            this.each(function() {
              if (!t.data(this, "plugin_" + s)) {
                var n = new o(this, e),
                  i = n._init();
                r.push(i[0]), r.push(i[1]), t.data(this, "plugin_" + s, n);
              }
            }),
            t.when.apply(null, r)
          );
        }
        if ("string" ===typeof e && "_" !== e[0]) {
          var a;
          return (
            this.each(function() {
              var i = t.data(this, "plugin_" + s);
              i instanceof o &&
                "function" === typeof i[e] &&
                (a = i[e].apply(i, Array.prototype.slice.call(n, 1))),
                "destroy" === e && t.data(this, "plugin_" + s, null);
            }),
            a !== i ? a : this
          );
        }
      }),
      (t.fn[s].getCountryData = function() {
        return u;
      }),
      (t.fn[s].loadUtils = function(e, n) {
        t.fn[s].loadedUtilsScript
          ? n && n.resolve()
          : ((t.fn[s].loadedUtilsScript = !0),
            t.ajax({
              type: "GET",
              url: e,
              complete: function() {
                t(".intl-tel-input input").intlTelInput("handleUtils");
              },
              dataType: "script",
              cache: !0
            }));
      }),
      (t.fn[s].defaults = a),
      (t.fn[s].version = "12.1.0");
    for (
      var u = [
          ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
          ["Albania (Shqipëri)", "al", "355"],
          ["Algeria (‫الجزائر‬‎)", "dz", "213"],
          ["American Samoa", "as", "1684"],
          ["Andorra", "ad", "376"],
          ["Angola", "ao", "244"],
          ["Anguilla", "ai", "1264"],
          ["Antigua and Barbuda", "ag", "1268"],
          ["Argentina", "ar", "54"],
          ["Armenia (Հայաստան)", "am", "374"],
          ["Aruba", "aw", "297"],
          ["Australia", "au", "61", 0],
          ["Austria (Österreich)", "at", "43"],
          ["Azerbaijan (Azərbaycan)", "az", "994"],
          ["Bahamas", "bs", "1242"],
          ["Bahrain (‫البحرين‬‎)", "bh", "973"],
          ["Bangladesh (বাংলাদেশ)", "bd", "880"],
          ["Barbados", "bb", "1246"],
          ["Belarus (Беларусь)", "by", "375"],
          ["Belgium (België)", "be", "32"],
          ["Belize", "bz", "501"],
          ["Benin (Bénin)", "bj", "229"],
          ["Bermuda", "bm", "1441"],
          ["Bhutan (འབྲུག)", "bt", "975"],
          ["Bolivia", "bo", "591"],
          ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
          ["Botswana", "bw", "267"],
          ["Brazil (Brasil)", "br", "55"],
          ["British Indian Ocean Territory", "io", "246"],
          ["British Virgin Islands", "vg", "1284"],
          ["Brunei", "bn", "673"],
          ["Bulgaria (България)", "bg", "359"],
          ["Burkina Faso", "bf", "226"],
          ["Burundi (Uburundi)", "bi", "257"],
          ["Cambodia (កម្ពុជា)", "kh", "855"],
          ["Cameroon (Cameroun)", "cm", "237"],
          [
            "Canada",
            "ca",
            "1",
            1,
            [
              "204",
              "226",
              "236",
              "249",
              "250",
              "289",
              "306",
              "343",
              "365",
              "387",
              "403",
              "416",
              "418",
              "431",
              "437",
              "438",
              "450",
              "506",
              "514",
              "519",
              "548",
              "579",
              "581",
              "587",
              "604",
              "613",
              "639",
              "647",
              "672",
              "705",
              "709",
              "742",
              "778",
              "780",
              "782",
              "807",
              "819",
              "825",
              "867",
              "873",
              "902",
              "905"
            ]
          ],
          ["Cape Verde (Kabu Verdi)", "cv", "238"],
          ["Caribbean Netherlands", "bq", "599", 1],
          ["Cayman Islands", "ky", "1345"],
          ["Central African Republic (République centrafricaine)", "cf", "236"],
          ["Chad (Tchad)", "td", "235"],
          ["Chile", "cl", "56"],
          ["China (中国)", "cn", "86"],
          ["Christmas Island", "cx", "61", 2],
          ["Cocos (Keeling) Islands", "cc", "61", 1],
          ["Colombia", "co", "57"],
          ["Comoros (‫جزر القمر‬‎)", "km", "269"],
          ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
          ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
          ["Cook Islands", "ck", "682"],
          ["Costa Rica", "cr", "506"],
          ["Côte d’Ivoire", "ci", "225"],
          ["Croatia (Hrvatska)", "hr", "385"],
          ["Cuba", "cu", "53"],
          ["Curaçao", "cw", "599", 0],
          ["Cyprus (Κύπρος)", "cy", "357"],
          ["Czech Republic (Česká republika)", "cz", "420"],
          ["Denmark (Danmark)", "dk", "45"],
          ["Djibouti", "dj", "253"],
          ["Dominica", "dm", "1767"],
          [
            "Dominican Republic (República Dominicana)",
            "do",
            "1",
            2,
            ["809", "829", "849"]
          ],
          ["Ecuador", "ec", "593"],
          ["Egypt (‫مصر‬‎)", "eg", "20"],
          ["El Salvador", "sv", "503"],
          ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
          ["Eritrea", "er", "291"],
          ["Estonia (Eesti)", "ee", "372"],
          ["Ethiopia", "et", "251"],
          ["Falkland Islands (Islas Malvinas)", "fk", "500"],
          ["Faroe Islands (Føroyar)", "fo", "298"],
          ["Fiji", "fj", "679"],
          ["Finland (Suomi)", "fi", "358", 0],
          ["France", "fr", "33"],
          ["French Guiana (Guyane française)", "gf", "594"],
          ["French Polynesia (Polynésie française)", "pf", "689"],
          ["Gabon", "ga", "241"],
          ["Gambia", "gm", "220"],
          ["Georgia (საქართველო)", "ge", "995"],
          ["Germany (Deutschland)", "de", "49"],
          ["Ghana (Gaana)", "gh", "233"],
          ["Gibraltar", "gi", "350"],
          ["Greece (Ελλάδα)", "gr", "30"],
          ["Greenland (Kalaallit Nunaat)", "gl", "299"],
          ["Grenada", "gd", "1473"],
          ["Guadeloupe", "gp", "590", 0],
          ["Guam", "gu", "1671"],
          ["Guatemala", "gt", "502"],
          ["Guernsey", "gg", "44", 1],
          ["Guinea (Guinée)", "gn", "224"],
          ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
          ["Guyana", "gy", "592"],
          ["Haiti", "ht", "509"],
          ["Honduras", "hn", "504"],
          ["Hong Kong (香港)", "hk", "852"],
          ["Hungary (Magyarország)", "hu", "36"],
          ["Iceland (Ísland)", "is", "354"],
          ["India (भारत)", "in", "91"],
          ["Indonesia", "id", "62"],
          ["Iran (‫ایران‬‎)", "ir", "98"],
          ["Iraq (‫العراق‬‎)", "iq", "964"],
          ["Ireland", "ie", "353"],
          ["Isle of Man", "im", "44", 2],
          ["Israel (‫ישראל‬‎)", "il", "972"],
          ["Italy (Italia)", "it", "39", 0],
          ["Jamaica", "jm", "1876"],
          ["Japan (日本)", "jp", "81"],
          ["Jersey", "je", "44", 3],
          ["Jordan (‫الأردن‬‎)", "jo", "962"],
          ["Kazakhstan (Казахстан)", "kz", "7", 1],
          ["Kenya", "ke", "254"],
          ["Kiribati", "ki", "686"],
          ["Kosovo", "xk", "383"],
          ["Kuwait (‫الكويت‬‎)", "kw", "965"],
          ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
          ["Laos (ລາວ)", "la", "856"],
          ["Latvia (Latvija)", "lv", "371"],
          ["Lebanon (‫لبنان‬‎)", "lb", "961"],
          ["Lesotho", "ls", "266"],
          ["Liberia", "lr", "231"],
          ["Libya (‫ليبيا‬‎)", "ly", "218"],
          ["Liechtenstein", "li", "423"],
          ["Lithuania (Lietuva)", "lt", "370"],
          ["Luxembourg", "lu", "352"],
          ["Macau (澳門)", "mo", "853"],
          ["Macedonia (FYROM) (Македонија)", "mk", "389"],
          ["Madagascar (Madagasikara)", "mg", "261"],
          ["Malawi", "mw", "265"],
          ["Malaysia", "my", "60"],
          ["Maldives", "mv", "960"],
          ["Mali", "ml", "223"],
          ["Malta", "mt", "356"],
          ["Marshall Islands", "mh", "692"],
          ["Martinique", "mq", "596"],
          ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
          ["Mauritius (Moris)", "mu", "230"],
          ["Mayotte", "yt", "262", 1],
          ["Mexico (México)", "mx", "52"],
          ["Micronesia", "fm", "691"],
          ["Moldova (Republica Moldova)", "md", "373"],
          ["Monaco", "mc", "377"],
          ["Mongolia (Монгол)", "mn", "976"],
          ["Montenegro (Crna Gora)", "me", "382"],
          ["Montserrat", "ms", "1664"],
          ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
          ["Mozambique (Moçambique)", "mz", "258"],
          ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
          ["Namibia (Namibië)", "na", "264"],
          ["Nauru", "nr", "674"],
          ["Nepal (नेपाल)", "np", "977"],
          ["Netherlands (Nederland)", "nl", "31"],
          ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
          ["New Zealand", "nz", "64"],
          ["Nicaragua", "ni", "505"],
          ["Niger (Nijar)", "ne", "227"],
          ["Nigeria", "ng", "234"],
          ["Niue", "nu", "683"],
          ["Norfolk Island", "nf", "672"],
          ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
          ["Northern Mariana Islands", "mp", "1670"],
          ["Norway (Norge)", "no", "47", 0],
          ["Oman (‫عُمان‬‎)", "om", "968"],
          ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
          ["Palau", "pw", "680"],
          ["Palestine (‫فلسطين‬‎)", "ps", "970"],
          ["Panama (Panamá)", "pa", "507"],
          ["Papua New Guinea", "pg", "675"],
          ["Paraguay", "py", "595"],
          ["Peru (Perú)", "pe", "51"],
          ["Philippines", "ph", "63"],
          ["Poland (Polska)", "pl", "48"],
          ["Portugal", "pt", "351"],
          ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
          ["Qatar (‫قطر‬‎)", "qa", "974"],
          ["Réunion (La Réunion)", "re", "262", 0],
          ["Romania (România)", "ro", "40"],
          ["Russia (Россия)", "ru", "7", 0],
          ["Rwanda", "rw", "250"],
          ["Saint Barthélemy", "bl", "590", 1],
          ["Saint Helena", "sh", "290"],
          ["Saint Kitts and Nevis", "kn", "1869"],
          ["Saint Lucia", "lc", "1758"],
          ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
          ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
          ["Saint Vincent and the Grenadines", "vc", "1784"],
          ["Samoa", "ws", "685"],
          ["San Marino", "sm", "378"],
          ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
          ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
          ["Senegal (Sénégal)", "sn", "221"],
          ["Serbia (Србија)", "rs", "381"],
          ["Seychelles", "sc", "248"],
          ["Sierra Leone", "sl", "232"],
          ["Singapore", "sg", "65"],
          ["Sint Maarten", "sx", "1721"],
          ["Slovakia (Slovensko)", "sk", "421"],
          ["Slovenia (Slovenija)", "si", "386"],
          ["Solomon Islands", "sb", "677"],
          ["Somalia (Soomaaliya)", "so", "252"],
          ["South Africa", "za", "27"],
          ["South Korea (대한민국)", "kr", "82"],
          ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
          ["Spain (España)", "es", "34"],
          ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
          ["Sudan (‫السودان‬‎)", "sd", "249"],
          ["Suriname", "sr", "597"],
          ["Svalbard and Jan Mayen", "sj", "47", 1],
          ["Swaziland", "sz", "268"],
          ["Sweden (Sverige)", "se", "46"],
          ["Switzerland (Schweiz)", "ch", "41"],
          ["Syria (‫سوريا‬‎)", "sy", "963"],
          ["Taiwan (台灣)", "tw", "886"],
          ["Tajikistan", "tj", "992"],
          ["Tanzania", "tz", "255"],
          ["Thailand (ไทย)", "th", "66"],
          ["Timor-Leste", "tl", "670"],
          ["Togo", "tg", "228"],
          ["Tokelau", "tk", "690"],
          ["Tonga", "to", "676"],
          ["Trinidad and Tobago", "tt", "1868"],
          ["Tunisia (‫تونس‬‎)", "tn", "216"],
          ["Turkey (Türkiye)", "tr", "90"],
          ["Turkmenistan", "tm", "993"],
          ["Turks and Caicos Islands", "tc", "1649"],
          ["Tuvalu", "tv", "688"],
          ["U.S. Virgin Islands", "vi", "1340"],
          ["Uganda", "ug", "256"],
          ["Ukraine (Україна)", "ua", "380"],
          ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
          ["United Kingdom", "gb", "44", 0],
          ["United States", "us", "1", 0],
          ["Uruguay", "uy", "598"],
          ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
          ["Vanuatu", "vu", "678"],
          ["Vatican City (Città del Vaticano)", "va", "39", 1],
          ["Venezuela", "ve", "58"],
          ["Vietnam (Việt Nam)", "vn", "84"],
          ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
          ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
          ["Yemen (‫اليمن‬‎)", "ye", "967"],
          ["Zambia", "zm", "260"],
          ["Zimbabwe", "zw", "263"],
          ["Åland Islands", "ax", "358", 1]
        ],
        h = 0;
      h < u.length;
      h++
    ) {
      var d = u[h];
      u[h] = {
        name: d[0],
        iso2: d[1],
        dialCode: d[2],
        priority: d[3] || 0,
        areaCodes: d[4] || null
      };
    }
  }),
  (function(t, e, n, i) {
    var o = function(e) {
      (this._core = e),
        (this._handlers = {
          "dragged.owl.carousel changed.owl.carousel": t.proxy(function(t) {
            t.namespace && this._core.settings.linked && this.update(t);
          }, this),
          "linked.to.owl.carousel": t.proxy(function(t, e, n, i, o) {
            t.namespace && this._core.settings.linked && this.toSlide(e, n, o);
          }, this)
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, o.Defaults, this._core.options));
    };
    (o.Defaults = { linked: !1 }),
      (o.prototype.update = function(t) {
        this.toSlide(t.relatedTarget.relative(t.item.index));
      }),
      (o.prototype.toSlide = function(e, n, i) {
        this._core.$element.attr("id");
        var o = this._core.settings.linked.split(",");
        void 0 === i && (i = !0),
          (e = e || 0),
          i
            ? t.each(o, function(n, i) {
                t(i).trigger("linked.to.owl.carousel", [e, 300, !0, !1]);
              })
            : (this._core.$element.trigger("to.owl.carousel", [e, 300, !0]),
              this._core.settings.current &&
                this._core._plugins.current.switchTo(e));
      }),
      (o.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.linked = o);
  })(window.Zepto || window.jQuery, window, document);
var cancall = !0,
  current = 1,
  timer,
  isAnimating = !1,
  lastDelta = 0,
  maxSlides = 0,
  loaders = [],
  currentSlide = 1,
  number_of_slides = 0,
  winwidth,
  totalSaunas = 0,
  currentSauna = 1,
  elements = {},
  slidestimeout,
  slideanimationTimeout,
  animationSpeed = 800,
  width = 100,
  perfData = window.performance.timing,
  EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
  time = 100 * parseInt((EstimatedTime / 1e3) % 60);
$(".loading-fill").css("animation-duration", time + "ms"),
  $(window).on("load", function() {
    $(".loading-cont").toggleClass("hidden", !0),
      setTimeout(function() {
        $(".loading-1").toggleClass("up", !0),
          setTimeout(function() {
            $(".loading-2").toggleClass("up", !0);
          }, 100),
          setTimeout(function() {
            $(".loading-3").toggleClass("up", !0);
          }, 200);
      }, 200),
      setTimeout(function() {
        $(".loading-screen").hide(),
          animateSaunas(),
          $(".page-template-page-builder .builder-row").toggleClass(
            "ready",
            !0
          ),
          $(".page-template-page-blog, .single-post").toggleClass("ready", !0),
          $(".page-template-page-information, .single-information").toggleClass(
            "ready",
            !0
          ),
          $(".page-template-page-contact").toggleClass("ready", !0),
          $(".page-template-page-builder .options:first-child").toggleClass(
            "hidden",
            !1
          );
      }, 800);
  }),
  $("#fullpage").scroll(function() {
    checkScroll();
  }),
  $(document).ready(function() {
    if (
      (checkScroll(),
      $("#business-request, .request-button").click(function() {
        toggleRequest();
      }),
      $(".country-code").intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function(t) {
          $.get("https://ipinfo.io", function() {}, "jsonp").always(function(
            e
          ) {
            var n = e && e.country ? e.country : "";
            t(n);
          });
        },
        utilsScript: base_url + "assets/intphone/js/utils.js"
      }),
      $("body").hasClass("page-template-page-products"))
    ) {
      var t = $(".hover-height-ref").outerHeight();
      $(".one-sauna:not(.special) .hover-box")
        .height(t + 60)
        .css("bottom", -(t + 60)),
        setTimeout(function() {
          var t = $(".hover-height-ref").outerHeight();
          $(".one-sauna:not(.special) .hover-box")
            .height(t + 60)
            .css("bottom", -(t + 60));
        }, 1e3),
        $(window).resize(function() {
          var t = $(".hover-height-ref").outerHeight();
          $(".one-sauna:not(.special) .hover-box")
            .height(t + 60)
            .css("bottom", -(t + 60));
        });
    }
    $(document).delegate(".slides ul li", "click", function() {
      setSlide($(this).data("slide"));
    }),
      $('[data-toggle="tooltip"]').tooltip(),
      $("body").hasClass("page-template-front-page") &&
        (scrollable(), animateSlides()),
      ($("body").hasClass("page-template-page-story") ||
        $("body").hasClass("page-template-page-contact")) &&
        scrollableStory(),
      $(".page-template-page-products .img-row").matchHeight({ byRow: !1 }),
      $(".grid").masonry({});
    var e = $(".owl-one");
    e.owlCarousel({
      loop: !0,
      margin: 0,
      nav: !1,
      dots: !1,
      linked: ".thumbnails",
      center: !0,
      responsive: { 0: { items: 3 }, 860: { items: 3 } }
    });
    var n = $(".bb-slider");
    if (
      (n.owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        center: !1,
        items: 1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0
      }),
      $(".navi.left").click(function() {
        n.trigger("prev.owl.carousel");
      }),
      $(".navi.right").click(function() {
        n.trigger("next.owl.carousel");
      }),
      n.on("changed.owl.carousel", function(t) {
        if (t.item) {
          var e = t.item.index - 1,
            n = t.item.count;
          e > n && (e -= n),
            e <= 0 && (e += n),
            console.log(e),
            setTimeout(function() {
              $(".bb-slider-imgs .img").toggleClass("hidden", !0),
                $(".bb-slider-imgs .img.slide-" + e).toggleClass("hidden", !1);
            }, 100);
        }
      }),
      $("#sendsaunarequest").click(function() {
        sendSaunaRequest();
      }),
      $(".carousel-nav.left").click(function() {
        e.trigger("prev.owl.carousel");
      }),
      $(".carousel-nav.right").click(function() {
        e.trigger("next.owl.carousel");
      }),
      $(".one-sauna .text-height").matchHeight({ property: "height" }),
      equalContainer(),
      saunaCarousel(),
      slideSaunas(),
      builderScroll(),
      $(".selection").click(function() {
        customizeSelect(this);
      }),
      $(".close-button").click(function() {
        toggleRequest("close");
      }),
      $(".show-request").click(function(t) {
        t.preventDefault(),
          assignElements($(this).data("sauna")),
          toggleRequest("open"),
          dataLayer.push({ event: "formOpen" });
      }),
      setTimeout(function() {
        setTimeout(function() {
          $(".navigation").toggleClass("no-click", !1);
        }, 600);
      }, 400),
      $(".navigation.left").click(function() {
        $(".navigation").toggleClass("no-click", !0),
          slideLeft(),
          setTimeout(function() {
            builderScroll();
          }, animationSpeed);
      }),
      $(".navigation.right").click(function() {
        $(".navigation").toggleClass("no-click", !0),
          slideRight(),
          setTimeout(function() {
            builderScroll();
          }, animationSpeed);
      }),
      $(".with-drop .lang-sel-toggle").click(function() {
        $(this)
          .parent(".with-drop")
          .toggleClass("open");
      }),
      (winwidth = $(window).outerWidth()),
      $(window).resize(function() {
        (winwidth = $(window).outerWidth()),
          $(window).width() > 859 &&
            ($(".fixed-menu.white").toggleClass("menu-open", !1),
            $(".mobile-menu").toggleClass("menu-open", !1),
            $("body").toggleClass("menu-open", !1)),
          equalContainer();
      }),
      $(window).width() > 859 &&
        (document.ontouchmove = function(t) {
          t.preventDefault();
        }),
      $(window).scroll(function() {
        var t = $(window).scrollTop();
        winwidth < 859 && checkMenu(t), builderScroll();
      }),
      $(window).width() > 859)
    ) {
      var i;
      $(document).bind("touchstart", function(t) {
        i = t.originalEvent.touches[0].clientY;
      }),
        $(document).bind("touchend", function(t) {
          var e = t.originalEvent.changedTouches[0].clientY;
          isAnimating ||
            (i > e + 5
              ? (clearTimeout(timer),
                $("body").hasClass("page-template-front-page")
                  ? scrollEvent("down")
                  : scrollEventStory("down"),
                (cancall = !1),
                (timer = setTimeout(function() {
                  cancall = !0;
                }, 120)))
              : i < e - 5 &&
                (clearTimeout(timer),
                $("body").hasClass("page-template-front-page")
                  ? scrollEvent("up")
                  : scrollEventStory("up"),
                (cancall = !1),
                (timer = setTimeout(function() {
                  cancall = !0;
                }, 120))));
        });
    }
    $(window).on("wheel", function(t) {
      if (
        winwidth > 859 &&
        ($("body").hasClass("page-template-front-page") ||
          $("body").hasClass("page-template-page-story"))
      ) {
        var e = Math.max(
          -1,
          Math.min(1, t.originalEvent.deltaY || -t.originalEvent.detail)
        );
        if ((t.preventDefault(), t.originalEvent.deltaY < 0)) {
          if (!(t.originalEvent.deltaY < lastDelta))
            return void (lastDelta = t.originalEvent.deltaY);
          lastDelta = t.originalEvent.deltaY;
        } else {
          if (!(t.originalEvent.deltaY > lastDelta))
            return void (lastDelta = t.originalEvent.deltaY);
          lastDelta = t.originalEvent.deltaY;
        }
        if (isAnimating) return;
        return (
          e > 0
            ? (clearTimeout(timer),
              $("body").hasClass("page-template-front-page")
                ? scrollEvent("down")
                : scrollEventStory("down"),
              (cancall = !1),
              (timer = setTimeout(function() {
                cancall = !0;
              }, 120)))
            : (clearTimeout(timer),
              $("body").hasClass("page-template-front-page")
                ? scrollEvent("up")
                : scrollEventStory("up"),
              (cancall = !1),
              (timer = setTimeout(function() {
                cancall = !0;
              }, 120))),
          !1
        );
      }
    }),
      $(".small-text").click(function() {
        var t = $.Event("keydown");
        (t.which = 40), $("html").trigger(t);
      }),
      $("html").keydown(function(t) {
        if (
          winwidth > 859 &&
          ($("body").hasClass("page-template-front-page") ||
            $("body").hasClass("page-template-page-story"))
        ) {
          if (isAnimating) return;
          return (
            40 === t.which
              ? (clearTimeout(timer),
                $("body").hasClass("page-template-front-page")
                  ? scrollEvent("down")
                  : scrollEventStory("down"),
                (cancall = !1),
                (timer = setTimeout(function() {
                  cancall = !0;
                }, 120)))
              : 38 === t.which &&
                (clearTimeout(timer),
                $("body").hasClass("page-template-front-page")
                  ? scrollEvent("up")
                  : scrollEventStory("up"),
                (cancall = !1),
                (timer = setTimeout(function() {
                  cancall = !0;
                }, 120))),
            !1
          );
        }
      }),
      $(document).on("click", 'input[type="checkbox"][data-group]', function(
        t
      ) {
        var e = $(this),
          n = e.prop("checked"),
          i = e.data("group");
        $('input[type="checkbox"][data-group="' + i + '"]')
          .not(e)
          .prop("checked", n),
          $(".fixed-menu.white").toggleClass("menu-open", n),
          $(".mobile-menu").toggleClass("menu-open", n),
          $("body").toggleClass("menu-open", n);
      });
  }),
  (String.prototype.splice = function(t, e, n) {
    return this.slice(0, t) + n + this.slice(t + Math.abs(e));
  }),
  (window.onload = function() {
    var t = document.getElementsByTagName("textarea")[0];
    if (t) {
      var e = window.opera
          ? t.offsetHeight +
            parseInt(
              window
                .getComputedStyle(t, null)
                .getPropertyValue("border-top-width")
            )
          : t.offsetHeight - t.clientHeight,
        n = function(t) {
          (t.style.height = "auto"),
            (t.style.height = t.scrollHeight + e + "px");
        };
      t.addEventListener &&
        t.addEventListener("input", function(e) {
          n(t);
        }),
        t.attachEvent &&
          t.attachEvent("onkeyup", function() {
            n(t);
          });
    }
  }),
  getCookie("cookieconsent") || setCookie("cookieconsent", 99, 182),
  $(document).ready(function() {
    getCookie("cookieconsent") || $(".cookie-overlay").show(),
      99 === getCookie("cookieconsent") && $(".cookie-overlay").show(),
      $('input[name="consent"]').change(function() {
        $(".shower").toggleClass("open", !1),
          1 === $(this).val() && $(".shower.one").toggleClass("open", !0),
          2 === $(this).val() && $(".shower.two").toggleClass("open", !0),
          3 === $(this).val() && $(".shower.three").toggleClass("open", !0);
      }),
      $("#more").click(function() {
        $("#more").hide(), $(".inputs").slideDown();
      }),
      $("#accept").click(function() {
        var t = $('input[name="consent"]:checked').val();
        1 === t
          ? (setCookie("cookieconsent", 1, 182),
            dataLayer.push({ cookieconsent: "1" }))
          : 2 === t
          ? (setCookie("cookieconsent", 2, 182),
            dataLayer.push({ cookieconsent: "2" }))
          : 3 === t &&
            (setCookie("cookieconsent", 3, 182),
            dataLayer.push({ cookieconsent: "3" })),
          setTimeout(function() {
            dataLayer.push({ event: "ccgo" }), $(".cookie-overlay").fadeOut();
          }, 100),
          setTimeout(function() {
            location.reload();
          }, 300);
      });
  });
