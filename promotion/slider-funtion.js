$ = jQuery;
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
    baseTpl:
    '<div class="fancybox-container" role="dialog" tabindex="-1">' +
    '<div class="fancybox-bg"></div>' +
    '<div class="fancybox-inner">' +
    '<div class="fancybox-infobar">' +
    "</div>" +
    '<div class="fancybox-toolbar">{{buttons}}</div>' +
    '<div class="fancybox-navigation">{{arrows}}</div>' +
    '<div class="fancybox-stage"></div>' +
    '<div class="fancybox-caption"></div>' +
    "</div>" +
    "</div>",
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
 
// $( window ).resize(function() {
// //  slider.destroy();
//  h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
// });