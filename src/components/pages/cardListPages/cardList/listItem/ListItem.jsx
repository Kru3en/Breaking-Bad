/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import styles from './listItem.module.scss'

export const ListItem = cardProp => {
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
		<div className={styles.listItem} onClick={handleCardClick}>
			<div className={styles.info}>
				<p className={styles.name}>{cardProp.name}</p>
				<p className={styles.quote}>"{cardProp.quote}"</p>
			</div>
		</div>
	)
}
