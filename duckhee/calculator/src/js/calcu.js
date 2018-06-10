var inputButtons = document.querySelector('.inputButton');
var showOutput = document.querySelector('.output');

inputButtons.addEventListener('click', function(e) {
  var keyValue = e.target.value;
  if (keyValue === 'AC') {
    clearOutput();
    return false;
  } else if (keyValue === '=') {
    return false;
  } else if (!keyValue) {
    return false;
  }
  showOutput.value += keyValue;
  showOutput.focus();
});

showOutput.addEventListener('keydown', function(e) {
  if (e.key === '=' || e.key === 'Enter') {
    console.warn('keypress =, Enter');
    e.preventDefault();
  } else if (e.key === 'Escape') {
    clearOutput();
  } else if (validateKeyup(e)) {
    e.returnValue = false;
    console.warn('input invalid key');
  }
});

function clearOutput() {
  showOutput.value = '';
  showOutput.focus();
  return false;
}

function validateKeyup(e) {
  return (
    e.key !== '1' &&
    e.key !== '2' &&
    e.key !== '3' &&
    e.key !== '4' &&
    e.key !== '5' &&
    e.key !== '6' &&
    e.key !== '7' &&
    e.key !== '8' &&
    e.key !== '9' &&
    e.key !== '*' &&
    e.key !== '+' &&
    e.key !== '/' &&
    e.key !== '-' &&
    e.key !== 'Backspace'
  );
}
