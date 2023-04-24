const express = require("express");
const Product = require("../models/product");
const asyncHandler = require("express-async-handler");
const productApp = express.Router();

productApp.use(express.json());

productApp.get("/", (req, res) => {
  res.end("Welcome to express Product api");
});

productApp.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.send({ message: "Data reterived succesfully ", payLoad: products });
  } catch (error) {
    console.log("Error finding product:", error);
  }
});

productApp.get("/getProduct/:name", async (req, res) => {
  try {
    const products = await Product.findOne({ name: req.params.name });
    res.send({ message: "Data reterived succesfully ", payLoad: products });
  } catch (error) {
    console.log("Error finding product:", error);
  }
});

productApp.post("/addProduct", async (req, res) => {
  try {
    const newProduct = req.body;
    const product = await Product.create(newProduct);
    res.send({ message: "new product created", payLoad: product });
  } catch (error) {
    console.log("Error inserting product:", error);
  }
});

productApp.put("/updateProduct", async (req, res) => {
  try {
    const result = await Product.updateOne({ name: "keyboard" }, req.body);
    res.send({ message: result });
  } catch (error) {
    console.log("Error updating product:", error);
  }
});

module.exports = productApp;
