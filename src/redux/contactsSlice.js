import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Funkcja do aktualizacji localStorage
const updateLocalStorage = (items) => {
  localStorage.setItem('contacts', JSON.stringify(items));
};

const initialState = {
  items: JSON.parse(localStorage.getItem('contacts')) || [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = { id: nanoid(), ...action.payload };
      state.items.push(newContact);
      updateLocalStorage(state.items);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
      updateLocalStorage(state.items);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
