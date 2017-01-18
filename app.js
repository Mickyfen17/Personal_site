$("#scroll-btn").on("click", function(e) {
  e.preventDefault();
  $("body").animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});
