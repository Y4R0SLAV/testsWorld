import {Answer, Question, QuestionType} from 'src/redux/reducers/tests'
import s from './CreateQuestion.module.css'
import {BlockBox} from 'src/components/common/formElements/BlockBox/BlockBox'
import {useState} from 'react'
import {CustomInput} from 'src/components/common/formElements/Input/Input'
import {FormikButton} from 'src/components/common/formElements/FormikButton/FormikButton'
import {CreateAnswer} from '../CreateAnswer/CreateAnswer'

export const Answers: React.FC<{
	answers: Array<Answer>
	setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>
}> = ({answers, setAnswers}) => {
	const [currentAnswer, setCurrentAnswer] = useState<Answer>()

	const handleCheck = (id: number) => {
		const newArray = answers.map((answer) =>
			answer.id === id ? {...answer, rightOne: !answer.rightOne} : answer,
		)
		setAnswers(newArray)
	}
	const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, answer: Answer) => {
		setCurrentAnswer(answer)
	}

	const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.currentTarget.style.background = 'white'
	}
	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.currentTarget.style.background = 'red'
	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>, answer: Answer) => {
		e.currentTarget.style.background = 'white'
		e.preventDefault()
		e.stopPropagation()
		console.log('insiede mao')

		const newAnswers = answers.map((a) => {
			console.log(a.body, a.id, currentAnswer?.body, currentAnswer?.id, answer.body, answer.id)
			if (!currentAnswer) {
				return a
			}

			if (a.id === answer.id) {
				return {...a, order: currentAnswer.order}
			}
			if (a.id === currentAnswer.id) {
				return {...a, order: answer.order}
			}
			return a
		})

		setAnswers(newAnswers)
	}

	const sortAnswers = (a: Answer, b: Answer) => {
		if (a.order > b.order) {
			return 1
		}
		return -1
	}

	return (
		<div className={s.RootA}>
			<div className={s.Title}>Answers</div>
			DisplayA
			<div className={s.List}>
				{answers.sort(sortAnswers).map((answer) => (
					<div
						key={answer.id}
						draggable
						onDrop={(e) => dropHandler(e, answer)}
						onDragOver={(e) => dragOverHandler(e)}
						onDragEnd={(e) => dragEndHandler(e)}
						onDragLeave={(e) => dragEndHandler(e)}
						onDragStart={(e) => dragStartHandler(e, answer)}
					>
						<span>{answer.body}</span>

						<input
							checked={answer.rightOne}
							type='checkbox'
							onChange={() => {
								handleCheck(answer.id)
							}}
						/>
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
		id: -1,
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
			<Answers
				answers={answers}
				setAnswers={setAnswers}
			/>
			{JSON.stringify(answers)}
		</div>
	)
}
