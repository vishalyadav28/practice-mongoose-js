import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // can do this but...
        // username: String,
        // email: String,
        // isActive: Boolean

        // can do it in better way 

        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "password is required"]
        }

    },
    {
        // to add created and updated at field
        timestamps: true
    }
)


export const User = mongoose.model("User", userSchema)