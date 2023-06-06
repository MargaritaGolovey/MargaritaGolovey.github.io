// $(document).ready(function(){
    // $('.carousel__inner').slick({
    //     speed: 1200,
    //     // adaptiveHeight: true,
    //     prevArrow:'<button type="button" class="slick-prev"><img src="img/leftArrow.png"></button>',
    //     nextArrow: '<button type="button" class="slick-next"><img src="img/rightArrow.png"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 dots: true,
    //                 arrows: false
    //         }
    //     }
    //     ]

    // });


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
      640: {

      },
      700: {
        
      },
      1200: {
        
      }
    }
  });
  

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  
$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
     });   


function toggleSlide(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
  });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//modal
$('[data-modal=consultation]').on('click', function(){
  $('.overlay, #consultation').fadeIn('slow');
})
$('.modal__close').on('click', function(){
  $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
});

$('.button_mini').each(function(i){
  $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
  });
});

function validateForm(form){
  $(form).validate({
    rules: {
      name: "required",
      phone: "required",
      email:{
        required: true,
        email: true
      }
    },
    messages:{
      name: "Пожалуйста, введите своё имя",
      phone: "Пожалуйста, ввидите свой номер",
      email:{
        required: "Пожалуйста, ввидите свою почту",
        email: "Неправельно введен адре электронной почты"
      }
    }
  });
};
validateForm('#consultation-form');
validateForm('#order form');
validateForm('#consultation form');

$('input[name=phone]').mask('+38(999)-999-99-99)');

// scroll

$(window).scroll(function(){
  if($(this).scrollTop()>1600){
    $('.pageup').fadeIn();
  }
  else{
    $('.pageup').fadeOut();
  }
});
$('a[href^="#"]').click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
  return false;
});

});