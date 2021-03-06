import Btn from 'components/shared/Btn'
import Input from 'components/shared/Input'
import { useAuth } from 'providers/Auth'
import { useUser } from 'providers/User'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
	const { setUser } = useUser()
	const { loggin } = useAuth()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const history = useHistory()

	const onClickLogin = (e: any) => {
		e.preventDefault()
		if (!email || !password) return
		const callback = (data: any) => {
			setUser({ ...data, isLogged: true })
			history.push('/dashboard')
		}
		loggin({ email, password }, callback)
	}

	return (
		<form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<label>
				<span>Email: </span>
				<Input
					type='text'
					placeholder='email'
					onChange={({ target }: any) => setEmail(target.value)}
				/>
			</label>
			<label>
				<span>Password: </span>
				<Input
					type='text'
					placeholder='password'
					onChange={({ target }: any) => setPassword(target.value)}
				/>
			</label>
			<Btn onClick={onClickLogin}>Login</Btn>
		</form>
	)
}
