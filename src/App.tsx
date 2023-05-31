import {useState} from 'react'
import {AppRouter} from './AppRouter'
import {BrowserRouter as Router} from 'react-router-dom'

import {Auth} from './components/Auth/Auth'
import {UserType} from 'src/components/Auth/AuthForm/AuthForm'
import {useUser} from './hooks/useLogin'

import s from './App.module.css'

function App() {
	const {user, setUser} = useUser()

	setInterval(() => {
		console.log(user)
	}, 5000)

	if (!user) {
		return <Auth setCurrentUser={setUser} />
	}

	return (
		<Router>
			<AppRouter />
		</Router>
	)
}

export default App
