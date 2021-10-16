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


app.use("/api", routes.bord)  



module.exports = app