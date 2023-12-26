
//  Track the user and computer score.

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const  genCompChoice = () => {
    // rock, paper, scissors choice by random.
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "Grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    
    // Generate computer choice.
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    // Both user and computer fight then who wins. 
    if(userChoice === compChoice) {
        // Draw Game (In this condition another function created)
        // call the draw function.
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // computer have the two option: scissor, paper.
            userWin = compChoice === "paper" ? false : true; // if comp select scissor then user win so userWin = true.
        } else if (userChoice === "paper") {
            // computer have the two option: rock, scissor.
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // computer have the two option: rock, paper.
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// To Access all the choice(div) (means rock, paper, scissor).

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         console.log("choice was clicked")
//     });
// });

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        
        // Also access the individual div.
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userChoice); // Result is choice was clicked rock
        playGame(userChoice);
    });
});

