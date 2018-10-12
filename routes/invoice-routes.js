// routes/task-routes.js

const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const Invoice = require('../models/Invoice');
const Project = require('../models/Project');
const User = require('../models/User');

router.get('/invoices/:projectid', (req, res, next) => {
  
  if(!mongoose.Types.ObjectId.isValid(req.params.projectid)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }                                  
  Project.findById(req.params.projectid)
  .populate('invoiceHistory')
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
})

router.post('/invoices/:projectid', (req, res, next)=>{
  
  Invoice.create({
      contractor: req.user._id,
      client: req.body.client,
      projectID: req.params.projectid,
      description: req.body.description,
      price: req.body.price,
      status: req.body.status,
      paymentsMade: req.body.paymentsMade,
      deposits: req.body.deposits
      })
      .then((newInvoice)=>{
        const invoice = newInvoice._id;
        Project.findByIdAndUpdate(req.params.projectid, {
          $push: {invoiceHistory: invoice}
      })
      .then((response)=>{
        User.findByIdAndUpdate(req.body.client, {
          $push: {invoiceHistory: invoice}
      })
      .then((response)=>{
        User.findByIdAndUpdate(req.user._id, {
          $push: {invoiceHistory: invoice}
      })
        .then((response)=>{
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        })
      })
      .catch((err) => {
        res.json(err);
      })
    })
      .catch((err) => {
        res.json(err);
      })
    })
      .catch((err)=>{
        next(err);
      })
    });

// PUT route => to update a specific task
router.put('/invoices/:invoiceid', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.invoiceid)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Invoice.findByIdAndUpdate(req.params.invoiceid, req.body)
    .then(() => {
      res.json({message: `Invoice with ${req.params.invoiceid} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific task
router.delete('/invoices/:invoiceid', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.invoiceid)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Invoice.findByIdAndRemove(req.params.invoiceid)
    .then(() => {
      res.json({message: `Invoice with ${req.params.invoiceid} is removed successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;