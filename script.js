const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").onclick = function() {
    PlayGame("rock");
};

document.getElementById("paper").onclick = function() {
    PlayGame("paper");
};

document.getElementById("scissors").onclick = function() {
    PlayGame("scissors");
};

function PlayGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("player-choice").textContent = "You chose: " + capitalize(playerChoice);
    document.getElementById("computer-choice").textContent = "Computer chose: " + capitalize(computerChoice);
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById("winner").textContent = result;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}