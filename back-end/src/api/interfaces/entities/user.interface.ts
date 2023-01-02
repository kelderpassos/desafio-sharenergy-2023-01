import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.number(),
  address: z.string().min(3),
  cpf: z.number(),
});

type UserInterface = z.infer<typeof UserSchema>;

export { UserInterface, UserSchema };
