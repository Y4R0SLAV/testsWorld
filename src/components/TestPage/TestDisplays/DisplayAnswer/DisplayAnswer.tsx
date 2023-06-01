import {Answer} from 'src/redux/reducers/tests'

import s from './DisplayAnswer.module.css'

export const displayAnswer = (answer: Answer) => {
	return (
		<div className={s.Root}>
			<div className=''>
				{answer.body} {answer.rightOne ? 'он' : 'не он'}
			</div>
		</div>
	)
}
