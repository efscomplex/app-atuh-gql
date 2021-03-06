import Header from 'components/header/Header'
import StyledLayout from 'components/layout/StyledLayout'
import React from 'react'

const Layout: React.FC = ({ children }) => {
	return (
		<StyledLayout>
			<Header />
			<main>{children}</main>
			<footer>@copyright</footer>
		</StyledLayout>
	)
}

export default Layout
