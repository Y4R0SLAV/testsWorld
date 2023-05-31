import {Routes} from 'react-router'
import {Route} from 'react-router-dom'
import {TestPage} from './components/TestPage/TestPage'

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<TestPage />}
			/>
		</Routes>
	)
}
