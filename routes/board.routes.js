const router = require("express").Router()
const {board} = require("../controller")

router.get("/board", board.show)

module.exports = router 