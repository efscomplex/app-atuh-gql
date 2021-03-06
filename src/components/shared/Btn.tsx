import styled from 'styled-components'

interface Props {
	onClick: (e: Event) => void
}
const Btn = styled('button')<Props>`
	padding: 0.4rem 1.2rem;
	border: none;
	outline: none;
	border-radius: 7px;
	color: white;
	background-color: purple;
`
export default Btn
