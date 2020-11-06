// home slider
$(".home-slider").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 0,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  nav: true,
  autoplayHoverPause: true,
  items: 1,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: false,
    },
  },
});

// Next button function
function smoothScroll(){
    document.querySelector('.next').scrollIntoView({
        behavior: 'smooth'
    });
}