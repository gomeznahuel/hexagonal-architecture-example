import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  name: string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
});

const UserModel = mongoose.model<User>('User', userSchema);
export { UserModel as User };