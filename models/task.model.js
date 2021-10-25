const mongoose = require("mongoose")
const validator = require("validator")

const taskSchema = new mongoose.Schema({
    name : {
        type:String,
        trim:true,
        minlength:6,
        maxlength:20,
        required: true
    },
    description: {
        type: String,
        trim: true,
        minlength: 5,
    },
    owner : {
        type : String,
        trim: true,
    },
    assigned_to : []
},
    {timestamps:true}
)


const Task = mongoose.model("Task",  taskSchema)

module.exports = Task