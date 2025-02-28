let goUpButton = document.getElementById("go-up"); // scroll button
let nav = document.getElementById("nav"); // nav
let navLogo = document.getElementById("navLogo"); // nav logo
let link = document.querySelectorAll(".navbar-nav .nav-link"); // ul > li
let navIcon = document.getElementById("navbar-toggler"); // nav icon

window.onscroll = function () {
  if (window.scrollY >= 50) {
    goUpButton.style.opacity = "1";
    nav.style.cssText = `
    background-color: white;
    padding: 10px;
    `;
    navLogo.style.color = `#0078ff`;
    navIcon.style.color = `black`;
    for (let i = 0; i < link.length; i++) {
      link[i].style.color = `#0078ff`;
    }
  } else {
    goUpButton.style.opacity = "0";
    nav.style.cssText = `
    background-color: transparent;
    padding: 20px;
    `;
    navLogo.style.color = `#fff`;
    navIcon.style.color = `white`;
    for (let i = 0; i < link.length; i++) {
      link[i].style.color = `#fff`;
    }
  }
};

// nav icon win click on it
navIcon.onclick = function () {
  navIcon.style.color = `black`;
  nav.style.backgroundColor = "#fff";
  navLogo.style.color = `#0078ff`;
  for (let i = 0; i < link.length; i++) {
    link[i].style.color = `#0078ff`;
  }
};

// scroll up button
goUpButton.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
