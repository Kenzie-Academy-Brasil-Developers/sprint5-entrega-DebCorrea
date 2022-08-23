import { Router } from "express";

import {
  createUserController,
  listOneUserController,
  listUsersController,
} from "../controllers/user.controllers";
import userAlreadyExists from "../middlewares/userAlreadyExists.middleware";
import {
  userCreationSchema,
  validateUserCreation,
} from "../middlewares/validateUserCreation.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  validateUserCreation(userCreationSchema),
  userAlreadyExists,
  createUserController
);
userRoutes.get("", listUsersController);
userRoutes.get("/:id", listOneUserController);

export default userRoutes;
