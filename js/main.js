$(document).ready(function () {

  // Select
  $('select').niceSelect();

  // Show menu
  $('.navbar-toggle--open').on('click', function() {
    $('.nav').addClass('nav--open');
  });

  $('.navbar-toggle--close').on('click', function() {
    $('.nav').removeClass('nav--open');
  });

  if($(window).width() < 1200) { 
    $(document).click(function(event) {
      if ($(event.target).closest('.navbar-toggle--open').length 
        || $(event.target).closest('.nav').length ) return;
        $('.nav').removeClass('nav--open');
        event.stopPropagation();
    });
  };

  // Scroll speed
  $('.card__review').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  // Bloom
  $('.bloom--clickable .bloom__item').on('click', function() {
    $('.bloom__item').removeClass('bloom__item--active');
    $(this).addClass('bloom__item--active');
  });

  // Video
  $('.gallery__item--video').on('click', function() {
    var dataYoutube = $(this).attr('data-youtube');
    $(this).html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });

  // Stages
  var pos = 0;
  $('.stages__next-js').on('click', function(e) {
    e.preventDefault();
    pos += -100;
    $('.stages__wrpa').css('-webkit-transform',  'translateX(' + pos + '%)');
  });

  $('.stages__prev-js').on('click', function(e) {
    e.preventDefault();
    pos += 100;
    $('.stages__wrpa').css('-webkit-transform',  'translateX(' + pos + '%)');
  });

  // Modal
  $('.open-modal-product').on('click', function(e) {
    e.preventDefault();
    $('.modal--product').fadeIn();
  });

  $('.open-modal-order1').on('click', function(e) {
    e.preventDefault();
    $('.modal--order1').fadeIn();
  });

  $('.open-modal-order2').on('click', function(e) {
    e.preventDefault();
    $('.modal--order2').fadeIn();
  });

  $('.open-modal-order3').on('click', function(e) {
    e.preventDefault();
    $('.modal--order3').fadeIn();
  });

  $('.open-modal-subscribe').on('click', function(e) {
    e.preventDefault();
    $('.modal--subscribe').fadeIn();
  });

  $('.open-modal-application').on('click', function(e) {
    e.preventDefault();
    $('.modal--application').fadeIn();
  });

  $('.modal__close, .stages__close-js, .modal__close-js').on('click', function(e) {
    e.preventDefault();
    $('.modal').fadeOut();

    setTimeout(function() {
      pos = 0;
      $('.stages__wrpa').css('-webkit-transform',  'translateX(' + pos + '%)');
    }, 1000);

  });

  $(document).click(function(event) {
    if ($(event.target).closest('.modal__box').length 
      || $(event.target).closest('.open-modal-product').length
      || $(event.target).closest('.open-modal-order1').length
      || $(event.target).closest('.open-modal-order2').length
      || $(event.target).closest('.open-modal-order3').length
      || $(event.target).closest('.open-modal-subscribe').length
      || $(event.target).closest('.open-modal-application').length ) return;
      $('.modal').fadeOut();

      setTimeout(function() {
        pos = 0;
        $('.stages__wrpa').css('-webkit-transform',  'translateX(' + pos + '%)');
      }, 1000);
    
      event.stopPropagation();
  });

  // Recall more
  $('.recall__more').on('click', function() {
    var btnThis = $(this);
    var recallHeight = btnThis.parents('.recall__item').find('.recall__text').height();

    if(btnThis.text() == 'свернуть') {
      btnThis.text('читать далее');
      btnThis.parents('.recall__item').removeClass('recall__item--open');
      btnThis.parents('.recall__item').find('.recall__body').css('max-height', '');
      return true;
    }

    btnThis.parents('.recall__item').addClass('recall__item--open');
    btnThis.parents('.recall__item').find('.recall__body').css('max-height', recallHeight);
    btnThis.text('свернуть');

  });

  // Instagram scroll down
  var inScrollTop = 0;
  $('.instagram__body').scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > inScrollTop){
      $('.instagram__bamper').fadeOut();
    } else {
      $('.instagram__bamper').fadeIn();
    }
    inScrollTop = st;
  });

  // Size active
  $('.size__item').on('click', function() {
    $('.size__item').removeClass('size__item--active');
    $(this).addClass('size__item--active');
  });

  // Question no click
  $('.question__info').on('click', function() {return false;});

  // Size select
  if( $(window).width() < 992) {
    $('.size__select').on('click', function() {
      $('.size__list').slideToggle(200);
      $(this).toggleClass('size__list--open');
    });

    $('.size__item').on('click', function() {
      var headTitle = $(this).text();
      $('.size__select span').text(headTitle);
      $('.size__list').fadeOut(200);
      $('.size__select').removeClass('size__select--open');
    });

    $(document).click(function(event) {
      if ($(event.target).closest('.size__select').length 
        || $(event.target).closest('.size__list').length ) return;
        $('.size__list').fadeOut(200);
        $('.size__select').removeClass('size__select--open');
        event.stopPropagation();
    });
  };

  // Reviews more
  $('.reviews__textOpen').on('click', function() {
    var btnThis = $(this);
    var reviewsHeight = btnThis.parents('.reviews__item').find('.reviews__paragraph').height();

    console.log(reviewsHeight)

    if(btnThis.find('.reviews__textOpenText').text() == 'Свернуть') {
      btnThis.find('.reviews__textOpenText').text('Показать еще');
      btnThis.parents('.reviews__item').removeClass('reviews__item--open');
      btnThis.parents('.reviews__item').find('.reviews__textBody').css('max-height', '');
      return true;
    }

    btnThis.parents('.reviews__item').addClass('reviews__item--open');
    btnThis.parents('.reviews__item').find('.reviews__textBody').css('max-height', reviewsHeight);
    btnThis.find('.reviews__textOpenText').text('Свернуть');

  });

  // Amount
  $('.amount__down').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.amount__up').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // Basket open body
  // $('.basket__inner .title').on('click', function() {
  //   $(this).parents('.basket__inner').toggleClass('basket__inner--open');
  //   $(this).parents('.basket__inner').find('.basket__body').slideToggle();
  // });

  // Radio if check
  // $('.radio input').on('click', function() {
  //   var radioThis = $(this);

  //   $('.radio__item').removeClass('radio__item--active');
  //   $('.radio__body').slideUp(200);

  //   if($(radioThis).is(':checked')) {
  //     radioThis.parents('.radio__item').addClass('radio__item--active');
  //     radioThis.parents('.radio__item').find('.radio__body').slideDown(200);
  //   };
  // });

  // Orders open
  $('.orders__arrow').on('click', function() {
    $(this).parents('.orders__item').toggleClass('orders__item--open');
    $(this).parents('.orders__item').find('.orders__body').slideToggle();
  });

  // Star
  $('#rating').raty({
    score: function() {
      return $(this).attr('data-rating');
    },
    path:     'img/svg',
    starOff:  'star-off.svg',
    starOn:   'star-on.svg',
    starType: 'img'
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Range slider
  $('.js-range-slider').ionRangeSlider({
    min: 5000,
    max: 1000000,
    from: 200000,
    force_edges: true,
  });

  // Products sl
  var swiper = new Swiper(".products__sl", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 12,
    loopAdditionalSlides: 1,
    autoplay: {
     delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        spaceBetween: 16,
        slidesPerView: 2,
      },
    },
  });

  // Ventage sl
  var swiper = new Swiper(".vantage__sl", {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".vantage__pagination",
      clickable: true,
    },
  });

  // Tag sl
  if($(window).width() < 768) { 
    var swiper = new Swiper(".tag--sl", {
      spaceBetween: 0,
      slidesPerView: 'auto'
    });
  };

  // Catalog img sl
  var swiper = new Swiper(".catalog__img", {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Tabs sl
  var swiper = new Swiper(".tabs__nav--sl", {
    spaceBetween: 12,
    slidesPerView: 'auto',
    breakpoints: {
      992: {
        spaceBetween: 28,
      },
    },
  });

  // Reviews sl
  if($(window).width() < 992) { 
    var swiper = new Swiper(".reviews__sl", {
      spaceBetween: 8,
      slidesPerView: 'auto'
    });
  };

  // Zoom img
  $('.zoom-img').each(function() {
    $(this).magnificPopup({
      type : 'image',
      delegate: 'a',
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });
  });

  // Data tabs
  $('.tabs__item').not(':first').hide();
  $('.tabs__navItem').click(function() {
    $('.tabs__navItem').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs__item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

  // Keys sl
  var swiper = new Swiper(".keys__sl", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        
      },
    },
  });

  // TwentyTwenty
  $('.keys__img').twentytwenty();

});