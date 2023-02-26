let numberOfActiveCircles = 1
progressStepsArray = document.querySelectorAll(".progress-step")
previousButton = document.getElementById("previous-button-id")
nextButton = document.getElementById("next-button-id")
progressLine = document.getElementById("progress-line-id")

console.log(previousButton)
console.log(nextButton)

nextButton.addEventListener("click", ()=> {
    console.log("Next button clicked")
    numberOfActiveCircles++
    numberOfActiveCircles = Math.min(numberOfActiveCircles, progressStepsArray.length)
    update()
})

previousButton.addEventListener("click", ()=> {
    console.log("Previous button clicked.")
    numberOfActiveCircles--;
    numberOfActiveCircles = Math.max(numberOfActiveCircles, 1)
    update()
})

function update(){
    progressStepsArray.forEach((progressStep, idx) => {
        if(idx < numberOfActiveCircles) {
            progressStep.classList.add('active')
        }else {
            progressStep.classList.remove('active')
        }
    })
    activeProgressStepsArray = document.querySelectorAll('.active')
    progressLine.style.width = (((activeProgressStepsArray.length - 1)/(progressStepsArray.length-1))*100) + '%'
    if (numberOfActiveCircles==1){
        previousButton.disabled = true
    } else if (numberOfActiveCircles == progressStepsArray.length) {
        nextButton.disabled = true
    }else {
        previousButton.disabled = false
        nextButton.disabled = false
    }
}