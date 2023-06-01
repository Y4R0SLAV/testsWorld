import {useState} from 'react'
import {useSelector} from 'react-redux'
import {selectSearchQuery, selectTests} from 'src/redux/reducers/tests'
import {DisplayTests} from './TestDisplays/DisplayTest/DisplayTest'
import {SearchInput} from './SearchInput/SearchInput'

import s from './TestPage.module.css'

const DateFilter: React.FC<{setBoolean: (a: boolean) => void; value: boolean}> = ({
	setBoolean,
	value,
}) => {
	return (
		<div
			className={s.date}
			onClick={() => setBoolean(!value)}
		>
			обратно
		</div>
	)
}

export const TestPage = () => {
	const tests = useSelector(selectTests)
	const searchQuery = useSelector(selectSearchQuery)
	const [sortAsc, setSortAsc] = useState(true)

	let filteredTests = tests.filter((test) => test.title.includes(searchQuery))

	return (
		<div className={s.Root}>
			<div className={s.title}>СТРАНИЧКА ТЕСТОВ</div>

			<div className={s.filters}>
				<SearchInput />
				<DateFilter
					setBoolean={setSortAsc}
					value={sortAsc}
				/>
			</div>

			<DisplayTests
				tests={filteredTests}
				sortAsc={sortAsc}
			/>
		</div>
	)
}
