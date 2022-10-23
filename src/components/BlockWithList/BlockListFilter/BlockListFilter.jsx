import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'
import { useBlockWithList } from 'components/contexts/TableContext';
import Notify from 'components/Notify/Notify';

import css from './BlockListFilter.module.css';

const BlockListFilter = ({ filterQuery, onFilterFormSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { visibleList, forFilterList } =
    useBlockWithList();
  const [isNotify, setIsNotify] = useState(false);
  const [notifyStatus, setNotifyStatus] = useState('');
  const [notifyType, setNotifyType] = useState('');
  // status={visibleList.length > 0 ? 'success' : 'error'}

  function onInputChange(evt) {
    let { target } = evt;
    setSearchQuery(target.value.trim());
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    forFilterList(searchQuery);
    setIsNotify(true);
  }

  useEffect(() => {
    if (searchQuery === '') {
      setNotifyStatus('info');
      setNotifyType('notification');
    } else if ((searchQuery !== '') & (visibleList.length === 0)) {
      setNotifyStatus('error');
      setNotifyType('notification');
    } else if ((searchQuery !== '') & (visibleList.length > 0)) {
      setNotifyStatus('success');
      setNotifyType('notification');
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleList.length]);

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
        {isNotify && (
          <Notify
            message={`Знайдено ${visibleList.length} записів`}
            timeout={1000}
            type={notifyType}
            status={notifyStatus}
            setNotifyState={setIsNotify}
          />
        )}
      </form>
    </div>
  );
};

BlockListFilter.propTypes = {};

export default BlockListFilter;
