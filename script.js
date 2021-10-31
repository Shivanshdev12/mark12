var ang1 = document.querySelector(".ang1");
var ang2 = document.querySelector(".ang2");
var ang3 = document.querySelector(".ang3");
var btnAttribute = document.querySelector(".btn");

btnAttribute.addEventListener("click", clickHandler);

function clickHandler() {
  var x = Number(ang2.value) + Number(ang1.value) + Number(ang3.value);
  //   console.log(typeof x);
  if (
    Number(ang2.value) >= 0 &&
    Number(ang1.value) >= 0 &&
    Number(ang2.value) >= 0
  ) {
    if (x - 180 == 0) {
      ans = "Yes! The angles form a triangle";
    } else {
      ans = "No, the triangle is not formed!";
    }
    document.querySelector("#result").innerText = ans;
  } else
    document.querySelector("#result").innerText =
      "Please enter correct angles!";
}
