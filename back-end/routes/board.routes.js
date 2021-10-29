const router = require("express").Router()
const { board } = require("../controller")

router.post("/add",  board.add)
router.patch("/update/:boardId", board.update)
router.delete("/delete/:boardId", board.delete)
  
module.exports = router