import s from './BlockBox.module.css'
import {ErrorMessage} from './../../ErrorMessage/ErrorMessage'

export const BlockBox: React.FC<{
	title: string
	errorMessage: string
	children: React.ReactNode
}> = ({title, errorMessage, children}) => {
	return (
		<div className={s.Root}>
			<div className={s.label}>{title}</div>
			{children}
			<ErrorMessage errorMessage={errorMessage} />
		</div>
	)
}
