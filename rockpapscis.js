const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        return 'Please input either rock, paper, or scissors!'
    };
}

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie game!'
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'The computer won!'
            }
            else {
                return 'you won!'
            }
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!'
        }
        else {
            return 'You won!'
        }
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'The computer won!'
        }
        else {
            return 'You won!'
        }
    }
    else if (userChoice === 'bomb') {
        return 'You won!'
    }
}

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice()
    console.log('You threw ' + userChoice)
    console.log('The computer threw ' + getComputerChoice())
    return determineWinner(userChoice, computerChoice);
}

console.log(playGame())




