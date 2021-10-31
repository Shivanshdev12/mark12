var formAttr = document.querySelector(".quiz-form");
var btnAttr = document.querySelector(".btn");
var resAttr = document.querySelector("#answer");
const correctAnswers = ["75", "Equilateral"];

btnAttr.addEventListener("click", clickHandler);

function clickHandler() {
  let score = 0;
  let index = 0;
  const data = new FormData(formAttr);
  for (let x of data.values()) {
    if (x == correctAnswers[index]) {
      score = score + 1;
    }
    index += 1;
  }
  resAttr.innerText = "Your score is " + index;
}
