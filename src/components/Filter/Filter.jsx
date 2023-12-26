import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { nanoid } from '@reduxjs/toolkit';

import css from './Filter.module.css';

const filterId = nanoid();

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const normalValue = event.currentTarget.value.toLowerCase();
    dispatch(changeFilter(normalValue));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={onChangeFilter}
        id={filterId}
      />
    </label>
  );
};
