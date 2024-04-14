import { Avatar } from "@material-ui/core";
import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String, // cloudinary art
            required: true,
        },
        coverImage: {
            type: String, // cloudinary art
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            },
        ],
        password: {
            type: String,
            required: [true, "Provide a password"],
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);


export const User = mongoose.model("User", userSchema);
