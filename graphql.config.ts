import 'dotenv/config'

const url = process.env.HASURA_GRAPHQL_GRAPHQL_URL ?? 'http://localhost:8080/v1/graphql'

export default {
  schema: [
    {
      [url]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? 'secret',
        },
      },
    },
  ],
}
