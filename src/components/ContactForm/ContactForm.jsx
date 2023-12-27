import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { postContactThunk } from '../../services/fetchContacts';

import css from './ContactForm.module.css';

const nameIdInput = nanoid();
const numberIdInput = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handlerSubmit = event => {
    event.preventDefault();

    // const data = { name, number };
    // const newObj = { ...data, id: nanoid() };

    // const isInContacts = (contacts, newObj) => {
    //   return contacts.find(
    //     ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    //   );
    // };

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(postContactThunk({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.label} htmlFor={nameIdInput}>
        Name
        <input
          className={css.input_form}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label} htmlFor={numberIdInput}>
        Number
        <input
          className={css.input_form}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
