import * as data from "./data.js";
//import fs from "fs";
//import http from 'http';
//import { parse } from "querystring";
//import { query } from "express";
import express from "express";
//import mongoose from "mongoose";


const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.set('view engine', 'ejs');

console.log(data.getItem(16))


// send static file as response
app.get('/', (req,res) => {
    res.type('text/html');
    res.render('home', { seahawks: [ {number: 16, position: "wr", year: 9, name: "Tyler Lockette"},{number : 14, position : 'wr', year : 4, name : 'D.K. Metcalfe'}, {number : 32, position : 'rb', year : 6, name : 'Chris Carson'},{number : 20, position : 'rb', year : 4, name : 'Rashad Penny'},{number : 7, position : 'qb', year : 8, name : 'Gino Smith'} ]});
   });



// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
   });

app.get('/detail', (req,res) => {
    res.type('text/html');
    let info = data.getItem(req.query.number)
    console.log(info.name)
    res.render('detail',  {  number: info.number, name: info.name, year: info.year, position: info.position });
});


   
// define 404 handler
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
   });
   
app.listen(app.get('port'), () => {
    console.log('Express started');
   });
   

/*

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

*/
