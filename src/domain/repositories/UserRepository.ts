import { User } from "../entities/User";

export interface UserRepository {
  getAllUsers(): Promise<User[]>;
  findUserById(id: string): Promise<User | null>;
  createUser(name: string): Promise<User>;
  updateUser(id: string, name: string): Promise<User | null>;
  deleteUser(id: string): Promise<User | null>;
}