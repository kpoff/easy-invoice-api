const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  contractor: {type: Schema.Types.ObjectId, ref: "User"},
  client: {type: Schema.Types.ObjectId, ref: "User"},
  title:  {type: String, required: true},
  description: {type: String},
  location: {type: String, required: true},
  estimate: {type: String},
  clientRequests: {type: String},
  status: {type: String},
  invoiceHistory: [{type: Schema.Types.ObjectId, ref: "Invoice"}],
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;