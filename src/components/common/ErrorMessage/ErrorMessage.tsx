import s from './ErrorMessage.module.css'
import classNames from 'classnames/bind'

export const ErrorMessage: React.FC<{
	errorMessage: string
}> = ({errorMessage}) => {
	const cx = classNames.bind(s)
	return <div className={cx({Root: true, hide: !errorMessage})}>{errorMessage}</div>
}
