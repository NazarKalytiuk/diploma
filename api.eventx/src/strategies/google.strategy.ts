import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { TokenPayload } from 'google-auth-library/build/src/auth/loginticket';
import { User, UserModel } from '../models/user';
import { UserService } from '../services/user.service';

// tslint:disable-next-line:no-empty-interface
export interface GoogleUser extends TokenPayload { }

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

const client_id = '1090440622633-7v13p3scj6r9u86obqfh9a1to6qk9tc7.apps.googleusercontent.com';
const client = new OAuth2Client(client_id);
const userS = new UserService();

export async function googleStrategy(req: Request, res: Response, next: () => void) {
  if (req.headers.authorization) {
    const ticket = await client.verifyIdToken({
      idToken: req.headers.authorization,
      audience: client_id,
    });
    if (ticket) {
      const payload = ticket.getPayload();
      if (payload) {
        const user = await userS.get(payload.sub);
        if (user) {
          const doc = {
            imageUrl: payload.picture,
            name: payload.name,
          };
          await UserModel.updateOne({ google_id: payload.sub }, doc).exec();
          const u = await userS.get(payload.sub);

          if (u) {
            req.user = u;
          }
        } else {
          const doc = {
            google_id: payload.sub,
            imageUrl: payload.picture,
            name: payload.name,
          };
          const u = await UserModel.create(doc);
          req.user = u;
        }
      }
    }
  }
  next();
}

export { client_id, client };
