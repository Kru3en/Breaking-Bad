import { useDispatch, useSelector } from 'react-redux'
import { addPerson } from '../../store/actions/person'
import { Card } from './card/card'
import styles from './cardList.module.scss'
export const CardList = () => {
	const dispatch = useDispatch()
	const persons = useSelector(state => state.persons)
	const add = (name, birthday, img, status) => {
		dispatch(addPerson(name, birthday, img, status))
	}
	console.log(persons)
	return (
		<>
			<div className={styles.contCardList}>
				{persons.map(cardItem => (
					<Card key={cardItem.id} {...cardItem} add={add} />
				))}
			</div>
		</>
	)
}
