const {readFile,writeFile, read} =require('fs')

readFile('./t2/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
  const first=res;
}
)
  readFile('./t2/second.txt','utf-8',(err,res)=>{
    if(err){
        return 
    }
    const second = res;
}
  )
    writeFile("./t2/zoro.txt",`
    i am zoro 
    i like sword
    speciall three sword 
    and i like tease sanji 
    and i am loyal to my captain luffy
    `,{flag:'a'},(err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })
