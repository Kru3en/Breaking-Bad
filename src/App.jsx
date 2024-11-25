import styles from './App.module.scss'
import { Card } from './components/cardList/card/card'
function App() {
	return (
		<>
			<div className={styles.page}>
				<Card />
			</div>
		</>
	)
}

export default App
