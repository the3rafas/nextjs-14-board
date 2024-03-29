import { loadEnvConfig } from '@next/env';
import type { CodegenConfig } from '@graphql-codegen/cli';

loadEnvConfig(process.cwd());

const schemaUrl = process.env.GQL_API_URL;

if (!schemaUrl) {
  console.error(
    'Before GraphQL types can be generated, you need to set GQL_API_URL environment variable.'
  );
  console.error('Follow development instructions in the README.md file.');
  // process.exit(1);
}

const config: CodegenConfig = {
  overwrite: true,
  schema: schemaUrl,
  documents: ['./graphql/**/*.graphql', './graphql/**/*.gql'],
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
      config: {
        documentMode: 'string',
        useTypeImports: true,
        strictScalars: true,
        scalars: {
          Date: 'string',
          Day: 'number',
          Decimal: 'number',
          GenericScalar: 'unknown',
          JSON: 'unknown',
          JSONString: 'string',
          Metadata: 'Record<string, string>',
          Minute: 'number',
          PositiveDecimal: 'number',
          UUID: 'string',
          Upload: 'unknown',
          WeightScalar: 'unknown',
          _Any: 'unknown',
          Timestamp: 'number',
          ID: 'string',
          Money: 'number',
          DateTime: { input: 'Date', output: 'string' }
        }
      },
      presetConfig: {
        fragmentMasking: false
      }
    }
  }
};

export default config;
