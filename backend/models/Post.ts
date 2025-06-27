import { Schema, model, Document } from 'mongoose';

export interface PostProps extends Document {
  username: string;
  userId: string;
  text: string;
  date: Date;
  likes: number;
  comments: { username: string; text: string }[];
}
const postSchema = new Schema<PostProps>({
    username: { type: String, required: true },
    userId: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    comments: { type: [{ username: String, text: String }], default: [] }
})

export const Post = model<PostProps>('Post', postSchema);
