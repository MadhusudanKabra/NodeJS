/*
const http = require('http');

var server= http.createServer((req,res) =>{
    
    res.write(`Welcome to Madhusudan's World where life is not only sad but also disappointing`)
    res.end()
})

server.listen(4000)
*/

const http =require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end(`Welcome to MRK's HomePage`)
    }
    if(req.url === '/about'){
        res.end(`This is everything you need to know about MRK`)
    }
    res.end(`
    <h1>Error 404</h1>
<p>This Page does not exists in MRK's World</p>
<a href="/"> Back to HomePage</a>
    `)
   
})

server.listen(5000)