document.getElementById("generate-pin").addEventListener("click", function () {
  const generatePin = Math.round(Math.random() * 10000);
  console.log(generatePin);
  let displayPin = document.getElementById("generate-display");
  displayPin.value = generatePin;
});

function displayInputValue(id) {
  const btnValue = id;
  const inputPin = document.getElementById("input-pin");
  inputPin.value = inputPin.value + btnValue;
}
//when submit button click
document.getElementById("submit").addEventListener("click", function () {
  hideNotification();
  var generatedDisplayValue = document.getElementById("generate-display").value;
  var inputedDisplayValue = document.getElementById("input-pin").value;
  console.log(generatedDisplayValue, inputedDisplayValue);
  if (generatedDisplayValue == inputedDisplayValue) {
    document.getElementById("correct").style.display = "block";
    return;
  } else {
    document.getElementById("wrong").style.display = "block";
  }
});
//when clear button
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("input-pin").value = "";
});
//when delete one digit button clicked
document.getElementById("remove").addEventListener("click", function () {
  var getPin = document.getElementById("input-pin").value;
  var modifiedPin = getPin.slice(0, -1);
  document.getElementById("input-pin").value = modifiedPin;
});
function hideNotification() {
  document.getElementById("wrong").style.display = "none";
  document.getElementById("correct").style.display = "none";
}
