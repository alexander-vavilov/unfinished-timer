import React, { FC, useContext } from 'react'
import Select from './Select/Select'
import { SettingsContextType } from '../../types'
import { SettingsContext } from '../../contexts/SettingsContext'

const LongBreakTimeSelect: FC = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSettings(prevSettings => ({
			...prevSettings,
			longBreakTime: Number(e.target.value),
		}))
	}

	return (
		<Select
			title='Long break time'
			value={settings.longBreakTime}
			onChange={handleChange}
			options={[300, 600, 900, 1200, 1500, 1800]}
			unit='min'
		/>
	)
}

export default LongBreakTimeSelect
