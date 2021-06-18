// const chem = document.querySelector("#Chem")
// const aero = document.querySelector("#Aero")
// const french = document.querySelector("#French")
const header = document.querySelector("#header")

header.addEventListener("mouseover", e => {
    header.style.backgroundColor = 'lightgreen';
})
header.addEventListener("mouseleave", e => {
    header.style.backgroundColor = 'black';
})


