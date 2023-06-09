import {QuestionType} from 'src/redux/reducers/tests'
import s from './CreateQuestion.module.css'

export const CreateQuestion: React.FC<{selectedValue: QuestionType | undefined}> = ({
	selectedValue,
}) => {
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
	return <div className={s.Root}>выбрано но кнопка не нажата</div>
}
