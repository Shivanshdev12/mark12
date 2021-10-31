var base = document.querySelector(".base");
var height = document.querySelector(".height");
var btnAttr = document.querySelector(".btn");
var ans = document.querySelector("#answer");

btnAttr.addEventListener("click", clickHandler);

function clickHandler() {
  let hyp = 0;
  if (base.value >= 0 && height.value >= 0) {
    hyp = Math.sqrt(Math.pow(base.value, 2) + Math.pow(height.value, 2));
    ans.innerText = "Hypotenuse is " + hyp;
  } else {
    ans.innerText = "Please enter correct value!";
  }
}
