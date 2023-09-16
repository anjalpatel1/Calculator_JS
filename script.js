const userInput = document.getElementById("userInput");
var expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);   /* eval() is a method that will solve the equation */
    expression = '';
}

function erase() {
    expression = '';
    userInput.value =  expression;
}