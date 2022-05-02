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

//app.listen(3000)

// start server
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});