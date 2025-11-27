import { User } from '@/core/domain/entities/User';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}
