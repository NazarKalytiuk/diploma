import mongoose from 'mongoose';

export interface Category extends mongoose.Document {
  name: string;
  imageUrl: string;
}

const categorySchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
});

const CategoryModel = mongoose.model<Category>('Category', categorySchema);

export { CategoryModel };
