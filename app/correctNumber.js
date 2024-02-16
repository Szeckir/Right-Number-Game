function verifyRightNumber(guess) { 
    if(guess == randomNumber) {
        number.innerHTML += '<div>You won! </div>'
        changeBtStart()
        generateNewNumber()
    } else {
        biggerOrNot(guess)
    }
}

function biggerOrNot(guess) {

    if(guess > randomNumber) {
        console.log('small')
        number.innerHTML += `
            <div>The number is smaller! <i class="fa-solid fa-arrow-down"></i> </div>
        `
    } else {
        console.log('big')
        number.innerHTML += `
            <div>The number is bigger! <i class="fa-solid fa-up-long"></i> </div>
        `
    }
}