const router = require("express").Router()
const { task } = require("../controller")

const auth = require("../middlewares/auth.middleware")

router.post("/add", auth, task.add)
router.patch("/update/:taskId", task.update)
router.delete("/delete/:taskId", task.delete)
  

module.exports = router 