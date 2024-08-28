function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
let num1 = null;
let operator = null;
let num2 = null;
let newNumberEntry = false;

function operate(num1, num2, operator){
    if (operator == '+'){
        return add((num1),(num2));
    }
    else if (operator == '-'){
        return subtract((num1),(num2));
    }
    else if (operator == '*'){
        return multiply((num1),(num2));
    }
    else if (operator == "/"){
        return divide((num1),(num2));
    }
}

let displayValue = document.querySelector(".display")

const numButtons = document.querySelectorAll(".num-key");
numButtons.forEach(function(button){
    button.addEventListener("click", function(){
        if (newNumberEntry){
            displayValue.innerText = ""
            newNumberEntry = false
        }
        displayValue.innerText += button.innerText;
    })
})

function getValue(displayValue){
    return parseFloat(displayValue); // Parse as float to handle decimals too
}

const operatorButtons = document.querySelectorAll(".operator-key")
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (operator != null && num2 != null){
            displayValue.innerText = operate(num1, num2, operator)
            num1 = getValue(displayValue.innerText);
            num2 = null
        }
        else if (operator != null){
            num2 = getValue(displayValue.innerText)
            displayValue.innerText = operate(num1, num2, operator)
            num1 = getValue(displayValue.innerText);
        }
        else{
            num1 = getValue(displayValue.innerText)
            displayValue.innerText = ""
        }
        operator = this.innerText;
        newNumberEntry = true;
        console.log("num 1 is " + num1)
        console.log("operator is " + operator)
    })
})

const equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", function(){
    num2 = getValue(displayValue.innerText)
    displayValue.innerText = operate(num1, num2, operator);
    num1 = getValue(displayValue.innerText)
    num2 = null
    operator = null;
    newNumberEntry = true;
})

const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", function(){
    displayValue.innerText = "";
    operator = null;
    num1 = null;
    num2 = null;
    newNumberEntry = false;
})

const signSwitch = document.querySelector(".sign")
signSwitch.addEventListener("click", function(){{
    if (displayValue.innerText.charAt(0) === '-') {
        displayValue.innerText = displayValue.innerText.substring(1); // Remove the negative sign
    } else {
        displayValue.innerText = '-' + displayValue.innerText; // Add the negative sign
    }
    }
})