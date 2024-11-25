import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersons } from '../../../../store/actions/person.js'
import { addPerson } from '../../../../store/reducers/persons.js'
import { Card } from './card/card.jsx'
import styles from './cardList.module.scss'

export const CardList = () => {
	const dispatch = useDispatch()
	const persons = useSelector(state => state.persons)

	const add = (name, birthday, img, status) => {
		dispatch(addPerson({ name, birthday, img, status }))
	}

	useEffect(() => {
		dispatch(fetchPersons())
	}, [dispatch])

	if (!persons || persons.length === 0) {
		return <div className={styles.loading}>Loading...</div>
	}

	return (
		<div className={styles.contCardList}>
			{persons.map(cardItem => (
				<Card key={cardItem.id} {...cardItem} add={add} />
			))}
		</div>
	)
}
