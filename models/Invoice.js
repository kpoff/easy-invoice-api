const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const User = require('../models/User');
const Project = require('../models/Project');

const invoiceSchema = new Schema({
  contractor: {type: Schema.Types.ObjectId, ref: "User"},
  client: {type: Schema.Types.ObjectId, ref: "User"},
  projectID: {type: Schema.Types.ObjectId, ref: "Project"},
  description: {type: String, required: true},
  price: {type: String, required: true},
  status: {type: String},
  paymentsMade: {type: String},
  deposits: {type: String}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;