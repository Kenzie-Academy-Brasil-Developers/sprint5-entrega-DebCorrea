import { Request, Response } from "express";
import createUserService from "../services/createUser.service";
import listOneUserService from "../services/listOneUser.service";
import listUsersService from "../services/listUsers.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const user = await createUserService({
      name,
      email,
      userPassword: password,
      age,
    });

    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.json(users);
};

const listOneUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await listOneUserService(id);

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export { createUserController, listUsersController, listOneUserController };
