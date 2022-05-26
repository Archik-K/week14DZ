function plus() {
    let number1, number2; 
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);
    alert(number1+number2);
    document.getElementById('outcome').innerHTML = result;
}

function minus() {
    let number1, number2;
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);
    alert(number1-number2);
    document.getElementById('outcome').innerHTML = result;
}

function multiply() {
    let number1, number2;
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);
    alert(number1*number2);
    document.getElementById('outcome').innerHTML = result;
}

function delit() {
    let number1, number2, result;
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);
    alert(number1*number2);
    document.getElementById('outcome').innerHTML = result;
}
