console.log('before');
const user = getuser(1,getRepositories);
console.log("after");
function getRepositories(user ) {   
    getRepos(user.gitHubUsername,getCommits);
  }
function getCommits(repos) {
 getCommits1(repos, displayCommits);
}

function displayCommits(Commits){
    console.log(Commits);
}


function getuser(id, callback) {
    setTimeout(() => {
        console.log("reading user from database")
        callback({
            id: id,
            gitHubUsername: "mounika"
        })
    }, 2000)
    return 1
}
function getRepos(userName, callback) {
    setTimeout(() => {
        console.log("reading user from database from" + userName)
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
}
function getCommits1(repo, callback) {
    setTimeout(() => {
        console.log("reading user from database from" + repo)
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000)
}