//path

const path=require("path")

console.log(path.sep)

const filePath=path.join("t2","subFolder","test.txt")

console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolutePath=path.resolve(__dirname,"subFolder","test.txt")

console.log(absolutePath)

// sync fs

const fs=require('fs')

// read file
const first =fs.readFileSync('./t2/first.txt','utf-8')
console.log(first)
// write file
fs.writeFileSync('./t2/zoro.txt',"mosh head")

// async fs

// readfile async
const second =fs.readFile('./t2/second.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})

//  write async
fs.writeFile("./t2/zoro.txt","four sword",(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})