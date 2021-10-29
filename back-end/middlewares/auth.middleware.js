const createError = require('http-errors')
const jwt = require("jsonwebtoken")


const { User } = require("../models") 


const auth = async(req, res, next) =>{

    if (!req.header("Authorization")) return res.json(createError(401, {status: false}))

    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWTTOKEN);
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if(!user) res.json(createError(401, "UnAuthorized"))
        req.user  = user  
        req.token = token
        next()
    }
    catch(e){ res.status(500).send({apiStatus:false, data: e, message:"unauthorized"})} 
}

module.exports = auth