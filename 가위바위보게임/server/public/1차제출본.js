var clickEl = document.getElementById("click");
var comEl = document.getElementById("com");
var scissorEl = document.getElementById("scissor");
var rockEl = document.getElementById("rock");
var paperEl = document.getElementById("paper");
var idxnumber = 0;
var item = ["가위", "바위", "보"];
var interverID;

clickEl.onclick = function () {
  interverID = setInterval(function () {
    idxnumber = ++idxnumber % 3;
    comEl.textContent = item[idxnumber];
  }, 100);
  scissorEl.removeAttribute("disabled");
  rockEl.removeAttribute("disabled");
  paperEl.removeAttribute("disabled");
  clickEl.setAttribute("disabled", true);
};

// clickEl.addEventListener("click", function () {
//   setInterval(function () {
//     idxnumber = ++idxnumber % 3;
//     comEl.textContent = item[idxnumber];
//   }, 100);
// });
paperEl.addEventListener("click", function () {
  if (comEl.textContent == "보") {
    alert("비겼습니다.");
  } else if (comEl.textContent == "가위") {
    alert("졌습니다.");
  } else {
    alert("이겼습니다.");
  }
  clearInterval(interverID);
  clickEl.removeAttribute("disabled");
});

scissorEl.addEventListener("click", function () {
  if (comEl.textContent == "가위") {
    alert("비겼습니다.");
  } else if (comEl.textContent == "바위") {
    alert("졌습니다.");
  } else {
    alert("이겼습니다.");
  }
  clearInterval(interverID);
  clickEl.removeAttribute("disabled");
});
rockEl.addEventListener("click", function () {
  if (comEl.textContent == "바위") {
    alert("비겼습니다.");
  } else if (comEl.textContent == "보") {
    alert("졌습니다.");
  } else {
    alert("이겼습니다.");
  }
  clearInterval(interverID);
  clickEl.removeAttribute("disabled");
});

//로직 공통화를 위해 정리해볼 것
//1)모듈화
