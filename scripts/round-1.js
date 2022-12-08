import placeholderQuestions from './placeholder-questions.js';
console.log(placeholderQuestions[0].roundOne.nature.oneHundred.question)

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
let prop1;
let prop2;
let value;
for (const div of divs) {
    div.addEventListener("click", event => {
        if (div.id.includes("nature")) {
            prop1 = placeholderQuestions[0].roundOne.nature;
         if (div.id.includes("one-hundred")) {
            prop2 = prop1.oneHundred.question;
            value = prop1.oneHundred.value;
         } else if (div.id.includes("two-hundred")) {
            prop2 = prop1.twoHundred.question;
            value = prop1.twoHundred.value;
         } else if (div.id.includes("three-hundred")) {
            prop2 = prop1.threeHundred.question;
            value = prop1.threeHundred.value;
        } else if (div.id.includes("four-hundred")) {
            prop2 = prop1.fourHundred.question;
            value = prop1.fourHundred.value;
        } else if (div.id.includes("five-hundred")) {
            prop2 = prop1.fiveHundred.question;
            value = prop1.fiveHundred.value;
        }}
        if (div.id.includes("animals")) {
            prop1 = placeholderQuestions[0].roundOne.animals;
            if (div.id.includes("one-hundred")) {
                prop2 = prop1.oneHundred.question;
                value = prop1.oneHundred.value;
             } else if (div.id.includes("two-hundred")) {
                prop2 = prop1.twoHundred.question;
                value = prop1.twoHundred.value;
             } else if (div.id.includes("three-hundred")) {
                prop2 = prop1.threeHundred.question;
                value = prop1.threeHundred.value;
            } else if (div.id.includes("four-hundred")) {
                prop2 = prop1.fourHundred.question;
                value = prop1.fourHundred.value;
            } else if (div.id.includes("five-hundred")) {
                prop2 = prop1.fiveHundred.question;
                value = prop1.fiveHundred.value;
        }}
        if (div.id.includes("computers")) {
            prop1 = placeholderQuestions[0].roundOne.computers;
            if (div.id.includes("one-hundred")) {
                prop2 = prop1.oneHundred.question;
                value = prop1.oneHundred.value;
             } else if (div.id.includes("two-hundred")) {
                prop2 = prop1.twoHundred.question;
                value = prop1.twoHundred.value;
             } else if (div.id.includes("three-hundred")) {
                prop2 = prop1.threeHundred.question;
                value = prop1.threeHundred.value;
            } else if (div.id.includes("four-hundred")) {
                prop2 = prop1.fourHundred.question;
                value = prop1.fourHundred.value;
            } else if (div.id.includes("five-hundred")) {
                prop2 = prop1.fiveHundred.question;
                value = prop1.fiveHundred.value;
        }}
        if (div.id.includes("mythology")) {
            prop1 = placeholderQuestions[0].roundOne.mythology;
            if (div.id.includes("one-hundred")) {
                prop2 = prop1.oneHundred.question;
                value = prop1.oneHundred.value;
             } else if (div.id.includes("two-hundred")) {
                prop2 = prop1.twoHundred.question;
                value = prop1.twoHundred.value;
             } else if (div.id.includes("three-hundred")) {
                prop2 = prop1.threeHundred.question;
                value = prop1.threeHundred.value;
            } else if (div.id.includes("four-hundred")) {
                prop2 = prop1.fourHundred.question;
                value = prop1.fourHundred.value;
            } else if (div.id.includes("five-hundred")) {
                prop2 = prop1.fiveHundred.question;
                value = prop1.fiveHundred.value;
        }}
        if (div.id.includes("history")) {
            prop1 = placeholderQuestions[0].roundOne.history;
            if (div.id.includes("one-hundred")) {
                prop2 = prop1.oneHundred.question;
                value = prop1.oneHundred.value;
             } else if (div.id.includes("two-hundred")) {
                prop2 = prop1.twoHundred.question;
                value = prop1.twoHundred.value;
             } else if (div.id.includes("three-hundred")) {
                prop2 = prop1.threeHundred.question;
                value = prop1.threeHundred.value;
            } else if (div.id.includes("four-hundred")) {
                prop2 = prop1.fourHundred.question;
                value = prop1.fourHundred.value;
            } else if (div.id.includes("five-hundred")) {
                prop2 = prop1.fiveHundred.question;
                value = prop1.fiveHundred.value;
        }}
        if (div.id.includes("general")) {
            prop1 = placeholderQuestions[0].roundOne.general;
            if (div.id.includes("one-hundred")) {
                prop2 = prop1.oneHundred.question;
                value = prop1.oneHundred.value;
             } else if (div.id.includes("two-hundred")) {
                prop2 = prop1.twoHundred.question;
                value = prop1.twoHundred.value;
             } else if (div.id.includes("three-hundred")) {
                prop2 = prop1.threeHundred.question;
                value = prop1.threeHundred.value;
            } else if (div.id.includes("four-hundred")) {
                prop2 = prop1.fourHundred.question;
                value = prop1.fourHundred.value;
            } else if (div.id.includes("five-hundred")) {
                prop2 = prop1.fiveHundred.question;
                value = prop1.fiveHundred.value;
        }}
        div.textContent = prop2;
        activateButton();
})};
console.log(prop1, prop2, value);
  //Handle Submit
submit.addEventListener("click", () => {
        deactivateButton();
        checkAnswer();
    });
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