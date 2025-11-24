import 'reflect-metadata';
import { container } from 'tsyringe';
import { UserRepository } from '@/infra/database/prisma/user-repository';

container.register('UserRepository', { useClass: UserRepository });
