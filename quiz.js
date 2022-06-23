const quizForm = document.querySelector("#quiz-form")
const submitAnswerBtn = document.querySelector("#submit-answer-btn")
const outputBox = document.querySelector("#output")
const correctAnswers = ['90°', 'right angled']

submitAnswerBtn.addEventListener("click", calculateScore)

function calculateScore() {
    let score = 0
    let index = 0
    const formResults = new FormData(quizForm)
    for(let values of formResults.values()) {
        if (values === correctAnswers[index]) {
            score = score + 1
        }
        index = index + 1
    }
    outputBox.innerText = "You Scored: " + score
}