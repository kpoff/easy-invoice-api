const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const User = require('../models/User');
const Invoice = require('../models/Invoice');

const projectSchema = new Schema({
  contractor: {type: Schema.Types.ObjectId, ref: "User"},
  client: {type: Schema.Types.ObjectId, ref: "User"},
  location: {type: String, required: true},
  description: {type: String},
  estimate: {type: String},
  clientRequests: {type: String},
  status: {type: String},
  type: {type: String},
  invoiceHistory: [{type: Schema.Types.ObjectId, ref: "Invoice"}],

});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;