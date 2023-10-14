const cursor = document.querySelector(".cursor");
const page = document.querySelector(".page1");

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
    page.style.height = "0vh";
  });
}
function logoBackBtn() {
  const logoBtn = document.querySelectorAll(".logoBtn");
  logoBtn.forEach((e) => {
    e.addEventListener("click", function (elem) {
      elem.preventDefault();
      page.style.height = "100vh";
    });
  });
}
window.addEventListener("scroll", function () {
  // Check if the user is scrolling up
  if (window.scrollY === 0) {
    // If at the top of the page, restore the page height
    page.style.height = "100vh";
  }
});
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
slider();
cursorHover();
pageChange();
logoBackBtn();
scrollReveal();
