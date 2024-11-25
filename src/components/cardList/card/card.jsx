import { cards } from '../../../other/cards'
import styles from './card.module.scss'
export const Card = () => {
	const cardImg = cards[0].img
	return (
		<>
			<div className={styles.contCardItem}>
				<img src={cardImg} alt='img' className={styles.imgCard} />
				<div className={styles.contTopText}>
					<p className={styles.name}>{cards[0].name}</p>
					<p className={styles.birthday}>{cards[0].birthday}</p>
				</div>
				<div className={styles.contStatus}>
					<p className={styles.textStatus}>{cards[0].status}</p>
				</div>
			</div>
		</>
	)
}
