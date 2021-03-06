import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react'

interface State {
	isLoading: boolean
	[key: string]: any
}
interface GlobalContext {
	state: State
	setState?: Dispatch<SetStateAction<{ isLoading: boolean }>>
}
const initialState = {
	state: { isLoading: true }
}
export const GlobalStateContext = createContext<GlobalContext>(initialState)
export const useGlobalState = () => useContext(GlobalStateContext)

export const GlobalState: React.FC = ({ children }) => {
	const [state, setState] = useState({ isLoading: true })
	return (
		<GlobalStateContext.Provider value={{ state, setState }}>
			{children}
		</GlobalStateContext.Provider>
	)
}
