//built in modules
// fs(file system) module which is a inbuilt or core module it has synchronous 
/*Now before using the fs module you need to understand that there are two approaches to use fs module methods:-

Using synchronous methods
Using asynchronous methods*/
const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//console.log(first,second)
writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`
//,{flag:'a'}
)
console.log('done with task')
console.log('starting the next one')
