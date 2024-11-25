import { useLocation } from 'react-router-dom'
import styles from './personage.module.scss'

export const Personage = () => {
	const location = useLocation()
	const { img, name, quote } = location.state || {}
	return (
		<div className={styles.containerPage}>
			<div className={styles.personageCard}>
				<img src={img} alt={name} className={styles.personageImg} />
				<h1 className={styles.personageName}>{name}:</h1>
        
				<p className={styles.personageQuote}>{quote}</p>
			</div>
		</div>
	)
}
