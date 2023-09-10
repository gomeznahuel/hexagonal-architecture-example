import { User } from "../entities/User";

export interface UserRepository {
  getAllUsers(): Promise<User[]>;
  findUserById(id: string): Promise<User | null>;
  createUser(name: string): Promise<User>;
}
