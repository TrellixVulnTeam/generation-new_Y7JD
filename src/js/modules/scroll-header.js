const header = document.querySelector(".header");
const hideHeader = document.querySelector(".header-content");
const btnBurger = document.querySelector(".navTrigger");

function scrollHeader() {
  if (window.innerWidth > 768) {
    const scrollHeader = window.addEventListener("scroll", function () {
      if (this.window.scrollY >= 50) {
        header.classList.add("scrolled-header");
        if (header.classList.contains("scrolled-header")) {

          if (this.location.pathname == "/") {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }
          if (this.location.pathname == "/index.html") {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }
        }
      } else {
        header.classList.remove("scrolled-header");
        if (!header.classList.contains("scrolled-header")) {
          if (this.location.pathname == "/index.html") {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          }
          if (this.location.pathname == "/") {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          }
        }
      }
    });
  } else {
    const scrollHeader = window.addEventListener("scroll", function () {
      if (this.window.scrollY >= 50) {
        header.classList.add("scrolled-mob-header");
        if (header.classList.contains("scrolled-mob-header")) {
          if (this.location.pathname == "/") {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }
          if (this.location.pathname == "/index.html") {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }
        }
      } else {
        header.classList.remove("scrolled-mob-header");
        if (!header.classList.contains("scrolled-mob-header")) {
          if (this.location.pathname == "/index.html") {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          }
          if (this.location.pathname == "/") {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          }
        }
      }
    });
  }
}

export { scrollHeader };
