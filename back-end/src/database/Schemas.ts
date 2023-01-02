import { Schema } from 'mongoose';
import { UserInterface } from '../api/interfaces/entities/user.interface';

const userMongooseSchema = new Schema<UserInterface>({
  name: String,
  email: String,
  phoneNumber: Number,
  address: String,
  cpf: Number,
});

export { userMongooseSchema };
