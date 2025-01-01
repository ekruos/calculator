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

let firstNumber;
let secondNumber;
let operator;

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
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





zero.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "0";
});

one.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "1";
});

two.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "2";
});

three.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "3";
});

four.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "4";
});

five.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "5";
});

six.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "6";
});

seven.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "7";
});

eight.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "8";
});

nine.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "9";
});



divide_button.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "/";
});

x.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "x";
});

minus.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "-";
});

plus.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "+";
});

equals.addEventListener("click", () => {
    //const upperText = document.querySelector(".upperText");
    upperText.textContent = "=";
});



