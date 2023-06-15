import {Answer} from 'src/redux/reducers/tests'
import {Button} from './../../common/formElements/Button/Button'
import {useState} from 'react'
import {CustomInput} from 'src/components/common/formElements/Input/Input'

import s from './CreateAnswer.module.css'

export const CreateAnswer: React.FC<{addAnswer: (a: Answer) => void}> = ({addAnswer}) => {
	const [rightOne, setRightOne] = useState(false)
	const [body, setAnswerBody] = useState('')

	const buttonHandler = () => {
		if (body.trim()) {
			addAnswer({body, rightOne})
			setAnswerBody('')
			setRightOne(false)
		} else {
			setAnswerBody('')
		}
	}

	return (
		<div className={s.Root}>
			<div className={s.inputs}>
				<CustomInput
					value={body}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setAnswerBody(e.currentTarget.value)
					}
				/>
				<input
					type='checkbox'
					checked={rightOne}
					onChange={() => setRightOne((prev) => !prev)}
				/>
			</div>

			<Button
				onClick={buttonHandler}
				classNames={s.btn}
			>
				Add the answer
			</Button>
		</div>
	)
}
