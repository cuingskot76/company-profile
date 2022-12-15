// hamburger menu
const hamburger = document.querySelector(".ham");
const navMenu = document.querySelector(".navbar__menu");
const linksList = document.querySelectorAll(".navbar__menu li");
const linksListA = document.querySelectorAll(".nav-links li a");
const hamburgerLines = document.querySelectorAll(".ham .line");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerLines.forEach((line) => {
    line.classList.toggle("active");
  });

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
      hamburgerLines.forEach((line) => {
        line.classList.remove("active");
      });
      linksList.forEach((link) => {
        link.classList.remove("fade");
      });
    }
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
