import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const listOneUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export default listOneUserService;
