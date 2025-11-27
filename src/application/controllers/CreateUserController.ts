import { Request, Response } from 'express';
import { injectable, inject, delay } from 'tsyringe';
import { CreateUserUseCase } from '@/application/usecases/CreateUserUseCase';

@injectable()
export class CreateUserController {
  constructor(
    @inject(delay(() => CreateUserUseCase))
    private createUserUseCase: CreateUserUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user = await this.createUserUseCase.execute(req.body);
    return res.status(201).json(user);
  }
}
