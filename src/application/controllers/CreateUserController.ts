import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateUserUseCase } from '@/core/usecases/CreateUserUseCase';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const usecase = container.resolve(CreateUserUseCase);

    const { name, email, password } = req.body;
    try {
      const user = await usecase.execute({ name, email, password });
      return res.status(201).json(user);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'An unknown error occurred';
      return res.status(400).json({ error: message });
    }
  }
}
