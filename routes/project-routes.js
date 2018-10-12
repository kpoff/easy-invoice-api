// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const User = require('../models/User');

// GET route => to get the User's projects
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
 
    Project.create({
      contractor: req.user._id,
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      estimate: req.body.estimate,
      clientRequests: req.body.clientRequests,
      status: req.body.status
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

router.get('/projects/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }                                 
    Project.findById(req.params.id).populate('client')
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