const mongoose =require('mongoose')
const taskschema= new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    },
    completed:{ default:false,
        type:Boolean
    },
    owner :{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})

// taskschema.pre('save',async function(next){
//     this.task="helo"
//     next()
    
// })
const tasks =mongoose.model('tasks',taskschema)


module.exports=tasks