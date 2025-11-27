import { container } from 'tsyringe';
import { IUserRepository } from '@/application/repositories/IUserRepository';
import { UserRepository } from '@/infra/repositories/user-repository';
import { UserService } from '@/application/services/UserService';
import { CreateUserUseCase } from '@/application/usecases/CreateUserUseCase';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton(UserService, UserService);
container.registerSingleton(CreateUserUseCase, CreateUserUseCase);
