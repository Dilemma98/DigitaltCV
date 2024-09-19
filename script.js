let imageElement = document.getElementById("mePic");
let navBtns = document.getElementById("navBtns");
let backButton = document.createElement("button");
backButton.innerText = "Tillbaka";

let omMig = document.querySelector(".omMig");
let aboutMe = document.querySelector(".aboutMe");
let arbErf = document.querySelector(".arbErf");
let workExp = document.querySelector(".workExp");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

aboutMe.addEventListener("click", () => {
    backButton.classList.remove("hide");
    omMig.classList.remove("hide");
    arbErf.classList.add("hide");
    clock.classList.add("hide");
    navBtns.appendChild(backButton);
})

workExp.addEventListener("click", () => {
    backButton.classList.remove("hide");
    arbErf.classList.remove("hide");
    omMig.classList.add("hide");
    clock.classList.add("hide");
    navBtns.appendChild(backButton);
})

backButton.addEventListener("click", () => {
    arbErf.classList.add("hide");
    omMig.classList.add("hide");
    backButton.classList.add("hide");
    clock.classList.remove("hide");
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
