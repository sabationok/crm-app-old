import React, { useState } from 'react';
// import PropTypes from 'prop-types'

import css from './BlockListFilter.module.css';

const BlockListFilter = props => {
  const [searchQuery, setSearchQuery] = useState('');
  function onInputChange(evt) {
    let { target } = evt;
    setSearchQuery(target.value.trim());
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log(evt);
  }
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
          placeholder="Пошук ..."
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
