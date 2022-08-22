import * as express from "express";

import { IUserSchema } from "../../interfaces/user.interfaces";

declare global {
  namespace Express {
    interface Request {
      newUser: IUserSchema;
    }
  }
}
