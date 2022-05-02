// dependencies

import express from 'express';

// app environment
const app = express();

// variables 
const port = 3000;

// listen to request
app.get('/', (req, res) => {
    res.send('Hello World');
});

// serve static files 
app.use(express.static('public'));

//app.listen(3000)

// start server
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});