import { CardList } from './cardList/cardList.jsx'
import styles from './cardListPage.module.scss'
export const CardListPage = () => {
	return (
		<div className={styles.containerPage}>
			<CardList />
		</div>
	)
}
