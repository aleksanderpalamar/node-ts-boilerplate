import { Router } from 'express';
import { container } from 'tsyringe';
import { CreateUserController } from '@/application/controllers/CreateUserController';

const router = Router();

const createUserController = container.resolve(CreateUserController);
router.post('/users', (req, res) => createUserController.handle(req, res));

export default router;
