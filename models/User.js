const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Project = require('../models/Project');
const Invoice = require('../models/Invoice');


const userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, enum: ['Client', 'Contractor'], required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  address: {type: String},
  phone: {type: String},
  projectHistory: [{type: Schema.Types.ObjectId, ref: "Project"}],
  invoiceHistory: [{type: Schema.Types.ObjectId, ref: "Invoice"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
