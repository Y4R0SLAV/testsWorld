import {useRef, useState} from 'react'
import {BlockBox} from './../common/formElements/BlockBox/BlockBox'
import {CustomInput} from './../common/formElements/Input/Input'

import s from './CreateTest.module.css'
import {FormikButton} from '../common/formElements/FormikButton/FormikButton'
import {Question, QuestionType, Test} from 'src/redux/reducers/tests'
import {Button} from '../common/formElements/Button/Button'
import {CustomSelect} from '../common/formElements/Select/CustomSelect'

const AddQuestion: React.FC<{titleError: string; addQuestion: (q: Question) => void}> = ({
	titleError,
	addQuestion,
}) => {
	const options = [
		{value: 'ONE_ANSWER', title: '1 answer'},
		{value: 'MANY_ANSWER', title: 'at least 2 answers'},
		{value: 'NUMBER_ANSWER', title: 'number answer'},
	] as Array<{value: QuestionType; title: string}>

	const [questionType, setQuestionType] = useState<QuestionType | undefined>(undefined)
	const [questionsError, setQuestionsError] = useState('')

	const selectedType = options.find((item) => item.value === questionType)

	const handleQuestion = () => {}

	return (
		<BlockBox
			title={questionsError}
			errorMessage={titleError}
		>
			<div className=''>{questionType}</div>
			<Button onClick={() => handleQuestion()}> Добавить вопрос</Button>
			<CustomSelect
				onChange={(selected) => {
					setQuestionType(selected as QuestionType | undefined)
				}}
				selected={selectedType || null}
				defaultValue='Choose a type'
				options={options}
			/>
		</BlockBox>
	)
}

const CreateTestForm: React.FC<{newTest: Test}> = ({newTest}) => {
	const [title, setTitle] = useState('')
	const [titleError, setTitleError] = useState('')
	const [questions, setQuestions] = useState<Array<Question>>([])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (title.trim().length > 0) {
			newTest.title = title
			setTitleError('')
		} else {
			setTitleError('Test title is required')
		}

		if (questions.length > 0) {
			newTest.questions = questions
		} else {
			setTitleError('The test should include at least 1 question')
		}
	}

	const handleReset = () => {
		setTitle('')
		setTitleError('')
		setQuestions([])
	}

	return (
		<form
			action=''
			onSubmit={handleSubmit}
			onReset={handleReset}
		>
			<BlockBox
				title='Test title:'
				errorMessage={titleError}
			>
				<CustomInput
					value={title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setTitle(e.currentTarget.value)
					}}
				/>
			</BlockBox>

			<div className={s.buttons}>
				<div className={s.formControlButtons}>
					<FormikButton
						title='Delete the test'
						type='reset'
					/>
					<FormikButton title='Save the test' />
				</div>
			</div>

			<AddQuestion
				titleError={titleError}
				addQuestion={(q) => setQuestions((prev) => [...prev, q])}
			/>
		</form>
	)
}

export const CreateTest = () => {
	const newTest = {} as Test

	return (
		<div className={s.Root}>
			<div className={s.title}>СТРАНИЧКА СОЗДАНИЯ ТЕСТА</div>
			<CreateTestForm newTest={newTest} />
		</div>
	)
}
