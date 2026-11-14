// -- HTML STRUCTURE --:
// Container > calcDisplay > input
// Container > calcBtnContainer > button button ...

// Variable Declaration of Document elements
// Buttons inside calcBtnContainer are not declered here as the buttons are not appended yet
let shadowDisplay = "";
const container = document.querySelector("#container");
const calcDisplay = document.querySelector("#container #calcDisplay textarea");
const calcBtnContainer = document.querySelector("#container #calcBtnContainer");

const btns = [
  "AC","%","⌫","÷",
  7,8,9,"×",
  4,5,6,"+",
  1,2,3,"-",
  0,"00",".","=",
];

// appending the buttons inside the calcBtnContainer
btns.forEach((e) => {
  const btn = document.createElement("button");
  btn.innerHTML = e;
  calcBtnContainer.append(btn);
});

// Declaration of the variable containing the buttons
const calcBtns = document.querySelectorAll(
  "#container #calcBtnContainer button",
);

// Click events of the buttons
calcBtns.forEach((e) => {
  e.addEventListener("click", btnEvent);
});

function btnEvent(e) {
  switch (e.target.innerHTML) {
    case "AC":
      shadowDisplay = "";
      calcDisplay.value = "";
      break;
    case "⌫":
      shadowDisplay = shadowDisplay.slice(0, -1);
      calcDisplay.value = shadowDisplay;
      break;
    case "×":
      shadowDisplay += "*";
      calcDisplay.value += e.target.innerHTML;
      break;
    case "÷":
      shadowDisplay += "/";
      calcDisplay.value += e.target.innerHTML;
      break;
    case "%":
      shadowDisplay += "*0.01";
      calcDisplay.value += e.target.innerHTML;
      break;
    case "=":
      shadowDisplay = eval(shadowDisplay);
      if (shadowDisplay == undefined) {
        shadowDisplay = "";
        calcDisplay = shadowDisplay;
      }
      calcDisplay.value = shadowDisplay;
      break;
    default:
      shadowDisplay += e.target.innerHTML;
      calcDisplay.value += e.target.innerHTML;
  }
}
