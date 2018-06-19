import mongoose from 'mongoose';

export interface Event extends mongoose.Document {
  name: string;
  authorId: string;
  address: string;
  imageUrl: string;
  time: string;
  date: Date;
  description: string;
  user: any;
  category: string;
  added: boolean;
}

const eventSchema = new mongoose.Schema({
  name: String,
  authorId: String,
  address: String,
  imageUrl: String,
  time: String,
  date: Date,
  description: String,
  category: String,
});

const EventModel = mongoose.model<Event>('Event', eventSchema);

export { EventModel };
