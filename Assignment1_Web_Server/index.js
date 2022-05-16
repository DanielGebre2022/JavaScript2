import * as data from "./data.js";
import fs from "fs";
import http from 'http';
import { parse } from "querystring";
import { query } from "express";
import express from "express";
import mongoose from "mongoose";
import { Seahawks } from "./Seahawks.js"
import cors from "cors";




const app = express();
app.use('/api', cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.set('view engine', 'ejs');




// send static file as response
app.get('/', (req, res, next) => {
    Seahawks.find({}).lean()
      .then((Seahawks) => {
        // respond to browser only after db query completes
        res.render('home', { Seahawks });
      })
      .catch(err => next(err))
});


// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
   });

app.get('/detail', (req,res,next) => {
// db query can use request parameters
    Seahawks.findOne({ "number": req.query.number }).lean()
        .then((Seahawks) => {
            res.render('detail', { Seahawks } );
        })
        .catch(err => next(err));
});

app.get('/delete', (req,res,next) => {
    // db query can use request parameters
    const player = data.getItem(req.query.number)
    Seahawks.deleteOne({ "number": req.query.number }).lean()
        .then((Seahawks) => {
            console.log(player);
            res.render('delete', { player } );
        })
        .catch(err => next(err));
});


//API'S**API'S**API'S**API'S**API'S**API'S**API'S**API'S**API'S**API'S**

//Api that gets all the objects/documents.
app.get('/api/getall', (req, res, next) => {
    Seahawks.find({}).lean()
      .then((Seahawks) => {
        // respond to browser only after db query completes
        res.json(Seahawks)
      })
      .catch(err => next(err))
});

//API that gets single document.
app.get('/api/detail/:info', (req,res,next) => {
    // db query can use request parameters
    Seahawks.findOne({ "number": req.params.info }).lean()
        .then((Seahawks) => {
            res.json(Seahawks);
        })
        .catch(err => next(err));
    });

//API that deletes single document.
app.get('/api/seahawks/delete/:numba', (req,res) => {
    Seahawks.deleteOne({ number: req.params.numba}).lean()
     .then((Seahawks) => {
        res.json(Seahawks)
     })
     .catch(err => next(err))
  });


//addPlayer receives form data from inputPlayer
app.get('/api/inputPlayer', (req,res) => {
    res.render('inputPlayer');
});

app.post('/api/addPlayer', (req,res) => {
    const player = {
        name: req.body.name,
        number: req.body.number, 
        position: req.body.position, 
        year: req.body.year
    }
    Seahawks.insertMany([
                          {name: player.name, 
                          number: player.number, 
                          position: player.position, 
                          year: player.year}
                        ]);
    
    res.json(player + "Has been added");
    
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
