import {Question} from 'src/redux/reducers/tests'
import {displayAnswer} from '../DisplayAnswer/DisplayAnswer'

import s from './DisplayQuestion.module.css'

export const DisplayQuestion: React.FC<{question: Question}> = ({question}) => {
	return (
		<div className={s.question}>
			<div className=''>{question.title}</div>
			{typeof question.answers === 'number' ? (
				<div className=''>{question.answers}</div>
			) : (
				question.answers.map((answer) => displayAnswer(answer))
			)}
		</div>
	)
}
