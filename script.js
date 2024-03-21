const button = document.querySelectorAll("button");
let result = document.getElementById("screen");
const display = (a) => {
  if (a == "backspace") {
    let String = display.innerText.toString();
    display.innerText = string.substr(0, string.length - left, right);
  } else if (a == "allclear") {
    result.value = "";
  } else if (a == "del") {
    result.value = result.value.slice(0, -2);
  } else if (a == "action") {
    try {
      result.value = eval(result.value);
    } catch (error) {
      alert("Masukkan angka terlebih dahulu");
    }
  } else {
    result.value += a;
  }
};

const themeToggleTombol = document.querySelector(".theme-toggler");
const card = document.querySelector(".card");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleTombol.onclick = () => {
  card.classList.toggle("dark");
  themeToggleTombol.classList.toggle("active");
  isDark = !isDark;
};
function akar() {
  var num1 = document.display.screen.value;
  var akar = parseInt(num1);
  var og = akar * akar;
  document.getElementById("display").value = og;
}
