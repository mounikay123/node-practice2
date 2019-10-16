


var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('mongodb connected')
}).catch(err=>{
    console.error('mongodb not connected',err);
})
const courseSchema2=new mongoose.Schema({
    "name":{type:String},
    "author":{type:String},
    
   "isPublished":{type:Boolean}
})
const Course2=mongoose.model('Course2',courseSchema2);

async function courseEdit(){
    const course=new Course2({
        "name":"oracle course",
        "author":"mona",
         "isPublished":true
    })
    const result=await course.save();
    console.log(result)
}
// courseEdit()
async function getCourses(){
    const pageNumber=2;
    const pageSize=10;
    const courses=await Course2
    .find({author:'pujitha',isPublished:true})
    // .skip((pageNumber-1)*pageSize)
    // .limit(pageSize)
    // .sort({name:1})
    // .select({name:1,tags:1})
    console.log(courses);
}
getCourses()