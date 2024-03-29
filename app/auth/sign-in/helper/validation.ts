import { z } from 'zod';
import { SignInMutationVariables } from '../../../../gql/graphql';

const LoginSchema = z.object({
  email: z.string().nonempty().email('This is not a valid email'),
  password: z.string().nonempty(),
});

export const validateLogin = (formDate: FormData): SignInMutationVariables => {
  return LoginSchema.parse({
    email: formDate!.get('email'),
    password: formDate!.get('password'),
  }) as SignInMutationVariables;
};
