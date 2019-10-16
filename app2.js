console.log('before');
const user=getuser(1,(user)=>{
    console.log(user)
    getRepos(user.gitHubUsername,(repos)=>{   //callbackHell
    console.log(repos,"repos")
    getCommits(repos,function(commits){
   console.log(commits,"commits")
    })
    })
});
console.log(user);
console.log("after");
 function getuser(id,callback){
    setTimeout(()=>{
        console.log("reading user from database")
        callback({
            id:id,
            gitHubUsername:"mounika"
        })
        },2000)
        return 1
 }
 function getRepos(userName,callback){
    setTimeout(()=>{
        console.log("reading user from database from" + userName)
        callback (['repo1','repo2','repo3']);
        },2000)
     
 }
 function getCommits(repo,callback){
    setTimeout(()=>{
        console.log("reading user from database from" +repo)
        callback (['commit1','commit2','commit3']);
        },2000)
     
 }