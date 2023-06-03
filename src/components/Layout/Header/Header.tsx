import {Link} from 'react-router-dom'

import s from './Header.module.css'
import {UserStateData} from 'src/redux/reducers/app'

export const Header: React.FC<{setUser: (user: UserStateData | undefined) => void}> = ({
	setUser,
}) => {
	return (
		<div className={s.Root}>
			<Link to={'./create'}>Create a test</Link>
			<div
				className={s.pseudoA}
				onClick={() => setUser(undefined)}
			>
				Log Out
			</div>
		</div>
	)
}
