import { useSelector } from 'react-redux';
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

export const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? <Filter /> : <h2>Your phonebook is empty</h2>}

      {contacts.length > 0 && !error && !isLoading && <ContactList />}
      {isLoading && <Loader />}
      {error ? <Error /> : <ContactList />}
    </div>
  );
};
