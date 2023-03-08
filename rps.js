var userInput = prompt("Enter your choice:");
        
outPut = userInput.toLowerCase();
 
const selectChoice = ["rock", "paper", "scissors"];


function getComputerChoice(){
    const random = Math.floor(Math.random() * selectChoice.length);
    checkRandom = selectChoice[random];
    return checkRandom;
}


function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissors"){

        alert(`You have won ${playerSelection} crashes ${computerSelection}`);

    }else if (playerSelection == "scissors" && computerSelection == "paper"){

        alert(`You have won ${playerSelection} cut ${computerSelection}`);

    }else if (playerSelection == "paper" && computerSelection == "rock"){
        alert(`You have won ${playerSelection} covers ${computerSelection}`);
    }else if(playerSelection == computerSelection) {
        alert("Its a tie")
    }else {
        alert(`You lost! ${computerSelection} beats ${playerSelection}`);
    }

}

const playerSelection = outPut;
const computerSelection = getComputerChoice();

function game(){
    for(let i=0; i < 5; i++){ 
        playRound(playerSelection,computerSelection);
   }
}

game()