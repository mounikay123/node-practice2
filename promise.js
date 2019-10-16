

var p=new Promise((resolve,reject)=>{
    resolve(1);
    reject(new Error('messsage'))
})
p.then((result)=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})


function getuser(id){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("reading user from database" +id)
            resolve({
                id:id,
                gitHubUsername:"mounika"
            })
            },2000)
           
     })
   
 }
 function getRepos(userName){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("calling github api" + userName)
        // resolve(['repo1','repo2','repo3']);
        reject(new Error('repos not found'))
        },2000)
    })
 }
 function getCommits(repo){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("commistsss" +  repo)
        resolve(['commit1','commit2','commit3']);
        },2000)
    })
 }
 /*promises */
 console.log('before');
 getuser(1)
 .then(user=>getRepos(user.gitHubUsername))
 .then(repos=>getCommits(repos[0]))
 .then(commits=>console.log(commits))
 .catch(err=>console.log(err.message))
 console.log("after");
 /*promises */
 
 
 /* by using async and await */
async function displayCommits(){
    try{                                              //errors in async await using try
        const user= await getuser(1)
        const repos= await getRepos(user.gitHubUsername)
        const commits= await getCommits(repos[0])
        console.log(commits)
    }
   catch(err){
     console.log("Error"+ err.message)
   }
 }
 displayCommits()
 
 /* by using async and await */