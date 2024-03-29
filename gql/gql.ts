/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query attendanceBoard($input: AttendanceFilterInput!, $pagination: PagenationFilterInput!) {\n  attendanceBoard(input: $input, pagination: $pagination) {\n    items {\n      id\n      type\n      user {\n        name\n      }\n      createdAt\n    }\n    total\n  }\n}\n\nquery currentUser {\n  currentUser {\n    id\n    name\n    email\n    avatarUrl\n    emailVerified\n    token {\n      token\n    }\n  }\n}": types.AttendanceBoardDocument,
    "query getUser($email: String!) {\n  user(email: $email) {\n    id\n    name\n    avatarUrl\n    email\n    hasPassword\n    lastAttendance\n  }\n}": types.GetUserDocument,
    "mutation signIn($email: String!, $password: String!) {\n  signIn(email: $email, password: $password) {\n    id\n    name\n    email\n    avatarUrl\n    emailVerified\n    token {\n      token\n    }\n  }\n}": types.SignInDocument,
    "query userAttendanceReport($options: UserReportFilterInput!) {\n  userAttendanceReport(options: $options) {\n    items {\n      id\n      name\n      email\n      lastAttendance\n    }\n    total\n  }\n}": types.UserAttendanceReportDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query attendanceBoard($input: AttendanceFilterInput!, $pagination: PagenationFilterInput!) {\n  attendanceBoard(input: $input, pagination: $pagination) {\n    items {\n      id\n      type\n      user {\n        name\n      }\n      createdAt\n    }\n    total\n  }\n}\n\nquery currentUser {\n  currentUser {\n    id\n    name\n    email\n    avatarUrl\n    emailVerified\n    token {\n      token\n    }\n  }\n}"): typeof import('./graphql').AttendanceBoardDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUser($email: String!) {\n  user(email: $email) {\n    id\n    name\n    avatarUrl\n    email\n    hasPassword\n    lastAttendance\n  }\n}"): typeof import('./graphql').GetUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation signIn($email: String!, $password: String!) {\n  signIn(email: $email, password: $password) {\n    id\n    name\n    email\n    avatarUrl\n    emailVerified\n    token {\n      token\n    }\n  }\n}"): typeof import('./graphql').SignInDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query userAttendanceReport($options: UserReportFilterInput!) {\n  userAttendanceReport(options: $options) {\n    items {\n      id\n      name\n      email\n      lastAttendance\n    }\n    total\n  }\n}"): typeof import('./graphql').UserAttendanceReportDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
