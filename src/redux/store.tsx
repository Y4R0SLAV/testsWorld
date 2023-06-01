import {configureStore} from '@reduxjs/toolkit'
import appReducer from './reducers/app'
import testReducer from './reducers/tests'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		app: appReducer,
		test: testReducer,
	},
	middleware: [saga],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
