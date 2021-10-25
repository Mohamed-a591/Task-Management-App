const mongoose = require("mongoose")
const validator=require("validator")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        minlength:6,
        maxlength:20,
        required:true
    }, 
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    }, 
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:8,
        maxlength:100 
    }, 
    phone:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error("invalid phone number")
        }
    }, 
    gender:{
        type:String,
        trim:true,
        enum:["male", "female"]
    }, 
    image:{
        type:String,
        trim:true
    },
    age:{
        type:Number,
        min:18
    },
    type : {
        type: String,
        enum:["admin", "owner", "employee"]
    }, 
    status:{
        type:Boolean,
        default: false
    },
    tokens: [ { token: { type:String, required: true } } ]
},
    {timestamps:true}
)

userSchema.pre("save", async function(){
    let user = this
    if(user.isModified("password")) user.password=await bcrypt.hash(user.password, 12)
})

userSchema.statics.loginUser = async(email, password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error("email not found")
    const isValidPass = await bcrypt.compare(password, user.password)
    if(!isValidPass) throw new Error("invalid password")
    return user
}

userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWTTOKEN)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User = mongoose.model("User", userSchema)

module.exports = User