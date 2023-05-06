const express=require('express')
const path=require('path')

const app=express()

//middle ware
app.use(express.static('./public'))


//get request

app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})


//bad request

app.all("*",(req,res)=>{
    res.status(404).send("oops! resouce not found")
})


app.listen(5000,()=>{
    console.log("listening at port 5000")
})

