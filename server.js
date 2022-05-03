// dependencies
import express from 'express';
import ejs from 'ejs';

// app environment
const app = express();

// variables 
const port = 3000;

// set template engine to ejs
app.set('view engine', 'ejs');

// listen to requests
/*app.get('/', (req, res) => {
    res.send('Hello World');
});*/

// listen to '/start' 
/*app.get('/start', (req, res) => {
    
    // processa innehållet från en ejs-fil
    res.render('index');
}); */

// routes...
import routeStart from './routes/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);


// listen to about
/*app.get('/about', (req, res) => {
    
    // processa innehållet från en ejs-fil
    res.render('about');
});*/

import routeAbout from './routes/about.js';
app.use('/about', routeAbout);


// listen to '/contact'
/*app.get('/contact', (req, res) => {
    
    // processa innehållet från en ejs-fil
    res.render('contact');
});*/

import routeContact from './routes/contact.js';
app.use('/contact', routeContact);


// serve static files 
app.use(express.static('public'));

//app.listen(3000)

// start server
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});