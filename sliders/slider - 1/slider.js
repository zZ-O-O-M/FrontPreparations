$(document).ready(function () {
  $('.slider__items').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    appendArrows: $('.arrow-buttons'),
    prevArrow: '<button id="prev" type="button" class="btn btn-slider-left"><i class="fa fa-chevron-left">' +
      '</i><img class="slider-arrow arrow-slider_left" src="images/arrow.png" alt=""></button>',
    nextArrow: '<button id="next" type="button" class="btn btn-slider-right" <i class="fa fa-chevron-right">' +
      '</i><img class="slider-arrow arrow-slider_right" src="images/arrow.png" alt=""></button>',
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 421,
        settings: {
          dots: false,
        }
      }
    ]
  });
});

// $('.slider__items').slick({
//   centerMode: true,
//   centerPadding: '190px',
//   slidesToShow: 1,
//   // dots: true,
//   appendArrows: $('.arrow-buttons'),
//   prevArrow: '<button id="prev" type="button" class="btn btn-slider-left"><i class="fa fa-chevron-left">' +
//     '</i><img class="arrow-slider arrow-slider_left" src="images/arrow.png" alt=""></button>',
//   nextArrow: '<button id="next" type="button" class="btn btn-slider-right" <i class="fa fa-chevron-right">' +
//     '</i><img class="arrow-slider arrow-slider_right" src="images/arrow.png" alt=""></button>',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });