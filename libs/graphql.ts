import { invariant } from 'ts-invariant';
import { type TypedDocumentString } from '../gql/graphql';
import { useLocalStorage } from 'react-use';
invariant(process.env.GQL_API_URL, 'Missing GQL_API_URL env variable');

type GraphQLErrorResponse = {
  errors: readonly {
    message: string;
  }[];
};

type GraphQLRespone<T> = { data: T } | GraphQLErrorResponse;

type Response<Result> = {
  data: Result | null;
  error: GraphQLErrorResponse | null;
  success: boolean;
  status: number;
};

export const ProductsPerPage = 12;
const filterQuotes = (inputString: string): string =>
  inputString.startsWith('"') && inputString.endsWith('"')
    ? inputString.slice(1, -1)
    : inputString;
export async function executeGraphQL<Result, Variables>(
  operation: TypedDocumentString<Result, Variables>,
  options: {
    headers?: HeadersInit;
    cache?: RequestCache;
    redirect?: any | undefined;
    next?: NextFetchRequestConfig | undefined;
    credentials?: RequestCredentials | undefined;
  } & (Variables extends Record<string, never>
    ? { variables?: never }
    : { variables: Variables })
): Promise<Response<Result>> {
  invariant(process.env.GQL_API_URL, 'Missing GQL_API_URL env variable');
  const { variables, headers, cache, next } = options;
  const authToken =
    typeof window !== 'undefined' &&
    (localStorage.getItem('accessToken') ?? localStorage.getItem('token'));
  const lang = typeof window !== 'undefined' && localStorage.getItem('lang');
  let response;
  try {
    response = await fetch(process.env.GQL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: 'Bearer ' + filterQuotes(authToken) }),
        ...(lang && { lang: lang }),
        ...headers
      },
      body: JSON.stringify({
        query: operation.toString(),
        ...(variables && { variables })
      }),
      mode: 'cors',
      credentials: options.credentials ?? 'same-origin',
      cache: cache,
      next
    });
    
  } catch (error: any) {
    return { error: error, data: null, success: false, status: 500};
  }

  const body = (await response.json()) as GraphQLRespone<Result>;

  if ('errors' in body) {
    return { error: body, data: null, success: false, status: response.status };
  }

  return {
    data: body.data,
    success: true,
    status: response.status,
    error: null
  };
}

export class GraphQLError extends Error {
  constructor(public errorResponse: GraphQLErrorResponse) {
    const message = errorResponse.errors
      .map((error) => error.message)
      .join('\n');
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const formatMoney = (amount: number, currency: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);

export const formatMoneyRange = (
  range: {
    start?: { amount: number; currency: string } | null;
    stop?: { amount: number; currency: string } | null;
  } | null
) => {
  const { start, stop } = range || {};
  const startMoney = start && formatMoney(start.amount, start.currency);
  const stopMoney = stop && formatMoney(stop.amount, stop.currency);

  if (startMoney === stopMoney) {
    return startMoney;
  }

  return `${startMoney} - ${stopMoney}`;
};
