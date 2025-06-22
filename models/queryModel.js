const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  query: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Query', querySchema);
