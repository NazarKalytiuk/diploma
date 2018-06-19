import mongoose from 'mongoose';

export interface UserEvent extends mongoose.Document {
  google_id: string;
  event_id: string;
}

const userEventSchema = new mongoose.Schema({
  google_id: String,
  event_id: String,
});

const UserEventModel = mongoose.model<UserEvent>('UserEvent', userEventSchema);

export { UserEventModel };
