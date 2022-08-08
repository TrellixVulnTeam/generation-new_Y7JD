"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollHeader = scrollHeader;
var header = document.querySelector(".header");
var hideHeader = document.querySelector(".header-content");
var btnBurger = document.querySelector(".navTrigger");

function scrollHeader() {
  if (window.innerWidth > 768) {
    var _scrollHeader = window.addEventListener("scroll", function () {
      if (this.window.scrollY >= 50) {
        header.classList.add("scrolled-header");

        if (header.classList.contains("scrolled-header")) {
          // this.document.querySelector(".logo").src = "./img/LogoScroll.png";
          if (this.location.pathname == '/') {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }

          if (this.location.pathname == '/index.html') {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }
        }
      } else {
        header.classList.remove("scrolled-header");

        if (!header.classList.contains("scrolled-header")) {
          if (this.location.pathname == '/index.html') {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          }

          if (this.location.pathname == '/') {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          } // this.document.querySelector(".logo").src = "./img/Logo.svg";

        }
      }
    }); // return scrollHeader

  } else {
    var _scrollHeader2 = window.addEventListener("scroll", function () {
      if (this.window.scrollY >= 50) {
        header.classList.add("scrolled-mob-header");

        if (header.classList.contains("scrolled-mob-header")) {
          if (this.location.pathname == '/') {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }

          if (this.location.pathname == '/index.html') {
            this.document.querySelector(".logo").src = "../img/LogoScroll.png";
          }
        }
      } else {
        header.classList.remove("scrolled-mob-header");

        if (!header.classList.contains("scrolled-mob-header")) {
          if (this.location.pathname == '/index.html') {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          }

          if (this.location.pathname == '/') {
            this.document.querySelector(".logo").src = "../img/Logo.svg";
          }
        }
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2Nyb2xsLWhlYWRlci5qcyJdLCJuYW1lcyI6WyJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlSGVhZGVyIiwiYnRuQnVyZ2VyIiwic2Nyb2xsSGVhZGVyIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3JjIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQW5CO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7O0FBRUEsU0FBU0csWUFBVCxHQUF3QjtBQUN0QixNQUFHQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBdkIsRUFBNEI7QUFHMUIsUUFBTUYsYUFBWSxHQUFHQyxNQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVk7QUFDakUsVUFBSSxLQUFLRixNQUFMLENBQVlHLE9BQVosSUFBdUIsRUFBM0IsRUFBK0I7QUFDN0JULFFBQUFBLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsaUJBQXJCOztBQUNBLFlBQUlYLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQkUsUUFBakIsQ0FBMEIsaUJBQTFCLENBQUosRUFBa0Q7QUFDaEQ7QUFDQSxjQUFHLEtBQUtDLFFBQUwsQ0FBY0MsUUFBZCxJQUEwQixHQUE3QixFQUFrQztBQUNoQyxpQkFBS2IsUUFBTCxDQUFjQyxhQUFkLENBQTRCLE9BQTVCLEVBQXFDYSxHQUFyQyxHQUEyQyx1QkFBM0M7QUFDRDs7QUFDRCxjQUFHLEtBQUtGLFFBQUwsQ0FBY0MsUUFBZCxJQUEwQixhQUE3QixFQUE0QztBQUMxQyxpQkFBS2IsUUFBTCxDQUFjQyxhQUFkLENBQTRCLE9BQTVCLEVBQXFDYSxHQUFyQyxHQUEyQyx1QkFBM0M7QUFDRDtBQUNGO0FBQ0YsT0FYRCxNQVdPO0FBQ0xmLFFBQUFBLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQk0sTUFBakIsQ0FBd0IsaUJBQXhCOztBQUNBLFlBQUksQ0FBQ2hCLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQkUsUUFBakIsQ0FBMEIsaUJBQTFCLENBQUwsRUFBbUQ7QUFDakQsY0FBRyxLQUFLQyxRQUFMLENBQWNDLFFBQWQsSUFBMEIsYUFBN0IsRUFBNEM7QUFDMUMsaUJBQUtiLFFBQUwsQ0FBY0MsYUFBZCxDQUE0QixPQUE1QixFQUFxQ2EsR0FBckMsR0FBMkMsaUJBQTNDO0FBQ0Q7O0FBQ0QsY0FBRyxLQUFLRixRQUFMLENBQWNDLFFBQWQsSUFBMEIsR0FBN0IsRUFBa0M7QUFDaEMsaUJBQUtiLFFBQUwsQ0FBY0MsYUFBZCxDQUE0QixPQUE1QixFQUFxQ2EsR0FBckMsR0FBMkMsaUJBQTNDO0FBQ0QsV0FOZ0QsQ0FPakQ7O0FBQ0Q7QUFDRjtBQUNGLEtBeEJvQixDQUFyQixDQUgwQixDQTRCMUI7O0FBQ0QsR0E3QkQsTUE2Qk87QUFFTCxRQUFNVixjQUFZLEdBQUdDLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBWTtBQUNqRSxVQUFJLEtBQUtGLE1BQUwsQ0FBWUcsT0FBWixJQUF1QixFQUEzQixFQUErQjtBQUM3QlQsUUFBQUEsTUFBTSxDQUFDVSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixxQkFBckI7O0FBQ0EsWUFBSVgsTUFBTSxDQUFDVSxTQUFQLENBQWlCRSxRQUFqQixDQUEwQixxQkFBMUIsQ0FBSixFQUFzRDtBQUNwRCxjQUFHLEtBQUtDLFFBQUwsQ0FBY0MsUUFBZCxJQUEwQixHQUE3QixFQUFrQztBQUNoQyxpQkFBS2IsUUFBTCxDQUFjQyxhQUFkLENBQTRCLE9BQTVCLEVBQXFDYSxHQUFyQyxHQUEyQyx1QkFBM0M7QUFDRDs7QUFDRCxjQUFHLEtBQUtGLFFBQUwsQ0FBY0MsUUFBZCxJQUEwQixhQUE3QixFQUE0QztBQUMxQyxpQkFBS2IsUUFBTCxDQUFjQyxhQUFkLENBQTRCLE9BQTVCLEVBQXFDYSxHQUFyQyxHQUEyQyx1QkFBM0M7QUFDRDtBQUNGO0FBQ0YsT0FWRCxNQVVPO0FBQ0xmLFFBQUFBLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQk0sTUFBakIsQ0FBd0IscUJBQXhCOztBQUNBLFlBQUksQ0FBQ2hCLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQkUsUUFBakIsQ0FBMEIscUJBQTFCLENBQUwsRUFBdUQ7QUFDckQsY0FBRyxLQUFLQyxRQUFMLENBQWNDLFFBQWQsSUFBMEIsYUFBN0IsRUFBNEM7QUFDMUMsaUJBQUtiLFFBQUwsQ0FBY0MsYUFBZCxDQUE0QixPQUE1QixFQUFxQ2EsR0FBckMsR0FBMkMsaUJBQTNDO0FBQ0Q7O0FBQ0QsY0FBRyxLQUFLRixRQUFMLENBQWNDLFFBQWQsSUFBMEIsR0FBN0IsRUFBa0M7QUFDaEMsaUJBQUtiLFFBQUwsQ0FBY0MsYUFBZCxDQUE0QixPQUE1QixFQUFxQ2EsR0FBckMsR0FBMkMsaUJBQTNDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0F0Qm9CLENBQXJCO0FBdUJEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5jb25zdCBoaWRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItY29udGVudFwiKTtcclxuY29uc3QgYnRuQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZUcmlnZ2VyXCIpO1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsSGVhZGVyKCkge1xyXG4gIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzY3JvbGxIZWFkZXIgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLndpbmRvdy5zY3JvbGxZID49IDUwKSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJzY3JvbGxlZC1oZWFkZXJcIikpIHtcclxuICAgICAgICAgIC8vIHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLnNyYyA9IFwiLi9pbWcvTG9nb1Njcm9sbC5wbmdcIjtcclxuICAgICAgICAgIGlmKHRoaXMubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLnNyYyA9IFwiLi4vaW1nL0xvZ29TY3JvbGwucG5nXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uLnBhdGhuYW1lID09ICcvaW5kZXguaHRtbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIikuc3JjID0gXCIuLi9pbWcvTG9nb1Njcm9sbC5wbmdcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgaWYgKCFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Nyb2xsZWQtaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uLnBhdGhuYW1lID09ICcvaW5kZXguaHRtbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIikuc3JjID0gXCIuLi9pbWcvTG9nby5zdmdcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHRoaXMubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLnNyYyA9IFwiLi4vaW1nL0xvZ28uc3ZnXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKS5zcmMgPSBcIi4vaW1nL0xvZ28uc3ZnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHJldHVybiBzY3JvbGxIZWFkZXJcclxuICB9IGVsc2Uge1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhlYWRlciA9IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMud2luZG93LnNjcm9sbFkgPj0gNTApIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGVkLW1vYi1oZWFkZXJcIik7XHJcbiAgICAgICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJzY3JvbGxlZC1tb2ItaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uLnBhdGhuYW1lID09ICcvJykge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKS5zcmMgPSBcIi4uL2ltZy9Mb2dvU2Nyb2xsLnBuZ1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYodGhpcy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2luZGV4Lmh0bWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLnNyYyA9IFwiLi4vaW1nL0xvZ29TY3JvbGwucG5nXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsZWQtbW9iLWhlYWRlclwiKTtcclxuICAgICAgICBpZiAoIWhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJzY3JvbGxlZC1tb2ItaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uLnBhdGhuYW1lID09ICcvaW5kZXguaHRtbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIikuc3JjID0gXCIuLi9pbWcvTG9nby5zdmdcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHRoaXMubG9jYXRpb24ucGF0aG5hbWUgPT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLnNyYyA9IFwiLi4vaW1nL0xvZ28uc3ZnXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBzY3JvbGxIZWFkZXIgfTtcclxuXHJcblxyXG4iXSwiZmlsZSI6Im1vZHVsZXMvc2Nyb2xsLWhlYWRlci5qcyJ9