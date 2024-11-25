import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

const initialState = [
];

const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.push({
        id: uuid4(),
        name: action.payload.name,
        birthday: action.payload.birthday,
        img: action.payload.img,
        status: action.payload.status,
      });
    },
    setPersons: (state, action) => {
      return action.payload; // Заменяем весь массив персонажей новыми данными
    },
  },
});

export const { addPerson, setPersons } = personsSlice.actions;
export default personsSlice.reducer;
