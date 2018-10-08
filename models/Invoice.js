const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const User = require('../models/User');
const Project = require('../models/Project');

const invoiceSchema = new Schema({
  contractor: {type: Schema.Types.ObjectId, ref: "User"},
  client: {type: Schema.Types.ObjectId, ref: "User"},
  projectID: {type: Schema.Types.ObjectId, ref: "Project"},
  price: {type: Number, required: true},
  itemization: [{item: String, price: Number}],
  status: {type: String},
  paymentsMade: {type: Number},
  deposits: {type: Number}
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;