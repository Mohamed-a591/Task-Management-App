const { Card } = require("../models")


class CardController {
    static add = async (req, res, next) => {
        try{
            const cardData = new Card(req.body)  
            await cardData.save()
            res.send({apiStatus:true, message:"card added", data: cardData})
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
            await Card.findByIdAndUpdate(req.params.cardId, {...req.body}, {new: true})  
            .then(card =>{
                if(!card) throw Error("No card found")
                res.send({apiStatus:true, message:"card added", data: card})
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
            await Card.deleteOne ({_id:req.params.cardId})
            .then(card => {
                if(!card.deletedCount) throw Error("Card Not Found")

                res.send({apiStatus:true, message:"card deleted", data: card})
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in deleting card"  
            })
        }
    }
}

module.exports = CardController