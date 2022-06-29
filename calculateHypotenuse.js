const inputSideA = document.querySelector("#side-a")
const inputSideB = document.querySelector("#side-b")
const outputEl = document.querySelector("#output-box")
const checkBtn = document.querySelector("#check-btn")

checkBtn.addEventListener("click", calculateHypotenuse)

function calculateHypotenuse() {
    calculateSumOfSquaresOfSides(inputSideA.value, inputSideB.value)
    const hypotenuse = Math.sqrt(sumOfSquares)
    outputEl.innerText = "The Hypotenuse of the Side angle's entered is: " + hypotenuse
}

function calculateSumOfSquaresOfSides (sideA, sideB) {
    sumOfSquares = Number(sideA*sideA) + Number(sideB*sideB)
}