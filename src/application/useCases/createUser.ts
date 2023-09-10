import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string): Promise<User> {
    const user = new User(Math.random().toString(), name);
    return this.userRepository.createUser(user);
  }
}
