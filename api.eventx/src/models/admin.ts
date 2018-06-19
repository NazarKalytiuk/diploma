import mongoose from 'mongoose';

export interface Admin extends mongoose.Document {
  ids: string[];
}

const adminSchema = new mongoose.Schema({
  ids: Array,
});

const AdminModel = mongoose.model<Admin>('Admin', adminSchema);

export { AdminModel };
