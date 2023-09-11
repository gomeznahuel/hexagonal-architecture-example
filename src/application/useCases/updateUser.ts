import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string, name: string): Promise<User | null> {
    return this.userRepository.updateUser(id, name);
  }
}