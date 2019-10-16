async function getCourses(){

    //eq for equal
    //gt for greaterthan
    //lt for lessthan
    //ne for not equal
    //gte for greaterthan or equal
    //lte for lessthan or equal
    //in 
    //nin for not in
    const res=await Course.find({price:{$gt:10}
        // {price:{$gte:10},{$lte:20}}
    }).limit(4).sort({"name":1})
    // (or)
    const res=await Course.find({price:{$in:[10,15,20]}}).limit(4).sort({"name":1})
    .select({name:1,tags:1})
    console.log(res,"res")
}



//logical operators
const res=await Course.
//.find({price:{$gt:10}
  find().or([{author:'mosh'},{isPublished:true}]) //it is same as find().and([{author:'mosh',isPublished:true}])
.limit(4).sort({"name":1})