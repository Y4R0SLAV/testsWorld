import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {UserStateData, setUserData} from 'src/redux/reducers/app'

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

	const saveUser = (user: UserStateData) => {
		dispatch(setUserData(user))
		sessionStorage.setItem('user', JSON.stringify(user))
		setUser(user)
	}

	return {
		user,
		setUser: saveUser,
	}
}
