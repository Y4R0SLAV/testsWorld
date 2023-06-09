import {TestForm} from './TestForm/TestForm'
import {Test} from 'src/redux/reducers/tests'

import s from './CreateTest.module.css'
import {DisplayQuestion} from './../TestPage/TestDisplays/DisplayQuestion/DisplayQuestion'

export const CreateTest = () => {
	const newTest = {
		title: 'Тест 1 одноответчиковый',
		date: 1685633618412,
		questions: [
			{
				title: 'вопрос 1',
				type: 'ONE_ANSWER',
				answers: [
					{
						body: 'Ответ 1',
						rightOne: false,
					},
					{
						body: 'Ответ 2',
						rightOne: false,
					},
					{
						body: 'Ответ 3',
						rightOne: true,
					},
					{
						body: 'Ответ 4',
						rightOne: false,
					},
				],
			},
		],
	} as Test

	return (
		<div className={s.Root}>
			<div className={s.title}>СТРАНИЧКА СОЗДАНИЯ ТЕСТА</div>
			<TestForm newTest={newTest} />
			{newTest.questions.map((q) => (
				<DisplayQuestion question={q} />
			))}
		</div>
	)
}
