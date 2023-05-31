import {AuthForm, UserType} from './AuthForm/AuthForm'

import s from './Auth.module.css'

export const Auth: React.FC<{setCurrentUser: (a: UserType) => void}> = ({setCurrentUser}) => {
	return (
		<div className={s.Root}>
			<div className={s.content}>
				<div className={s.title}>Authentication</div>
				<AuthForm setCurrentUser={setCurrentUser} />
			</div>
		</div>
	)
}
