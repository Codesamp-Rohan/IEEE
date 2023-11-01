const cursor = document.querySelector(".cursor");
const page = document.querySelector(".page1");
const page1_content = document.querySelectorAll(".page1-content");

const parallaxBg = document.querySelector(".parallax-bg");
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const translateY = -scrollY * 0.4; // Adjust the factor to control the parallax speed
  parallaxBg.style.transform = `translate3d(0, ${translateY}px, 0)`;
});

window.addEventListener("load", function () {
  const loader = this.document.querySelector(".loaderPage");
  loader.style.display = "none";
});
window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    cursor.style.scale = "1";
    page.style.height = "100vh";
    page1_content.forEach((elem) => {
      elem.style.display = "block";
    });
  }
});
function slider() {
  const slider = document.querySelector(".page1");
  const sections = document.querySelectorAll("section");
  let currentSlide = 0;
  function showSlide(index) {
    sections.forEach((section, i) => {
      if (i === index) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % sections.length;
    showSlide(currentSlide);
  }
  showSlide(currentSlide);
  setInterval(nextSlide, 2000);
}
function menuOpenClose() {
  const menuBtn = document.querySelector(".menu_btn");
  const menuDropDown = document.querySelector(".nav_dropdown");
  const menuClose = document.querySelector(".menu_close");
  menuBtn.addEventListener("click", function (e) {
    console.log("click");
    menuDropDown.style.transform = "translateX(0%)";
  });
  menuClose.addEventListener("click", function () {
    menuDropDown.style.transform = "translateX(-100%)";
  });
}
function cursorHover() {
  const page = document.querySelector(".page1");
  page.addEventListener("mouseenter", function (elem) {
    cursor.style.display = "block";
    page.addEventListener("mousemove", function (e) {
      cursor.animate(
        {
          left: e.pageX + "px",
          top: e.pageY + "px",
        },
        { duration: 500, fill: "forwards" }
      );
    });
  });
  page.addEventListener("mouseleave", function () {
    cursor.style.display = "none";
  });
}
function pageChange() {
  cursor.addEventListener("click", function (e) {
    e.preventDefault();
    cursor.style.scale = "0";
    page.style.height = "0vh";
    page1_content.forEach((elem) => {
      elem.style.display = "none";
    });
  });
}
function scrollReveal() {
  window.addEventListener("scroll", revealItem);
  function revealItem() {
    const reveal = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveal[i].getBoundingClientRect().top;
      var revealPoint = 200;
      if (revealTop < windowHeight - revealPoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
}
function inspiration() {
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      }

      const offset = currentIndex * -100;
      slider.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
      currentIndex++;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex--;
      showSlide(currentIndex);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentIndex);
  });
}
function teamSlider() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    breakpoints: {
      // When window width is >= 768px
      900: {
        slidesPerView: 3,
      },
      650: {
        slidesPerView: 2,
      },
    },
  });
}
function teamDropDown() {
  const teamSpan = document.querySelector(".nav--team");
  const dropdownBox = document.querySelector(".dropdown");
  teamSpan.addEventListener("mouseenter", function (e) {
    dropdownBox.style.transform = `translateY(0%)`;
    console.log("Entered");
  });
  dropdownBox.addEventListener("mouseleave", function (elem) {
    dropdownBox.style.transform = "translateY(-100%)";
  });
}
function smoothScroll() {
  document
    .querySelector(".team2023")
    .getAttribute("href")
    .scrollIntoView({ behavior: "smooth" });
}
slider();
menuOpenClose();
cursorHover();
pageChange();
scrollReveal();
inspiration();
teamSlider();
teamDropDown();
smoothScroll();
