import express from "express";


const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies

// send static file as response
app.get('/', (req,res) => {
    res.type('text/html');
    res.sendFile('./public/home.html');
   });



// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
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
