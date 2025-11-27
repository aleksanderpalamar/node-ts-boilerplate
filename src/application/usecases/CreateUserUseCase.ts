import { injectable, inject, delay } from 'tsyringe';
import { IUserRepository } from '@/application/repositories/IUserRepository';
import { CreateUserDTO } from '@/application/dtos/CreateUserDTO';
import { User } from '@/core/domain/entities/User';
import { hashSync } from 'bcrypt';
import crypto from 'crypto';
import { UserRepository } from '@/infra/repositories/user-repository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject(delay(() => UserRepository))
    private userRepository: IUserRepository,
  ) {}

  async execute(data: CreateUserDTO) {
    const user = new User(
      crypto.randomUUID(),
      data.name,
      data.email,
      hashSync(data.password, 10),
    );

    return this.userRepository.create(user);
  }
}
