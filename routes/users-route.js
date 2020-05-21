const express = require('express');
const users = require("../db/db").users;
const UsersController = require("../controller/users-controller").UsersController;

const app = express();
module.exports = app

app.get("/api/v1/users", UsersController.prototype.getAllUsers);
app.get("/api/v1/users/:id", UsersController.prototype.getUserById);
