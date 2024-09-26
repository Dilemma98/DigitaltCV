const reposHolder = document.getElementById("githubRepos");

setInterval(() => {
  let currentTime = new Date();

  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

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
