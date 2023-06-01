import {AuthForm} from './AuthForm/AuthForm'

import s from './Auth.module.css'
import {UserStateData} from 'src/redux/reducers/app'

export const Auth: React.FC<{setCurrentUser: (a: UserStateData) => void}> = ({setCurrentUser}) => {
	return (
		<div className={s.Root}>
			<div className={s.content}>
				<div className={s.title}>Authentication</div>
				<AuthForm setCurrentUser={setCurrentUser} />
			</div>
		</div>
	)
}
