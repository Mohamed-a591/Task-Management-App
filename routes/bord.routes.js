const router = require("express").Router()
const {bord} = require("../controller")

router.get("/bord", bord.show)

module.exports = router