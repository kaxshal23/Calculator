const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value == "Error") {
    display.value = "";
  }
  if (display.value == "0") {
    display.value = "";
  }

  display.value += input;
}
function clearDisplay() {
  display.value = "0";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
