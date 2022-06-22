// const headerNavBtns = document.querySelector(".menu");
// const navBtn = headerNavBtns.getElementsByClassName('nav-link')

// function navLink() {
//   for(let i=0; i< navBtn.length; i++) {
//     navBtn[i].addEventListener('click', function() {
//       console.log("DSAASDSAAS");
//     })
//   }
// }

// export { navLink }

$(document).ready(function navLink() {
  //Open Drop Down
  $(".nav-link").click(function (e) {
    e.preventDefault();

    if ($(".nav-items").hasClass("active-nav-link")) {
      $("..nav-items").removeClass("active-nav-link");
      $(this).parent().parent().toggleClass("active-nav-link");
    } else {
      $(this).parent().parent().toggleClass("active-nav-link");
    }
  });

  // close when click on Body
  // $("html").click(function (event) {
  //   if ($(event.target).closest(".custom-select").length === 0) {
  //     $(".custom-select-wrapper").removeClass("open-dropdown");
  //   }
  // });
});

