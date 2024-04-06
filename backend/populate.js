import fetch from "node-fetch";
import mongoose from "mongoose";
import ProductModel from "./models/ProductModel.js";
import dotenv from "dotenv";
dotenv.config();
const populate = async () => {
  try {
    const data = await fetch(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const resp = await data.json();
    const dataForDb = resp.map((el) => {
      return { ...el, monthOfSale: new Date(el.dateOfSale).getMonth() + 1 };
    });

    await mongoose.connect(process.env.MONGO_URL);
    await ProductModel.deleteMany();
    await ProductModel.insertMany(dataForDb);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populate();
