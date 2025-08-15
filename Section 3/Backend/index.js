const express = require('express');
const app = express();
const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');

// Using the ProductRouter
app.use('/product', ProductRouter);

const port = 5000;

// middleware
app.use('/user', UserRouter);

//endpoint
app.get('/add', (req, res) => {
    res.send('response from add');
});

//getall
app.get('/getall', (req, res) => {
    res.send('response from getall');
}); 

//delete
app.get('/delete',(req, res)=> {
    res.send('response from delete');
});


// Starting the server
app.listen(port, ()=>{
    console.log('server started');
});
