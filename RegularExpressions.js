//
async function getCourses(){
    const res=await Course
    //find({author: 'mouni',isPublished: true})

    //starts with mounika
    .find({author:'/^mounika/i'}) //i for case insensitive

    //ends with mona
    .find({author:'/mona$/i'})

    //contains mouni
    .find({author:'/.*mona.*/i'})
    .limit(4)
    .sort({"name":1})
    .select({name:1,tags:1}).count() //for counting
    console.log(res,"res")
}