

const fs = require('fs');

const first = fs.readFileSync('./t2/first.txt','utf-8');
const second = fs.readFileSync('./t2/second.txt','utf-8');

console.log(first);
console.log(second);

//write file

fs.writeFileSync('./t2/third.txt',"i learned the read file sync in most hardest way as possible ",{flag:'a'})





