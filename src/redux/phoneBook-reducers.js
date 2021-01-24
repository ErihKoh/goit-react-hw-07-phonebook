import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, changeFilter } from './phoneBook-actions';

const items = createReducer([], {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
