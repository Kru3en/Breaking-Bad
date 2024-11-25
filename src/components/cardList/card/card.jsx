import styles from './card.module.scss'
export const Card = cardProp => {
	const cardImg = cardProp.img
	return (
		<>
			<div className={styles.contCardItem}>
				<img src={cardImg} alt='img' className={styles.imgCard} />
				<div className={styles.contTopText}>
					<p className={styles.name}>{cardProp.name}</p>
					<p className={styles.birthday}>{cardProp.birthday}</p>
				</div>
				<div className={styles.contStatus}>
					<p className={styles.textStatus}>{cardProp.status}</p>
				</div>
			</div>
		</>
	)
}
