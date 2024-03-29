'use client';
import InputField from '@/components/fields/InputField';
import Default from '@/components/auth';
// import { FcGoogle } from 'react-icons/fc';
// import Checkbox from '@/components/checkbox';
import { useFormState, useFormStatus } from 'react-dom';
import UserAction from './action';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import Checkbox from '@/components/checkbox';
import { UserType } from '@/gql/graphql';
import { userAtom } from '@/store';
import { useAtom } from 'jotai';
import { useLocalStorage } from 'react-use';

type response = {
  user?: UserType;
  success: boolean;
  message?: string;
};
const initialState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium transition duration-200 hover:bg-slate-100 active:bg-brand-700 text-dark border border-gray-200"
    >
      Sign In
    </button>
  );
}
function SignInDefault() {
  const [state, formAction] = useFormState<any, any>(
    UserAction,
    initialState
  ) as [response, () => {}];
  const [userState, setUserState] = useAtom(userAtom);
  const [_, setToken] = useLocalStorage('accessToken');
  useEffect(() => {
    if (state?.success) {
      setUserState({
        user: state.user!,
        isAuthorized: true,
        token: state.user!.token.token
      });
      toast.success('Ok');
      setToken(state.user!.token.token);
      redirect('/');
    } else if (state?.success === false) {
      toast.error(state.message!);
    }
  }, [state, setUserState, setToken]);
  return (
    <Default
      maincard={
        <div className="hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
          <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h3 className="mb-2.5 text-4xl font-bold text-navy-700">Sign In</h3>
            <p className="mb-9 ml-1 text-base text-slate-300">
              Enter your email and password to sign in!
            </p>

            {/* Email */}
            <form action={formAction}>
              <InputField
                name="email"
                variant="auth"
                extra="mb-3"
                label="Email*"
                placeholder="mail@simmmple.com"
                id="email"
                type="text"
                required
              />
              {/* Password */}
              <InputField
                name="password"
                required
                variant="auth"
                extra="mb-3"
                label="Password*"
                placeholder="Enter Your Password"
                id="password"
                type="password"
              />
              {/* Checkbox */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="mt-2 flex items-center">
                  <Checkbox color="gray" id="remember" />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-slate-300"
                  >
                    Keep me logged In
                  </label>
                </div>
                <a className="text-sm font-medium text-slate-300" href=" ">
                  Forgot Password?
                </a>
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      }
    />
  );
}

export default SignInDefault;
