let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').innerText = result;
    } catch (error) {
        alert('Invalid input');
    }
}
function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue || '0';
}
