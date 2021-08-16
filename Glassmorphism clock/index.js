const deg =6; 
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() *30;
    let mn = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${h*(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`
    sc.style.transform = `rotateZ(${(ss)}deg)`
})