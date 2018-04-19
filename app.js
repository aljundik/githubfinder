const github = new GitHub();
const ui = new UI();
document.getElementById('searchUser').addEventListener('keyup',(e) => {
    const searchString = e.target.value;
    

    if(searchString !== ''){
        github.getUser(searchString)
            .then(data => {
                console.log(data);
                if(data.userProfile.message === 'Not Found'){
                    // show message
                    ui.showAlert('The user was not found','alert alert-danger')
                } else{
                    ui.showUser(data.userProfile);
                    console.log(data.userRepos);
                    ui.showRepos(data.userRepos);
                }
            });
    } else {
        ui.clearScreen();
    }

    e.preventDefault();
})