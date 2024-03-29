import { UserType } from '@/gql/graphql'
import { Provider, atom } from 'jotai'
const userAtom = atom<AuthType | null>(null)
export { userAtom, Provider }


export type AuthType = {
    user: UserType | null
    isAuthorized: boolean;
    token?: string | null
}