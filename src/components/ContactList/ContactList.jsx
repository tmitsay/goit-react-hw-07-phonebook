import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterContact = useSelector(selectFilter);

  const normalizedFilter = filterContact.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
