const mongoose = require("mongoose")
const validator = require("validator")

const cardSchema = new mongoose.Schema({
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
    tasks: []
},
    {timestamps:true}
)



const Card = mongoose.model("Card",  cardSchema)

module.exports = Card