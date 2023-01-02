import { MongoModel } from './MongoModel';
import { UserInterface } from '../interfaces/entities/user.interface';
import { userMongooseSchema } from '../../database/Schemas';

class UserModel extends MongoModel<UserInterface> {
  constructor() {
    super('users', userMongooseSchema);
  }
}

export { UserModel };
