let navbar = document.querySelector(".header .navbar");
let menubtn = document.querySelector("#menu-btn");

menubtn.onclick = () => {
  menubtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// navbar
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// swiper

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Function to toggle heart icon
// function toggleHeartIcon() {
//   const heartIcon = document.getElementById("heart");
//   heartIcon.classList.toggle("fa-regular");
//   heartIcon.classList.toggle("fas");
// }

// // Toggle heart icon every 1 second
// setInterval(toggleHeartIcon, 1000);
