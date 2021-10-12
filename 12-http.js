const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is about page')
    }
    res.end(`<h1>OOps!</h1> 
    <p>we can't find the page</p> 
    <a href='/'>back to home page</a>`)
// res.write('Welcome to our home page');
// res.end()
})
server.listen(5000)