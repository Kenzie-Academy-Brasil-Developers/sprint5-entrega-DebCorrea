import { Request, Response } from "express";
import createUserService from "../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;

  const user = await createUserService({ name, email, password, age });

  return res.status(201).json(user);
};

export { createUserController };
