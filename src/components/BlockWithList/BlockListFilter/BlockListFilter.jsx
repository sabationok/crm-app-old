import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionChangeSearchQuery } from 'redux/actions/postsActions';
import { actionChangeSearchParam } from 'redux/actions/postsActions';
// import PropTypes from 'prop-types'
import { tableColTitles } from '../BlockTable/TableColTitles';

import scss from './BlockListFilter.module.scss';

const BlockListFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useState({ name: 'Оберіть' });
  const [isSelectOpen, seIsSelectOpen] = useState(false);
  const classOpen = [
    scss.selectList,
    isSelectOpen ? scss.selectShown : scss.selectHidden,
  ].join(' ');
  const dispatch = useDispatch();

  function onInputChange(evt) {
    let { target } = evt;
    setSearchQuery(target.value.trim());
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    dispatch(actionChangeSearchQuery(searchQuery));
  }
  function onSearchParamClick({ ev, item }) {
    const { target } = ev;
    setSearchParam(item);
    seIsSelectOpen(false);
    dispatch(actionChangeSearchParam(searchParam));
    console.log(target.textContent);
  }
  function handleSelectOpen(ev) {
    console.log(ev.target);
    seIsSelectOpen(!isSelectOpen);
  }

  useEffect(() => {
    if (searchQuery === '') {
      dispatch(actionChangeSearchQuery(''));
    }
  }, [dispatch, searchQuery]);
  return (
    <div className={scss.filterContainer}>
      <form
        className={scss.filter}
        onSubmit={evt => {
          handleFormSubmit(evt);
        }}
      >
        <input
          className={scss.input}
          type="text"
          name="searchQuery"
          value={searchQuery}
          placeholder="Введіть артикул"
          onChange={evt => {
            onInputChange(evt);
          }}
        />
        <button className={scss.button} type="submit">
          Шукати
        </button>
      </form>
      <div className={scss.customSelect}>
        {/* <input
          className={scss.inputParam}
          type="text"
          value={searchParam.name}
          onClick={handleSelectOpen}
          onChange={console.log(searchParam.name)}
        /> */}
        <div className={scss.inputParam} onClick={handleSelectOpen}>
          {searchParam.name}
        </div>
        <ul className={classOpen}>
          {tableColTitles.map(item => (
            <li
              key={item.id}
              className={scss.selectItem}
              data-title={item.dataTitle}
              onClick={ev => {
                onSearchParamClick({ ev, item });
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      {/* <form>
        <button className={scss.button} type="submit">
          Параметр
        </button>
      </form> */}
    </div>
  );
};

BlockListFilter.propTypes = {};

export default BlockListFilter;
