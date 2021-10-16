const mongoose = require("mongoose")
const validator = require("validator")

const bordSchema = new mongoose.Schema({
    name : {
        type:String,
        trim:true,
        minlength:6,
        maxlength:20,
        required: true
    }
})



const Bord = mongoose.model("Bord",  bordSchema)

module.exports = Bord