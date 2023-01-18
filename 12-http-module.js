//built in modules
const http = require('http')
const server=http.createServer((req,res)=>{
    //console.log(req)
    if(req.url==='/'){
        res.end('welcome home page')
    }
    if(req.url==='/about'){
        res.end('here is bye')
    }
    res.end(`<h1>Oops!</h1>
    <p>we are not finding the page</p>
    <a href="/">back home</a>`)

    //res.write('Welcome to our sana home page')
    //res.end()
//locolhost:5000
})
server.listen(5000)
