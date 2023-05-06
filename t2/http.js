const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
res.end("welcome to our home page")
    }
   if(req.url=="/about"){
    res.end("welcome to or about page")
   }
res.end(`
<h1>oops!</h1>
`)
}
)

server.listen(3000)