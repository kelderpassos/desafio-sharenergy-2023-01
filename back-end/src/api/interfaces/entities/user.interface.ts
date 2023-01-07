import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().length(11),
  address: z.string().min(3),
  cpf: z.string().length(11),
});

type UserInterface = z.infer<typeof UserSchema>;

export { UserInterface, UserSchema };
