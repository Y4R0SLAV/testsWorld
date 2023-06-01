import {AppRouter} from './AppRouter'
import {BrowserRouter as Router} from 'react-router-dom'

import {Auth} from './components/Auth/Auth'
import {useUser} from './hooks/useLogin'

import s from './App.module.css'

function App() {
	const {user, setUser} = useUser()

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
