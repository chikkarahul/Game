let userScore=0;
let compScore=0;
const youScore=document.querySelector("#user-score");
const machineScore=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
     const randIdx= Math.floor(Math.random()*3)
     return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was drawn.Play again"
    msg.style.backgroundColor="orange"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win!")
        msg.innerText=`you won! your ${userChoice} beats ${compChoice}`;
        userScore++;
        youScore.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you loose")
        msg.innerText=`you lost ${compChoice} beats your ${userChoice}`
        compScore++;
        machineScore.innerText=compScore;
        msg.style.backgroundColor="red"
    }

}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    //Generate computer choice 
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice)

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});