import { cards } from '../../other/cards'
import { Card } from './card/card'
import styles from './cardList.module.scss'
export const CardList = () => {
	return (
		<>
			<div className={styles.contCardList}>
				{cards.map(cardItem => (
					<Card key={cardItem.id} {...cardItem} />
				))}
			</div>
		</>
	)
}
