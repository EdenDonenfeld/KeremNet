import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username: { type: String, required: true },
    userId: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    comments: { type: [{ username: String, text: String }], default: [] }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;