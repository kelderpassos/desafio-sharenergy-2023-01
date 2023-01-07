import { Schema } from 'mongoose';
import { UserInterface } from '../api/interfaces/entities/user.interface';

const userMongooseSchema = new Schema<UserInterface>({
  name: String,
  email: String,
  phoneNumber: String,
  address: String,
  cpf: String,
});

export { userMongooseSchema };
