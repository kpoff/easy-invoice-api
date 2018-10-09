// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const Invoice = require('../models/Invoice');
const User = require('../models/User');


// POST route => to create a new project
router.post('/addclient', (req, res, next)=>{
  console.log("req.body.projectID", req.body.projectID)
    User.create({
      role: "Client",
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phone: req.body.phone,
      projectHistory: [req.body.projectID]
    })
    .then((response)=>{
      Project.findByIdAndUpdate(req.body.projectID, {
        $push: {client: response._id}
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










module.exports = router;