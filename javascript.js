const container = document.querySelector(".container")

/*make a grid using flexbox*/
for (let i = 0;i<16 * 16;i++){
    const div = document.createElement("div");
    let boxSize = 960/16
    div.style.flexBasis = `${boxSize}px`
    div.style.height = `${boxSize}px`
    div.classList.add("pixel-Box")
    container.appendChild(div)
}