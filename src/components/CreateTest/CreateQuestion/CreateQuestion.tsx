import {Answer, Question, QuestionType} from 'src/redux/reducers/tests'
import {BlockBox} from 'src/components/common/formElements/BlockBox/BlockBox'
import {useState} from 'react'
import {CustomInput} from 'src/components/common/formElements/Input/Input'
import {CreateAnswer} from '../CreateAnswer/CreateAnswer'
import {Button} from 'src/components/common/formElements/Button/Button'
import {Option} from 'src/components/common/formElements/Select/CustomSelect'
import {AnswerList} from '../AnswerList/AnswerList'

import s from './CreateQuestion.module.css'
import classNames from 'classnames/bind'
import {ErrorMessage} from 'src/components/common/ErrorMessage/ErrorMessage'

export const CreateQuestion: React.FC<{
	selectedValue: QuestionType | undefined
	setSelectedOption: (a: Option | null) => void
}> = ({selectedValue, setSelectedOption}) => {
	const cn = classNames.bind(s)
	const [body, setBody] = useState('')
	const [bodyError, setBodyError] = useState('')
	const [answerError, setAnswerError] = useState('')

	const [answers, setAnswers] = useState<Array<Answer>>([])
	const [numberAnswer, setNumberAnswer] = useState<number | null>(null)

	const [question, setQuestion] = useState<Question>({
		title: '',
		answers,
		type: selectedValue || 'ONE_ANSWER',
		id: -1,
	})

	const addAnswer = (answer: Answer) => {
		setAnswers((prev) => [...prev, answer])
	}

	const closeHandler = () => {
		setBody('')
		setBodyError('')
		setAnswers([])
		setQuestion({
			title: '',
			answers,
			type: selectedValue || 'ONE_ANSWER',
			id: -1,
		})
		setSelectedOption(null)
	}

	// возвращает ложь если ошиьок нет
	const manyAnswerErrorHandler = () => {
		if (answers.length < 2) {
			setAnswerError('You need at least two answers')
			return true
		}
		let hasAtLeastOneRight = answers.some((answer) => answer.rightOne === true)
		if (!hasAtLeastOneRight) {
			setAnswerError('You need at least one right answer')
			return true
		}

		return false
	}

	const oneAnswerErrorHandler = () => {
		if (answers.length < 2) {
			setAnswerError('You need at least two answers')
			return true
		}
		let count = 0
		for (let i = 0; i < answers.length; i++) {
			const answer = answers[i]
			if (count > 1) {
				setAnswerError('You need only one right answer')
				return true
			}
			if (answer.rightOne) {
				count++
			}
		}
		if (count === 0) {
			setAnswerError('You need one right answer')
			return true
		}
		return false
	}

	const saveHandler = () => {
		if (!body.trim()) {
			setBodyError('Question body is required')
			setBody('')
			return
		}
		if (selectedValue === 'NUMBER_ANSWER' && numberAnswer) {
			//return addQuestion(question)
		}
		if (selectedValue === 'NUMBER_ANSWER') {
			setAnswerError('Answer is required')
		}
		if (selectedValue === 'MANY_ANSWER' && manyAnswerErrorHandler()) {
			// нужно минимум два ответа и минимум один правильный
			return
		}
		if (selectedValue === 'ONE_ANSWER' && oneAnswerErrorHandler()) {
			// нужно минимум два ответа и ровно один правильный
			return
		}
		setQuestion({title: body, answers, type: selectedValue || 'ONE_ANSWER', id: Date.now()})
		alert('Success')
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
		<div className={cn({Root: true, hide: !selectedValue})}>
			<div className={s.formControlButtons}>
				<Button onClick={closeHandler}>Cancel the question</Button>
				<Button onClick={saveHandler}>Save the question</Button>
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
			<ErrorMessage errorMessage={answerError} />
			<AnswerList
				answers={answers}
				setAnswers={setAnswers}
			/>
		</div>
	)
}
