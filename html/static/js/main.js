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
      behavior: 'smooth',
      block:'start',
    });
}

// Function to scroll from second button
function scrollNext(){
    document.querySelector('.end').scrollIntoView({
      behavior: 'smooth',
      block:'start',
    });
}

// Next button function
// function scrollTop(){
//   document.getElementById('.scrolltotop').scrollIntoView({
//     behavior: 'smooth',
//     });
// }

// function scrollTop(){
//   window.scroll({
//     top: 0, left: 0, behavior: 'smooth',
//   });
// }