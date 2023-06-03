import {UserStateData} from 'src/redux/reducers/app'
import {Footer} from './Footer/Footer'
import {Header} from './Header/Header'
import s from './Layout.module.css'

export const Layout: React.FC<{
	children: React.ReactNode | Array<React.ReactNode>
	setUser: (user: UserStateData | undefined) => void
}> = ({children, setUser}) => {
	return (
		<div className={s.Root}>
			<Header setUser={setUser} />
			<div className={s.content}>{children}</div>
			<Footer />
		</div>
	)
}
