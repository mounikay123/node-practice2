const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("commistsss" )
        resolve(['commit1','commit2','commit3']);
        reject(new Error('something went wrong'))
        },2000)
 
})
const p2=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("dsfdszv" )
        resolve(['repo1','repo2','repo3']);
        },2000)
 
})
Promise.all([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log(err.message)); //it executes two promises simultaneously

Promise.race([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log(err.message));