// ques:
function getCustomers(id, callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: "siddhu",
            isGold: true,
            email: 'email'
        })
    }, 4000)
}

function getTopMovies(callback) {
    setTimeout(() => {
        callback(['I', 'majili'])
    }, 4000)
}

function sentEmail(callback) {
    setTimeout(() => {
        callback()
    }, 4000)
}

getCustomers(1,(customer)=>{
if(customer.isGold){
    getTopMovies((movies)=>{
        console.log(movies)
        sentEmail(()=>{
            console.log('mail is sent to customer')
        }) 
    })
}
})
//ans:
function getCustomers(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                id: 1,
                name: "siddhu",
                isGold: true,
                email: 'email'
            })
        }, 4000)
    })
   
}

function getTopMovies() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(['I', 'majili'])
    }, 4000)
})
}

function sentEmail() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('email sent to customer')
    }, 4000)
})
}

async function display(){
    try{
        const customer=await getCustomers();
        console.log(customer)
        if(customer.isGold){
            const TopMovies=await getTopMovies();
            console.log(TopMovies)
        }
      const email= await sentEmail();
      console.log(email)
    }catch(err){
        console.log("errorrr" ,err.message)
    }

}
display()
