$("#scroll-btn").on("click", function(e) { //(e) => es6 arrow function
  e.preventDefault();
  $("body").animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});
