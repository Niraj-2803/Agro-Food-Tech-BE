const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  companyName: { type: String },
  interestedIn: {
    type: String,
    enum: ['WholeSale Purchase', 'Retail Information', 'Distribution Partnership', 'Other'],
    required: true,
  },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Query', querySchema);
