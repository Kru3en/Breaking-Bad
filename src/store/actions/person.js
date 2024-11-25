import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import personage from '../../assets/personage/personage.json'
import { setPersons } from '../reducers/persons'
export const fetchPersons = createAsyncThunk(
	'persons/fetchPersons',
	async (_, { dispatch }) => {
		try {
			const response = await axios.get(
				'https://mocki.io/v1/6ee0772c-c70d-44cf-8123-a311b9b86551'
			)
			dispatch(setPersons(response.data))
			// dispatch(setPersons(personage))
		} catch (error) {
			console.error('Ошибка загрузки данных:', error)
		}
	}
)
