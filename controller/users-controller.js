const users = require("../db/db").users;

class UsersController {
    getAllUsers(req, res) {
        return res.status(200).send({
            success: 'true',
            message: 'users retrieved successfully',
            users
        });
    }
    getUserById(req, res) {
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
    }

    deleteUserById(req, res) {
        const id = parseInt(req.params.id, 10);
        let userFound;
        let itemIndex;
        users.map((user, index) => {
            if (user.id === id) {
                userFound = user;
                itemIndex = index;
                console.log(`user found. user id : ${userFound.id},item index: ${itemIndex}`);
            }
        });

        if (!userFound) {
            return res.status(404).send({
                success: 'false',
                message: 'user not found',
            });
        }

        users.splice(itemIndex, 1);

        return res.status(200).send({
            success: 'true',
            message: 'user deleted successfuly',
        });
    }

    createUser(req, res) {
        if (!req.body.firstName) {
            return res.status(400).send({
                success: 'false',
                message: 'firstName is required',
            });
        } else if (!req.body.secondName) {
            return res.status(400).send({
                success: 'false',
                message: 'secondName is required',
            });
        }
        else if (!req.body.age) {
            return res.status(400).send({
                success: 'false',
                message: 'age is required',
            });
        }
        const user = {
            id: users.length + 1,
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            age: req.body.age
        };
        users.push(user);
        return res.status(201).send({
            success: 'true',
            message: 'user added successfully',
            user,
        });
    }
}

module.exports = { UsersController };