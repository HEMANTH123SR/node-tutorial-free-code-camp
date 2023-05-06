const http=require('http')

const server=http.createServer((req,res)=>{
if(req.url=='/'){
    res.writeHead(200,{'content-type':'text/plain'})
    res.write(`home page ${req.url}`)
    res.end()
}
else if(req.url=="/contact"){
   res.writeHead(200,{'content-type':'text/plain'})
   res.write("79750516431")
   res.end()
}
else{
res.writeHead(404,{'content-type':'text/plain'})
res.end("opps! bad request")
}

})

server.listen(3000,()=>{
    console.log("the server started listening request at port 3000",)
})