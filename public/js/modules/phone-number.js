"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneValidate = phoneValidate;

function phoneValidate() {
  var input = document.body.querySelector(".q-form-phone");
  input.addEventListener("keypress", function (evt) {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  });
  input.addEventListener("focus", function () {
    if (input.value.length === 0) {
      input.value = "+7";
      input.selectionStart = input.value.length;
    }
  });
  input.addEventListener("click", function (evt) {
    if (input.selectionStart < 2) {
      input.selectionStart = input.value.length;
    }

    if (evt.key === "Backspace" && input.value.length <= 2) {
      evt.preventDefault();
    }
  });
  input.addEventListener("blur", function () {
    if (input.value === "+7") {
      input.value = "";
    }
  });
  input.addEventListener("keydown", function (evt) {
    if (evt.key === "Backspace" && input.value.length <= 2) {
      evt.preventDefault();
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGhvbmUtbnVtYmVyLmpzIl0sIm5hbWVzIjpbInBob25lVmFsaWRhdGUiLCJpbnB1dCIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJsZW5ndGgiLCJzZWxlY3Rpb25TdGFydCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0QixlQUE1QixDQUFkO0FBRUFILEVBQUFBLEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzFDLFFBQUlBLEdBQUcsQ0FBQ0MsT0FBSixHQUFjLEVBQWQsSUFBb0JELEdBQUcsQ0FBQ0MsT0FBSixHQUFjLEVBQXRDLEVBQTBDO0FBQ3hDRCxNQUFBQSxHQUFHLENBQUNFLGNBQUo7QUFDRDtBQUNGLEdBSkQ7QUFNQVAsRUFBQUEsS0FBSyxDQUFDSSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3BDLFFBQUlKLEtBQUssQ0FBQ1EsS0FBTixDQUFZQyxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCVCxNQUFBQSxLQUFLLENBQUNRLEtBQU4sR0FBYyxJQUFkO0FBQ0FSLE1BQUFBLEtBQUssQ0FBQ1UsY0FBTixHQUF1QlYsS0FBSyxDQUFDUSxLQUFOLENBQVlDLE1BQW5DO0FBQ0Q7QUFDRixHQUxEO0FBT0FULEVBQUFBLEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDLFFBQUlMLEtBQUssQ0FBQ1UsY0FBTixHQUF1QixDQUEzQixFQUE4QjtBQUM1QlYsTUFBQUEsS0FBSyxDQUFDVSxjQUFOLEdBQXVCVixLQUFLLENBQUNRLEtBQU4sQ0FBWUMsTUFBbkM7QUFDRDs7QUFDRCxRQUFJSixHQUFHLENBQUNNLEdBQUosS0FBWSxXQUFaLElBQTJCWCxLQUFLLENBQUNRLEtBQU4sQ0FBWUMsTUFBWixJQUFzQixDQUFyRCxFQUF3RDtBQUN0REosTUFBQUEsR0FBRyxDQUFDRSxjQUFKO0FBQ0Q7QUFDRixHQVBEO0FBU0FQLEVBQUFBLEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUIsTUFBdkIsRUFBK0IsWUFBTTtBQUNuQyxRQUFJSixLQUFLLENBQUNRLEtBQU4sS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEJSLE1BQUFBLEtBQUssQ0FBQ1EsS0FBTixHQUFjLEVBQWQ7QUFDRDtBQUNGLEdBSkQ7QUFNQVIsRUFBQUEsS0FBSyxDQUFDSSxnQkFBTixDQUF1QixTQUF2QixFQUFrQyxVQUFDQyxHQUFELEVBQVM7QUFDekMsUUFBSUEsR0FBRyxDQUFDTSxHQUFKLEtBQVksV0FBWixJQUEyQlgsS0FBSyxDQUFDUSxLQUFOLENBQVlDLE1BQVosSUFBc0IsQ0FBckQsRUFBd0Q7QUFDdERKLE1BQUFBLEdBQUcsQ0FBQ0UsY0FBSjtBQUNEO0FBQ0YsR0FKRDtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcGhvbmVWYWxpZGF0ZSgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5xLWZvcm0tcGhvbmVcIik7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZ0KSA9PiB7XHJcbiAgICBpZiAoZXZ0LmtleUNvZGUgPCA0NyB8fCBldnQua2V5Q29kZSA+IDU3KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IFwiKzdcIjtcclxuICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC52YWx1ZS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQuc2VsZWN0aW9uU3RhcnQgPCAyKSB7XHJcbiAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gaW5wdXQudmFsdWUubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgaW5wdXQudmFsdWUubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcclxuICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCIrN1wiKSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgaW5wdXQudmFsdWUubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBob25lVmFsaWRhdGUgfSJdLCJmaWxlIjoibW9kdWxlcy9waG9uZS1udW1iZXIuanMifQ==