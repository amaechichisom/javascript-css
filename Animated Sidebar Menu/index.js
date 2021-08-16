const nav = document.getElementById("nav")
const toggle = document.getElementById("toggle");

toggle.addEventListener("click",() =>{
    console.log("I ran for shit" + toggle)
    
    nav.classList.toggle("active");
})