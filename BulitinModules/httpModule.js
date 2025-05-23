// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("<h1>Hello From Server</h1>");
// });

// server.listen(8000, console.log("server is running on 8000"));


//Routing Example

const http= require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/')
        res.end('<h1>This is Home page</h1>')
    else if(req.url==='/about')
        res.end('<h1>This is About Page</h1>')
    else if(req.url==='/profile')
        res.end('<h1>This is Profile Page</h1>')
    else if(req.url==='/contact')
        res.end('<h1>This is Contact Page</h1>')
    else 
        res.end('<h1>404 Page Not Found</h1>')
})
server.listen(8000,console.log('Server is Running'))