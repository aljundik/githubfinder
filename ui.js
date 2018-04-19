class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.alert = document.getElementsByTagName('body');
    }

    showUser(user) {
        this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
    }

    showRepos(reps) {
        let rep = '';

        reps.forEach(element => {
            rep += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${element.html_url}" target="_blank">${element.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${element.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${element.watchers_count}</span>
            <span class="badge badge-success">Forks: ${element.forms_count}</span>
            </div>
          </div>
        </div>
      `;
        });

        document.getElementById('repos').innerHTML = rep;
    }

    showAlert(message, classname) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = classname;
        div.appendChild(document.createTextNode(message));

        const searchContainer = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        searchContainer.insertBefore(div, search);
        setTimeout(() => {
            this.clearAlert();
        }, 2000)
    }

    clearAlert() {
        const alert = document.querySelector('.alert');

        if (alert) {
            alert.remove();
        }
    }

    clearScreen() {
        this.profile.innerHTML = '';
    }
}