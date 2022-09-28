import stl from './ContactsListItem.module.css';
import PropTypes from 'prop-types';

const ContactsListItem = ({ id, number, name, onDeleteContact }) => (
  <li className={stl.contactsList__item} >
    <p className={stl.contactsList__text}>
      {name}: {number}
    </p>
    <button
      className={stl.contactsList__btn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactsListItem.prototype = {
    id : PropTypes.string.isRequired,
    number : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    onDeleteContact :PropTypes.func.isRequired,
}

export default ContactsListItem;
