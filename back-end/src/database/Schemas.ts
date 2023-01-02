import { Schema } from 'mongoose';
import { UserInterface } from '../infra/interfaces/entities/user.interface';

const userMongooseSchema = new Schema<UserInterface>({
  name: String,
  email: String,
  phoneNumber: Number,
  address: String,
  cpf: Number,
});

export { userMongooseSchema };
