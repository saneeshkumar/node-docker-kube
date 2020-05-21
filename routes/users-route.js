const express = require('express');
const users = require("../db/db").users;

const app = express();
module.exports = app

app.get("/api/v1/users", (req, res) => {
    return res.status(200).send({
        success: 'true',
        message: 'users retrieved successfully',
        users
    });
});

app.get("/api/v1/users/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    let userObj = null;
    users.map((user) => {
        if (user.id === id) {
            userObj = user;
        }
    });

    if (userObj) {
        return res.status(200).send({
            success: 'true',
            message: 'user retrieved successfully',
            userObj
        });
    }
    else {
        return res.status(404).send({
            success: 'false',
            message: 'user does not exist',
        });
    }
});
