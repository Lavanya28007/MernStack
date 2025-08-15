const express = require('express');

const router = express.Router();

// Add a new product
router.get('/add', (req, res) => {
    res.send('add response from product router');
});

// Get all products'
router.get('/getall',(req,res) => {
    res.send('getall response from product router');
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