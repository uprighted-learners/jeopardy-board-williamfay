import placeholderQuestions from './placeholder-questions.js';

//Global
const submit = document.getElementById("respond");
submit.disabled = true;
let playerTurn = 1;
let currentTurn = playerTurn;
let currentCategory = ""
let score = 0;
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
    let response = document.getElementById("response-input").value.toLowerCase();
    let answer = placeholderQuestions[0].roundOne.nature.oneHundred.answer;
    console.log(response);
    if (response === answer.toLowerCase()) {
        score = score + placeholderQuestions[0].roundOne.nature.oneHundred.value;
        console.log(score)
    }
}


  //Handle Pass

runNav();