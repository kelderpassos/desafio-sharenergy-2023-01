import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const userRoute = Router();
const userController = new UserController();

userRoute.post('/', userController.create);
userRoute.get('/', userController.readAll);
userRoute.get('/:id', userController.readOne);
userRoute.put('/:id', userController.update);
userRoute.delete('/:id', userController.delete);

export { userRoute };
