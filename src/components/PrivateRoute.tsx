import Spinner from 'components/shared/Spinner'
import { useGlobalState } from 'providers/GlobalState'
import { useUser } from 'providers/User'
import React from 'react'
import {
	Redirect,
	Route,
	RouteComponentProps,
	RouteProps
} from 'react-router-dom'

type Render = (props: RouteComponentProps<any>) => React.ReactNode

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
	const { state } = useGlobalState()
	const { user } = useUser()
	const route = user.logged ? children : <Redirect to='/' />
	const render: Render = ({ location }) => {
		return state.isLoading ? <Spinner /> : route
	}
	return <Route {...rest} render={render} />
}
export default PrivateRoute
