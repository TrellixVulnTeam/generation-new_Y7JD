const searchBtn = document.querySelector(".nav-search");
const closeSearchBar = document.querySelector(".closebtn-search");
const inputSearch = document.querySelector(".search-bar-input");
const inputSearchPage = document.querySelector(".search-bar--in");
const searchOverlay = document.querySelector(".search-overlay");
const closeBtnInput = document.querySelector(".close-btn-search--page");

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
inputSearchPage.addEventListener("keyup", function () {
  if (this.value != "") {
    document
      .querySelector(".close-btn-search--page")
      .classList.add("close-btn-search--active");
    document.querySelector(".arrow-search--page").style.display = "none";
  } else {
    document
      .querySelector(".close-btn-search--page")
      .classList.remove("close-btn-search--active");
    document.querySelector(".arrow-search--page").style.display =
      "inline-block";
  }
});
closeBtnInput.addEventListener("click", function () {
  inputSearchPage.value = "";
  closeBtnInput.classList.remove("close-btn-search--active");
  document.querySelector(".arrow-search--page").style.display = "inline-block";
});
