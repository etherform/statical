import 'dotenv/config'

import type { CodegenConfig } from '@graphql-codegen/cli'

const url = process.env.VITE_HASURA_GRAPHQL_GRAPHQL_URL ?? 'http://localhost:8080/v1/graphql'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [url]: {
        headers: {
          'x-hasura-admin-secret': process.env.VITE_HASURA_GRAPHQL_ADMIN_SECRET ?? 'secret',
        },
      },
    },
  ],
  documents: 'src/renderer/gql/docs/**/*.graphql',
  ignoreNoDocuments: true, // for better experience with the watcher
  hooks: {
    afterOneFileWrite: ['eslint --fix'],
  },
  generates: {
    'src/renderer/gql/schema.graphql': {
      plugins: ['schema-ast'],
      config: { includeDirectives: true },
    },
    'src/renderer/gql/urql-schema.ts': {
      plugins: ['urql-introspection'],
      config: {
        useTypeImports: true,
        includeScalars: true,
        includeEnums: true,
        includeInputs: true,
        includeDirectives: true,
      },
    },
    'src/renderer/gql/generated.ts': {
      plugins: [
        /* 'add', */
        'typescript',
        'typescript-operations',
        /* 'typescript-urql', */
        'typescript-vue-urql',
      ],
      config: {
        scalars: {
          citext: 'string',
          uuid: 'string',
          timestamp: 'string',
          timestamptz: 'string',
          jsonb: 'string',
        },
        skipTypename: true,
        useTypeImports: true,
        avoidOptionals: true,
      },
    },
  },
}

export default config
