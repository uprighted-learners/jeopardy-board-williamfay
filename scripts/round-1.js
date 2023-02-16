import placeholderQuestions from './placeholder-questions.js';

//Global
const submit = document.getElementById("respond");
submit.disabled = true;
let playerTurn = true;
let currentTurn = playerTurn;
let currentCategory = "";
let scoreOne = 0;
let scoreTwo = 0;
let playerOne = document.getElementById("playerOne") 
let playerTwo = document.getElementById("playerTwo") 
let turn = document.getElementById("turn")

//Nav
function runNav () {
  function toLanding() {
  window.open('/jeopardy-landing-page.html', '_self')
  }
  let landingPageLink = document.getElementById("to-landing");
  landingPageLink.addEventListener("click", toLanding)

  function toRoundTwo() {
    window.open('/round-2.html', '_self')
  }
  let roundTwoLink = document.getElementById("to-round-two");
  roundTwoLink.addEventListener("click", toRoundTwo)

  function toFinalJeopardy() {
    window.open('/final-jeopardy.html', '_self')
  }
  let finalJeopardyLink = document.getElementById("to-final-jeopardy");
  finalJeopardyLink.addEventListener("click", toFinalJeopardy)
}
/* How can I make this function more efficient? Create another function with the "if"s that takes 
element (div), category ("animal"), prop1 and prop2 */

//Board Functionality
  //submit button
function activateButton() {
    submit.disabled = false;
}
function deactivateButton() {
    submit.disabled = true;
}
  //Handle Questions
let divs = document.getElementsByClassName("amount");

for (const div of divs) {
    div.addEventListener("click", event => {
            let questionCategory = event.target.id.split(' ')[0];
            let questionValue = event.target.id.split(' ')[1];
            div.textContent = placeholderQuestions[0].roundOne[questionCategory][questionValue].question;
            activateButton();
            })
        };
        
submit.addEventListener("click", event => {
    deactivateButton();
    checkAnswer();
    })
  //Handle Submit
  /*
submit.addEventListener("click", event => {
        console.log(val);
        deactivateButton();
        checkAnswer();
    });*/
function checkAnswer() {
  for (const div of divs) {
    div.addEventListener("click", event => {
      let questionCategory = event.target.id.split(' ')[0];
      let questionValue = event.target.id.split(' ')[1];
      let response = document.getElementById("response-input").value.toLowerCase();
      let answer = placeholderQuestions[0].roundOne[questionCategory][questionValue].answer;
      console.log(response);
      console.log(answer);
      if (playerTurn) {
          if (response === answer.toLowerCase()) {
          scoreOne = scoreOne + placeholderQuestions[0].roundOne[questionCategory][questionValue].value;
          console.log(scoreOne)
          //change the text content for the scores to new score
          playerOne.textContent = `Player 1: ${scoreOne}`
        } else {
          scoreOne = scoreOne - placeholderQuestions[0].roundOne[questionCategory][questionValue].value;
          playerOne.textContent = `Player 1: ${scoreOne}`
          playerTurn = false;
          turn.textContent = `Turn: Player 2`
        }
      } else {
          if (response === answer.toLowerCase()) {
            scoreTwo = scoreTwo + placeholderQuestions[0].roundOne[questionCategory][questionValue].value;
            console.log(scoreTwo)
            //change the text content for the scores to new score
            playerTwo.textContent = `Player 2: ${scoreTwo}`
          } else {
            scoreTwo = scoreTwo - placeholderQuestions[0].roundOne[questionCategory][questionValue].value;
            playerTwo.textContent = `Player 2: ${scoreTwo}`
            playerTurn = true;
            turn.textContent = `Turn: Player 1`
          }
        }
      })
    }
  }

  //Handle Pass

runNav();