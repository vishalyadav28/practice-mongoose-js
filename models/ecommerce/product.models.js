import mongoose from "mongoose";



const productSchema = new mongoose.Schema
(
    {
        name: {
            type: String,
            required: true
        },
        description:{
            required: String,
            type: true
        },
        productImage: {
            type: String
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)