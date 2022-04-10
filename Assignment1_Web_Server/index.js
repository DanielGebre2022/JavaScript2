

const http = require("http")
const PORT = 3000
const server = http.createServer((req,res) => {
    const path = req.url.toLowerCase();
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Seahawks are great')
            res.end();
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Seahawks are going to win the super bowl')
            res.end('');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
})
server.listen(PORT, (error)=>{
    if(error){
        console.log('Something went wrong.')
    } else {
        console.log(`Server is listening on port ${PORT}`)
    }
})