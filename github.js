// Client ID
// 8dd24e4c9ac1170cac57
// Client Secret
// 1b852d64062d0dfc8ba65eb6ae67d75af19df604

class GitHub{
    constructor(){
        this.clientId = '8dd24e4c9ac1170cac57';
        this.clientSec = '1b852d64062d0dfc8ba65eb6ae67d75af19df604';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const userSearch = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSec}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSec}`);

        const userProfile = await userSearch.json();
        const userRepos = await repoResponse.json();
        


        return {
            userProfile,
            userRepos
        }
    }


}





