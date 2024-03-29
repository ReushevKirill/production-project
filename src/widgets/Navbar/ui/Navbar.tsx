import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<nav className={cls.links}>
				<AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
					Главная
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
					О сайте
				</AppLink>
			</nav>
		</header>
	)
}
