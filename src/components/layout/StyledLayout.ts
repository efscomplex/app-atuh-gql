import styled from 'styled-components'

const StyledLayout = styled('div')`
	display: grid;
	height: 100%;
	grid-template-areas: 'header' 'main' 'footer';
	grid-template-rows: min-content 1fr min-content;
	header {
		grid-area: header;
		background-color: #444;
		color: white;
	}
	main {
		grid-area: main;
		padding: 2rem;
		background-color: #222;
		color: white;
	}
	footer {
		grid-area: footer;
		padding: 1rem;
		background-color: #444;
		color: white;
		text-align: center;
	}
`
export default StyledLayout
