import * as bcrypt from "bcryptjs";

import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserRequest } from "../interfaces/user.interfaces";

const updateUserService = async (
  id: string,
  { name, email, password, age }: IUserRequest
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new Error("Can't update user that doesn't exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const updatedUser = await userRepository.update(id, {
    name,
    email,
    password: hashedPassword,
    age,
    updated_at: new Date(),
  });

  return updatedUser;
};

export default updateUserService;
