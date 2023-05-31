import {useState} from 'react'
import {UserType} from 'src/components/Auth/AuthForm/AuthForm'

export const useUser = () => {
	const getUser = () => {
		const userString = localStorage.getItem('user')
		if (userString) {
			const user = JSON.parse(userString)
			return user
		}
		return null
	}

	const [user, setUser] = useState(getUser())

	const saveUser = (user: UserType) => {
		localStorage.setItem('user', JSON.stringify(user))
		setUser(user)
	}

	return {
		user,
		setUser: setUser,
	}
}
