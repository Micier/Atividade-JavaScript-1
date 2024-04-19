function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try { 
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateLog() {
    document.getElementById('display').value = Math.log(parseFloat(document.getElementById('display').value));
}

function calculateExp() {
    document.getElementById('display').value = document.getElementById('display').value ** 2;
}

function calculateSqrt() {
    document.getElementById('display').value = Math.sqrt(parseFloat(document.getElementById('display').value));
}

function calculateFactorial() {
    let num = parseFloat(document.getElementById('display').value);
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    document.getElementById('display').value = result;
}

function calculateSin() {
    document.getElementById('display').value = Math.sin(parseFloat(document.getElementById('display').value));
}

function calculateCos() {
    document.getElementById('display').value = Math.cos(parseFloat(document.getElementById('display').value));
}

function calculateTan() {
    document.getElementById('display').value = Math.tan(parseFloat(document.getElementById('display').value));
}

function calculateSinh() {
    document.getElementById('display').value = Math.sinh(parseFloat(document.getElementById('display').value));
}

function calculateCosh() {
    document.getElementById('display').value = Math.cosh(parseFloat(document.getElementById('display').value));
}

function calculateTanh() {
    document.getElementById('display').value = Math.tanh(parseFloat(document.getElementById('display').value));
}