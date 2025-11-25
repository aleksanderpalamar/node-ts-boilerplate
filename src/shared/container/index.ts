import 'reflect-metadata';
import { container } from 'tsyringe';
import { UserRepository } from '@/infra/repositories/user-repository';

container.register('UserRepository', { useClass: UserRepository });
