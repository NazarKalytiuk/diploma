import { Request, Response } from 'express';

export function auth(req: Request, res: Response, next: () => void) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json('You must be authorized');
  }
}
