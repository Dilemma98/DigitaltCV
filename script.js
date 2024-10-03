const reposHolder = document.getElementById("githubRepos");

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
