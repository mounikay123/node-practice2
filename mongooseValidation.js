const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-games').then(()=>{
    console.log('mongodb connected')
}).catch(err=>{
    console.error('mongodb not connected',err);
})


const gameSchema =new mongoose.Schema({
    title:  {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 200
    },
    publisher: String,
    tags: {
        type: [String],
        validate: {
            validator: function (v) {
                return v.length > 1
            },
            message: 'You must provide more than 1 tag.'
        }
    },
    date: { type: Date, default: Date.now },
    onSale: Boolean,
    price: Number
})
const Game =mongoose.model('Games',gameSchema);
async function addGames(){
const newGame=new Game({
    title:"c",
    publisher: "teja",
    tags: ["cricket","sachin"],
    onSale: false,
    price: 1000

})
const result=await newGame.save();
console.log(result)

}
addGames()