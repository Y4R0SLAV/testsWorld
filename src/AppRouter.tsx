import {Routes} from 'react-router'
import {Route} from 'react-router-dom'
import {TestPage} from './components/TestPage/TestPage'
import {CreateTest} from './components/CreateTest/CreateTest'

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<TestPage />}
			/>
			<Route
				path='/create'
				element={<CreateTest />}
			/>
		</Routes>
	)
}
