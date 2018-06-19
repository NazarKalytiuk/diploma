import express from 'express';

import mongoose from 'mongoose';
import { cors } from './middleware/cors.middleware';
import { EventModel } from './models/event';
import { channelRouter } from './routes/channel.router';
import { eventsRouter } from './routes/events.router';
import { userRouter } from './routes/user.router';
import { googleStrategy } from './strategies/google.strategy';

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/eventx');

async function run() {
  const app = express();
  app.use('/static', express.static(__dirname + '/public'));
  app.use(cors);
  app.use(googleStrategy);

  app.use(userRouter);
  app.use(eventsRouter);
  app.use(channelRouter);

  app.get('/', async (req, res) => {
    res.json('ss');
  });

  app.listen(3000, () => {
    console.log('Started');
  });
}

run();
