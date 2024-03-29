import { redirect } from 'next/navigation';
import { revalidatePath, revalidateTag } from 'next/cache';

import { validateLogin } from './helper/validation';
import { SignInDocument, SignInMutationVariables } from '../../../gql/graphql';
import { executeGraphQL } from '../../../libs/graphql';
import { signIn } from 'next-auth/react';
import { useAtom } from 'jotai';
import { userAtom } from '@/store';
const logInAction = async (variables: SignInMutationVariables) => {
  try {
    const {data} = await executeGraphQL(SignInDocument, {
      variables,
      cache: 'no-cache',
      credentials :'include'
    });
    const user = data?.signIn
    if (user) {
      return { success: true, user };
    }

    return { user };
  } catch (error) {
    return {
      message: 'Invalid data',
      success: false
    };
  }
};
export default async function UserAction(prevState: any, formDate: FormData) {
  try {
    const selectedSechema = validateLogin(formDate);

    return logInAction(selectedSechema);
  } catch (error: any) {
    return {
      message: error.errors
        .map((e: any) => e.path?.[0] + ' ' + e.message)
        .join(','),
      success: false
    };
  }

  //   const id = await addPost()
  //   revalidateTag('posts') // Update cached posts
  //   redirect(`/post/${id}`) // Navigate to new route
}
