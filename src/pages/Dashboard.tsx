import { useGraphqlQuery } from 'components/GraphqlQuery'
import React, { useState } from 'react'

const Dashboard: React.FC = () => {
	const query = useGraphqlQuery('vehicles')

	const [vehicles, setVehicles] = useState()
	React.useEffect(() => {
		const getVehicles = async () => {
			const resp = await query()
			console.log(resp)
			setVehicles(resp.data)
		}
		getVehicles()
	})
	return <div></div>
}
export default Dashboard
