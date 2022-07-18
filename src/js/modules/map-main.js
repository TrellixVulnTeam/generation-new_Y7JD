// map with dots

var isActive = 0;
var isLoading = 1;
var funcStatus = true;
var test = 1;
const count = document.querySelectorAll("[data-id]");

//удаляет модальное окно с инфой
function removeClass() {
  let infoCards = document.querySelectorAll("[data-info-id]");
  infoCards.forEach((el) => {
    el.classList.remove("show");
  });
}

//удаляет внешний круг
function removeCircle() {
  count.forEach((el) => {
    el.style.display = "none";
  });
}

//добавляет внешний круг
function addCircle(idx) {
  let circle2 = document.querySelector(`[data-id='${idx}']`);
  circle2.style.display = "block";
}

function ready() {
  function setAround(percent, idx) {
    removeCircle();
    let beforeElemIdx;

    beforeElemIdx = idx === 0 ? count.length - 1 : idx - 1;
    let beforeElem = document.querySelector(
      '[data-id="' + beforeElemIdx + '"]'
    );
    let elem = document.querySelector('[data-id="' + idx + '"]');
    elem.style.display = "block";
    beforeElem.style.display = "block";
    const math = 2 * Math.PI * elem.r.baseVal.value;

    elem.style.strokeDasharray = `${math} 1000`;

    let a = math * (1 - percent / 100);
    elem.style.strokeDashoffset = a;
    percent = percent.toFixed(1);
    if (percent >= 99.8) {
      removeClass();
      let infoShow = document.querySelector(`[data-info-id="${idx}"]`);
      infoShow.classList.add("show");
      isLoading++;
      if (isLoading === count.length) {
        isLoading = 0;
      }
    }
  }

  requestAnimationFrame(draw);
  function draw(t) {
    if (funcStatus === true) {
      let idx = isLoading;
      requestAnimationFrame(draw);
      setAround((t / 30) % 100, idx);
    }
  }
}


var dots = document.querySelectorAll(".dota");
var infoCards = document.querySelectorAll("[data-info-id]");
var closeBtn = document.querySelectorAll(".close-hide");

let circle = document.querySelectorAll("[data-id]");

let i = 0;

dots.forEach((el) => {
  el.addEventListener("click", (elem) => {
    let idx = el.dataset.dota;
    showInfo(idx);
  });
});

//открывает модальное окно и ставит на паузу
function showInfo(idx) {
  // isLoading = 0;
  removeClass();
  removeCircle();
  addCircle(idx);
  funcStatus = false;
  let elem = document.querySelector(`[data-info-id='${idx}']`);
  elem.classList.add("show");

  //должно: при нажатии кружок заполняется на 100%
  //сейчас: при нажатии кружок заполняется на 100%, после возобновлении функции откатывает кружок до заполнения на 100%
  let elem2 = document.querySelector('[data-id="' + idx + '"]');
  elem2.style.strokeDasharray = 0;
}

closeBtn.forEach((el) => {
  el.addEventListener("click", () => {
    let idx = el.parentNode.dataset.infoId;
    closeInfo(idx);
  });
});

//закрывает модалку и далее запускает функцию
function closeInfo(idx) {
  removeClass();
  ready(idx);
  funcStatus = true;
  // test = idx;
  // beforeElemIdx = idx;
  // нужно изменить beforeElemIdx на только что нажатый элемент
}


export { ready }