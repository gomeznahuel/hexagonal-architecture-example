import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string): Promise<User> {
    return this.userRepository.createUser(name);
  }
}
