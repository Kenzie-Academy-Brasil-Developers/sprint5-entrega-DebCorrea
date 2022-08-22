import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserRequest } from "../interfaces/user.interfaces";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userRepository.create({
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
    age,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
