import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setPersons } from '../reducers/persons';

export const fetchPersons = createAsyncThunk(
  'persons/fetchPersons',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get('https://mocki.io/v1/633ee17d-4866-4a28-ab42-5c26ae2b7a85');
      dispatch(setPersons(response.data));
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  }
);
