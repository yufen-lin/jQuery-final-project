$(function () {
  // navbar dropdown
  $(".dropdown").click(function (event) {
    $(this).toggleClass("active");
    $(this).siblings(".dropdown-open").slideToggle(500);

    $(this).parent().siblings().find(".dropdown").removeClass("active");
    $(this).parent().siblings().find(".dropdown-open").slideUp(0);
  });

  $(".dropdown-open").mouseleave(function (event) {
    $(this).siblings("a").removeClass("active");
    $(this).slideUp(500);
  });

  // Swiper
  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // LightBox
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    positionFromTop: 250,
  });

  // submit btn prevent default
  $(".submit").click(function (event) {
    event.preventDefault();
  });

  // back to top
  $(".top-btn").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 700);
  });

  function showBtn() {
    if ($(this).scrollTop() > 400) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  }
  $(window).scroll(showBtn);
});
