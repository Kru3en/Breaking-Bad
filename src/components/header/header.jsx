import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<nav className={styles.navBar}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.navLink
							}
						>
							Главная
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							to='/card-list'
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.navLink
							}
						>
							Карточки
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink
							to='/personage'
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.navLink
							}
						>
							Персонажи
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
