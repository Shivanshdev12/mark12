var fAttr = document.querySelector(".i1");
var sAttr = document.querySelector(".i2");
var tAttr = document.querySelector(".i3");
var res = document.querySelector("#ans");
var btnAttr = document.querySelector(".btn");

btnAttr.addEventListener("click", clickHandler);

function clickHandler() {
  let base = 0;
  let area = 0;
  if (tAttr.value > 0 && fAttr.value > 0) {
    base = tAttr.value / 2;
    var height = Math.sqrt(Math.pow(fAttr.value, 2) - Math.pow(base, 2));
    area = (base * 2 * height) / 2;
    res.innerText = "Area of the triangle is " + area;
  } else {
    res.innerText = "Please input correct value! 😥";
  }
}
