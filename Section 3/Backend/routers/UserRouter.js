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

//url params
router.get('/getbycity/:city', (req, res) =>{
    Model.find({city: req.params.city}) // city is field in UserModel
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/getbyemail/:email', (req, res) =>{
 Model.findOne({email: req.params.email}) // email is field in UserModel
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});  

//getbyid
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

//deletebyid
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

                                                                                                           

//update
router.get('/update', (req, res) => {
    res.send('update response from user router');
});

module.exports = router;