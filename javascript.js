const container = document.querySelector(".container")

// make a grid using flexbox
for (let i = 0;i<100*100;i++){
    const div = document.createElement("div");
    let boxSize = 960/100
    div.style.flexBasis = `${boxSize}px`
    div.style.height = `${boxSize}px`
    div.classList.add("pixel-Box")
    container.appendChild(div)
// setting a hovering effect
    div.addEventListener("mouseenter", (e)=> {
        div.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random()* 255},${Math.random()* 255})`
    })
}

