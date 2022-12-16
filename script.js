// hamburger menu
const hamburger = document.querySelector(".ham");
const navMenuContent = document.querySelector(".navbar__menu-content");
const navMenu = document.querySelector(".navbar__menu");
const linksList = document.querySelectorAll(".navbar__menu li");
const linksListA = document.querySelectorAll(".nav-links li a");
const hamburgerLines = document.querySelectorAll(".ham .line");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerLines.forEach((line) => {
    line.classList.toggle("active");
  });

  navMenuContent.classList.toggle("open");

  navMenu.classList.toggle("open");

  linksList.forEach((link) => {
    link.classList.toggle("fade");

    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburgerLines.forEach((line) => {
        line.classList.remove("active");
      });
      linksList.forEach((link) => {
        link.classList.remove("fade");
      });
    });
  });

  // remove active class when user click oustside nav
  window.addEventListener("click", function (e) {
    if (e.target !== navMenu && e.target !== hamburger) {
      navMenu.classList.remove("open");
      hamburger.classList.remove("active");
      navMenuContent.classList.remove("open");

      hamburgerLines.forEach((line) => {
        line.classList.remove("active");
      });
      linksList.forEach((link) => {
        link.classList.remove("fade");
      });
    }
  });
});

// link active
const navbarA = document.querySelectorAll(".navbar__menu li a");
navbarA.forEach((link) => {
  link.addEventListener("click", () => {
    navbarA.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// navbar scroll
const nav = document.querySelector(".navbar");
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

// accordion__faq
const titleFaq = document.querySelectorAll(".FAQ__content-right-box-title");
const contentFaq = document.querySelectorAll(".FAQ__content-right-box-desc");
const contentIcon = document.querySelectorAll(
  ".FAQ__content-right-box-title i"
);

titleFaq.forEach((title, i) => {
  title.addEventListener("click", () => {
    title.classList.toggle("active");
    contentFaq[i].classList.toggle("active");

    titleFaq.forEach((title, j) => {
      if (i !== j) {
        title.classList.remove("active");
        contentFaq[j].classList.remove("active");

        // change icon
        contentIcon[j].classList.remove("ri-subtract-line");
        contentIcon[j].classList.add("ri-add-line");
      } else {
        contentIcon[i].classList.toggle("ri-subtract-line");
        contentIcon[i].classList.toggle("ri-add-line");
      }
    });
  });
});

// test slider
const slider = document.querySelector(".gallery");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 1;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});
