import {useState} from 'react'
import {Button} from 'src/components/common/formElements/Button/Button'

import data from 'src/data/users.json'

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const user = checkLoginAndPassword(username, password)

		if (user) {
			localStorage.setItem(
				'user',
				JSON.stringify({login: user.login, role: user.role, id: user.id}),
			)
			setCurrentUser(user)
		}
	}

	return (
		<div className='login-wrapper'>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Username</p>
					<input
						type='text'
						onChange={(e) => setUserName(e.target.value)}
					/>
				</label>
				<label>
					<p>Password</p>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<Button>
					<button>Submit</button>
				</Button>
			</form>
		</div>
	)
}
