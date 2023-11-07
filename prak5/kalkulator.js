let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
  } catch (error) {
    currentInput = 'Error';
    document.getElementById('display').value = currentInput;
  }
}

function buttonMouseOver(button) {
  button.style.backgroundColor = 'lightblue';
}

function buttonMouseOut(button) {
  button.style.backgroundColor = '';
}

function buttonMouseDown(button) {
  button.style.backgroundColor = 'blue';
}

function buttonMouseUp(button) {
  button.style.backgroundColor = 'lightblue';
}
