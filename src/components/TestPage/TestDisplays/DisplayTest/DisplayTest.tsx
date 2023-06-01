import {Test} from 'src/redux/reducers/tests'

import s from './DisplayTest.module.css'

const displayTest = (test: Test) => {
	return (
		<div
			className={s.Root}
			key={test.date}
		>
			<div className={s.title}>{test.title}</div>
		</div>
	)
}

export const DisplayTests: React.FC<{tests: Array<Test>; sortAsc: boolean}> = ({
	tests,
	sortAsc,
}) => {
	if (sortAsc) {
		return <div>{tests.map((test) => displayTest(test))}</div>
	} else {
		return <div>{tests.reverse().map((test) => displayTest(test))}</div>
	}
}
