function validation(guess) {
    const number = +guess

    if(isNumber(number)) {
        if(numberValid(number)) {
            return true
        }
    }
    return false
}

function isNumber(number) {
    if(Number.isNaN(number)) {
        return false
    } else {
        return true
    }
}

function numberValid(number) {
    if(number < (biggerNumber + 1) && number > lowerNumber) {
        return true
    } else {
        return false
    }
}

