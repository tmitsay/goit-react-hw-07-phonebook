import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from '../redux/selectors';

import { getContactsThunk } from 'services/fetchContacts';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? <Filter /> : <h2>Your phonebook is empty</h2>}

      {contacts.length > 0 && !error && !isLoading && <ContactList />}
      {isLoading && <Loader />}
      {error && <Error /> && <ContactList />}
    </div>
  );
};
