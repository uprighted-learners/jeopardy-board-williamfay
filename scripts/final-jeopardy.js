import placeholderQuestions from './placeholder-questions.js';


console.log(placeholderQuestions[60].question)


function finalQuestion() {
    let target = document.getElementById("new-content");
    let question = document.createElement("h2");
    question.textContent = placeholderQuestions[60].question;
    target.appendChild(question);
}
function finalAnswers() {
    let target = document.getElementById("new-content");
    let response1 = document.createElement("input");
    response1.setAttribute("id", "response1");
    response1.setAttribute("placeholder", "Player One Response");
    response1.setAttribute("type", "password");
    let response2 = document.createElement("input");
    response2.setAttribute("id", "response2");
    response2.setAttribute("placeholder", "Player Two Response");
    response2.setAttribute("type", "password");
    let response3 = document.createElement("input");
    response3.setAttribute("id", "response3");
    response3.setAttribute("placeholder", "Player Three Response");
    response3.setAttribute("type", "password");
    
    
    target.appendChild(response1);
    target.appendChild(response2);
    target.appendChild(response3);
}


function submitButton() {
    let target = document.getElementById("new-content");
    let button = document.createElement("button");
    button.setAttribute("id", "submit-button");
    button.textContent = "Submit Responses";
    target.appendChild(button);
}

function playFinal() {
    finalQuestion();
    finalAnswers();
    submitButton();
}

function submitWager() {
    let button = document.getElementById("play-final");
    button.addEventListener("click", () => {
        handleWagers();
        playFinal();
    })
}

submitWager();



function handleWagers() {
    let p1Wager = document.getElementById("player-one").value;
    console.log("Player One:", p1Wager);
    let p2Wager = document.getElementById("player-two").value;
    console.log("Player Two:", p2Wager);
    let p3Wager = document.getElementById("player-three").value;
    console.log("Player Three:", p3Wager);
}

function handleAnswers() {
    
}

