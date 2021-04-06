import $ from "jquery";

// aos
import AOS from "aos";

export function resizeBody() {
  var footer_height = $(".footer").height(),
    header_height = $("header").height(),
    plus_height = footer_height + header_height,
    window_height = $(window).height(),
    new_height = window_height - plus_height;

  if ($("main").height() < window_height) {
    $("main").css({
      "min-height": new_height,
    });
  }

  $(".product__breadCrumbs a").on("click", function (event) {
    event.preventDefault();
  });
}

export function toggleSearch() {
  $(".header__searchBox button").on("click", function () {
    $(".search").fadeIn();
  });

  $(".search__close").on("click", function () {
    $(".search").fadeOut();
  });
}

export const checkedUrl = (type) => {
  if (type.type === "url") {
    return type.url;
  } else if (type.type === "static-page") {
    return `/${type.reference}`;
  } else {
    return "";
  }
};

export const setupAos = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
};
