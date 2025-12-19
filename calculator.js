
function add(a, b) {
    return a + b;

function subtract(a, b) {
    return a - b;

function multiply(a, b) {
    return a * b;
}

function calculate() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    let res = 0;

    if (op === 'add') res = add(n1, n2);
    if (op === 'subtract') res = subtract(n1, n2);
    if (op === 'multiply') res = multiply(n1, n2);

    document.getElementById('result').innerText = "Résultat : " + res;
}
