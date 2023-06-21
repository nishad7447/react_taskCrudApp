const TaskModel = require('../model/Taks')

module.exports = {
    getTasks: async (req, res) => {
        const task = await TaskModel.find()
        res.send(task)
    },
    createTask:(req,res)=>{
        const {task} =req.body
        TaskModel.create({task})
        .then((data)=>{
            console.log('Saved successfully...');
            res.status(201).send(data)
        })
        .catch((err)=>{
            res.send(err,'something wend wrong')
        })
    },
    updateTask:(req,res)=>{
        const {id}=req.params
        const {task}=req.body
        console.log(id,task);
        TaskModel.findByIdAndUpdate(id,{task})
        .then(()=>res.send('updated Success'))
        .catch((err)=>{
            res.send(err,'something wend wrong')
        })
    },
    deleteTask:(req,res)=>{
        const {id}=req.params
        TaskModel.findByIdAndDelete(id)
        .then(()=>res.send('deleted Success'))
        .catch((err)=>{
            res.send(err,'something wend wrong')
        })
    },


}