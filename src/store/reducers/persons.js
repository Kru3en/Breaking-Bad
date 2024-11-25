// src/store/reducers/persons
import { ADD_PERSON } from "../actionTypes/persons";
import { v4 as uuid4 } from 'uuid'

const initialState = {
  persons: []
};


function persons(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      return {
        ...state,
        persons: [...state.persons, {
          id: uuid4(),
          name: action.payload.name,
          birthday: action.payload.birthday,
          img: action.payload.img,
          status: action.payload.status,
        }]
      }
    }
    default:
      return state;
  }
}
export default persons;
