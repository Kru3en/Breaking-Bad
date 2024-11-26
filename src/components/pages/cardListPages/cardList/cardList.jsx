// CardList.jsx
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersons } from '../../../../store/actions/person.js'
import { ItemsPerPageSelector } from '../../../elements/ItemsPerPageSelector/ItemsPerPageSelector'
import { LoadMoreButton } from '../../../elements/LoadMoreButton/LoadMoreButton'
import { SearchBar } from '../../../elements/SearchBar/SearchBar'
import { ToggleSwitch } from '../../../elements/ToggleSwitch/ToggleSwitch'
import { Card } from './card/card.jsx'
import styles from './cardList.module.scss'
import { ListItem } from './listItem/listItem.jsx'

export const CardList = () => {
	const dispatch = useDispatch()
	const persons = useSelector(state => state.persons)
	const [isCardView, setIsCardView] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		dispatch(fetchPersons())
	}, [dispatch])

	if (!persons || persons.length === 0) {
		return <div className={styles.loading}>Loading...</div>
	}

	const handleSearchChange = e => {
		setSearchTerm(e.target.value)
		setCurrentPage(1)
	}

	const filteredPersons = persons.filter(person =>
		person.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	const indexOfLastItem = currentPage * itemsPerPage
	const currentItems = filteredPersons.slice(0, indexOfLastItem)

	const handleToggle = () => {
		setIsCardView(!isCardView)
		setCurrentPage(1)
	}

	const handleLoadMore = () => {
		setCurrentPage(prevPage => prevPage + 1)
	}

	const handleItemsPerPageChange = e => {
		setItemsPerPage(Number(e.target.value))
		setCurrentPage(1)
	}

	return (
		<div className={styles.wrapPages}>
			<div className={styles.option}>
				<ItemsPerPageSelector
					itemsPerPage={itemsPerPage}
					onItemsPerPageChange={handleItemsPerPageChange}
				/>
				<ToggleSwitch isCardView={isCardView} onToggle={handleToggle} />
				<SearchBar
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
				/>
			</div>

			<div className={isCardView ? styles.contCardList : styles.contList}>
				{filteredPersons.length === 0 ? (
					<div className={styles.emptyMessage}>Список карточек пуст</div>
				) : isCardView ? (
					currentItems.map((cardItem, index) => (
						<Card key={`${cardItem.name}-${index}`} {...cardItem} />
					))
				) : (
					currentItems.map((listItem, index) => (
						<ListItem key={`${listItem.name}-${index}`} {...listItem} />
					))
				)}
			</div>

			{filteredPersons.length > 0 &&
				indexOfLastItem < filteredPersons.length && (
					<LoadMoreButton onLoadMore={handleLoadMore} />
				)}
		</div>
	)
}
