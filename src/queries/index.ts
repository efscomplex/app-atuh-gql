import { gql } from 'graphql-request'
export const vehicles = gql`
	query {
		vehicles {
			vehicle
			manufacturer
			model
		}
	}
`
