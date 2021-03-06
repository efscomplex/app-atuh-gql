import { useGlobalState } from 'providers/GlobalState'
import React from 'react'

export default function Landing() {
	const { setState } = useGlobalState()
	React.useEffect(() => {
		setState({ isLoading: false })
	}, [])

	return <div>Landing page</div>
}
