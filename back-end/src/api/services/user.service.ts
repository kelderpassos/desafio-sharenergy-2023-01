import { Service } from './Service';
import { UserModel } from '../models/users.model';
import { UserInterface, UserSchema } from '../interfaces/entities/user.interface';

class UserService extends Service<UserInterface> {
  constructor(model = new UserModel()) {
    super(model, UserSchema);
  }
}

export { UserService };
