const router = require('express').Router()
const {user} = require("../controller")

router.post("/register", user.register)
router.post("/login", user.login)
// router.patch("/activate/:id", user.activateUser)

module.exports = router