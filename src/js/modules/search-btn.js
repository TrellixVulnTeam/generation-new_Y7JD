const searchBtn = document.querySelector(".nav-search");
const closeSearchBar = document.querySelector(".closebtn-search");
const inputSearch = document.querySelector(".search-bar-input");
const searchOverlay = document.querySelector(".search-overlay");

let html = document.documentElement;

function openSearch() {
  searchOverlay.classList.add("search-overlay--active");
  document.documentElement.classList.add("hystmodal__opened");
}
function closeSearch() {
  searchOverlay.classList.remove("search-overlay--active");
  document.documentElement.classList.remove("hystmodal__opened");
}

searchBtn.addEventListener("click", openSearch);
closeSearchBar.addEventListener("click", closeSearch);
