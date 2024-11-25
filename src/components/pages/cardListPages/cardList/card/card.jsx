import { useNavigate } from 'react-router-dom'
import styles from './card.module.scss'

export const Card = cardProp => {
	const navigate = useNavigate()
	const cardImg = cardProp.img

	const handleCardClick = () => {
		navigate(`/personage/${cardProp.name}`, {
			state: {
				img: cardImg,
				name: cardProp.name,
				quote: cardProp.quote,
			},
		})
	}

	return (
		<div className={styles.contCardItem} onClick={handleCardClick}>
			<img src={cardImg} alt='img' className={styles.imgCard} />
			<div className={styles.contTopText}>
				<p className={styles.name}>{cardProp.name}</p>
			</div>
		</div>
	)
}
