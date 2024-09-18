let imageElement = document.getElementById("mePic");

let omMig = document.querySelector(".omMig");
let aboutMe = document.querySelector(".aboutMe");
let arbErf = document.querySelector(".arbErf");
let workExp = document.querySelector(".workExp");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

aboutMe.addEventListener("click", () => {
    omMig.classList.remove("hide");
    arbErf.classList.add("hide");
    clock.classList.add("hide");
})

workExp.addEventListener("click", () => {
    arbErf.classList.remove("hide");
    omMig.classList.add("hide");
    clock.classList.add("hide");
})

function swapImage(){
    if (imageElement.src.includes("images/mePic.jpg")){
        imageElement.src = "images/meSwap.jpg";
    } else {
        imageElement.src = "images/mePic.jpg";
    }
}
/*Tog koden till klockan från en tidigare övning vi gjort*/
setInterval(() => {
    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);
