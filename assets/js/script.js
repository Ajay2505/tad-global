var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".left_arrow",
    },
    slidesPerView: 5,
    loop: true,
    speed: 3500,
    autoplay: {      
      delay: 0,
      disableOnInteraction: false,
    },
  });

var swiper3 = new Swiper(".v_one", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    loop: true,
});

var swiper4 = new Swiper(".v_two", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 30,
 
  loop: true,
});

// Disable page scrolling when inside dual_scroll_container
$(".dual_scroll_container").on("mousewheel DOMMouseScroll", function (e) {
  var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

  if (delta > 0) {
    swiper3.slideNext();
    swiper4.slidePrev();
  } else {
    swiper3.slidePrev();
    swiper4.slideNext();
  }

  return false;
});

// Next button click event
$(".dual_next").on("click", function () {
  swiper3.slideNext();
  swiper4.slidePrev();
});

// Previous button click event
$(".dual_prev").on("click", function () {
  swiper3.slidePrev();
  swiper4.slideNext();
});



jQuery(document).ready(function ($) {
  let autoPlayDelay = 1500;

  let options = {
    init: true,
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,

    autoplay: {
      delay: autoPlayDelay,
    },

    // If we need pagination
    /*pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },*/

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  var swiper2 = new Swiper(".our-services", options);

  let slidersCount = swiper2.params.loop
    ? swiper2.slides.length - 2
    : swiper2.slides.length;
  let widthParts = 100 / slidersCount;

  $(".swiper-counter .total").html(slidersCount);
  for (let i = 0; i < slidersCount; i++) {
    $(".swiper-progress-bar .progress-sections").append("<span></span>");
  }

  function initProgressBar() {
    let calcProgress =
      (slidersCount - 1) * (autoPlayDelay + swiper2.params.speed);
    calcProgress += autoPlayDelay;
    $(".swiper-progress-bar .progress").animate(
      {
        width: "100%",
      },
      calcProgress,
      "linear"
    );
  }

  initProgressBar();

  swiper2.on("slideChange", function () {
    let progress = $(".swiper-progress-bar .progress");

    $(".swiper-counter .current").html(this.activeIndex + 1);

    if (
      (this.progress == -0 || (this.progress == 1 && this.params.loop)) &&
      !progress.parent().is(".stopped")
    ) {
      progress.css("width", "0");
      if (this.activeIndex == 0) {
        initProgressBar();
      }
    }

    if (progress.parent().is(".stopped")) {
      progress.animate(
        {
          width: Math.round(widthParts * (this.activeIndex + 1)) + "%",
        },
        this.params.speed,
        "linear"
      );
    }
  });

  swiper2.on("touchMove", function () {
    $(".swiper-progress-bar .progress").stop().parent().addClass("stopped");
  });
});

const textWrappers = document.querySelectorAll(".text_wrapper");
if (textWrappers && textWrappers.length) {
  textWrappers.forEach(text => {
    const directChildren = Array.from(text.children);
    directChildren.forEach(child => {
      gsap.to(child, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            start: "top 90%",
            end: "center 70%",
            trigger: text,
            scrub: 1,
            // markers: true,
          }
      });
    });
  });
}


const verticalReveal = document.querySelectorAll(".vertical_reveal");
if (verticalReveal && verticalReveal.length) {
  verticalReveal.forEach(text => {
    const directChildren = Array.from(text.children);
    directChildren.forEach(child => {
      gsap.to(child, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            start: "top 90%",
            end: "center 70%",
            trigger: text,
            scrub: 1,
            // markers: true,
          }
      });
    });
  });
}