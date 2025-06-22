const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  shortDescription: String,
  description: String,
  image: String,
  highlights: [String],
  nutrition: {
    servingSize: String,
    calories: String,
    totalFat: String,
    sodium: String,
    totalCarbs: String,
    protein: String,
  },
  storage: {
    instructions: String,
    shelfLife: String,
    usageTips: [String],
  },
});
module.exports = mongoose.model('Product', productSchema);
