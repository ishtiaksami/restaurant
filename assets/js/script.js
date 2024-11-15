function toggleMenu() {
  const menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("hidden");
}

// swiper Slider
new Swiper(".mySwiper", {
  slidesPerView: 1, // Default to 4 slides at once
  spaceBetween: 10, // Adjust spacing between slides as needed
  speed: 700, // Adjust speed (in ms) for smoother navigation, e.g., 700ms
  loop: true,
  autoplay: {
    delay: 2000, // Adjust the delay (in ms) between slides, e.g., 3000ms (3 seconds)
  },
  navigation: {
    nextEl: ".promo-next",
    prevEl: ".promo-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 3, // Show 1 slide at once when width is 767px or greater
    },
    1024: {
      slidesPerView: 4, // Show 1 slide at once when width is 767px or greater
    },
  },
});

new Swiper(".mySwiper2", {
  slidesPerView: 1, // Show 4 slides at once
  spaceBetween: 10, // Adjust spacing between slides as needed
  speed: 700, // Adjust speed (in ms) for smoother navigation, e.g., 700ms
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// Get all tab elements and content blocks
$(document).ready(function() {
  $(".tab").on("click", function() {
    const target = $(this).data("tab");

    // Remove active classes
    $(".tab").removeClass("active-tab");
    $(".tab-content").addClass("hidden");

    // Add active classes
    $(this).addClass("active-tab");
    $("#" + target).removeClass("hidden");
  });
});


// Detect when the element is in view and apply the animation
function isInView(element) {
  const rect = $(element)[0].getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= $(window).height();
}

function checkScroll() {
  $(".fade-up-scroll").each(function() {
    if (isInView(this)) {
      $(this).addClass("show"); // Apply the show class to trigger the animation
    }
  });
}

// Check scroll position on load and when scrolling
$(window).on("scroll", checkScroll);
$(window).on("load", checkScroll);

// Initial check in case elements are already in view when the page loads
checkScroll();

