"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});
exports.Users = mongoose_1.model('User', UserSchema, 'Users');
