//built in modules
// fs(file system) module which is a inbuilt or core module it has synchronous 
/*Now before using the fs module you need to understand that there are two approaches to use fs module methods:-

Using synchronous methods
Using asynchronous methods*/
const{readFile,writeFile}=require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=> //inner callback function
{
    if(err) {
        console.log(err)
        return
    }
    //console.log(result)
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        //console.log(result)
        const second=result;
        writeFile('./content/result-async.txt',`here is the result: ${first},${second}`,(err,result)=>{
            if(err) {
                console.log(err)
                return
            }
            console.log('done with task')
        })
        

    })

})
console.log('starting the next task')