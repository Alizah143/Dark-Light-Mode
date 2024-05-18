let moon = document.querySelector("i")
const body = document.querySelector("body")
let sun = document.getElementById("sun")

moon.addEventListener("click",()=>{
    body.style.backgroundColor= "black"
})
sun.addEventListener("click",()=>{
    body.style.backgroundColor= "white"
})

