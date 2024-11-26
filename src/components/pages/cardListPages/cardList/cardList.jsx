import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersons } from '../../../../store/actions/person.js'
import { Card } from './card/card.jsx'
import { ListItem } from './listItem/listItem.jsx'
import styles from './cardList.module.scss'

export const CardList = () => {
	const dispatch = useDispatch()
	const persons = useSelector(state => state.persons)
	const [isCardView, setIsCardView] = useState(true) 

	useEffect(() => {
		dispatch(fetchPersons())
	}, [dispatch])

	if (!persons || persons.length === 0) {
		return <div className={styles.loading}>Loading...</div>
	}
	const handleToggle = () => {
		setIsCardView(!isCardView) 
	}
	return (
		<div className={styles.wrapPages}>
			<div className={styles.toggleContainer}>
				<label className={styles.switch}>
					<input
						type="checkbox"
						checked={isCardView}
						onChange={handleToggle}
					/>
					<span className={styles.slider}></span>
				</label>
			</div>

			<div className={isCardView ? styles.contCardList : styles.contList}>
				{isCardView
					? persons.map(cardItem => <Card key={cardItem.name} {...cardItem} />)
					: persons.map(listItem => (
							<ListItem key={listItem.name} {...listItem} />
					  ))}
			</div>
		</div>
	)
}
