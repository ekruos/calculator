function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let firstNumber = "";
let secondNumber = "";
let operator;
let result;

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(+firstNumber, +secondNumber);
    } else if (operator === "-") {
        return subtract(+firstNumber, +secondNumber);
    } else if (operator === "*") {
        return multiply(+firstNumber, +secondNumber);
    } else if (operator === "/") {
        return divide(+firstNumber, +secondNumber);
    }
}

//const calculator = document.querySelector(".calculator");
//const screen = document.querySelector(".screen");
//const keyboard = document.querySelector(".keyboard");

//const upperText = document.querySelector(".upperText");
//const lowerText = document.querySelector(".lowerText");
//screen.appendChild(upperText);
//screen.appendChild(lowerText);

//calculator.appendChild(screen);
//calculator.appendChild(keyboard);

const upperText = document.querySelector(".upperText");
const lowerText = document.querySelector(".lowerText");


const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const divide_button = document.querySelector(".divide-button");
const x = document.querySelector(".x");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const equals = document.querySelector(".equals");

const clearButton = document.querySelector(".clear-button");





zero.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "0";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "0";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

one.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "1";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "1";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
    
});

two.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "2";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "2";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

three.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "3";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "3";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

four.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "4";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "4";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

five.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "5";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "5";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

six.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "6";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "6";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

seven.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "7";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "7";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

eight.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "8";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "8";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});

nine.addEventListener("click", () => {
    if (!operator) {
        firstNumber += "9";
        upperText.textContent = firstNumber;
    } else {
        secondNumber += "9";
        upperText.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
});



divide_button.addEventListener("click", () => {
    if (operator) {
        firstNumber = operate(operator, firstNumber, secondNumber);
    } 
    operator = "/";
    secondNumber = "";
    upperText.textContent = `${firstNumber}${operator}`;
});

x.addEventListener("click", () => {
    if (operator) {
        firstNumber = operate(operator, firstNumber, secondNumber);
    } 
    operator = "*";
    secondNumber = "";
    upperText.textContent = `${firstNumber}${operator}`;
});

minus.addEventListener("click", () => {
    if (operator) {
        firstNumber = operate(operator, firstNumber, secondNumber);
    } 
    operator = "-";
    secondNumber = "";
    upperText.textContent = `${firstNumber}${operator}`;
});

plus.addEventListener("click", () => {
    if (operator) {
        firstNumber = operate(operator, firstNumber, secondNumber);
    } 
    operator = "+";
    secondNumber = "";
    upperText.textContent = `${firstNumber}${operator}`;
});

equals.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = `${firstNumber}${operator}${secondNumber}=`;
    result = operate(operator, firstNumber, secondNumber);
    lowerText.textContent = `${result}`;
    firstNumber = result;
    operator = "";
    secondNumber = "";
});

clearButton.addEventListener("click", () => {
    upperText.textContent = ``;
    lowerText.textContent = ``;
    firstNumber = "";
    operator = "";
    secondNumber = "";
});



