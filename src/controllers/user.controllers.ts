import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserRequest } from "../interfaces/user.interfaces";
import createUserService from "../services/createUser.service";
import listOneUserService from "../services/listOneUser.service";
import listUsersService from "../services/listUsers.service";
import updateUserService from "../services/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age }: IUserRequest = req.body;

    const user = await createUserService({
      name,
      email,
      password,
      age,
    });

    return res.status(201).json(instanceToPlain(user));
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

  return res.json(instanceToPlain(users));
};

const listOneUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await listOneUserService(id);

    return res.json(instanceToPlain(user));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, age, email, password }: IUserRequest = req.body;

    const updatedUser = await updateUserService(id, {
      name,
      age,
      email,
      password,
    });

    return res.json({
      message: "User updated successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export {
  createUserController,
  listUsersController,
  listOneUserController,
  updateUserController,
};
