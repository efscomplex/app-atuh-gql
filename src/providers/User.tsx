import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react'

export interface User {
	isLogged: boolean
	[key: string]: any
}
interface UserContext {
	user: User
	setUser: Dispatch<SetStateAction<User>>
}

const initialState: UserContext = {
	user: { isLogged: false },
	setUser: () => {}
}
export const UserContext = createContext<UserContext>(initialState)
export const useUser = () => useContext(UserContext)

export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState({ isLogged: false })
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
