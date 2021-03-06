import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react'

interface User {
	logged: boolean
	[key: string]: any
}
interface UserContext {
	user: User
	setUser?: Dispatch<SetStateAction<{ logged: boolean }>>
}

const initialState: UserContext = {
	user: { logged: false }
}
export const UserContext = createContext<UserContext>(initialState)
export const useUser = () => useContext(UserContext)

export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState({ logged: false })
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
