import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import personage from '../../assets/personage/personage.json'
import { setPersons } from '../reducers/persons'
export const fetchPersons = createAsyncThunk(
	'persons/fetchPersons',
	async (_, { dispatch }) => {
		try {
			const response = await axios.get(
				'https://mocki.io/v1/91e97c46-bf7f-4eab-9fcd-e07ceab1e6a0'
			)
			dispatch(setPersons(response.data))
			// dispatch(setPersons(personage))
		} catch (error) {
			console.error('Ошибка загрузки данных:', error)
		}
	}
)
