const createError = require('http-errors')

const {User} = require("../models")

// const emailSetting = require('../helper/email.helper')
// const generateTxt = require("../helper/generateEmailTxt")


class UserController{
    static register = async(req, res)=>{
        try{
            let user = new User(req.body)
            await user.save()
            res.send({apiStatus:true, message:"registered", data: user})
        }
        
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in adding user"
            })
        }
    }

    static login = async(req, res, next)=>{
        try{
            const userData = await User.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken() 
            res.status(200).send({apiStatus:true, data:{userData, token}, message:"logged in success"})
        }
        catch(e){
            return res.status(500).send({apiStatus:false, data:"", message:"Invalid mail or password"})
        }
    }

    static profile = async(req, res, next)=>{
        try{
            const userData = req.user
            res.status(200).send({apiStatus:true, data:{userData}, message:"logged in success"})
        }
        catch(e){
            return res.status(500).send({apiStatus:false, data:"", message:"Invalid mail or password"})
        }
    }
    
    static logout = async(req, res)=>{

        try{
            req.user.tokens = []
            await req.user.save()
            res.send({
                apiStatus:true,
                data:"",
                message:"user logged out"
            })
        }
        catch(e){
            res.send(e)
        }
    }

    static logoutAll = async(req, res)=>{

        try{
            req.user.tokens = []
            await req.user.save()
            res.send({
                apiStatus:true,
                data:"",
                message:"user logged out"
            })
        }
        catch(e){
            res.send(e)
        }
    }

    static uploadImg = (req, res) => {
        res.send(req.file)  
    }
}

module.exports = UserController