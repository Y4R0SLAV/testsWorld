import {useEffect, useMemo, useState} from 'react'
import {Button} from 'src/components/common/formElements/Button/Button'
import {CustomSelect, Option} from 'src/components/common/formElements/Select/CustomSelect'
import {Question, QuestionType} from 'src/redux/reducers/tests'

import s from './QuestionForm.module.css'
import {ErrorMessage} from 'src/components/common/ErrorMessage/ErrorMessage'
import {CreateQuestion} from './../CreateQuestion/CreateQuestion'

export const QuestionForm: React.FC<{addQuestion: (q: Question) => void}> = ({addQuestion}) => {
	const options = useMemo(() => {
		return [
			{value: 'ONE_ANSWER', title: '1 answer'},
			{value: 'MANY_ANSWER', title: 'at least 2 answers'},
			{value: 'NUMBER_ANSWER', title: 'number answer'},
		] as Array<{value: QuestionType; title: string}>
	}, [])

	const [questionType, setQuestionType] = useState<QuestionType | null>(null)
	const [questionsError, setQuestionsError] = useState('')

	const [selectedOption, setSelectedOption] = useState<Option | null>(null)

	useEffect(() => {
		let option = options.find((item) => item.value === questionType)
		setSelectedOption(option || null)
	}, [questionType, options])

	const handleAddQuestion = () => {
		if (!questionType) {
			setQuestionsError('You have to choose a type of a question')
		}
	}

	const handleSelect = (selected: string) => {
		setQuestionType(selected as QuestionType | null)
		setQuestionsError('')
	}

	return (
		<div className={s.Root}>
			<div className={s.buttons}>
				<Button onClick={handleAddQuestion}> Добавить вопрос</Button>
				<CustomSelect
					onChange={handleSelect}
					selected={selectedOption}
					defaultValue='Choose a type'
					options={options}
				/>
			</div>
			<ErrorMessage errorMessage={questionsError} />

			<CreateQuestion
				setSelectedOption={setSelectedOption}
				selectedValue={selectedOption?.value as QuestionType | undefined}
			/>
		</div>
	)
}
