'use client';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { executeGraphQL } from '@/libs/graphql';
import { CurrentUserDocument, UserType } from '@/gql/graphql';
import { useAtom } from 'jotai';
import { userAtom } from '@/store';
import { useLocalStorage } from 'react-use';
export const SessionProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const router = useRouter();
  const [_, setUserAtom] = useAtom(userAtom);
  const [__, ___, remove] = useLocalStorage('accessToken');

  useEffect(() => {
    (async () => {
      const { data, error } = await executeGraphQL(CurrentUserDocument, {
        cache: 'no-cache',
        credentials: 'include'
      });
      const { currentUser } = data || {};

      if (!currentUser) {
        setUserAtom(null);
        remove();
        router.replace('/auth/sign-in');
      } else {
        setUserAtom({
          isAuthorized: true,
          user: currentUser as UserType,
          token: currentUser!.token.token
        });
        path.includes('/auth/sign-in') && router.replace('/');
      }
    })();
  }, [router, setUserAtom, remove]);

  return <>{children}</>;
};
