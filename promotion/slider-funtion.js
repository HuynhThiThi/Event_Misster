
$( document ).ready(function() {
    $h_slider_options =  {
      gallery: true,
      item: 1,
      loop:true,
      slideMargin: 0,
      thumbItem: 3,
      galleryMargin: 15,
     thumbMargin: 20,
      }; 
  h_slider = $('#lightSlider').lightSlider($h_slider_options);
  $selector = '#lightSlider li:not(".clone") a';
  $selector += ',#lightSliderVertical li:not(".clone") a';
  $().fancybox({
    width: 560,  // default 800
    height: 340, // default 600
    selector : $selector,
    backFocus : false, 
    buttons : [          
      'close'
    ],
    parentEl: '.wrapper',
    btnTpl: {
      close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
      '<div class="icon-close"></div>' +
      "</button>",
      arrowLeft:
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<div class="icon-prev">icon</div>' +
      "</button>",

    arrowRight:
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<div class="icon-next">icon</div>' +
      "</button>",
    }
  }); 
});
$(function() {
  var list = $('.dropdown-list');
  var link = $('.js-link');
  link.click(function (e) {
    e.preventDefault();
    list.slideToggle(200).addClass("active");
    console.log("dfdf");
  });
  list.find('li').click(function () {
    var text = $(this).html();
    var icon = '<i class="fa fa-chevron-down"></i>';
    var hClass = list.find('li').hasClass('active');
    if (hClass) {
      list.find('li').removeClass("active");
    }else {
      list.find('li').addClass("active");
    }
    
    link.html(text + icon).addClass("active");
    list.slideToggle(200).addClass("active");
    
  });
});
// $( window ).resize(function() {
// //  slider.destroy();
//  h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
// });
