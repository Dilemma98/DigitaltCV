const reposHolder = document.getElementById("githubRepos");
const startDate = new Date("2024-08-26");
const endDate = new Date("2026-05-31");

//Dates to subtract summerbreak
const summerStart = new Date("2025-06-02");
const summerEnd = new Date("2025-08-24");

//To see if certain day is between this span
function isSummerBreak(date) {
    return date >= summerStart && date <= summerEnd;
}

//Calculate total time without summerbreak
function getAdjustedDuration(startDate, endDate) {
    let totalDuration = 0;
    let currentDate = new Date(startDate);

    while(currentDate <= endDate) {
        if(!isSummerBreak(currentDate)) {
            totalDuration += 24 * 60 * 60 * 1000;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return totalDuration;
}

function updateProgressBar() {
    const now = new Date();
    const totalDuration = getAdjustedDuration(startDate, endDate);
    let progress;

    if(now >= summerStart && now <= summerEnd)
    {
      progress = 50;
    } else {
      const elapsedTime = now - startDate;
      //Calculate elapsed time
      progress = (elapsedTime / totalDuration) * 100;
    }

    //Update progressbar width and text
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = progress + "%";
    progressBar.innerHTML = Math.round(progress) + "% done";

}

window.onload = function() {
    updateProgressBar();
}

setInterval(updateProgressBar, 604800000);

fetch("https://api.github.com/users/dilemma98/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (githubRepos) {
    githubRepos.forEach((repo) => {
      let repoItem = document.createElement("p");
      repoItem.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
      repoItem.classList.add("listRepos");
      reposHolder.appendChild(repoItem);
    });
  });