const express = require('express')
require('dotenv').config()
const cors=require('cors')
const { default: mongoose } = require('mongoose')
const routes=require('./routes/TaskRoute')

const app =express()
const PORT = process.env.PORT | 3001

app.use(express.json())
app.use(cors())
mongoose
.connect('mongodb://127.0.0.1:27017/crudApp')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err,'DB Error');
})

app.use('/api',routes)

app.get('/',(req,res)=>{
    res.send('Hello gooys ')
})


app.listen(PORT, ()=> console.log('Server running on',PORT))