"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.buildRoutes();
    }
    getAllUsers(req, res) {
        User_1.Users.find().then(data => {
            return res.status(200).json({ code: 200, body: data });
        }).catch(error => {
            res.status(500).json({ error });
            return error;
        });
    }
    one(req, res) {
        const { username } = req.params;
        User_1.Users.findOne({ username })
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    create(req, res) {
        const { firstName, lastName, username, email, password } = req.body;
        const user = new User_1.Users({
            firstName,
            lastName,
            username,
            email,
            password
        });
        user
            .save()
            .then((data) => {
            res.status(201).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    update(req, res) {
        const { username } = req.params;
        User_1.Users.findOneAndUpdate({ username }, req.body)
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    delete(req, res) {
        const { username } = req.params;
        User_1.Users.findOneAndDelete({ username })
            .then(() => {
            res.status(204).end();
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    buildRoutes() {
        this.router.get('/', this.getAllUsers);
        this.router.get('/:username', this.one);
        this.router.post('/', this.create);
        this.router.put('/:username', this.update);
        this.router.delete('/:username', this.delete);
    }
}
exports.UserRouter = UserRouter;
