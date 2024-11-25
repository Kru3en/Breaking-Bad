// src/store/actions/person
import { ADD_PERSON } from '../actionTypes/persons'

export function addPerson(name, birthday, img, status) {
	return {
		type: ADD_PERSON,
		payload: { name, birthday, img, status },
	}
}
