const express = require('express');
const Model = require('../models/ProductModel'); // ProductModel is in models directory
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Get all products'
router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//url params
router.get('/getbyprice/:price', (req, res) =>{
    Model.find({price: req.params.price}) // city is field in UserModel
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Get product by ID
router.get('/getbyid/:id', (req, res) =>{
  // Model.findOne({_id: req.params.id})
 Model.findById(req.params.id)    // id is field in UserModel
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});  

// Delete a product
router.delete('/deletetbyid/:id', (req, res) => {
     Model.findByIdAndDelete(req.params.id)   
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req, res) => {
     Model.findByIdAndUpdate(req.params.id, req.body, { new: true })   
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Update a product
router.get('/update', (req, res) => {
    res.send('update response from product router');
});

module.exports = router;