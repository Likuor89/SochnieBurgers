//scroll
$(document).ready(function(){

var section = $('.section'),
    display = $('.maincontent'),
    screen =0,
    inScroll = false;
section.filter(':first-child').addClass('active');

var scrollToSection = function(sectionEq){
  var position =0;

  if (!inScroll){

  inScroll = true;
  screen = sectionEq;

  position = (section.eq(sectionEq).index() * -100) +'%';

  section.eq(sectionEq).addClass('active')
    .siblings().removeClass('active');

  display.css ({
    'transform' : 'translate3d(0, ' + position + ', 0)'
    });

    setTimeout(function(){
        inScroll = false;
        $('.mainMenu__item').eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
    }, 1300)
  }
}

$('.wrapper').on('wheel', function (e) {
  var deltaY = e.originalEvent.deltaY;
      activeSection = section.filter('.active'),
      nextSection = activeSection.next(),
      prevSection = activeSection.prev();

  if (deltaY > 0) {
    if (nextSection.length){
      scrollToSection(nextSection.index());
    }
  }

  if (deltaY < 0) {
    if (prevSection.length){
      scrollToSection(prevSection.index());
    }
  }

  });

  $('.mainMenu__link, .siteMenu__link, .order-link, .burgers-slider__buy ').on('click', function(e){
    e.preventDefault();

    var href = parseInt($(this).attr('href'));
    scrollToSection(href);
  });

  $(document).on('keydown', function(e){
    var activeSection = section.filter('.active'),
        nextSection = activeSection.next(),
        prevSection = activeSection.prev();

    switch (e.keyCode){
      case 40:
      if (nextSection.length){
      scrollToSection(nextSection.index());
    }
    break;

      case 38:
      if (prevSection.length){
      scrollToSection(prevSection.index());
    }
    break;
    }

  });
});
// vertical accord
$(document).ready(function () {
  $('.team-accord__trigger').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
      container = $this.closest('.team-accord'),
      item = $this.closest('.team-accord__item'),
      items = container.find('.team-accord__item'),
      content = item.find('.team-accord__content'),
      otherContent = container.find('.team-accord__content');

      if (!item.hasClass('active')){
        items.removeClass('active');
        item.addClass('active');
        otherContent.slideUp();
        content.slideDown();

      }else {
        item.removeClass('active');
        content.slideUp();
      }

    });
  });


// gorizont accord
$(document).ready(function () {
  $('.menuBurgers-accord__trigger').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
      container = $this.closest('.menu-accord'),
      item = $this.closest('.menu-accord__item'),
      items = container.find('.menu-accord__item'),
      activeItem = items.filter('.active'),
      content = item.find('.menu-accord__content'),
      activeContent = activeItem.find('.menu-accord__content');

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');

        activeContent.animate({
          'width' : '0px'
        });

        content.animate({
          'width' : '550px'
        })
      } else {
        item.removeClass('active');
        content.animate({
          'width' : '0px'
        })
      }
  });
  $(document).on('click', function(e){
    var $this = $(e.target);

    if (!$this.closest('.menu-accord').length){
      $('.menu-accord__content').animate({
        'width' : '0px'
      });
      $('.menu-accord__item').removeClass('active');
    }
  });
});

// KAPYCEL
$(document).ready(function () {
  var burgerCarousel = $('.burgers-slider').owlCarousel({
    items: 1,
    loop: true
  });

  $('.burgers-slider__arrows_next').on('click', function(e){
    e.preventDefault();
    burgerCarousel.trigger('next.owl.carousel');
  });
  $('.burgers-slider__arrows_prev').on('click', function(e){
    e.preventDefault();
    burgerCarousel.trigger('prev.owl.carousel');
  });

});
// phoneMask
$(document).ready(function(){
  $('.phone-mask').inputmask({"mask": "+7(999) 999-99 99"});
});

// fancybox
$(function(){
  $('.review__view').fancybox({
    type : 'inline',
    maxWidth : 460,
    padding : 0
  });
  $('.full-review__close').on('click', function(e){
    e.preventDefault();
    $.fancybox.close();
  });
});
