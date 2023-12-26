import { useDispatch } from 'react-redux';
import { delContactThunk } from '../../services/fetchContacts';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };

  return (
    <li key={id} className={css.item}>
      <p className={css.name}>
        {name}
        <span className={css.number}>{number}</span>
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
