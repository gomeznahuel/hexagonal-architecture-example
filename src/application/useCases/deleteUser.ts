import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    return this.userRepository.deleteUser(id);
  }
}