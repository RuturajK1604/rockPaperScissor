const playerChoice = document.querySelectorAll(".playerChoice");
const compChoice = document.querySelectorAll(".compChoice");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let userScores = document.querySelector("#user-score");
let compScores = document.querySelector("#comp-score");
let drawScores = document.querySelector("#draw-score");


let userScore = 0;
let compScore = 0;
let drawScore = 0;
let userWin = false;



const showWinner = (userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `Congratulations! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScores.innerText = userScore;
        msg.style.backgroundColor = 'green';
    } else {
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        compScore++;
        compScores.innerText = compScore;
        msg.style.backgroundColor = 'red';
    }
}

const getCompChoice = () => {
    const options = ['Rock', 'Paper', 'Scissor'];

    let randomIdx = Math.floor(Math.random() * 3);
    compChoice.forEach((choice) => {
        if (choice.id === options[randomIdx]) {
            choice.classList.add('select');
        } else {
            choice.classList.remove('select');
        }
    })

    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = 'The game was draw ! Play again.';
    drawScore++;
    drawScores.innerText = drawScore;
    msg.style.backgroundColor = '#081b31';
}

const getWinner = (userChoice) => {
    let compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        if (userChoice === 'Rock') {
            // Paper, Scissor
            userWin = compChoice === 'Paper' ? false : true;
        } else if (userChoice === 'Paper') {
            // Rock, Scissor
            userWin = compChoice === 'Scissor' ? false : true;
        } else {
            // Rock, Paper
            userWin = compChoice === 'Rock' ? false : true;
        }

        showWinner(userChoice, compChoice);
    }
}



playerChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
        getWinner(choice.getAttribute('id'));
    })

})