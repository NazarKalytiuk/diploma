import { NOMEM } from 'dns';
import { Router } from 'express';
import fs = require('fs');
import multer = require('multer');
import path = require('path');
import { auth } from '../middleware/auth.middleware';
import { EventModel } from '../models';
import { UserEventModel } from '../models/user-event';
import { EventService } from '../services/event.service';

const eventsRouter = Router();
const eventS = new EventService();

eventsRouter.get('/events', async (req, res) => {
  const events = await eventS.getAll();
  let userEvents: any[] = [];
  if (req.user) {
    userEvents = await UserEventModel.find({ google_id: req.user.google_id }).exec();
  }
  const result: any[] = [];
  for (const event of events) {
    const added = userEvents.find(use => use.event_id.toString() === event._id.toString());
    result.push(Object.assign({ added }, event));
  }
  res.json(result);
});

eventsRouter.get('/events/new', async (req, res) => {
  const events = await eventS.getNew();
  let userEvents: any[] = [];
  if (req.user) {
    userEvents = await UserEventModel.find({ google_id: req.user.google_id }).exec();
  }
  const result: any[] = [];
  for (const event of events) {
    const added = userEvents.find(use => use.event_id.toString() === event._id.toString());
    result.push(Object.assign({ added }, event));
  }
  res.json(result);
});

eventsRouter.get('/events/closest', async (req, res) => {
  const events = await eventS.getClosest();
  let userEvents: any[] = [];
  if (req.user) {
    userEvents = await UserEventModel.find({ google_id: req.user.google_id }).exec();
  }
  const result: any[] = [];
  for (const event of events) {
    const added = userEvents.find(use => use.event_id.toString() === event._id.toString());
    result.push(Object.assign({ added }, event));
  }
  res.json(result);
});

eventsRouter.post('/events', multer().any(), async (req, res) => {
  const file = (req.files as any)[0];
  if (!file) {
    return res.status(400).json('No Image');
  }
  const name = new Date().getTime().toString();
  const filePath = path.resolve(__dirname, '../', 'public', name);
  fs.writeFileSync(filePath, file.buffer, 'binary');
  const imgUrl = 'http://localhost:3000/' + 'static/' + name;
  const data = JSON.parse(req.body.data);
  const event = new EventModel(data);
  event.imageUrl = imgUrl;
  event.authorId = req.user.google_id;
  await event.save();

  res.json(event);
});

export { eventsRouter };
