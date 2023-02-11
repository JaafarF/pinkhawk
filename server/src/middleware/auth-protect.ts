import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET!;

export const authProtect = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { token } = req.cookies;
    // console.log('token line', token)
    // if (!token) {
    //   console.log('No token');
    //   res.status(400).json({ error: 'token not found' })
    // }
    // const decoded = jwt.verify(token, SECRET_KEY);
    // if (!decoded) {
    //   console.log('No decoded');
    //   res.status(400).json({ error: 'token not valid' })
    // }
    next();
  } catch (error) {
    console.log('unexpected error in authProtect', error);
    res.status(500).json({ error: 'server error', serverError: error });
  }
};
