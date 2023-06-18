import s from './CustomSelect.module.css'

export type Option = {title: string; value: string}

type SelectProps = {
	selected: Option | null
	options: Option[]
	onChange: (selected: Option['value']) => void
	onClose?: () => void
	defaultValue: string
}

export const CustomSelect: React.FC<SelectProps> = ({
	selected,
	options,
	onChange,
	defaultValue,
}) => {
	return (
		<select
			className={s.Root}
			value={selected?.value || ''}
			onChange={(e) => {
				onChange(e.currentTarget.value)
			}}
		>
			<option
				className={s.option}
				value=''
				defaultValue={defaultValue}
				hidden
			>
				{defaultValue}
			</option>
			{options.map((option) => (
				<option
					className={s.option}
					key={option.value}
					value={option.value}
				>
					{option.title}
				</option>
			))}
		</select>
	)
}
