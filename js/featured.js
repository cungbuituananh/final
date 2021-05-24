
$('.slide-featured').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    centerPadding: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#nextSlide").click(function () {
    $(".slide-featured").slick("slickNext");
  });
  
  $("#prevSlide").click(function () {
    $(".slide-featured").slick("slickPrev");
  });