var keys = document.querySelectorAll("#calc span");
var operator = ["+", "-", "x", "÷"];

var decimaladded = false;

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function (e) {
    var input = document.querySelector(".display");
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
    if (btnVal == "C") {
      input.innerHTML = "";
      decimaladded = false;
    } else if (btnVal == "=") {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];
      equation = equation.replace(/X/g, "*").replace(/÷/g, "/");
      if (operator.indexOf(lastChar) > -1 || lastChar == ".")
        equation = equation.replace(/.$/, "");
      if (equation) input.innerHTML = eval(equation);
      decimaladded = false;
    } else if (operator.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];
      if (inputVal != "" && operator.indexOf(lastChar) == -1)
        input.innerHTML += btnVal;
      else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;
      if (operator.indexof(lastChar) > -1 && inputVal.length > 1) {
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }
      decimaladded = false;
    } else if (btnVal == ".") {
      if (!decimaladded) {
        input.innerHTML += btnVal;
        decimaladded = true;
      }
    } else {
      input.innerHTML += btnVal;
    }
    e.preventDefault();
  };
}

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
