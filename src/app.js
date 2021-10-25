/**
 * Run required scripts
 */
require("dotenv").config()
require('../config/dbConnection')


/**
 * call required packages
 */
const express = require("express")
const cors = require("cors")

const routes = require("../routes")
const auth = require("../middlewares/auth.middleware")


/**
 * create expres instanse
 */
const app = express()
app.use(cors())

/**
 * use json middleware and url encoded
 */

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/user", routes.user)     
app.use("/api/board", auth, routes.board)    
app.use("/api/card" , auth, routes.card)    
app.use("/api/task" , auth, routes.task)    





module.exports = app