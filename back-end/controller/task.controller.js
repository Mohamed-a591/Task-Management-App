const { Task } = require("../models")


class TaskController {
    static add = async (req, res, next) => {
        try{
            const taskData = new Task(req.body)  
            await taskData.save()
            res.send({apiStatus:true, message:"task added", data: taskData})
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
            await Task.findByIdAndUpdate(req.params.taskId, {...req.body}, {new: true})  
            .then(task =>{
                if(!task) throw Error("No task found")
                res.send({apiStatus:true, message:"task added", data: task})
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
            await Task.deleteOne ({_id:req.params.taskId})
            .then(task => {
                if(!task.deletedCount) throw Error("Task Not Found")

                res.send({apiStatus:true, message:"task deleted", data: task})
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message:"error in deleting task"  
            })
        }
    }
}

module.exports = TaskController