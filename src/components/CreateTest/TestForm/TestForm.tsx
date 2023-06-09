import {useState} from 'react'
import {BlockBox} from 'src/components/common/formElements/BlockBox/BlockBox'
import {FormikButton} from 'src/components/common/formElements/FormikButton/FormikButton'
import {CustomInput} from 'src/components/common/formElements/Input/Input'
import {Question, Test} from 'src/redux/reducers/tests'

import s from './TestForm.module.css'
import {QuestionForm} from '../QuestionForm/QuestionForm'

export const TestForm: React.FC<{newTest: Test}> = ({newTest}) => {
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
			className={s.Root}
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

			<div className={s.formControlButtons}>
				<FormikButton
					title='Delete the test'
					type='reset'
				/>
				<FormikButton title='Save the test' />
			</div>

			<QuestionForm addQuestion={(q) => setQuestions((prev) => [...prev, q])} />
		</form>
	)
}
