import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    imageUrl:{
        required: true,
        type: String,
    },
    name:{
        required: true,
        type: String,
    },
    count:{
        required: true,
        type: Number,
    },
    size:{
        height:{
            required: true,
            type: Number,
        },
        width:{
            required: true,
            type: Number,
        }
    },
    weight:{
        required: true,
        type: String,
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

export default mongoose.model('Product', ProductSchema)