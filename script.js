       
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


function getHumanChoice()
{
    choice = prompt("enter  your choice (rock, paper, scissors)",0);
    choice = choice.toLowerCase();

}



function playRound()
{
    getComputerChoice();
    getHumanChoice();


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


function playGame()
{
    for(i=1;i<=5;i++)
        {
          playRound();
        }
}
playGame();
console.log("Your score:"+ humanScore);
console.log("Computer score:"+ computerScore);

