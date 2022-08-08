"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HystModal = /*#__PURE__*/function () {
  function HystModal(props) {
    _classCallCheck(this, HystModal);

    var defaultConfig = {
      backscroll: true,
      linkAttributeName: "data-hystmodal",
      closeOnOverlay: true,
      closeOnEsc: true,
      closeOnButton: true,
      waitTransitions: false,
      catchFocus: true,
      fixedSelectors: "*[data-hystfixed]",
      beforeOpen: function beforeOpen() {},
      afterClose: function afterClose() {}
    };
    this.config = Object.assign(defaultConfig, props);

    if (this.config.linkAttributeName) {
      this.init();
    }

    this._closeAfterTransition = this._closeAfterTransition.bind(this);
  }

  _createClass(HystModal, [{
    key: "init",
    value: function init() {
      this.isOpened = false;
      this.openedWindow = false;
      this.starter = false, this._nextWindows = false;
      this._scrollPosition = 0;
      this._reopenTrigger = false;
      this._overlayChecker = false, this._isMoved = false;
      this._focusElements = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'];
      this._modalBlock = false;

      if (!HystModal._shadow) {
        HystModal._shadow = document.createElement("button");

        HystModal._shadow.classList.add("hystmodal__shadow");

        document.body.appendChild(HystModal._shadow);
      }

      this.eventsFeeler();
    }
  }, {
    key: "eventsFeeler",
    value: function eventsFeeler() {
      document.addEventListener("click", function (e) {
        var clickedlink = e.target.closest("[" + this.config.linkAttributeName + "]");

        if (!this._isMoved && clickedlink) {
          e.preventDefault();
          this.starter = clickedlink;
          var targetSelector = this.starter.getAttribute(this.config.linkAttributeName);
          this._nextWindows = document.querySelector(targetSelector);
          this.open();
          return;
        }

        if (this.config.closeOnButton && e.target.closest("[data-hystclose]")) {
          this.close();
          return;
        }
      }.bind(this));

      if (this.config.closeOnOverlay) {
        document.addEventListener("mousedown", function (e) {
          if (!this._isMoved && e.target instanceof Element && !e.target.classList.contains("hystmodal__wrap")) return;
          this._overlayChecker = true;
        }.bind(this));
        document.addEventListener("mouseup", function (e) {
          if (!this._isMoved && e.target instanceof Element && this._overlayChecker && e.target.classList.contains("hystmodal__wrap")) {
            e.preventDefault();
            !this._overlayChecker;
            this.close();
            return;
          }

          this._overlayChecker = false;
        }.bind(this));
      }

      window.addEventListener("keydown", function (e) {
        if (!this._isMoved && this.config.closeOnEsc && e.which == 27 && this.isOpened) {
          e.preventDefault();
          this.close();
          return;
        }

        if (!this._isMoved && this.config.catchFocus && e.which == 9 && this.isOpened) {
          this.focusCatcher(e);
          return;
        }
      }.bind(this));
    }
  }, {
    key: "open",
    value: function open(selector) {
      if (selector) {
        if (typeof selector === "string") {
          this._nextWindows = document.querySelector(selector);
        } else {
          this._nextWindows = selector;
        }
      }

      if (!this._nextWindows) {
        console.log("Warinig: hustModal selector is not found");
        return;
      }

      if (this.isOpened) {
        this._reopenTrigger = true;
        this.close();
        return;
      }

      this.openedWindow = this._nextWindows;
      this._modalBlock = this.openedWindow.querySelector(".hystmodal__window");
      this.config.beforeOpen(this);

      this._bodyScrollControl();

      HystModal._shadow.classList.add("hystmodal__shadow--show");

      this.openedWindow.classList.add("hystmodal--active");
      this.openedWindow.setAttribute("aria-hidden", "false");
      if (this.config.catchFocus) this.focusContol();
      this.isOpened = true;
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.isOpened) {
        return;
      }

      if (this.config.waitTransitions) {
        this.openedWindow.classList.add("hystmodal--moved");
        this._isMoved = true;
        this.openedWindow.addEventListener("transitionend", this._closeAfterTransition);
        this.openedWindow.classList.remove("hystmodal--active");
      } else {
        this.openedWindow.classList.remove("hystmodal--active");

        this._closeAfterTransition();
      }
    }
  }, {
    key: "_closeAfterTransition",
    value: function _closeAfterTransition() {
      this.openedWindow.classList.remove("hystmodal--moved");
      this.openedWindow.removeEventListener("transitionend", this._closeAfterTransition);
      this._isMoved = false;

      HystModal._shadow.classList.remove("hystmodal__shadow--show");

      this.openedWindow.setAttribute("aria-hidden", "true");
      if (this.config.catchFocus) this.focusContol();

      this._bodyScrollControl();

      this.isOpened = false;
      this.openedWindow.scrollTop = 0;
      this.config.afterClose(this);

      if (this._reopenTrigger) {
        this._reopenTrigger = false;
        this.open();
      }
    }
  }, {
    key: "focusContol",
    value: function focusContol() {
      var nodes = this.openedWindow.querySelectorAll(this._focusElements);

      if (this.isOpened && this.starter) {
        this.starter.focus();
      } else {
        if (nodes.length) nodes[0].focus();
      }
    }
  }, {
    key: "focusCatcher",
    value: function focusCatcher(e) {
      var nodes = this.openedWindow.querySelectorAll(this._focusElements);
      var nodesArray = Array.prototype.slice.call(nodes);

      if (!this.openedWindow.contains(document.activeElement)) {
        nodesArray[0].focus();
        e.preventDefault();
      } else {
        var focusedItemIndex = nodesArray.indexOf(document.activeElement);
        console.log(focusedItemIndex);

        if (e.shiftKey && focusedItemIndex === 0) {
          nodesArray[nodesArray.length - 1].focus();
          e.preventDefault();
        }

        if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
          nodesArray[0].focus();
          e.preventDefault();
        }
      }
    }
  }, {
    key: "_bodyScrollControl",
    value: function _bodyScrollControl() {
      if (!this.config.backscroll) return; // collect fixel selectors to array

      var fixedSelectors = Array.prototype.slice.call(document.querySelectorAll(this.config.fixedSelectors));
      var html = document.documentElement;

      if (this.isOpened === true) {
        html.classList.remove("hystmodal__opened");
        html.style.marginRight = "";
        fixedSelectors.map(function (el) {
          el.style.marginRight = "";
        });
        window.scrollTo(0, this._scrollPosition);
        html.style.top = "";
        return;
      }

      this._scrollPosition = window.pageYOffset;
      var marginSize = window.innerWidth - html.clientWidth;
      html.style.top = -this._scrollPosition + "px";

      if (marginSize) {
        html.style.marginRight = marginSize + "px";
        fixedSelectors.map(function (el) {
          el.style.marginRight = parseInt(getComputedStyle(el).marginRight) + marginSize + "px";
        });
      }

      html.classList.add("hystmodal__opened");
    }
  }]);

  return HystModal;
}();

exports.default = HystModal;

_defineProperty(HystModal, "_shadow", false);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh5c3Rtb2RhbC5qcyJdLCJuYW1lcyI6WyJIeXN0TW9kYWwiLCJwcm9wcyIsImRlZmF1bHRDb25maWciLCJiYWNrc2Nyb2xsIiwibGlua0F0dHJpYnV0ZU5hbWUiLCJjbG9zZU9uT3ZlcmxheSIsImNsb3NlT25Fc2MiLCJjbG9zZU9uQnV0dG9uIiwid2FpdFRyYW5zaXRpb25zIiwiY2F0Y2hGb2N1cyIsImZpeGVkU2VsZWN0b3JzIiwiYmVmb3JlT3BlbiIsImFmdGVyQ2xvc2UiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJpbml0IiwiX2Nsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiYmluZCIsImlzT3BlbmVkIiwib3BlbmVkV2luZG93Iiwic3RhcnRlciIsIl9uZXh0V2luZG93cyIsIl9zY3JvbGxQb3NpdGlvbiIsIl9yZW9wZW5UcmlnZ2VyIiwiX292ZXJsYXlDaGVja2VyIiwiX2lzTW92ZWQiLCJfZm9jdXNFbGVtZW50cyIsIl9tb2RhbEJsb2NrIiwiX3NoYWRvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImV2ZW50c0ZlZWxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xpY2tlZGxpbmsiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXRTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuIiwiY2xvc2UiLCJFbGVtZW50IiwiY29udGFpbnMiLCJ3aW5kb3ciLCJ3aGljaCIsImZvY3VzQ2F0Y2hlciIsInNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsIl9ib2R5U2Nyb2xsQ29udHJvbCIsInNldEF0dHJpYnV0ZSIsImZvY3VzQ29udG9sIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvcCIsIm5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvY3VzIiwibGVuZ3RoIiwibm9kZXNBcnJheSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYWN0aXZlRWxlbWVudCIsImZvY3VzZWRJdGVtSW5kZXgiLCJpbmRleE9mIiwic2hpZnRLZXkiLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsIm1hcCIsImVsIiwic2Nyb2xsVG8iLCJ0b3AiLCJwYWdlWU9mZnNldCIsIm1hcmdpblNpemUiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsUztBQUNuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixRQUFJQyxhQUFhLEdBQUc7QUFDbEJDLE1BQUFBLFVBQVUsRUFBRSxJQURNO0FBRWxCQyxNQUFBQSxpQkFBaUIsRUFBRSxnQkFGRDtBQUdsQkMsTUFBQUEsY0FBYyxFQUFFLElBSEU7QUFJbEJDLE1BQUFBLFVBQVUsRUFBRSxJQUpNO0FBS2xCQyxNQUFBQSxhQUFhLEVBQUUsSUFMRztBQU1sQkMsTUFBQUEsZUFBZSxFQUFFLEtBTkM7QUFPbEJDLE1BQUFBLFVBQVUsRUFBRSxJQVBNO0FBUWxCQyxNQUFBQSxjQUFjLEVBQUUsbUJBUkU7QUFTbEJDLE1BQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBVEY7QUFVbEJDLE1BQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFO0FBVkYsS0FBcEI7QUFZQSxTQUFLQyxNQUFMLEdBQWNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjYixhQUFkLEVBQTZCRCxLQUE3QixDQUFkOztBQUNBLFFBQUksS0FBS1ksTUFBTCxDQUFZVCxpQkFBaEIsRUFBbUM7QUFDakMsV0FBS1ksSUFBTDtBQUNEOztBQUNELFNBQUtDLHFCQUFMLEdBQTZCLEtBQUtBLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUE3QjtBQUNEOzs7O1dBSUQsZ0JBQU87QUFDTCxXQUFLQyxRQUFMLEdBQWdCLEtBQWhC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QUFtQixtQkFBbkI7QUFDRDs7Ozs7Ozs7Z0JBelFrQmpDLFMsYUFxQkYsSyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5c3RNb2RhbCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIGxldCBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgICBiYWNrc2Nyb2xsOiB0cnVlLFxyXG4gICAgICBsaW5rQXR0cmlidXRlTmFtZTogXCJkYXRhLWh5c3Rtb2RhbFwiLFxyXG4gICAgICBjbG9zZU9uT3ZlcmxheTogdHJ1ZSxcclxuICAgICAgY2xvc2VPbkVzYzogdHJ1ZSxcclxuICAgICAgY2xvc2VPbkJ1dHRvbjogdHJ1ZSxcclxuICAgICAgd2FpdFRyYW5zaXRpb25zOiBmYWxzZSxcclxuICAgICAgY2F0Y2hGb2N1czogdHJ1ZSxcclxuICAgICAgZml4ZWRTZWxlY3RvcnM6IFwiKltkYXRhLWh5c3RmaXhlZF1cIixcclxuICAgICAgYmVmb3JlT3BlbjogKCkgPT4ge30sXHJcbiAgICAgIGFmdGVyQ2xvc2U6ICgpID0+IHt9LFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBwcm9wcyk7XHJcbiAgICBpZiAodGhpcy5jb25maWcubGlua0F0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jbG9zZUFmdGVyVHJhbnNpdGlvbiA9IHRoaXMuX2Nsb3NlQWZ0ZXJUcmFuc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX3NoYWRvdyA9IGZhbHNlO1xyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vcGVuZWRXaW5kb3cgPSBmYWxzZTtcclxuICAgICh0aGlzLnN0YXJ0ZXIgPSBmYWxzZSksICh0aGlzLl9uZXh0V2luZG93cyA9IGZhbHNlKTtcclxuICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gMDtcclxuICAgIHRoaXMuX3Jlb3BlblRyaWdnZXIgPSBmYWxzZTtcclxuICAgICh0aGlzLl9vdmVybGF5Q2hlY2tlciA9IGZhbHNlKSwgKHRoaXMuX2lzTW92ZWQgPSBmYWxzZSk7XHJcbiAgICB0aGlzLl9mb2N1c0VsZW1lbnRzID0gW1xyXG4gICAgICBcImFbaHJlZl1cIixcclxuICAgICAgXCJhcmVhW2hyZWZdXCIsXHJcbiAgICAgICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG4gICAgICBcInNlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXHJcbiAgICAgIFwidGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKVwiLFxyXG4gICAgICBcImJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXHJcbiAgICAgIFwiaWZyYW1lXCIsXHJcbiAgICAgIFwib2JqZWN0XCIsXHJcbiAgICAgIFwiZW1iZWRcIixcclxuICAgICAgXCJbY29udGVudGVkaXRhYmxlXVwiLFxyXG4gICAgICAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJyxcclxuICAgIF07XHJcbiAgICB0aGlzLl9tb2RhbEJsb2NrID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCFIeXN0TW9kYWwuX3NoYWRvdykge1xyXG4gICAgICBIeXN0TW9kYWwuX3NoYWRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIEh5c3RNb2RhbC5fc2hhZG93LmNsYXNzTGlzdC5hZGQoXCJoeXN0bW9kYWxfX3NoYWRvd1wiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIeXN0TW9kYWwuX3NoYWRvdyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50c0ZlZWxlcigpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzRmVlbGVyKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRsaW5rID0gZS50YXJnZXQuY2xvc2VzdChcclxuICAgICAgICAgIFwiW1wiICsgdGhpcy5jb25maWcubGlua0F0dHJpYnV0ZU5hbWUgKyBcIl1cIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdmVkICYmIGNsaWNrZWRsaW5rKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0ZXIgPSBjbGlja2VkbGluaztcclxuICAgICAgICAgIGxldCB0YXJnZXRTZWxlY3RvciA9IHRoaXMuc3RhcnRlci5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxpbmtBdHRyaWJ1dGVOYW1lXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5fbmV4dFdpbmRvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xvc2VPbkJ1dHRvbiAmJiBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtaHlzdGNsb3NlXVwiKSkge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5jbG9zZU9uT3ZlcmxheSkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwibW91c2Vkb3duXCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMuX2lzTW92ZWQgJiZcclxuICAgICAgICAgICAgZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoeXN0bW9kYWxfX3dyYXBcIilcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgdGhpcy5fb3ZlcmxheUNoZWNrZXIgPSB0cnVlO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIm1vdXNldXBcIixcclxuICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5faXNNb3ZlZCAmJlxyXG4gICAgICAgICAgICBlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcclxuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUNoZWNrZXIgJiZcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHlzdG1vZGFsX193cmFwXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAhdGhpcy5fb3ZlcmxheUNoZWNrZXI7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fb3ZlcmxheUNoZWNrZXIgPSBmYWxzZTtcclxuICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMuX2lzTW92ZWQgJiZcclxuICAgICAgICAgIHRoaXMuY29uZmlnLmNsb3NlT25Fc2MgJiZcclxuICAgICAgICAgIGUud2hpY2ggPT0gMjcgJiZcclxuICAgICAgICAgIHRoaXMuaXNPcGVuZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMuX2lzTW92ZWQgJiZcclxuICAgICAgICAgIHRoaXMuY29uZmlnLmNhdGNoRm9jdXMgJiZcclxuICAgICAgICAgIGUud2hpY2ggPT0gOSAmJlxyXG4gICAgICAgICAgdGhpcy5pc09wZW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mb2N1c0NhdGNoZXIoZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9LmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvcGVuKHNlbGVjdG9yKSB7XHJcbiAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRoaXMuX25leHRXaW5kb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dFdpbmRvd3MgPSBzZWxlY3RvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLl9uZXh0V2luZG93cykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIldhcmluaWc6IGh1c3RNb2RhbCBzZWxlY3RvciBpcyBub3QgZm91bmRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XHJcbiAgICAgIHRoaXMuX3Jlb3BlblRyaWdnZXIgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMub3BlbmVkV2luZG93ID0gdGhpcy5fbmV4dFdpbmRvd3M7XHJcbiAgICB0aGlzLl9tb2RhbEJsb2NrID0gdGhpcy5vcGVuZWRXaW5kb3cucXVlcnlTZWxlY3RvcihcIi5oeXN0bW9kYWxfX3dpbmRvd1wiKTtcclxuICAgIHRoaXMuY29uZmlnLmJlZm9yZU9wZW4odGhpcyk7XHJcbiAgICB0aGlzLl9ib2R5U2Nyb2xsQ29udHJvbCgpO1xyXG4gICAgSHlzdE1vZGFsLl9zaGFkb3cuY2xhc3NMaXN0LmFkZChcImh5c3Rtb2RhbF9fc2hhZG93LS1zaG93XCIpO1xyXG4gICAgdGhpcy5vcGVuZWRXaW5kb3cuY2xhc3NMaXN0LmFkZChcImh5c3Rtb2RhbC0tYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5vcGVuZWRXaW5kb3cuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5jYXRjaEZvY3VzKSB0aGlzLmZvY3VzQ29udG9sKCk7XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzT3BlbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbmZpZy53YWl0VHJhbnNpdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcGVuZWRXaW5kb3cuY2xhc3NMaXN0LmFkZChcImh5c3Rtb2RhbC0tbW92ZWRcIik7XHJcbiAgICAgIHRoaXMuX2lzTW92ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9wZW5lZFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICAgIHRoaXMuX2Nsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMub3BlbmVkV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoeXN0bW9kYWwtLWFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbmVkV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoeXN0bW9kYWwtLWFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5fY2xvc2VBZnRlclRyYW5zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jbG9zZUFmdGVyVHJhbnNpdGlvbigpIHtcclxuICAgIHRoaXMub3BlbmVkV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoeXN0bW9kYWwtLW1vdmVkXCIpO1xyXG4gICAgdGhpcy5vcGVuZWRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJ0cmFuc2l0aW9uZW5kXCIsXHJcbiAgICAgIHRoaXMuX2Nsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICApO1xyXG4gICAgdGhpcy5faXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgSHlzdE1vZGFsLl9zaGFkb3cuY2xhc3NMaXN0LnJlbW92ZShcImh5c3Rtb2RhbF9fc2hhZG93LS1zaG93XCIpO1xyXG4gICAgdGhpcy5vcGVuZWRXaW5kb3cuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5jYXRjaEZvY3VzKSB0aGlzLmZvY3VzQ29udG9sKCk7XHJcbiAgICB0aGlzLl9ib2R5U2Nyb2xsQ29udHJvbCgpO1xyXG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vcGVuZWRXaW5kb3cuc2Nyb2xsVG9wID0gMDtcclxuICAgIHRoaXMuY29uZmlnLmFmdGVyQ2xvc2UodGhpcyk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3Jlb3BlblRyaWdnZXIpIHtcclxuICAgICAgdGhpcy5fcmVvcGVuVHJpZ2dlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzQ29udG9sKCkge1xyXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLm9wZW5lZFdpbmRvdy5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2ZvY3VzRWxlbWVudHMpO1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuZWQgJiYgdGhpcy5zdGFydGVyKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRlci5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCkgbm9kZXNbMF0uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzQ2F0Y2hlcihlKSB7XHJcbiAgICBjb25zdCBub2RlcyA9IHRoaXMub3BlbmVkV2luZG93LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9jdXNFbGVtZW50cyk7XHJcbiAgICBjb25zdCBub2Rlc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZXMpO1xyXG4gICAgaWYgKCF0aGlzLm9wZW5lZFdpbmRvdy5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xyXG4gICAgICBub2Rlc0FycmF5WzBdLmZvY3VzKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZvY3VzZWRJdGVtSW5kZXggPSBub2Rlc0FycmF5LmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvY3VzZWRJdGVtSW5kZXgpO1xyXG4gICAgICBpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgbm9kZXNBcnJheVtub2Rlc0FycmF5Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBub2Rlc0FycmF5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBub2Rlc0FycmF5WzBdLmZvY3VzKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYm9keVNjcm9sbENvbnRyb2woKSB7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLmJhY2tzY3JvbGwpIHJldHVybjtcclxuXHJcbiAgICAvLyBjb2xsZWN0IGZpeGVsIHNlbGVjdG9ycyB0byBhcnJheVxyXG4gICAgbGV0IGZpeGVkU2VsZWN0b3JzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuZml4ZWRTZWxlY3RvcnMpXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuZWQgPT09IHRydWUpIHtcclxuICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKFwiaHlzdG1vZGFsX19vcGVuZWRcIik7XHJcbiAgICAgIFxyXG4gICAgICBodG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcclxuICAgICAgZml4ZWRTZWxlY3RvcnMubWFwKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLl9zY3JvbGxQb3NpdGlvbik7XHJcbiAgICAgIGh0bWwuc3R5bGUudG9wID0gXCJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBsZXQgbWFyZ2luU2l6ZSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gaHRtbC5jbGllbnRXaWR0aDtcclxuICAgIGh0bWwuc3R5bGUudG9wID0gLXRoaXMuX3Njcm9sbFBvc2l0aW9uICsgXCJweFwiO1xyXG5cclxuICAgIGlmIChtYXJnaW5TaXplKSB7XHJcbiAgICAgIGh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBtYXJnaW5TaXplICsgXCJweFwiO1xyXG4gICAgICBmaXhlZFNlbGVjdG9ycy5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luUmlnaHQgPVxyXG4gICAgICAgICAgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbCkubWFyZ2luUmlnaHQpICsgbWFyZ2luU2l6ZSArIFwicHhcIjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoXCJoeXN0bW9kYWxfX29wZW5lZFwiKTtcclxuICB9XHJcbn1cclxuIl0sImZpbGUiOiJoeXN0bW9kYWwuanMifQ==