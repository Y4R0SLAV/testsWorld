import {AppRouter} from './AppRouter'
import {BrowserRouter as Router} from 'react-router-dom'

import {Auth} from './components/Auth/Auth'
import {useUser} from './hooks/useLogin'

import {Layout} from './components/Layout/Layout'

import s from './App.module.css'

function App() {
	const {user, setUser} = useUser()

	if (!user) {
		console.log(12)
		return <Auth setCurrentUser={setUser} />
	}

	return (
		<Router>
			<Layout setUser={setUser}>
				<AppRouter />
			</Layout>
		</Router>
	)
}

export default App
