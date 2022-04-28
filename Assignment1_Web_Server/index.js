import * as data from "./data.js";
import http from 'http';
import { parse } from "querystring";
import { query } from "express";



const PORT = 3000
const server = http.createServer((req,res) => {
    const path = req.url.toLowerCase();
    const dataInfo = JSON.stringify(data.getAll('seahawks'))
    let url_parts = req.url.split("?");
    let query = parse(url_parts[1]);
    let player = query["number"]
    let info = JSON.stringify(data.getItem(player))
  

    
    

    switch(url_parts[0]) {
        case '/detail':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(info);
            break;
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(dataInfo);
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


