const { Board } = require("../models")

const ObjectId = require("mongoose").ObjectId


class BoardController {
    static add = async (req, res, next) => {
        try{
            const boardData = new Board(req.body)  
            await boardData.save()
            res.send({apiStatus:true, message:"board added", data: boardData})
        }
        catch(e){
            next();
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in adding user"  
            })
        }
    }

    static update = async (req, res, next) => {
        try{
            await Board.findByIdAndUpdate(req.params.boardId, {...req.body}, {new: true})  
            .then(board =>{
                if(!board) throw Error("No board found")
                res.send({apiStatus:true, message:"board added", data: board})
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in adding user"  
            })
        }
    }

    static delete = async (req, res, next) => {
        try{
            await Board.deleteOne ({_id:req.params.boardId})
            .then(board => {
                if(!board.deletedCount) throw Error("Board Not Found")

                res.send({apiStatus:true, message:"board deleted", data: board})
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in deleting board"  
            })
        }
    }


}

module.exports = BoardController