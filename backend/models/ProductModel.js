import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  sold: Boolean,
  dateOfSale: Date,
  monthOfSale: Number,
});
const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
