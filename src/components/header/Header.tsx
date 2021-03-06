import Btn from 'components/shared/Btn'
import config from 'config'
import { useAuth } from 'providers/Auth'
import { useUser } from 'providers/User'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Menu from './Menu'

export default function Header() {
	const { user } = useUser()
	const { menuItems } = config
	const { logout } = useAuth()
	const { setUser } = useUser()
	const history = useHistory()

	const onClickLogout = (e: any) => {
		e.preventDefault()
		const callback = () => {
			setUser({ isLogged: false })
			history.push('/')
		}
		logout(callback)
	}
	return (
		<StyledHeader>
			{user.email && (
				<p>
					<span>Username: {user.email}</span>
				</p>
			)}
			<NavLink to='/' className='title'>
				<h1> App title </h1>
			</NavLink>
			<Menu items={menuItems} />
			<Btn onClick={onClickLogout}>Logout</Btn>
		</StyledHeader>
	)
}
const StyledHeader = styled('header')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	.title {
		font-size: 1rem;
		text-align: center;
		color: inherit;
		text-decoration: none;
	}
`
