var picker1 = document.getElementById("color1");
var picker2 = document.getElementById("color2");
var body = document.querySelector("body");

function changeBackground() {
  var color1 = document.getElementById("color1").value;
  var color2 = document.getElementById("color2").value;

  body.style.background =
    "linear-gradient(to right," + color1 + "," + color2 + ")";

  document.getElementById("css").textContent = body.style.background + ";";
}

changeBackground();

picker1.onchange = changeBackground;
picker2.onchange = changeBackground;
