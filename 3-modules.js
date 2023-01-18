//setInterval(()=>{ console.log("hello sana")},1000)
/*Modules-encapsulated code
1.core modules(built in)
2.local modules
3.third party modules
Node uses commonjs library and every file in node is a module 
*/
const  names=require('./4-names') //where the values assigned
const sayHi = require('./5-utils') //5-utils where the function is written

const data=require('./7-alter')
console.log(data)

require('./7-mind-grenard')


 sayHi(names.sana)
 sayHi(names.ashu)
 sayHi(names.ashu)

const add=require('./6a-add')
const addn = require('./6-add')
addn(add.a1,add.b1)

