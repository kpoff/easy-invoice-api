// routes/task-routes.js

const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const Invoice = require('../models/Invoice');
const Project = require('../models/Project');
const User = require('../models/User');


// POST route => to create a new task
router.post('/invoices', (req, res, next)=>{
  
  Invoice.create({
     // contractor: req.user._id,
      client: req.body.client,
      projectID: req.body.projectID,
      price: req.body.price,
      itemization: req.body.itemization,
      //postman route: itemization[0] {item: "material", price: 10}
      status: req.body.status,
      paymentsMade: req.body.paymentsMade,
      deposits: req.body.deposits
  })
    .then(response => {
        Project.findByIdAndUpdate(req.body.projectID, {$push:{ invoiceHistory: response._id }})
        .then(theResponse => {
            res.json(theResponse);
        })
        .catch(err => {
          res.json(err);
      })
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific task
router.put('/invoices/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Invoice.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Invoice with ${req.params.id} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific task
router.delete('/invoices/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Invoice.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({message: `Invoice with ${req.params.id} is removed successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;