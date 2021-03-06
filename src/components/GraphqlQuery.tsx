import { GraphQLClient } from 'graphql-request'
import React, { createContext, useContext } from 'react'

export type GQLRequest = {
	url: string
	[key: string]: any
}
export interface Query {
	[key: string]: string
}
const GQL_SERVER_URL = 'http://localhost:4000'
interface Props {
	url?: string
	queries: Query
}
interface Context {
	client: GraphQLClient
	queries: Query
}
const GraphqlQueryContext = createContext({} as Context)

export const GrphqlQueryProvider: React.FC<Props> = ({
	url = GQL_SERVER_URL,
	queries,
	children
}) => {
	const fetchOpts = { mode: 'cors' }
	const client = new GraphQLClient(url as string, fetchOpts as any)

	return (
		<GraphqlQueryContext.Provider value={{ client, queries }}>
			{children}
		</GraphqlQueryContext.Provider>
	)
}
export const useGraphqlQuery = (queryName: string) => {
	const { client, queries } = useContext(GraphqlQueryContext)
	console.log(queries)

	return () => client.request(queries[queryName])
}
