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

// Get product by ID
router.get('/getbyid', (req, res) => {
    res.send('getbyid response from product router');
});
// Delete a product
router.get('/delete', (req, res) => {
    res.send('delete response from product router');
});
// Update a product
router.get('/update', (req, res) => {
    res.send('update response from product router');
});

module.exports = router;