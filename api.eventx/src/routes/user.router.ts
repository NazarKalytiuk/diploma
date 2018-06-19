import { Router } from 'express';
import { auth } from '../middleware/auth.middleware';
import { EventModel } from '../models';
import { UserEventModel } from '../models/user-event';
import { UserService } from '../services/user.service';

const userRouter = Router();
const userS = new UserService();

userRouter.get('/events/day', auth, async (req, res) => {
  const userEvents = await UserEventModel.find({ google_id: req.user.google_id }).exec();
  const eventsIds = userEvents.map(c => c.event_id);
  const events = await EventModel.find({ _id: { $in: eventsIds } }).exec();
  const date = new Date().getDate();
  const todayEvents = events.filter(e => {
    return e.date.getDate() === date;
  });

  const result: any[] = [];
  for (const event of todayEvents) {
    const author = await userS.get(event.authorId);
    result.push(Object.assign({ author, added: true }, event.toJSON()));
  }

  res.json(result);
});

userRouter.get('/events/week', auth, async (req, res) => {
  const userEvents = await UserEventModel.find({ google_id: req.user.google_id }).exec();
  const eventsIds = userEvents.map(c => c.event_id);
  const events = await EventModel.find({ _id: { $in: eventsIds } }).exec();
  const date = new Date().getDate();
  const todayEvents = events.filter(e => {
    return e.date.getDate() >= date + 6;
  });

  const result: any[] = [];
  for (const event of todayEvents) {
    const author = await userS.get(event.authorId);
    result.push(Object.assign({ author, added: true }, event.toJSON()));
  }

  res.json(result);
});

userRouter.get('/events/month', auth, async (req, res) => {
  const userEvents = await UserEventModel.find({ google_id: req.user.google_id }).exec();
  const eventsIds = userEvents.map(c => c.event_id);
  const events = await EventModel.find({ _id: { $in: eventsIds } }).exec();
  const month = new Date().getMonth();
  const todayEvents = events.filter(e => {
    return e.date.getMonth() >= month;
  });

  const result: any[] = [];
  for (const event of todayEvents) {
    const author = await userS.get(event.authorId);
    result.push(Object.assign({ author, added: true }, event.toJSON()));
  }

  res.json(result);
});

userRouter.post('/event/add/:id', auth, async (req, res) => {
  const doc = new UserEventModel();
  doc.google_id = req.user.google_id;
  doc.event_id = req.params.id;
  await doc.save();
  const event = await EventModel.findById(req.params.id).exec();
  if (event) {
    const result = Object.assign(event.toJSON(), { added: true });
    res.json(result);
  }
});

userRouter.post('/event/remove/:id', auth, async (req, res) => {
  const doc = await UserEventModel.findOneAndRemove({ google_id: req.user.google_id, event_id: req.params.id }).exec();
  console.log(doc);
  const event = await EventModel.findById(req.params.id).exec();
  if (event) {
    const result = Object.assign(event.toJSON(), { added: false });
    res.json(result);
  }
});

export { userRouter };
