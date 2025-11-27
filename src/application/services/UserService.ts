import { injectable, inject } from 'tsyringe';
import { IUserRepository } from '../repositories/IUserRepository';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

@injectable()
export class UserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async createUser(data: CreateUserDTO) {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = await this.userRepository.create(data);
    return user;
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async listAll() {
    return this.userRepository.findAll?.() ?? [];
  }
}
