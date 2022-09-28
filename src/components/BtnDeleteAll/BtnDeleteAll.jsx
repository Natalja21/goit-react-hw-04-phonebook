import stl from './BtnDeleteAll.module.css';
import PropTypes from 'prop-types';
const BtnDeleteAll = ({ onDeleteAll }) => {
  return (
    <button className={stl.btn} type="button" onClick={() => onDeleteAll()}>
      Delete All
    </button>
  );
};

BtnDeleteAll.prototype = {
  onDeleteAll: PropTypes.func.isRequired,
};

export default BtnDeleteAll;
