import {useState} from 'react'

import data from 'src/data/users.json'
import {BlockBox} from './../../common/formElements/BlockBox/BlockBox'

import s from './AuthForm.module.css'
import {FormikButton} from './../../common/formElements/FormikButton/FormikButton'
import {CustomInput} from './../../common/formElements/Input/Input'

export type RoleType = 'admin' | 'user'

export type UserType = {
	login: string
	password?: string
	role: RoleType
	id: number
}

const users = data.users as Array<UserType>

const checkLoginAndPassword = (login: string, password: string) => {
	const user = users.find((user) => user.login === login)
	if (user && user.password === password) {
		return user
	}
	return false
}

export const AuthForm: React.FC<{setCurrentUser: (a: UserType) => void}> = ({setCurrentUser}) => {
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')

	const [usernameError, setUsernameError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const user = checkLoginAndPassword(username, password)

		const emptyLogin = username.length === 0
		const emptyPassword = username.length === 0
		if (user) {
			// функция из хука setUser, ставит его в локальном стейте + добавляет в локал стораж
			setCurrentUser(user)
			return
		} else if (emptyLogin || emptyPassword) {
			emptyLogin && setUsernameError('Username is required')
			emptyPassword && setPasswordError('Password is required')
		} else {
			setPasswordError('')
			setUsernameError('Invalid login information')
			setPassword('')
		}
	}

	return (
		<form
			className={s.Root}
			onSubmit={handleSubmit}
		>
			<BlockBox
				errorMessage={usernameError}
				title='Username'
			>
				<CustomInput
					value={username}
					type='text'
					onChange={(e) => setUserName(e.target.value)}
				/>
			</BlockBox>
			<BlockBox
				errorMessage={passwordError}
				title='Password'
			>
				<CustomInput
					value={password}
					type='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</BlockBox>

			<FormikButton title='Login' />
		</form>
	)
}
