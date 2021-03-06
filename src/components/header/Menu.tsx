import { nanoid } from 'nanoid'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface Item {
	href: string
	label: string
}
interface Props {
	items: Item[]
}
const Menu: React.FC<Props> = ({ items }) => {
	return (
		<Nav>
			{items.map((item: any) => (
				<NavLink key={nanoid()} to={item.href}>
					{item.label}
				</NavLink>
			))}
		</Nav>
	)
}
export default Menu
const Nav = styled('nav')`
	display: flex;
	gap: 0.2px;
	a {
		text-decoration: none;
		padding: 0.4rem 0.7rem;
		text-transform: capitalize;
		color: white;
	}
	.active {
		color: #222;
	}
`
