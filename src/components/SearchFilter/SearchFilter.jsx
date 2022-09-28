import React from 'react';
import stl from './SearchFilter.module.css';
import PropTypes from 'prop-types';
const SearchFilter = ({ value, onChangeFilter }) => {
  return (
    <label className={stl.label}>
      Find contacts by Name
      <input
        className={stl.input}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.currentTarget.value)}
      />
    </label>
  );
};
SearchFilter.prototype = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default SearchFilter;
