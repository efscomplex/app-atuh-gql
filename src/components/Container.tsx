import Layout from 'components/layout/Layout'
import PrivateRoute from 'components/PrivateRoute'
import Dashboard from 'pages/Dashboard'
import Landing from 'pages/Landing'
import Login from 'pages/Login'
import React from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch
} from 'react-router-dom'

export default function Container() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/login' component={Login} />
					<PrivateRoute exact path='/dashboard'>
						<Dashboard />
					</PrivateRoute>
					<Route>
						<Redirect to='/login' />
					</Route>
				</Switch>
			</Layout>
		</Router>
	)
}
