window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

const number = document.getElementById('guess')
const btnStart = document.querySelector('#btn-start')
const btnRestart = document.querySelector('#btn-restart')
const btnEnd = document.querySelector('#btn-end')


btnStart.addEventListener('click', startGame)
btnRestart.addEventListener('click', restartGame)
btnEnd.addEventListener('click', endGame)



function onSpeak(e) {
    const guess = e.results[0][0].transcript
    
    if(validation(guess)) {
        showOnScreen(guess)
        verifyRightNumber(guess)

    } else {
        alert('Invalid number')
    }
}

function startGame(e) {
    changeBtTryAgain()
    btnRestart.style.display = 'none'
    recognition.start()
    recognition.addEventListener('result', onSpeak)
}   

function restartGame() {
    generateNewNumber()
    number.innerHTML = '--- Jogo Reiniciado ---'
    startGame()
}

function endGame() {
    recognition.stop()
    btnRestart.style.display = 'block'
    number.innerHTML = 'Jogo finalizado'
    changeBtStart()
    drawNumber()
}

function showOnScreen(guess) {

    number.innerHTML = `
    <div id="number-told">You told: </div>
    <span class="box">${guess}</span>
    `
    //recognition.addEventListener('end', () => recognition.start())
}

function changeBtTryAgain() {
    btnStart.innerHTML = 'Try again'
}

function changeBtStart() {
    btnStart.innerHTML = 'Start'
}