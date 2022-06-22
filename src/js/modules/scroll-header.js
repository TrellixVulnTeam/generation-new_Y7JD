const header = document.querySelector(".header");
const hideHeader = document.querySelector(".header-content");

const scrollHeader = window.addEventListener("scroll", function () {
  if (this.window.scrollY > 98) {
    header.classList.add("scrolled-header");
    if (header.classList.contains("scrolled-header")) {
      this.document.querySelector(".logo").src = "./img/LogoScroll.png";
    }
  } else {
    header.classList.remove("scrolled-header");
    if (!header.classList.contains("scrolled-header")) {
      this.document.querySelector(".logo").src = "./img/Logo.svg";
    }
  }
});

export { scrollHeader };
