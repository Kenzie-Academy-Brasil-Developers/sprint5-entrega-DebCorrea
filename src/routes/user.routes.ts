import { Router } from "express";

import { createUserController } from "../controllers/user.controllers";
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

export default userRoutes;
