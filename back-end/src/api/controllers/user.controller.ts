import { Controler } from './Controller';
import { UserService } from '../services/user.service';
import { UserInterface } from '../interfaces/entities/user.interface';

class UserController extends Controler<UserInterface> {
  constructor(service = new UserService()) {
    super(service);
  }
}

export { UserController };
