const multer = require("multer")
const fs = require("fs")
const path = require("path")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const loc = path.join("uploads", "images")
        fs.mkdir(loc, (err)=>{})
        cb(null, loc)
    },
    filename: function(req, file, cb) {
        const fileName = Date.now()+path.extname(file.originalname)
        cb(null, fileName)
    }
})

const upload = multer({
    storage,
    limits: {fileSize: 200000000}
})

module.exports = upload  