import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'
import logo from './logo.png'
export const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<nav className={styles.navBar}>
				<img src={logo} alt='' className={styles.logo}/>
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
							to='/cardListPage'
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.navLink
							}
						>
							Карточки
						</NavLink>
					</li>
				</ul>
				<span></span>
			</nav>
		</header>
	)
}
