import { Router } from 'express';
import { auth } from '../middleware/auth.middleware';
import { EventModel } from '../models';
import { UserEventModel } from '../models/user-event';
import { UserService } from '../services/user.service';
import { eventsRouter } from './events.router';

const channelRouter = Router();
const userS = new UserService();

channelRouter.get('/channel/:id/events', async (req, res) => {
  const events = await EventModel.find({ authorId: req.params.id }).exec();

  const result: any[] = [];
  let userEvents: any[] = [];
  if (req.user) {
    userEvents = await UserEventModel.find({ google_id: req.user.google_id }).exec();
  }

  for (const event of events) {
    const author = await userS.get(event.authorId);
    const added = userEvents.find(use => use.event_id.toString() === event._id.toString());
    result.push(Object.assign({ author, added }, event.toJSON()));
  }

  res.json(result);
});

channelRouter.get('/channel/:id', async (req, res) => {
  const author = await userS.get(req.params.id);

  res.json(author);
});

export { channelRouter };
