const lowerNumber = 1
const biggerNumber = 999

const elementLowerNumber = document.querySelector('#lower-value')
const elementBiggerNumber = document.querySelector('#highest-value')
elementLowerNumber.innerHTML = lowerNumber
elementBiggerNumber.innerHTML = biggerNumber


let randomNumber = drawNumber();

function drawNumber() {
    return parseInt(Math.random() * biggerNumber + 1);
}

function generateNewNumber() {
    randomNumber = parseInt(Math.random() * biggerNumber + 1);
}

