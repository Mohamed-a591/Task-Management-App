const router = require('express').Router()
const {user} = require("../controller")
const auth = require("../middlewares/auth.middleware")
const upload = require("../middlewares/uploadFile.middleware")

router.post("/register", user.register)
router.post("/login", user.login)
router.post("/logout-all", auth, user.logout)
router.post("/logout-all", auth, user.logoutAll)
router.post("/upload-img", upload.single('img'), user.uploadImg)    


module.exports = router  