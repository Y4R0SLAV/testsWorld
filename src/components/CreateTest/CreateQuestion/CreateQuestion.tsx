import {Answer, Question, QuestionType} from 'src/redux/reducers/tests'
import s from './CreateQuestion.module.css'
import {BlockBox} from 'src/components/common/formElements/BlockBox/BlockBox'
import {useState} from 'react'
import {CustomInput} from 'src/components/common/formElements/Input/Input'
import {FormikButton} from 'src/components/common/formElements/FormikButton/FormikButton'
import {CreateAnswer} from '../CreateAnswer/CreateAnswer'

export const Answers: React.FC<{answers: Array<Answer>}> = ({answers}) => {
	return (
		<div className={s.RootA}>
			<div className={s.Title}>Answers</div>
			DisplayA
			<div className={s.List}>
				{answers.map((a) => (
					<div>
						{a.body} {a.rightOne ? 'correct one' : 'wrong one'}
					</div>
				))}
			</div>
		</div>
	)
}

export const CreateQuestion: React.FC<{selectedValue: QuestionType | undefined}> = ({
	selectedValue,
}) => {
	const [body, setBody] = useState('')
	const [bodyError, setBodyError] = useState('')

	const [answers, setAnswers] = useState<Array<Answer>>([])

	const [question, setQuestion] = useState<Question>({
		title: '',
		answers,
		type: selectedValue || 'ONE_ANSWER',
	})

	const addAnswer = (answer: Answer) => {
		setAnswers((prev) => [...prev, answer])
	}

	if (!selectedValue) {
		return <div> нет ничего</div>
	}

	switch (selectedValue) {
		case 'ONE_ANSWER':
			break
		case 'MANY_ANSWER':
			break
		case 'NUMBER_ANSWER':
			break

		default:
			break
	}
	return (
		<div className={s.Root}>
			<div className={s.formControlButtons}>
				<FormikButton
					title='Cancel the question'
					type='reset'
				/>
				<FormikButton title='Save the question' />
			</div>
			<BlockBox
				title='Question body:'
				errorMessage={bodyError}
			>
				<CustomInput
					value={body}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setBody(e.currentTarget.value)
					}}
				/>
			</BlockBox>

			<CreateAnswer addAnswer={addAnswer} />
			<Answers answers={answers} />
		</div>
	)
}
