const baseInput = document.querySelector("#base-input")
const heightInput = document.querySelector("#height-input")
const checkBtn = document.querySelector("#check-btn")
const outputBox = document.querySelector("#output-box")

checkBtn.addEventListener("click", calculateAreaOfTriangle)

function calculateAreaOfTriangle () {
    const areaOfTriangle = 1/2 * Number(baseInput.value * heightInput.value)
    outputBox.innerText = "The area of Triangle is: " + areaOfTriangle
}