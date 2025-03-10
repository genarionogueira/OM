import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  id: string;
  name?: string;
  password?: string;
}

const UserSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  name: { type: String},
  password: { type: String },
});

export const UserModel = mongoose.model<IUser>('Users', UserSchema);