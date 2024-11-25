import { configureStore } from '@reduxjs/toolkit';
import personsReducer from './reducers/persons';

const store = configureStore({
  reducer: {
    persons: personsReducer, 
  },
});

export default store;
