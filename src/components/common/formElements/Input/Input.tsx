import {InputHTMLAttributes} from 'react'
import s from './Input.module.css'

export const CustomInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
	return (
		<input
			className={s.Root}
			{...rest}
		/>
	)
}
