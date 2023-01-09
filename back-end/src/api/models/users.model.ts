import { MongoModel } from './MongoModel';
import { UserInterface } from '../interfaces/entities/user.interface';
import { userMongooseSchema } from '../../database/Schemas';
import { userCollection } from '../../database/seeders/users';

class UserModel extends MongoModel<UserInterface> {
  constructor() {
    super('users', userMongooseSchema, userCollection);
  }
}

export { UserModel };
