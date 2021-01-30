import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './phoneBook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

export const addContacts = data => async dispatch => {
  dispatch(addContactRequest());

  try {
    const response = await axios.post('/contacts', { data });
    console.log(response);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
