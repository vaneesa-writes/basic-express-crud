const express = require("express");
const User = require("../models/user");
const userApp = express.Router();
const asyncHandler = require("express-async-handler");
userApp.use(express.json());

let users = [
  {
    id: 1,
    name: "laxmi",
  },
  {
    id: 2,
    name: "kanth",
  },
];

userApp.get("/", (req, res) => {
  res.end("Welcome to express User api");
});

userApp.get(
  "/getUsers",
  asyncHandler(async (req, res) => {
    const users = await User.find();
    res.send({ message: "Data reterived succesfully ", payLoad: users });
  })
);

userApp.get(
  "/getUser/:id",
  asyncHandler(async (req, res) => {
    const users = await User.findOne({ id: +req.params.id });
    res.send({ message: "Data reterived succesfully ", payLoad: users });
  })
);

userApp.post(
  "/addUser",
  asyncHandler(async (req, res) => {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.send({ message: "new user created", payLoad: user });
  })
);

userApp.put(
  "/updateUser",
  asyncHandler(async (req, res) => {
    const result = await User.updateOne({ age: 30 }, req.body);
    res.send({ message: result });
  })
);

module.exports = userApp;
