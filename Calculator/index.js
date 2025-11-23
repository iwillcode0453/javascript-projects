let span1 = document.getElementById("num1-el");
let span2 = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");
let buttons = document.querySelectorAll("button");
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let divideBtn = document.getElementById("divide");
let multiplyBtn = document.getElementById("multiply");

let num1 = 8;
let num2 = 2;

span1.textContent = num1;
span2.textContent = num2;

// TODO: Create functions for each operation here

// function for addition
function add() {
    let sum = num1 + num2;
    sumEl.textContent = `Sum: ${sum}`
}

// function for subtraction
function subtract() {
    let difference = num1 - num2;
    sumEl.textContent = `Sum: ${difference}`;
}

// function for diivision
function divide()  {
    let quotient = num1 / num2;
    sumEl.textContent = `Sum: ${quotient}`;
}

// function for multiplication
function multiply() {
    let product = num1 * num2;
    sumEl.textContent = `Sum: ${product}`;
}