import {useState} from 'react'
import {Answer} from 'src/redux/reducers/tests'

import s from './AnswerList.module.css'
import classNames from 'classnames/bind'

export const AnswerList: React.FC<{
	answers: Array<Answer>
	setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>
}> = ({answers, setAnswers}) => {
	const [currentAnswer, setCurrentAnswer] = useState<Answer>()
	const [hoverAnswer, setHoverAnswer] = useState<Answer | null>(null)
	const cn = classNames.bind(s)

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
		setHoverAnswer(null)
	}

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>, answer: Answer) => {
		e.preventDefault()
		setHoverAnswer(answer)
	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>, answer: Answer) => {
		dragEndHandler(e)
		e.preventDefault()
		e.stopPropagation()

		const newAnswers = answers.map((a) => {
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
		<div className={s.Root}>
			<div className={s.title}>Answers</div>
			<div className={s.list}>
				{answers.sort(sortAnswers).map((answer) => (
					<div
						className={cn({item: true, hover: hoverAnswer === answer})}
						key={answer.id}
						draggable
						onDrop={(e) => dropHandler(e, answer)}
						onDragOver={(e) => dragOverHandler(e, answer)}
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
