const userText = document.getElementById('userText');
const computerText = document.getElementById('computerText');
const finalResult = document.getElementById('final-Result');

const choiceBtn = document.querySelectorAll(".choiceBtn");

let user;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
   user = button.textContent;
   compChoice()
   userText.textContent = `${user}`;
   computerText.textContent = `${computer}`;
   finalResult.textContent = `${checkWinner()}`;
}))


function compChoice () {
   let randomNumber = Math.floor(Math.random() * 3) + 1;

   switch (randomNumber) {
      case 1:
        computer = 'ROCK'
        break;

      case 2:
         computer = 'PAPER'
         break;

      case 3:
         computer = 'SCISSORS'
         break;
   }
}

function checkWinner() {
   if (user === computer) {
      return 'It is a tie!'
    } else if (computer === 'ROCK') {
      return (user === 'PAPER') ? 'You win!' : 'You lose!'
    } else if (computer === 'PAPER') {
      return (user === 'SCISSORS') ? 'You win!' : 'You lose!'
    } else if (computer === 'SCISSORS') {
      return (user === 'ROCK') ? 'You win!' : 'You lose!'
    }
}

   console.log(checkWinner());