const angleInputs = document.querySelectorAll(".angle-inputs")
const checkBtn = document.querySelector("#check-btn")
const outputBox = document.querySelector("#output")

checkBtn.addEventListener("click", checkTriangle)

function checkSumOfAngles(angle1, angle2, angle3) {
    sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles
}

function checkTriangle() {
    const sumOfAngles = checkSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value))
    if (sumOfAngles === 180) {
        outputBox.innerText = "Hooray!!The angle's you have entered forms a Triangle! 🥳"
    } else {
        outputBox.innerText = "Oh!no! The angle's you have entered don't form a Triangle.😞"
    }
}