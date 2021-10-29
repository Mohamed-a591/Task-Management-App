const mongoose = require("mongoose")
const validator = require("validator")

const bordSchema = new mongoose.Schema({
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
    cards: []
},
    {timestamps:true}
)



const Board = mongoose.model("Board",  bordSchema)

module.exports = Board