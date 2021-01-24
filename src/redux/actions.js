import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('pnoneBook/add', data => ({
  payload: {
    id: shortid.generate(),
    data,
  },
}));

export const deleteContacts = createAction('pnoneBook/delete');
export const changeFilter = createAction('pnoneBook/changeFilter');
