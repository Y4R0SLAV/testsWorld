import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'

export type RoleType = 'admin' | 'user'

export type UserStateData = {
	login: string
	role: RoleType
	id: number
}

interface AppState {
	userData?: UserStateData
}

const initialState: AppState = {
	userData: undefined,
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserStateData>) => {
			state.userData = action.payload
		},
		setUserUndefined: (state) => {
			state.userData = undefined
		},
	},
})

export const {setUserData, setUserUndefined} = appSlice.actions

export const selectUserRole = (state: RootState) => state.app.userData?.role

export default appSlice.reducer
