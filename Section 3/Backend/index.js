 const express = require('express');
const app = express();
const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');

const port = 5000;

// middleware
app.use(express.json()); // to parse JSON bodies
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

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
