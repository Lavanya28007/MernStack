const mongoose = require('mongoose');
const url = 'mongodb+srv://lavanya:abcd123@cluster0.4l6fts5.mongodb.net/mydb1100?retryWrites=true&w=majority&appName=Cluster0'
//asynchronous function - promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');    
    // console.log(result);
    
}).catch((err) => {
    console.log(err);    
});


module.exports = mongoose;
