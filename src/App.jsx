import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { CardListPage } from './components/pages/cardListPages/cardListPage'
import { MainPages } from './components/pages/mainPages/mainPages'
import { Personage } from './components/pages/pesonageList/personage'
function App() {
	return (
		<>
			<div className={styles.page}>
				<Header />
				<div className={styles.mainInfoPage}>
					<Routes>
						<Route path='/' element={<MainPages />} />
						<Route path='/cardListPage' element={<CardListPage />} />
						<Route path='/personage/:name' element={<Personage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default App
