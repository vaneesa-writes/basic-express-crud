const express = require("express");
const userApp = require("./api/User-api");
const productApp = require("./api/product-api");
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://laxmikanth:laxmi2002@cluster0.khk05s0.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas:", err);
  });

var app = express();

app.use("/user", userApp);
app.use("/product", productApp);

app.use((req, res, next) => {
  res.send({ message: "no route" });
});

app.use((err, req, res, next) => {
  res.send({ message: err.message });
});

app.listen(5000, () => console.log("listening on port 5000...."));
