import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersons } from '../../../../store/actions/person.js'
import { Card } from './card/card.jsx'
import styles from './cardList.module.scss'
import { ListItem } from './listItem/listItem.jsx'

export const CardList = () => {
	const dispatch = useDispatch()
	const persons = useSelector(state => state.persons)
	const [isCardView, setIsCardView] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(10)

	useEffect(() => {
		dispatch(fetchPersons())
	}, [dispatch])

	if (!persons || persons.length === 0) {
		return <div className={styles.loading}>Loading...</div>
	}

	const handleToggle = () => {
		setIsCardView(!isCardView)
		setCurrentPage(1)
	}

	const handleLoadMore = () => {
		setCurrentPage(prevPage => prevPage + 1)
		console.log(`Current Page: ${currentPage + 1}`)
	}

	const handleItemsPerPageChange = e => {
		setItemsPerPage(Number(e.target.value))
		setCurrentPage(1)
	}

	const indexOfLastItem = currentPage * itemsPerPage
	const currentItems = persons.slice(0, indexOfLastItem)

	return (
		<div className={styles.wrapPages}>
			<div className={styles.toggleContainer}>
				<label className={styles.switch}>
					<input type='checkbox' checked={isCardView} onChange={handleToggle} />
					<span className={styles.slider}></span>
				</label>
			</div>

			<div className={styles.itemsPerPage}>
				<label htmlFor='itemsPerPage'>Количество отображения: </label>
				<select
					id='itemsPerPage'
					value={itemsPerPage}
					onChange={handleItemsPerPageChange}
				>
					<option value={10}>10</option>
					<option value={15}>15</option>
					<option value={20}>20</option>
					<option value={25}>25</option>
					<option value={30}>30</option>
				</select>
			</div>

			<div className={isCardView ? styles.contCardList : styles.contList}>
				{isCardView
					? currentItems.map((cardItem, index) => (
							<Card key={`${cardItem.name}-${index}`} {...cardItem} />
					  ))
					: currentItems.map((listItem, index) => (
							<ListItem key={`${listItem.name}-${index}`} {...listItem} />
					  ))}
			</div>
			
			{indexOfLastItem < persons.length && (
				<div className={styles.loadMore}>
					<button onClick={handleLoadMore}>Load More</button>
				</div>
			)}
		</div>
	)
}
