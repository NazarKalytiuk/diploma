import { Event, EventModel } from '../models';
import { UserService } from './user.service';

export class EventService {

  userS: UserService;

  constructor() {
    this.userS = new UserService();
  }

  async getAll() {
    const events = await EventModel.find().exec();

    const result: any[] = [];
    for (const event of events) {
      const author = await this.userS.get(event.authorId);
      result.push(Object.assign({ author }, event.toJSON()));
    }

    return result;
  }

  async getNew() {
    const events = await EventModel.find().sort([['_id', -1]]).exec();

    const result: any[] = [];
    for (const event of events) {
      const author = await this.userS.get(event.authorId);
      result.push(Object.assign({ author }, event.toJSON()));
    }

    return result;
  }

  async getClosest() {
    const events = await EventModel.find().sort([['date', -1]]).exec();

    const result: any[] = [];
    for (const event of events) {
      const author = await this.userS.get(event.authorId);
      result.push(Object.assign({ author }, event.toJSON()));
    }

    return result;
  }

  create(event: Event) {
    const model = new EventModel(event);
    return model.save();
  }
}
