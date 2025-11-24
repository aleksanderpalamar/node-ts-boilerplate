import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../domain/interfaces/repositories/user-repository';
import { User } from '../domain/entities/User';

@injectable()
export class CreateUserUseCase {
  constructor(@inject('UserRepository') private repo: IUserRepository) {}

  async execute(data: { name: string; email: string; password: string }) {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) throw new Error('Email already in use');

    const user = new User(
      crypto.randomUUID(),
      data.name,
      data.email,
      data.password,
    );
    return this.repo.create(user);
  }
}
