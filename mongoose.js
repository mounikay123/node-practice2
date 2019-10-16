var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('mongodb connected')
}).catch(err=>{
    console.error('mongodb not connected',err);
})
const courseSchema=new mongoose.Schema({
    "name":{type:String},
    "author":{type:String},
    "tags":[String],
    "date":{type:Date, default:Date.now},
    "isPublished":{type:Boolean}
})
const Course=mongoose.model('Course',courseSchema);
async function courseEdit(){
    const course=new Course({
        "name":"AngularJs course",
        "author":"mouni",
        "tags":["AngularJs","frontEnd"],
        "isPublished":true
    })
    const result=await course.save();
    console.log(result)
}
async function getCourses(){
    const res=await Course.find({author: 'mouni',isPublished: true}).limit(4).sort({"name":1})
    .select({name:1,tags:1})
    console.log(res,"res")
}
// courseEdit()
getCourses()