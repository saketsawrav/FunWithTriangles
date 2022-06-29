const inputSideA = document.querySelector("#side-a")
const inputSideB = document.querySelector("#side-b")
const outputEl = document.querySelector("#output-box")
const checkBtn = document.querySelector("#check-btn")

checkBtn.addEventListener("click", calculateHypotenuse)

function calculateHypotenuse() {
    console.log(inputSideA.value, inputSideB.value)
    outputEl.innerText = "This is a test"
}