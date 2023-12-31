import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class UserRepositoryImpl implements UserRepository {
  constructor() {}

  async createUser(name: string): Promise<User> {
    const user = new User({ name });
    return user.save();
  }

  async findUserById(id: string): Promise<User | null> {
    return User.findById(id).exec();
  }

  async getAllUsers(): Promise<User[]> {
    return User.find().exec();
  }

  async updateUser(id: string, name: string): Promise<User | null> {
    return User.findByIdAndUpdate(id, { name }, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<User | null> {
    return User.findByIdAndDelete(id).exec();
  }
}
