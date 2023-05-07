const express=require('express')

const {loger}=require('./logger')
const app=express()

app.use(loger)

app.get('/',loger,(req,res)=>{
    res.send("home")
})

app.get('/about',loger,(req,res)=>{
    res.send("abou")
})

app.listen(5000,()=>{
    console.log("the server started listening request at port 5000")
})