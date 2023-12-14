import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}