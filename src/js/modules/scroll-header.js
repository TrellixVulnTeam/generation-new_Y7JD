const header = document.querySelector(".header");
const hideHeader = document.querySelector(".header-content");

const scrollHeader = window.addEventListener("scroll", function () {
  if (this.window.scrollY > 98) {
    header.classList.add("scrolled-header");
    if (header.classList.contains("scrolled-header")) {
  
    }
  } else {
    header.classList.remove("scrolled-header");
  }
});

export { scrollHeader };
