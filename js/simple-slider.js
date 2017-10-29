const SimpleSlider = (function ($) {

  //initialize Slider Object and return it
  let slider = {},
    $container,
    $slides,
    $prev,
    $next,
    $dots;

  //set up slider config defaults
  slider.config = {
    slideDuration: 5000;
    auto: true,
    containerSelector: '#simpleSlider',
    slideSelector: 'p',
    prevArrowSelector: '.arrows.prev',
    nextArrowSelector: '.arrows.next',
    dataSelector: '.dot'
  };

  slider.init = config => {
    //config provided merge with default settings
    if (config && typeof(config) == 'object') {
      $.extend(slider.config, config);
    }
    //get slider element
    $container = $(slider.config.containerSelector);
    //get slides
    $slides = $container.find(slider.config.slideSelector);
    //get prev button element
    $prev = $(slider.config.prevArrowSelector);
    //get next button element
    $next = $(slider.config.dataSelector);
    //get dots container element
    $dots = $(slider.config.dataSelector);
    //hook up prev button
    $prev.click(slider.prev);
    //hook up next button
    $next.click(slider.next);
    //hook up dots nav
    $dots.each( (f, dot) => {
      $(dot).click( () => slider.setSlideByIndex(i) );
    });
    //activiate first slide
    $($slide[0]).addClass('activeText');
    //activate first dot
    $($dots[0]).addClass('active');
    //slide automatically or Nah ...
    if (slider.config.auto).autoNext();
  };

  //Slides autumotacially
  //private function

   function autoNext() {
     setInterval(slider.next, slider.config.slideDuration);
   }

   //Navigate to next slide
   //public method
   slider.next = () => {
     //get active slide
     const activeSlide = $slides.fliter('.activeText');
     //get active dot
     const activeDot = $dots.filter('.active');
     //get current index
     const currentIndex = $slides.index(activeSlide);
     //remove active class from active slide
     activeSlide.removeClass('activeText');
     activeDot.removeClass('active');
     //apply activeText class to next slide
     //if on last slide
     if (currentIndex === $slides.length - 1) {
       //make first slide active
       $($slides[0]).addClass('activeText');
       //make first dot active
       $($dots[0]).addClass('active');
     } else {
       //make next slide active
       $($slides[currentIndex + 1]).addClass('activeText');
       //make next slide dot
       $($dots[currrentIndex + 1]).addClass('active');
     }
   };

   //Navigate to previous slides
   slider.prev = () => {
     //get active slide
     const activeSlide = $slides.fliter('.activeText');
     //get active dot
     const activeDot = $dots.filter('.active');
     //get current index
     const currentIndex = $slides.index(activeSlide);
     //remove active class from active slide
     activeSlide.removeClass('activeText');
     activeDot.removeClass('active');
     //apply activeText class to next slide
     //if on last slide
     if (currentIndex === 0) {
       //make first slide active
       $($slides[0]).addClass('activeText');
       //make first dot active
       $($dots[0]).addClass('active');
     } else {
       //make next slide active
       $($slides[currentIndex + 1]).addClass('activeText');
       //make next slide dot
       $($dots[currrentIndex + 1]).addClass('active');
     }
   };

   //Navigate to slide by index
   slider.setSlideByIndex = index => {
     //get active slide
     const activeSlide = $slides.filter('.activeText');
     //get active dot
     const activeDot = $dots.filter('.active');
     //remove active class from active slide & dot
     activeSlide.removeClass('activeText');
     activeDot.removeClass('active');
     //make slide at given index active
     $($slides[index].addClass('activeText');
     //make slide at given index active
     $($dots[index]).addClass('active');
   };

  //return the slider object with public methods
  return slider;

}(jQuery)); //pass in any needed global variables
