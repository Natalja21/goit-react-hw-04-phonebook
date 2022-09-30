import { useState } from 'react';
import stl from './ContactForm.module.css';

const ContactsForm = (props) => {
  const [name, setName] = useState(''); 
  const [number, setNumber] = useState('');

    const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default:
          return
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onAddContact(name, number)
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('')
  };

  return (
     <form className={stl.form} onSubmit={handleSubmit}>
         <label className={stl.form__label}>
          Name
          <input
            className={stl.form__input}
            type="text"
            name="name"
            placeholder="* fields are required"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChangeInput}
          />
        </label>
        <label className={stl.form__label}>
          Number
          <input
            className={stl.form__input}
            type="tel"
            name="number"
            placeholder="* fields are required"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChangeInput}
          />
        </label>
        <button
          className={stl.form__btn}
          type="submit"
          disabled={name === '' || number === ''}
        >
          Add contact
        </button>
      </form>
  )
}
// class ContactsForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChangeInput = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onAddContact(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={stl.form} onSubmit={this.handleSubmit}>
//         <label className={stl.form__label}>
//           Name
//           <input
//             className={stl.form__input}
//             type="text"
//             name="name"
//             placeholder="* fields are required"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={name}
//             onChange={this.handleChangeInput}
//           />
//         </label>
//         <label className={stl.form__label}>
//           Number
//           <input
//             className={stl.form__input}
//             type="tel"
//             name="number"
//             placeholder="* fields are required"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={number}
//             onChange={this.handleChangeInput}
//           />
//         </label>
//         <button
//           className={stl.form__btn}
//           type="submit"
//           disabled={name === '' || number === ''}
//         >
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
export default ContactsForm;
