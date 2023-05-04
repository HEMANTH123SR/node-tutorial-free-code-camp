const names=require("./4-name")
const utils=require("./5-utils")
const altDat=require("./6-alternative-way-to-use-module")
require('./6-alternative-way-to-use-module')

console.log(altDat)
utils.sayHi(names.cook)
utils.sayHi(names.sword)



