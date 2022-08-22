import * as yup from "yup";
import { SchemaOf } from "yup";
import { NextFunction, Request, Response } from "express";

import { IUserSchema } from "../interfaces/user.interfaces";

export const userCreationSchema: SchemaOf<IUserSchema> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  age: yup.number().required().positive().integer(),
});

export const validateUserCreation =
  (schema: SchemaOf<IUserSchema>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.newUser = validatedData;

        next();
      } catch (error: any) {
        return res.status(400).json({
          error: error.errors?.join(", "),
        });
      }
    } catch (error) {
      next(error);
    }
  };
