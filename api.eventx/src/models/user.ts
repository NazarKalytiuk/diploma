import mongoose from 'mongoose';

export interface User extends mongoose.Document {
  google_id: string;
  imageUrl: string;
  name: string;
  company: string;
}

const userSchema = new mongoose.Schema({
  google_id: String,
  imageUrl: String,
  name: String,
  company: String,
});

const UserModel = mongoose.model<User>('User', userSchema);

export { UserModel };
