import config from 'config'
import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

export default function Header() {
	const { menuItems } = config
	return (
		<StyledHeader>
			<img src='' />
			<h1 className='title'> App title </h1>
			<Menu items={menuItems} />
		</StyledHeader>
	)
}
const StyledHeader = styled('header')`
	img {
		height: 24px;
	}
	.title {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}
`
