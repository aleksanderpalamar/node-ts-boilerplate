import { User } from '@/core/domain/entities/User';
import { IUserRepository } from '@/core/domain/interfaces/repositories/user-repository';
import { prisma } from '../database/prisma/client';

export class UserRepository implements IUserRepository {
  async findById(id: string) {
    const row = await prisma.user.findUnique({ where: { id } });
    if (!row) return null;
    return new User(row.id, row.name, row.email, row.password);
  }

  async findByEmail(email: string) {
    const row = await prisma.user.findUnique({ where: { email } });
    if (!row) return null;
    return new User(row.id, row.name, row.email, row.password);
  }

  async create(user: User): Promise<User> {
    const row = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return new User(row.id, row.name, row.email, row.password);
  }

  async findAll() {
    const rows = await prisma.user.findMany();
    return rows.map(
      (row) => new User(row.id, row.name, row.email, row.password),
    );
  }
}
