

let choice,computerChoice,humanChoice;
let Num=0,humanScore=0, computerScore = 0;

function getComputerChoice()
{
Num = (Math.floor(Math.random()*10))+1;
}
getComputerChoice();

if ( Num>=1 && Num<=3)
{
    computerChoice="rock";
}

else if ( Num>=4 && Num<7)
{
    computerChoice="paper";
}

else if ( Num>=7 && Num<=10)
{
    computerChoice="scissors";
}



function playRound()
{
    getComputerChoice();
   
    if (humanScore == 5) {
        let score = document.createElement('p');
        score.innerHTML = "You win! <br> Final Score - Human: " + humanScore + " Computer: " + computerScore;
        displayScore.appendChild(score);
    }
    
    if (computerScore == 5) {
        let score = document.createElement('p');
        score.innerHTML = "computer wins!<br> Final Score - Human: " + humanScore + " Computer: " + computerScore;
        displayScore.appendChild(score);
    }

    if (choice===computerChoice)
     {
        console.log("its a tie"); 
     }
    
    else if(choice==="rock")
    {
       if(computerChoice==="paper")
       {
        console.log("You lose! Paper beats rock");
        computerScore++;
       }
       else if(computerChoice==="scissors")
       {
        console.log("You Win! Rock beats Scissors ");
        humanScore++;
       }
    }
    else if(choice==="paper")
    {
       if(computerChoice==="rock")
       {
        console.log("You Win! Paper beats rock");
        humanScore++;
       }
       else if(computerChoice==="scissors")
       {
        console.log("You Lose! Scissors beats Paper ");
        computerScore++;
       }
    }
    else if(choice==="scissors")
    {
       if(computerChoice==="paper")
       {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
       }
       else if(computerChoice==="rock")
       {
        console.log("You Lose! Rock beats Scissors ");
        computerScore++;
       }
    }

    else{
        console.log("enter a valid  choice");
        i--;
    }


}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let displayScore = document.querySelector('#displayScore');

rock.onclick = () => {
    choice = 'rock';
    playRound();
    
}

paper.onclick =  () => {
    choice = 'paper';
    playRound();
    
}

scissors.onclick = () => {
    choice = 'scissors';
    playRound();
    
}




