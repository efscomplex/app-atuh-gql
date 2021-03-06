import React, { createContext, useContext } from 'react'

export interface Credentials {
	email: string | undefined
	password: string | undefined
}

type Auth = {
	loggin: (
		credentials: Credentials,
		callback?: (...rest: any) => void
	) => void
	logout: (callback?: () => void) => void
}
const initialState = {
	loggin: (data: Credentials) => data,
	logout: () => {}
}
export const AuthContext = createContext<Auth>(initialState)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ children }) => {
	const loggin = (credentials: Credentials, callback: any) => {
		callback?.(credentials)
	}
	const logout = (callback: any) => {
		callback?.()
	}
	return (
		<AuthContext.Provider value={{ loggin, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
