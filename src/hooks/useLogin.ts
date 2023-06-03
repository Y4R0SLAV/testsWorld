import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {UserStateData, setUserData, setUserUndefined} from 'src/redux/reducers/app'

export const useUser = () => {
	const dispatch = useDispatch()

	const getUser = () => {
		const userString = sessionStorage.getItem('user')
		if (userString) {
			const user = JSON.parse(userString)
			return user
		}
		return null
	}

	const [user, setUser] = useState(getUser())

	const saveUser = (user: UserStateData | undefined) => {
		if (user === undefined) {
			dispatch(setUserUndefined())
			sessionStorage.removeItem('user')
		} else {
			dispatch(setUserData(user))
			sessionStorage.setItem('user', JSON.stringify(user))
		}

		setUser(user)
	}

	return {
		user,
		setUser: saveUser,
	}
}
