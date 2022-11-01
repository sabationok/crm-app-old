import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'
import { applyFounder } from 'components/BlockWithList/BlockUtils/founder';

import scss from './BlockListFilter.module.scss';

const BlockListFilter = ({ blockFilterParams }) => {
  const {
    tableTitles = [],
    searchQueryAction,
    searchParamAction,
  } = blockFilterParams;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useState({ name: '' });
  const [isSelectOpen, seIsSelectOpen] = useState(false);
  const [foundedData, setFoundedData] = useState([]);
  const dispatch = useDispatch();

  const classOpen = [
    scss.selectList,
    isSelectOpen ? scss.selectShown : scss.selectHidden,
  ].join(' ');

  function onInputChange(evt) {
    let { target } = evt;
    setSearchQuery(target.value);
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    dispatch(searchQueryAction(searchQuery.trim()));
    dispatch(searchParamAction(searchParam));
  }
  function onSearchParamClick({ evt, item }) {
    setSearchParam(item);
    seIsSelectOpen(false);
  }
  function handleSelectOpen(ev) {
    seIsSelectOpen(!isSelectOpen);
  }
  function handleChangeSearchParamInput(evt) {
    let { target } = evt;
    setSearchParam({ ...searchParam, name: target.value });
  }
  useEffect(() => {
    setFoundedData(
      applyFounder({
        searchParam: 'name',
        searchQuery: searchParam.name,
        data: tableTitles.filter(el => el?.filter && el?.visible),
      })
    );
  }, [searchParam, tableTitles]);
  useEffect(() => {
    if (searchQuery === '') {
      dispatch(searchQueryAction(''));
    }
  }, [dispatch, searchQuery, searchQueryAction]);
  useEffect(() => {
    if (searchParam.name === '') {
      dispatch(searchParamAction(''));
    }
  }, [dispatch, searchParam, searchParamAction]);
  return (
    <div className={scss.filterContainer}>
      <form
        className={scss.filterForm}
        onSubmit={evt => {
          handleFormSubmit(evt);
        }}
      >
        <div className={scss.customFounder}>
          <input
            className={scss.inputFounder}
            type="text"
            name="searchQuery"
            value={searchQuery}
            placeholder="Пошук"
            onChange={evt => {
              onInputChange(evt);
            }}
          />
        </div>
        <div className={scss.customSelect}>
          <input
            className={scss.inputParam}
            type="text"
            placeholder="Параметр"
            value={searchParam.name}
            onClick={handleSelectOpen}
            onChange={handleChangeSearchParamInput}
          />
          <ul className={classOpen}>
            {foundedData.map(item => (
              <li
                key={item.id}
                className={scss.selectItem}
                data-title={item.dataTitle}
                onClick={evt => {
                  onSearchParamClick({ evt, item });
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <button className={scss.button} type="submit">
          Шукати
        </button>
      </form>
    </div>
  );
};

BlockListFilter.propTypes = {};

export default BlockListFilter;
