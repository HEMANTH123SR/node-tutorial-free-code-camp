const data=require('../t3/data')

const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send(`<h1>home page</h1>
    <a href="/api/product">product api</a>
    `)
})

app.get('/api/product',(req,res)=>{

    res.json(data)
})

app.get('/api/product/:id',(req,res)=>{
    const id=Number(req.params.id)
    res.json(data.products[id])
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    res.send('hello brother')
})

app.listen(5000,()=>{
    console.log("the server started listening request at port 5000")
})