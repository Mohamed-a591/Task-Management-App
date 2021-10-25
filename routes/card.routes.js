const router = require("express").Router()
const { card } = require("../controller")

const auth = require("../middlewares/auth.middleware")

router.post("/add", auth, card.add)
router.patch("/update/:cardId", card.update)
router.delete("/delete/:cardId", card.delete)


module.exports = router 