import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'

export type ONE_ANSWER = 'ONE_ANSWER'
export type MANY_ANSWER = 'MANY_ANSWER'
export type NUMBER_ANSWER = 'NUMBER_ANSWER'

export type Answer = {
	body: string
	rightOne: boolean
	id: number
	order: number
}

export type QuestionType = ONE_ANSWER | MANY_ANSWER | NUMBER_ANSWER

export type Question = {
	title: string
	type: QuestionType
	answers: Array<Answer> | number
	id: number
}

export type Test = {
	title: string
	questions: Array<Question>
	date: number
}

interface TestsState {
	tests: Array<Test>
	searchQuery: string
}

const initialState: TestsState = {
	searchQuery: '',
	tests: [
		{
			title: 'Тест 1 одноответчиковый',
			date: 1685633618412,
			questions: [
				{
					title: 'вопрос 1',
					type: 'ONE_ANSWER',
					id: 1,
					answers: [
						{
							body: 'Ответ 1',
							rightOne: false,
							id: 1,
							order: 1,
						},
						{
							body: 'Ответ 2',
							rightOne: false,
							id: 2,
							order: 2,
						},
						{
							body: 'Ответ 3',
							rightOne: true,
							id: 3,
							order: 3,
						},
						{
							body: 'Ответ 4',
							rightOne: false,
							id: 4,
							order: 4,
						},
					],
				},
				{
					title: 'вопрос 1',
					type: 'ONE_ANSWER',
					id: 2,
					answers: [
						{
							body: 'Ответ 1',
							rightOne: false,
							id: 1,
							order: 1,
						},
						{
							body: 'Ответ 2',
							rightOne: false,
							id: 2,
							order: 2,
						},
						{
							body: 'Ответ 3',
							rightOne: true,
							id: 3,
							order: 3,
						},
						{
							body: 'Ответ 4',
							rightOne: false,
							id: 4,
							order: 4,
						},
					],
				},
				{
					title: 'вопрос 1',
					type: 'ONE_ANSWER',
					id: 3,
					answers: [
						{
							body: 'Ответ 1',
							rightOne: false,
							id: 1,
							order: 1,
						},
						{
							body: 'Ответ 2',
							rightOne: false,
							id: 2,
							order: 2,
						},
						{
							body: 'Ответ 3',
							rightOne: true,
							id: 3,
							order: 3,
						},
						{
							body: 'Ответ 4',
							rightOne: false,
							id: 4,
							order: 4,
						},
					],
				},
			],
		},
		{
			title: 'Тест 2 многоответчиковый',
			date: 1685633618300,
			questions: [
				{
					title: 'вопрос 1',
					type: 'MANY_ANSWER',
					id: 1,
					answers: [
						{
							body: 'Ответ 1',
							rightOne: true,
							id: 1,
							order: 1,
						},
						{
							body: 'Ответ 2',
							rightOne: false,
							id: 2,
							order: 2,
						},
						{
							body: 'Ответ 3',
							rightOne: true,
							id: 3,
							order: 3,
						},
						{
							body: 'Ответ 4',
							rightOne: false,
							id: 4,
							order: 4,
						},
					],
				},
			],
		},
		{
			title: 'Тест 3 числовой',
			date: 1685633617190,
			questions: [
				{
					title: 'вопрос 1 с ответом 3',
					type: 'NUMBER_ANSWER',
					id: 1,
					answers: 3,
				},
			],
		},
	],
}

export const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setNewTest: (state, action: PayloadAction<Test>) => {
			state.tests.push(action.payload)
		},
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.searchQuery = action.payload
		},
	},
})

export const {setNewTest, setSearchQuery} = testSlice.actions

export const selectTests = (state: RootState) => state.test.tests
export const selectSearchQuery = (state: RootState) => state.test.searchQuery

export default testSlice.reducer
