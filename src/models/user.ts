import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

export const Users = model('User', UserSchema, 'Users');

