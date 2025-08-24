const { Schema, model } = require('../connection');

const productSchema = new Schema({
   name: String,
   price: { type: Number, require: true, min: 1 },
   description: { brand: String, warranty: Boolean },
   category: {
      type: String,
      enum: ["electronics", "clothing", "books", "furniture", "toys"],
      require: true
   },
   stock: { type: Number, require: true, default: 0 },
   createdAt: { type: Date, default: Date.now }
});

module.exports = model('products', productSchema);