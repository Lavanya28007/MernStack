const express = require('express');
const Model = require('../models/UserModel'); // UserModel is in models directory
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

//getall
router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//getbyid
router.get('/getbyid', (req, res) => {
    res.send('getbyid response from user router');
});

//delete
router.get('/delete', (req, res) => {
    res.send('delete response from user router');
});

//update
router.get('/update', (req, res) => {
    res.send('update response from user router');
});

module.exports = router;