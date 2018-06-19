import { UserModel } from '../models/user';

export class UserService {
  async get(google_id: string) {
    const user = await UserModel.findOne({ google_id }).exec();
    return user;
  }

  async create(data: any) {
    const user = new UserModel(data);

    return user.save();
  }
}
