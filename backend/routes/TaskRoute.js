const {Router}=require('express')
const { 
    getTasks,
    createTask,
    deleteTask,
    updateTask
 } = require('../controllers/TaskController')

const router=Router()

router.get('/get',getTasks)
router.post('/create',createTask)
router.put('/update/:id',updateTask)
router.delete('/delete/:id',deleteTask)

module.exports=router