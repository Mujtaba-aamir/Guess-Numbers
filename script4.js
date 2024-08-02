let RandomNumber = Math.ceil(Math.random() * 100 + 1);
const submit = document.querySelector(".submit");
const UserInput = document.querySelector(".input");
const Guesses = document.querySelector(".previous");
const Remaining = document.querySelector(".LastResults");
const LoworHight = document.querySelector(".LoworHigh");
const Start = document.querySelector(".results");
const p = document.createElement("p");
let previousGuess = [];
let noOfGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(UserInput.value);
    validData(guess);
  });
}

function validData(guess) {
  if (isNaN(guess)) alert("Please Enter a valid number");
  else if (guess <= 0) alert("Please Enter a number more than or equal to one");
  else if (guess > 100)
    alert("Please Enter a number less than or equal to 100");
  else {
    previousGuess.push(guess);
    if (noOfGuess ===10) {
      DisplayGuess(guess);
      DisplayMessage(`Game Over, Number was ${RandomNumber}`);
      EndGame();
    } else 
    {
       DisplayGuess(guess);
       Info(guess);
    }
  }
}

function DisplayGuess(guess) {
  UserInput.value = "";
  Guesses.innerHTML += `${guess},`;
  noOfGuess++;
  Remaining.innerHTML = `${11 - noOfGuess}`;
}

function DisplayMessage(message) {
  LoworHight.innerHTML = `<h2>${message}</h2>`;
}

function Info(guess) {
  if (guess === RandomNumber) {
    DisplayMessage(`You Guessed Right`);
    EndGame();
  } else if (guess < RandomNumber) {
    DisplayMessage(`Your Guessed number is Low`);
  } else if (guess > RandomNumber) {
    DisplayMessage(`Your Guessed number is high`);
  }
}

function EndGame() {
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  Start.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    RandomNumber = Math.ceil(Math.random() * 100 + 1);
    previousGuess = [];
    noOfGuess = 1;
    Guesses.innerHTML = "";
    Remaining.innerHTML = `${11 - noOfGuess}`;
    UserInput.removeAttribute("disabled");
    Start.removeChild(p);
    playGame = true;
  });
}
