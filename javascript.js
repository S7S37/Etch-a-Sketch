const container = document.querySelector(".container")
const changeButton = document.querySelector(".changeResouluton")
const resetResoulution = document.querySelector(".resetResoulution")

// make a grid using flexbox
for (let i = 0;i<16*16;i++){
    const div = document.createElement("div");
    let boxSize = 960/16
    div.style.flexBasis = `${boxSize}px`
    div.style.height = `${boxSize}px`
    div.classList.add("pixel-Box")
    div.style.backgroundColor="white"
    container.appendChild(div)
// setting a hovering effect
    div.addEventListener("mouseenter", (e)=> {
        div.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random()* 255},${Math.random()* 255})`
    })
}

changeButton.addEventListener("click", (e)=> {
    const divs = document.querySelectorAll(".pixel-Box")
    let numOfBoxes = prompt("please enter resolution(value between 1-100)")
    numOfBoxes = Number(numOfBoxes)
    if(numOfBoxes === null){

    }
    else if (numOfBoxes > 100 || numOfBoxes <1||!typeof numOfBoxes==="number"){
        alert("sorry the value isn't correct")
        let event = new Event('click')
        resetButton.dispatchEvent(event);
    }
    else {
        for(const div of divs) {
            div.remove()
        }
        for (let i = 0;i<numOfBoxes*numOfBoxes;i++){
            const div = document.createElement("div");
            let boxSize = 960/numOfBoxes
            div.style.flexBasis = `${boxSize}px`
            div.style.height = `${boxSize}px`
            div.style.backgroundColor="white"
            div.classList.add("pixel-Box")
            container.appendChild(div)
            div.addEventListener("mouseenter", (e)=> {
                div.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random()* 255},${Math.random()* 255})`
            })
}    
    }
})

resetResoulution.addEventListener("click", ()=>{
    const divs = document.querySelectorAll(".pixel-Box")
    divs.forEach( (div) => {div.style.backgroundColor = "white"})    
    
})
