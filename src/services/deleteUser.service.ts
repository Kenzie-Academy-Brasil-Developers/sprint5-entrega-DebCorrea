import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new Error("Can't delete user that doesn't exist");
  }

  const deletedUser = await userRepository.delete({ id });

  return deletedUser;
};

export default deleteUserService;
