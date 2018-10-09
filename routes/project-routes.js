// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const Invoice = require('../models/Invoice');
const User = require('../models/User');

// GET route => to get all the projects
router.get('/projects', (req, res, next) => {
  User.findById(req.user._id).populate('projectHistory')
    .then(theUser => {
      res.json(theUser);
    })
    .catch(err => {
      res.json(err);
    })
});


// POST route => to create a new project
router.post('/projects', (req, res, next)=>{
  
  console.log("req.body", req.body)
  console.log("req.user", req.user)
 
    Project.create({
      location: req.body.location,
      description: req.body.description,
      estimate: req.body.estimate,
      clientRequests: req.body.clientRequests,
      status: req.body.status,
      type: req.body.type,
      contractor: req.user._id
    })
    .then((response)=>{
      User.findByIdAndUpdate(req.user._id, {
        $push: {projectHistory: response._id}
    })
      .then((response)=>{
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      })
    })
    .catch((err)=>{
      next(err);
    })
  });


  // GET route => to get a specific project/detailed view
router.get('/projects/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    // our projects have array of tasks' ids and 
    // we can use .populate() method to get the whole task objects
    //                                   ^
    //                                   |
    //                                   |
    Project.findById(req.params.id)
    .populate({
      path:'projects',
      populate:[{
        path: 'contractor',
        model: 'User'
    },
    {
        path: 'client',
        model: 'User'
    },
    {
        path: 'invoiceHistory',
        model: 'Invoice'
    }]
  })
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })





// PUT route => to update a specific project
router.put('/projects/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Project.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({message: `Project with ${req.params.id} is updated successfully.`});
      })
      .catch(err => {
        res.json(err);
      })
  })




  
  
  // DELETE route => to delete a specific project
  router.delete('/projects/:id', (req, res, next)=>{
  
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Project.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({message: `Project with ${req.params.id} is removed successfully.`});
      })
      .catch( err => {
        res.json(err);
      })
  })







module.exports = router;