//Constants
const playerHandGesture = document.querySelector(".player-one-gesture");
const computerHandGesture = document.querySelector(".player-two-gesture");
const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");
const playButton = document.querySelector(".play-btn");
const countNumber = document.querySelector(".count-number");
const result = document.querySelector(".result");
const choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let computerChoice = "";
//Event listeners
playButton.addEventListener("click", playGame);
rockButton.addEventListener("click", selectChoise);
paperButton.addEventListener("click", selectChoise);
scissorsButton.addEventListener("click", selectChoise);

//Functions

function playGame() {
  let count = 3; // Početni broj za odbrojavanje
  playButton.style.visibility = "hidden";
  result.textContent = "";
  playerChoice = "";
  countNumber.textContent = "";
  playerHandGesture.src = "images/rock.png";
  computerHandGesture.src = "images/rock2.png";
  animateHand();

  const countdown = setInterval(() => {
    countNumber.textContent = count;

    count--;

    // Provjera ako je broj došao do 0
    if (count < 0) {
      clearInterval(countdown);
      countNumber.textContent = "";
      getRandomChoice();
      console.log(computerChoice);
      console.log(playerChoice);
      updatePlayerGesture();
      updateComputerGesture();
      result.textContent = checkWinner();
      console.log(checkWinner());
      playButton.style.visibility = "visible";
    }
  }, 1000);
}

function selectChoise(e) {
  let choice = e.target.className;

  if (choice === "rock-btn") {
    playerChoice = "rock";
    //console.log(choice);
  } else if (choice === "paper-btn") {
    playerChoice = "paper";
    //console.log(choice);
  } else if (choice === "scissors-btn") {
    playerChoice = "scissors";
    // console.log(choice);
  }
}

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
}

function checkWinner() {
  if (playerChoice === "paper" && computerChoice == "scissors") {
    return "You lost!";
  } else if (playerChoice === "scissors" && computerChoice == "paper") {
    return "You won!";
  } else if (playerChoice === "rock" && computerChoice == "paper") {
    return "You lost!";
  } else if (playerChoice === "paper" && computerChoice == "rock") {
    return "You won!";
  } else if (playerChoice === "scissors" && computerChoice == "rock") {
    return "You lost!";
  } else if (playerChoice === "rock" && computerChoice == "scissors") {
    return "You won!";
  } else if (playerChoice === "rock" && computerChoice == "rock") {
    return "Draw!";
  } else if (playerChoice === "paper" && computerChoice == "paper") {
    return "Draw!";
  } else if (playerChoice === "scissors" && computerChoice == "scissors") {
    return "Draw!";
  } else if (playerChoice === "") {
    return "Too slow, you lose!";
  }
}

function updatePlayerGesture() {
  if (playerChoice === "rock") {
    playerHandGesture.src = "images/rock.png";
  } else if (playerChoice === "scissors") {
    playerHandGesture.src = "images/scissors.png";
  } else if (playerChoice === "paper") {
    playerHandGesture.src = "images/paper.png";
  }
}

function updateComputerGesture() {
  if (computerChoice === "rock") {
    computerHandGesture.src = "images/rock2.png";
  } else if (computerChoice === "scissors") {
    computerHandGesture.src = "images/scissors2.png";
  } else if (computerChoice === "paper") {
    computerHandGesture.src = "images/paper2.png";
  }
}

function animateHand() {
  const handGesture = document.querySelector(".player-one-gesture");
  const computerHandGesture = document.querySelector(".player-two-gesture");
  const intervalDuration = 300;
  const totalDuration = 3900;

  // Pokretanje intervala
  const interval = setInterval(() => {
    // Pomicanje ruku gore
    handGesture.style.transform = `translateY(-20px)`;
    computerHandGesture.style.transform = `translateY(-20px)`;

    // Vraćanje ruku dolje nakon pola intervala
    setTimeout(() => {
      handGesture.style.transform = `translateY(0)`;
      computerHandGesture.style.transform = `translateY(0)`;
    }, intervalDuration / 2);
  }, intervalDuration);

  // Zaustavljanje animacije nakon 3.9 sekundi
  setTimeout(() => {
    clearInterval(interval);
    handGesture.style.transform = `translateY(0)`;
    computerHandGesture.style.transform = `translateY(0)`;
  }, totalDuration);
}
