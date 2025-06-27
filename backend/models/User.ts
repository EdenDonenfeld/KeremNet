import { Schema, model, Document } from 'mongoose';

export interface UserProps extends Document {
  username: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema<UserProps>({
  username: { type: String,required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now},
});


export const User = model<UserProps>('User', userSchema);
