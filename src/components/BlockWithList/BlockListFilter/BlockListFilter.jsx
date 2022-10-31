import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux';
import { actionChangeSearchQuery } from 'redux/actions/postsActions';

import css from './BlockListFilter.module.css';

const BlockListFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  function onInputChange(evt) {
    let { target } = evt;
    setSearchQuery(target.value.trim());
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    dispatch(actionChangeSearchQuery(searchQuery));
  }

  useEffect(() => {
    if (searchQuery === '') {
      dispatch(actionChangeSearchQuery(''));
    }
  }, [dispatch, searchQuery]);
  return (
    <div>
      <form
        className={css.filter}
        onSubmit={evt => {
          handleFormSubmit(evt);
        }}
      >
        <input
          className={css.input}
          type="text"
          name="searchQuery"
          value={searchQuery}
          placeholder="Введіть артикул"
          onChange={evt => {
            onInputChange(evt);
          }}
        />
        <button className={css.button} type="submit">
          Шукати
        </button>
      </form>
    </div>
  );
};

BlockListFilter.propTypes = {};

export default BlockListFilter;
