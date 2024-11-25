import styles from './App.module.scss'
import { CardList } from './components/cardList/cardList.jsx'
function App() {
	return (
		<>
			<div className={styles.page}>
				<CardList />
			</div>
		</>
	)
}

export default App
